import { z } from 'zod';

export const MovieFormSchema = z.object({
  title: z.string().nonempty('Title is required'),
  image: z.string().url().nonempty('Poster path is required'),
  rating: z.coerce.number().min(1).max(10).nonnegative(),
  genres: z.enum([
    'all',
    'documentary',
    'comedy',
    'horror',
    'crime'
  ]),
  runtime: z.string().nonempty('Runtime is required'),
  description: z.string().nonempty('Description is required')
});