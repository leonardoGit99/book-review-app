"use client"
import React, { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { registerUser } from '@/services/user'
import { SignUpForm } from '@/components/SignUpForm'
import { toast } from 'sonner'


// Validations Form
const signUpSchema = z.object({
  name: z.string().min(1, "This field is required"),
  email: z.string().min(1, "This field is required").email("Invalid email address"),
  password: z.string().min(1, "This field is required"),
  confirmPassword: z.string().min(1, "This field is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type RegisterBody = Omit<SignUpFormData, 'confirmPassword'>;

function Signup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Resolve and default form values
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  // Function to submit body to backend 
  const onSubmit = async (body: SignUpFormData) => {
    try {
      setIsLoading(true);
      console.log(body);
      const { confirmPassword, ...newBody } = body; // I need this because I only need to send to back all without confirmation passwd
      console.log(newBody);
      const { message } = await registerUser(newBody);
      if (message === 'User created') {
        form.reset();
        router.push('/reviews');
      }
    } catch (error) {
      toast("Sorry, user already exists");
      setIsLoading(false);
    }

  };
  return (
    <div className='h-full flex justify-center items-center '>
      <SignUpForm
        isLoading={isLoading}
        form={form}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Signup