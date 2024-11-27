import { Request, Response, NextFunction } from 'express';
import csrf from 'csurf';

// Configure CSRF protection
const csrfProtection = csrf({ cookie: true });

// CSRF token middleware
export const generateCsrfToken = (req: Request, res: Response, next: NextFunction) => {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  next();
};