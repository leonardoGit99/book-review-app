"use client"
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginForm } from '@/components/LoginForm'
import { useRouter } from 'next/navigation'

// Validations Form
const loginSchema = z.object({
  email: z.string().min(1, "This field is required"),
  password: z.string().min(1, "This field is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

function Login() {
  const router = useRouter();

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
    console.log(body);
    // const user = await authUser(body);
    // if (user) {
    //   console.log('redirecting...');
    // }
    form.reset();
    router.push('/reviews');
  };
  return (
    <div className='h-full flex justify-center items-center '>
      <LoginForm
        form={form}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Login