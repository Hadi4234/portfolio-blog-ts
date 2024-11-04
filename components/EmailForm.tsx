"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { EmailFormSchema } from "@/types/EmailFormSchema"
import { Textarea } from "./ui/textarea"
import { emailFormAction } from "@/server/action/EmailFormAction"
import { useAction } from 'next-safe-action/hooks'
import { redirect } from "next/navigation"
import { cn } from "@/lib/utils"


export function EmailForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof EmailFormSchema>>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resetOptions: {
      keepDirtyValues: true,
    }
  })
  const { execute, status } = useAction(emailFormAction, {
    onSuccess(data) {
      console.log(data?.data)
    },
    onError(error) {
      console.log(error)
    }

  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof EmailFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    execute(values)

  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col md:flex-row gap-5">        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name Here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} autoCapitalize="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /></div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your message here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className={cn("w-full my-2", status === 'executing' ? "animate-pulse" : "")}  >Submit</Button>
        </form>
      </Form>
    </div>
  )
}

