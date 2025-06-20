"use client"
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button';
import { UseFormReturn } from 'react-hook-form';
import { ReviewFormData } from './CustomSheet';

// Types
type Props = {
  form: UseFormReturn<ReviewFormData>;
  isLoading: boolean,
  onSubmit: (body: ReviewFormData) => void;
};



function ReviewForm({ form, isLoading, onSubmit }: Props) {

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" autoComplete='off'
      >

        {/* Book title Input */}
        <FormField
          control={form.control}
          name="book_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Eg. Programming with Typescript..."
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Rating Input */}
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <Input
                  placeholder="3"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Review TextArea */}
        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  className="resize-none"
                  placeholder="Eg. I love this book, because...."
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mood Input */}
        <FormField
          control={form.control}
          name="mood"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mood</FormLabel>
              <FormControl>
                <Input
                  placeholder="happy"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className={`w-full hover:cursor-pointer ${isLoading ? "cursor-progress" : ""}`}
          disabled={isLoading}
        >
          {
            isLoading ?
              <>Posting...</>
              :
              <>Post</>
          }
        </Button>
      </form>
    </Form>
  )
}

export default ReviewForm