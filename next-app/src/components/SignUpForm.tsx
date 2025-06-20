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
import { useRouter } from "next/navigation"
import { SignUpFormData } from "@/app/(routes)/signup/page"

// Types
type Props = {
  form: UseFormReturn<SignUpFormData>;
  isLoading: boolean,
  onSubmit: (body: SignUpFormData) => void;
};

export function SignUpForm({ form, isLoading, onSubmit }: Props) {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push('/login');
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
        <CardTitle className="font-normal">Register your new account</CardTitle>
        <CardDescription>
          Enter the information below to register your account
        </CardDescription>
        <CardAction>
          <Button
            variant="link"
            className="hover:cursor-pointer"
            onClick={() => handleLoginClick()}
            disabled={isLoading}
          >
            Back to login
          </Button>
        </CardAction>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" autoComplete='off'>
          <CardContent className="space-y-8" >
            {/* name Input */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Leonardo Fuentes Claros"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Input */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. leonardofuentesclaros@gmail.com"
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

            {/* Password confirmation Input */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
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
                  <>Sign up</>
              }
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
