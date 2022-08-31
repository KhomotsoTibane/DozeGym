import React,{useState} from "react"
import { motion } from "framer-motion"
import "./Testimonials.css"
import testimonialsData from "../../data/testimonialData"
import RightArrow from "../../assets/rightArrow.png"
import LeftArrow from "../../assets/leftArrow.png"
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai"

function Testimonials() {

    const [selected, setSelected] = useState(0)
    const length = testimonialsData.length;
    const transition = {type:'spring', duration:3}
  return (
    <section id="testimonials" className="testimonials">
        <div className="testimonials-left">
            <span>Testimonials</span>
            <span className="stroke-text">What they</span>
            <span>Say about us</span>
            <motion.span key={selected} initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} exit={{opacity:0, x:100}} transition={transition}
            >{testimonialsData[selected].review}</motion.span>
            <div>
                <span style={{color: "var(--orange)"}}>
                    {testimonialsData[selected].name}
                </span>{" - "}
                <span>
                    {testimonialsData[selected].status}
                </span>
                <AiOutlineArrowLeft onClick={()=> { selected === 0 ? setSelected(length-1) : setSelected((prev)=> prev-1)}} src={LeftArrow}  />
                <AiOutlineArrowRight onClick={()=> { selected === length-1 ? setSelected(0) : setSelected((prev)=> prev+1)}} src={RightArrow} />
            </div>
         
        </div>
        <div className="testimonials-right">
          
            <motion.div initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{...transition, duration:2}}
            className="testimonials-right-1"
            ></motion.div>
            <motion.div initial={{opacity:0, x:100}} whileInView={{opacity:1, x:0}} transition={{...transition, duration:2}}
            className="testimonials-right-2"
            ></motion.div>

            <motion.img key={selected} initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-100}} transition={transition}
            src={testimonialsData[selected].image} alt={testimonialsData[selected].name} 
            className="testimonials-right-3"    
            />
          
            <div className="arrows">
               <AiOutlineArrowLeft onClick={()=> { selected === 0 ? setSelected(length-1) : setSelected((prev)=> prev-1)}} src={LeftArrow}  />
                <AiOutlineArrowRight onClick={()=> { selected === length-1 ? setSelected(0) : setSelected((prev)=> prev+1)}} src={RightArrow} />
            </div>
        </div>
    </section>
    
  )
}

export default Testimonials