import React from 'react'
import {SignedIn,SignedOut,SignInButton,SignUpButton,UserButton} from "@clerk/clerk-react";

function App() {
  return (
    <div>
        <header>
        <SignedOut>
          <SignInButton mode='model'/>
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

    </div>
  )
}

export default App