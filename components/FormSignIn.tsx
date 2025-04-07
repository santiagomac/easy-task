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
  });

  const handleSubmit = (data: z.infer<typeof signInSchema>) => {
    console.log(data);
  };

  return (
    <div className="w-[350px]">
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
          <p className="text-sm text-center text-muted-foreground">
            Dont have an account?{" "}
            <Link href="/signup" className="text-blue-500 font-semibold">
              Sign up
            </Link>
          </p>
          <Button className="w-full bg-blue-500 hover:bg-blue-500/80 cursor-pointer">
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
};
