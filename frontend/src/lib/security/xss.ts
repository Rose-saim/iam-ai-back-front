import DOMPurify from 'dompurify';

// Sanitize user input to prevent XSS attacks
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input);
};