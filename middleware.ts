import { authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const authMiddlewareConfig = {
        publicRoutes: ['/', '/api/webhook/clerk'],
        ignoredRoutes: ['/api/webhook/clerk']
};

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};