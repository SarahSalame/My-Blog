import './BlogPosts.css'
import Cards from './Cards'
import { GoArrowUpRight } from "react-icons/go"
import Image1 from "../../../assets/images/Image.png";
import Image2 from "../../../assets/images/Image2.png";
import Image3 from "../../../assets/images/Image3.png";
import Image4 from "../../../assets/images/Image4.png";
import Image5 from "../../../assets/images/Image5.png";
import Image6 from "../../../assets/images/Image6.png";


const BlogPosts = () => {
    const cardData=[
        {
            cardImg:Image1 ,
            details:"Alec Whitten • 1 Jan 2023",
            title:"Bill Walsh leadership lessons",
            icon:<GoArrowUpRight /> ,
            description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
        },
        {
            cardImg:Image2 ,
            details:"Demi WIlkinson • 1 Jan 2023",
            title:"PM mental models",
            icon:<GoArrowUpRight />,
            description:"Mental models are simple expressions of complex processes or relationships."
        },
        {
            cardImg:Image3 ,
            details:"Candice Wu • 1 Jan 2023",
            title:"What is Wireframing?",
            icon:<GoArrowUpRight />,
            description:"Introduction to Wireframing and its Principles. Learn from the best in the industry."
        },
        {
            cardImg:Image4 ,
            details:"Natali Craig • 1 Jan 2023",
            title:"How collaboration makes us better designers",
            icon:<GoArrowUpRight />,
            description:"Collaboration can make our teams stronger, and our individual designs better."
        },
        {
            cardImg:Image5 ,
            details:"Drew Cano • 1 Jan 2023",
            title:"Our top 10 Javascript frameworks to use",
            icon:<GoArrowUpRight />,
            description:"JavaScript frameworks make development easy with extensive features and functionalities."
        },
        {
            cardImg:Image6 ,
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