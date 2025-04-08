"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

const signInSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
});

export const FormSignIn = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const handleSubmit = (data: z.infer<typeof signInSchema>) => {
    console.log(data);
  };

  console.log(form.formState.isValid);

  return (
    <div className="w-[350px]">
      <h2 className="text-3xl font-bold text-center mb-4">Sign in</h2>
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
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-sm text-center text-gray-600">
            Dont have an account?{" "}
            <Link
              href="/sign-up"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
          <Button
            className="w-full bg-blue-500 hover:bg-blue-500/80 cursor-pointer"
            disabled={!form.formState.isValid}
          >
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
};
