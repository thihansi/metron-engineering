import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('A valid email is required'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
})

export const quoteSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  company: z.string().max(100).optional(),
  email: z.string().email('A valid email is required'),
  phone: z.string().max(30).optional(),
  serviceRequired: z.string().min(1, 'Please select a service').max(200),
  projectLocation: z.string().max(200).optional(),
  indicativeTiming: z.string().max(200).optional(),
  description: z.string().min(20, 'Please provide at least 20 characters describing the project').max(5000),
  attachments: z.array(z.object({ filename: z.string().max(255), size: z.string().max(20) })).optional(),
})

export type ContactInput = z.infer<typeof contactSchema>
export type QuoteInput = z.infer<typeof quoteSchema>
