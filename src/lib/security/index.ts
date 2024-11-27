export * from './csrf';
export * from './rateLimit';
export * from './xss';
export * from './https';
export * from './password';

// Security headers configuration
export const securityHeaders = {
  // HSTS
  strictTransportSecurity: 'max-age=31536000; includeSubDomains',
  // XSS Protection
  xssProtection: '1; mode=block',
  // Content Security Policy
  contentSecurityPolicy: "default-src 'self'; img-src 'self' https:; script-src 'self'",
  // Frame Options
  frameOptions: 'SAMEORIGIN',
  // Content Type Options
  contentTypeOptions: 'nosniff',
  // Referrer Policy
  referrerPolicy: 'strict-origin-when-cross-origin'
};