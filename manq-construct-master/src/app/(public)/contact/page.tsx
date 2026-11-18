'use client';

import { sendEmail } from '@/app/actions/sendEmail';
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
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/useToast';
import { formSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true); // Start loading
    try {
      const response = await sendEmail(values);

      if (!response.success) throw new Error('Failed to send message');

      toast({
        title: 'Message sent successfully!',
        description: "We'll get back to you as soon as possible.",
      });

      form.reset();
    } catch (error) {
      console.error('🚀 ~ onSubmit ~ error:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false); // End loading
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className='h-full bg-[#F5F0E1]'>
      <motion.div
        className='container mx-auto px-4 py-16'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.h1
          className='mb-12 text-center text-4xl font-bold text-[#713F12]'
          variants={itemVariants}
        >
          Get in touch
        </motion.h1>

        <div className='grid gap-12 md:grid-cols-2'>
          <motion.div variants={itemVariants} className='rounded-lg bg-white p-8 shadow-xl'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Your name'
                          {...field}
                          className='border-[#713F12] focus:ring-[#92400E]'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='your@email.com'
                          {...field}
                          className='border-[#713F12] focus:ring-[#92400E]'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Your phone number'
                          {...field}
                          className='border-[#713F12] focus:ring-[#92400E]'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='Your message'
                          className='min-h-[150px] border-[#713F12] focus:ring-[#92400E]'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type='submit'
                  disabled={loading} // Disable when loading
                  className={`w-full bg-[#713F12] ${loading ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#92400E]'
                    }`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div variants={itemVariants} className='space-y-8'>
            <div className='relative aspect-square h-[400px] w-full overflow-hidden rounded-lg shadow-xl'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.8305519954974!2d-111.9071928!3d33.4015847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08885e79cf8d%3A0x26e0be8adc5002e2!2s2522%20S%20Kachina%20Cir%2C%20Tempe%2C%20AZ%2085282%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1733571262661!5m2!1svi!2s'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>

            <motion.div
              className='space-y-6 rounded-lg bg-white p-8 shadow-xl'
              variants={itemVariants}
            >
              <h2 className='text-3xl font-semibold text-[#713F12]'>Contact Information</h2>
              <div className='space-y-4'>
                <div className='flex items-center space-x-4'>
                  <MapPin className='text-[#92400E]' />
                  <p className='text-[#4A3728]'>2522 S. Kachina Circle, Tempe, AZ 85282</p>
                </div>
                <div className='flex items-center space-x-4'>
                  <Mail className='text-[#92400E]' />
                  <p className='text-[#4A3728]'>mgt.manq@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
