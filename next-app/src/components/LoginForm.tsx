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

// Types
type Props = {
  form: UseFormReturn<LoginFormData>;
  onSubmit: (body: LoginFormData) => void;
};
export function LoginForm({ form, onSubmit }: Props) {

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
          <Button variant="link" className="hover:cursor-pointer">Sign Up</Button>
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
            >
              Login
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
