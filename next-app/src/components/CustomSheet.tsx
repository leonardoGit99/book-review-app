"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Separator } from './ui/separator'
import ReviewForm from './ReviewForm'
import { createReview } from '@/services/review'
import { toast } from "sonner"
import { getLoggedUser } from '@/services/user'
import { LoggedUser } from '@/types/user'


// Validations Form
const reviewSchema = z.object({
  book_title: z.string().min(1, "This field is required"),
  rating: z.coerce.number({
    required_error: "You need to type a number between 1 and 5",
    invalid_type_error: "Rating must be a number",
  }).min(1, "Minimum rating is 1").max(5, "Maximum rating is 5"),
  review: z.string().min(1, "This field is required"),
  mood: z.string().min(1, "This field is required"),
});

// Types
type SheetProps = {
  triggerBtnLabel: string
  sheetTitle: string
}

export type ReviewFormData = z.infer<typeof reviewSchema>;



function CustomSheet({ triggerBtnLabel, sheetTitle }: SheetProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false); // State for sheet
  const [user, setUser] = useState<LoggedUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (open === true) {
      const fetchUser = async () => {
        const { data: user } = await getLoggedUser();
        setUser(user);
        console.log(user);
      };
      fetchUser();
    }
  }, [open]);

  // Resolve and default form values
  const form = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      book_title: '',
      rating: 1,
      review: '',
      mood: '',
    }
  });


  // Function to submit body to backend 
  const onSubmit = async (body: ReviewFormData) => {
    setIsLoading(true);
    console.log(body);
    const newBody = { ...body, user_id: user?.userId }
    console.log(newBody);
    await createReview(newBody);
    setIsLoading(false);
    toast("Review has been posted!");
    setOpen(false);
    form.reset();
    router.refresh();
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className='hover:cursor-pointer'>{triggerBtnLabel}</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{sheetTitle}</SheetTitle>
        </SheetHeader>
        <Separator className='mt-2 mb-4' />
        <ReviewForm
          isLoading={isLoading}
          form={form}
          onSubmit={onSubmit}
        />
      </SheetContent>
    </Sheet>
  )
}

export default CustomSheet