// HTTPS configuration for production
export const httpsConfig = {
  // Force HTTPS redirect
  requireHttps: (req: any, res: any, next: any) => {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
      return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
  }
};