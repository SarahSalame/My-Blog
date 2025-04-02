
import Hero from "./Hero"
import "./Sign.css"

const SignIn = () => {
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
      <Hero title="Sign In" description="Enter your email and password to sign in!" 
    inputs={<>
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
</>
}
    btn="Sign In" 
    question="Dont have an account?"
    href={Links[0].href}
    content={Links[0].content}
    column="true"
    />
    </>
  )
}
 
export default SignIn