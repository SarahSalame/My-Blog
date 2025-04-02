import Hero from "../Hero/Hero";
import BlogPosts from "./BlogPosts/BlogPosts";
import "./Home.css"

const Home = () => {
return (
    <>
    <section id="Home">
    <Hero
      title="Stories and interviews"
      description="Subscribe to learn about new product features, the latest in technology,solutions, and updates."
      inputs={<input type="email" placeholder="Enter your email" required/>}
      btn="Subscribe"
    />
    <section className="BlogPosts">
      <BlogPosts/>
    </section>
    </section>
    </>
)
}

export default Home