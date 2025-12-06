"use client";

import React, { useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
});

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <div className="    flex items-center justify-center">
            <div className="w-full max-w-7xl bg-background/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row justify-between">

                <div className="w-full  lg:w-2/5 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                    <div className="">
                        <div className="inline-block border border-muted rounded-full px-6 py-2 mb-8 bg-transparent">
                            <span className=" font-medium ">Cibil</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-3xl lg:text-4xl font-bold  mb-2 text-center ">
                            Create an account
                        </h1>
                        <p className="text-center">Sing up and get 30 day free trial</p>
                    </div>

                    <Form {...form}>
                        <div className="space-y-6 ">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm pl-6 text-muted ">Full name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Amélie Laurent"
                                                {...field}
                                                className="w-full px-6 py-4 bg-background rounded-full border-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition h-auto"
                                            />
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
                                        <FormLabel className="text-sm pl-6  text-muted">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="amelielaurent7622@gmail.com"
                                                {...field}
                                                className="w-full px-6 py-4 bg-background rounded-full border-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition h-auto"
                                            />
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
                                        <FormLabel className="text-sm pl-6 text-muted ">Password</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="••••••••••••••••••••"
                                                    {...field}
                                                    className="w-full px-6 py-4 bg-background rounded-full border-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition pr-12 h-auto"
                                                />
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2  hover:text-gray-600 hover:bg-transparent"
                                                >
                                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="button"
                                onClick={form.handleSubmit(onSubmit)}
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 rounded-full transition shadow-lg hover:shadow-xl h-auto"
                            >
                                Submit
                            </Button>

                            <div className="flex gap-4">
                                <Button
                                    type="button"
                                    variant="secondary"
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-background hover:bg-yellow-300 rounded-full  transition h-auto"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="currentColor" />
                                    </svg>
                                    <span className="font-semibold text-muted ">Apple</span>
                                </Button>
                                <Button
                                    type="button"
                                    variant="secondary"
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-background  hover:bg-yellow-300 rounded-full   transition h-auto"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    <span className="font-medium text-gray-700">Google</span>
                                </Button>
                            </div>
                        </div>
                    </Form>

                    <div className="mt-8 flex justify-between items-center text-sm">
                        <div className="text-gray-600">
                            Have any account?{' '}
                            <Link href="/signin" className="text-gray-900 font-semibold hover:underline">
                                Sign in
                            </Link>
                        </div>
                        <Link href="/terms" className="text-gray-600 hover:text-gray-900 hover:underline">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>

                {/* Right Side - Image Section */}
                <div className="w-full lg:w-2/3 bg-linear-to-br p-8 relative overflow-hidden hidden lg:block">
                    <div className="relative h-full rounded-3xl overflow-hidden ">

                        <div className="absolute inset-0 bg-linear-to-br from-black/20 via-transparent to-black/10 pointer-events-none z-1" />

                        <Image
                            src="https://cdn.pixabay.com/photo/2021/07/10/11/53/credit-card-6401275_1280.png"
                            alt="Team Collaboration"
                            width={600}
                            height={400}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}