import * as z from 'zod'

export const RegistrationValidation = z.object({
    name: z
        .string()
        .trim()
        .min(3, {message: "Name must contain atleast 3 letters"}),

    password: z
        .string()
        .min(8, { message: 'Password must be of 8 letters' })
        .regex(/(?=.*[A-Z])/, { message: 'Password must contain 1 capital letter' })
        .regex(/(?=.*[!@#$%^&*+_?|])/, { message: 'Password must contain 1 special character' }),

    email: z
        .string()
        .trim()
        .email({ message: 'Please enter valid email' }),
    
    age: z.preprocess((val) => {
        if (typeof val === 'string' && val.trim() !== '') return Number(val);
        return val;
    }, z.number().min(18, { message: 'Age must be at least 18' }))
})