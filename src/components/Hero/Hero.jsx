import React from "react"
import { motion } from "framer-motion"
import NumberCounter from "number-counter"
import Header from "../Header/Header"
import "./Hero.css"
import Hero_image from "../../assets/hero_image.png"
import Hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import Hero_image_2 from "../../assets/main_header.png"


const Hero = () => {

    const transition = {type:'spring', duration:3}
    const heartVariants={
        view:{
            scale:1.4,
            transition:{
                duration:0.3,
                yoyo: 25
            }
        }
    }
    const mobile = window.innerWidth<=768 ? true: false
  return (
    <section id="hero" className="hero">
        <div className="blur blur-hero"></div>
        <div className="hero-left">
            <Header/>
            <div className="ad">
                <motion.div
                initial={{left: mobile? '178':'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition, type:'tween'}}
                >
                </motion.div>
                <span>the best fitness club in mamelodi</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className="stroke-text">Shape</span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>Let us help you build your ideal body so that you can live your life to the fullest</span>
                </div>
            </div>

            <div className="figures">
                <div>
                    <span><NumberCounter end={50} start={30} delay='3' preFix='+' /></span>
                    <span>Expert coaches</span>
                </div>
                <div>
                    <span><NumberCounter end={300} start={240} delay='3' preFix='+' /></span>
                    <span>Members</span>
                </div>
                <div>
                    <span><NumberCounter end={50} start={20} delay='3' preFix='+' /></span>
                    <span>Fitness Programs</span>
                </div>
            </div>

            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>
        <div className="hero-right">
            <button className="btn">Join Now</button>
            <motion.div
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}
            className="heart-rate">
                <motion.img variants={heartVariants} whileInView="view"
                src={Heart} alt="heart-rate" />
                <span>Heart Rate</span><span>116 bpm</span>
            </motion.div>

            <img src={Hero_image} alt="hero" className="hero-image"/>
            <motion.img 
            initial={{right:'11rem'}}
            whileInView={{right:'21rem'}}
            transition={transition}
            src={Hero_image_back} alt="hero-back" className="hero-image-back"/>

            <motion.div 
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            transition={transition}
            className="calories">
                <img src={Calories} alt="calories" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 Kcal</span>
                </div>
            </motion.div>

        </div>
    </section>
  )
}

export default Hero