import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from "@clerk/clerk-react";
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from "react-router";

import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';
import * as Sentry from "@sentry/react";



const queryClient = new QueryClient()
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!PUBLISHABLE_KEY){
  throw new Error ('missing publishable key')
}
Sentry.init({
  dsn:"https://a2a6da53debd11249e96670fd0cb21e5@o4511146053730304.ingest.us.sentry.io/4511217124376576",
  integrations: [
    Sentry.reactRouterV7BrowserTracingIntegration({
      useEffect: React.useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
  ],
  tracesSampleRate: 1.0,
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
          <QueryClientProvider client={queryClient}>
             <App />
             <Toaster position='top-right'/>
          </QueryClientProvider>
          </BrowserRouter>
    </ClerkProvider>

  </StrictMode>,
)
