import 'dotenv/config'

export const ENV = {
    PORT : process.env.PORT || 5001,
    DB_URL :process.env.DB_URL,
    NODE_ENV :process.env.NODE_ENV,
    CLERK_PUBLISHABLE_KEY:process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY:process.env.CLERK_SECRET_KEY,
    STREAM_APIKEY:process.env.STREAM_APIKEY,
    STREAM_API_SECRET:process.env.STREAM_API_SECRET,
    SENTRY_DSN:process.env.SENTRY_DSN,
    INNGEST_KEY:process.env.INNGEST_KEY,
    INNGEST_SINGNIN_KEY:process.env.INNGEST_SINGNIN_KEY,
    CLIENT_URL: process.env.CLIENT_URL,

}