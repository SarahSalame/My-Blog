import React from 'react'
import Hero from './Hero'
import "./Sign.css"
const SignUp = () => {
    const Links=[
        {
            href: "/signup",
            content: "Sign Up", 
          },
          {
            href: "/signin",
            content: "Log In", 
          },
        ];
  return (
    <>
      <Hero title="Sign Up" description="Enter your email and username , password to sign up!" 
    inputs={<>
        <input type="text" placeholder="Enter your username" required />
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
</>
}
    btn="Sign Up" 
    question="Have an account?"
    href={Links[1].href}
    content={Links[1].content}
    column="true"
    />
    
    </>
)
}


export default SignUp