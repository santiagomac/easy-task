"use client";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

const signUpSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8, {
    message: "The min length is 8",
  }),
  confirmPassword: z.string().min(8, {
    message: "The min length is 8",
  }),
});

export const FormSignUp = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const handleSubmit = (data: z.infer<typeof signUpSchema>) => {
    console.log(data);
  };

  return (
    <div className="w-[350px]">
      <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
          <Button
            className="w-full bg-blue-500 hover:bg-blue-500/80 cursor-pointer"
            disabled={!form.formState.isValid}
          >
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
};
