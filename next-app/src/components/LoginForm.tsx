"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { UseFormReturn } from 'react-hook-form';
import { LoginFormData } from "@/app/(routes)/login/page";
import { useRouter } from "next/navigation"

// Types
type Props = {
  form: UseFormReturn<LoginFormData>,
  isLoading: boolean,
  onSubmit: (body: LoginFormData) => void,
};
export function LoginForm({ form, isLoading, onSubmit }: Props) {
  const router = useRouter();
  const handleSignUpClick = () => {
    router.push('/signup');
  }
  return (
    <Card className="w-full max-w-sm shadow-2xl shadow-blue-300">
      <CardHeader>
        <h1 className="font-extrabold inline">
          Welcome to {" "}
          <span className='text-xl text-center inline'>
            ReadSoul
            <span className='font-bold text-xs'>
              APP
            </span>
          </span>
        </h1>
        <CardTitle className="font-normal">Login to your account</CardTitle>
        <CardDescription>
          Enter your credentials below to login to your account
        </CardDescription>
        <CardAction>
          <Button
            variant="link"
            className="hover:cursor-pointer"
            onClick={() => handleSignUpClick()}
            disabled={isLoading}
          >
            Sign Up
          </Button>
        </CardAction>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" autoComplete='off'>
          <CardContent className="space-y-8" >
            {/* Email Input */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="leonardofuentesclaros@gmail.com"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Input */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="***********"
                      type="password"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter
            className="flex-col gap-2"
          >
            <Button
              type="submit"
              className="w-full hover:cursor-pointer"
              disabled={isLoading}
            >
              {
                isLoading ?
                  <>Please wait...</>
                  :
                  <>Login</>
              }
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
