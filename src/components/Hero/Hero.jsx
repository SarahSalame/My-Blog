import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = ({title,description,inputs,btn,question,href,content,column}) => {
    return (
    <div className='hero'>
        <h1>{title}</h1>
        <p className='description'>{description}</p>  
        <form>
        <div className={`container ${column && "column "}`}>
                {inputs}
                {btn &&<button>{btn}</button>  }
            </div>
        </form>
            <div className="link">
            <p className='question'>{question}</p>
            <Link to ={href}>{content}</Link>
            </div>
    </div>
    )
}

export default Hero 