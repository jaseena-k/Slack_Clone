import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import AuthPage from './pages/AuthPage.jsx';
import { Routes, Route, Navigate } from 'react-router';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <div>
      <>
        <SignedIn>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/auth" element={<navigate to={"/"} replace />}></Route>
          </Routes>
        </SignedIn>
        <SignedOut>
          <Routes>
            <Route path="/auth" element={<AuthPage />}></Route>
            <Route path="*" element={<Navigate to={"/auth"} replace />}></Route>
          </Routes>
        </SignedOut>

      </>

    </div>
  )
}

export default App