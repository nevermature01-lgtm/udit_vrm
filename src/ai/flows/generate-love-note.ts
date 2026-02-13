'use server';
/**
 * @fileOverview A Genkit flow for generating personalized romantic love notes.
 *
 * - generateLoveNote - A function that handles the love note generation process.
 * - GenerateLoveNoteInput - The input type for the generateLoveNote function.
 * - GenerateLoveNoteOutput - The return type for the generateLoveNote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLoveNoteInputSchema = z.object({
  themes: z
    .string()
    .describe(
      'A comma-separated list of keywords or themes to inspire the love note. Examples: "first meeting, butterflies", "endless love, future together", "laughter, joy, comfort".'
    ),
});
export type GenerateLoveNoteInput = z.infer<typeof GenerateLoveNoteInputSchema>;

const GenerateLoveNoteOutputSchema = z.object({
  loveNote: z.string().describe('The generated romantic love note.'),
});
export type GenerateLoveNoteOutput = z.infer<
  typeof GenerateLoveNoteOutputSchema
>;

export async function generateLoveNote(
  input: GenerateLoveNoteInput
): Promise<GenerateLoveNoteOutput> {
  return generateLoveNoteFlow(input);
}

const generateLoveNotePrompt = ai.definePrompt({
  name: 'generateLoveNotePrompt',
  input: {schema: GenerateLoveNoteInputSchema},
  output: {schema: GenerateLoveNoteOutputSchema},
  prompt: `You are a romantic poet crafting super cute, heartfelt, and warm love notes for a Valentine's Day web app named 'Eternal Hearts'. The notes will be used in a section called 'Love Notes Cards'.

Generate a personalized romantic message, keeping the tone sweet, endearing, and magical, suitable for expressing deep affection.

Use the following themes or keywords as inspiration:

Themes: {{{themes}}}

Craft a beautiful love note that captures the essence of these themes. Make it around 50-100 words.`,
});

const generateLoveNoteFlow = ai.defineFlow(
  {
    name: 'generateLoveNoteFlow',
    inputSchema: GenerateLoveNoteInputSchema,
    outputSchema: GenerateLoveNoteOutputSchema,
  },
  async input => {
    const {output} = await generateLoveNotePrompt(input);
    return output!;
  }
);
