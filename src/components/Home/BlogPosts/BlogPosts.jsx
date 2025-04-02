import './BlogPosts.css'
import Cards from './Cards'
import { GoArrowUpRight } from "react-icons/go"
const BlogPosts = () => {
    const cardData=[
        {
            cardImg:"/assets/images/Image.png" ,
            details:"Alec Whitten • 1 Jan 2023",
            title:"Bill Walsh leadership lessons",
            icon:<GoArrowUpRight /> ,
            description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
        },
        {
            cardImg:"/assets/images/Image2.png" ,
            details:"Demi WIlkinson • 1 Jan 2023",
            title:"PM mental models",
            icon:<GoArrowUpRight />,
            description:"Mental models are simple expressions of complex processes or relationships."
        },
        {
            cardImg:"/assets/images/Image3.png" ,
            details:"Candice Wu • 1 Jan 2023",
            title:"What is Wireframing?",
            icon:<GoArrowUpRight />,
            description:"Introduction to Wireframing and its Principles. Learn from the best in the industry."
        },
        {
            cardImg:"/assets/images/Image4.png" ,
            details:"Natali Craig • 1 Jan 2023",
            title:"How collaboration makes us better designers",
            icon:<GoArrowUpRight />,
            description:"Collaboration can make our teams stronger, and our individual designs better."
        },
        {
            cardImg:"/assets/images/Image5.png" ,
            details:"Drew Cano • 1 Jan 2023",
            title:"Our top 10 Javascript frameworks to use",
            icon:<GoArrowUpRight />,
            description:"JavaScript frameworks make development easy with extensive features and functionalities."
        },
        {
            cardImg:"/assets/images/Image6.png" ,
            details:"Demi WIlkinson • 1 Jan 2023",
            title:"Podcast: Creating a better CX Community",
            icon:<GoArrowUpRight />,
            description:"Starting a community doesn’t need to be complicated, but how do you get started?"
        },
    ]
  return (
    <>
    <h1>All Blog Posts</h1>
    <div className="container">
    {cardData?.map((data,index)=>{
        return(
            <Cards key={index} cardImg={data.cardImg} details={data.details} title={data.title} icon={data.icon}  description={data.description} firstImage={data.firstImage} />
        )
        })}
    </div>
    </>
  )
}

export default BlogPosts