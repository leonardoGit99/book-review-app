"use client"
import React, { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginForm } from '@/components/LoginForm'
import { useRouter } from 'next/navigation'
import { authUser } from '@/services/user'
import { toast } from 'sonner'

// Validations Form
const loginSchema = z.object({
  email: z.string().min(1, "This field is required").email("Invalid email address"),
  password: z.string().min(1, "This field is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Resolve and default form values
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  // Function to submit body to backend 
  const onSubmit = async (body: LoginFormData) => {
    setIsLoading(true);
    try {
      console.log(body);
      const { message } = await authUser(body);
      // setIsLoading(false);
      if (message === 'Login successfuly') {
        // form.reset();
        router.push('/reviews');
      }
    } catch (error) {
      setIsLoading(false);
      toast('Invalid Credentials!');
    }

  };
  return (
    <div className='h-full flex justify-center items-center '>
      <LoginForm
        isLoading={isLoading}
        form={form}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Login