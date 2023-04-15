import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'
import { Link,useNavigate } from 'react-router-dom'


const Hero = () => {
   const transition = { type: 'spring', duration: 3 }
   const mobile = window.innerWidth<=768 ? true : false
   const navigate = useNavigate();
   const auth=localStorage.getItem('user');
   const logout=()=>{
      localStorage.clear();
      navigate("/signup")
   }
   return (
      <div className="hero" id="home">
         <div className="blur hero-blur"></div>
         <div className="left-h">
            <Header />
            {/* The Best ad */}
            <div className="the-best-ad">
               <motion.div
                  initial={{ left: mobile ? "160px" : "350px" }}
                  whileInView={{ left: '5px' }}
                  transition={{ ...transition, type: "tween" }}
               ></motion.div>
               <span>the best fitness club in the town</span>
            </div>

            {/* Hero Heading */}
            <div className="hero-text">
               <div>
                  <span className='stroke-text'>Shape </span>
                  <span>Your</span>
               </div>
               <div>
                  <span>Ideal body</span>
               </div>
               <div>
                  <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
               </div>
            </div>

            {/* Figures */}
            <div className="figures">
               <div>
                  <span>
                     <NumberCounter end={140} start={100} delay='5' prefix='+'/>
                  </span>
                  <span>expert coaches</span>
               </div>
               <div>
                  <span>
                     <NumberCounter end={978} start={799} delay='5' prefix='+'/>
                  </span>
                  <span>members joined</span>
               </div>
               <div>
                  <span>
                     <NumberCounter end={50} start={30} delay='5' prefix='+'/>
                  </span>
                  <span>fitness programs</span>
               </div>
            </div>

            {/* Hero buttons */}
            <div className="hero-buttons">
               <button className="btn">Get Started</button>
               <button className="btn">Learn More</button>
            </div>
         </div>

         <div className="right-h">
         {
            auth ? <>
            <button className='btn' onClick={(e)=>{logout()}}>Logout</button>
            </>:<>
            <button className='btn' onClick={(e)=>{navigate("/signup")}}>Join Now</button>
            </>
         }
            <motion.div
               transition={transition}
               whileInView={{ right: '4rem' }}
               initial={{ right: '-1rem' }}
               className="heart-rate">
               <img src={Heart} alt="heart" />
               <span>Heart Rate</span>
               <span>116 bpm</span>
            </motion.div>

            {/* Hero images */}
            <img src={hero_image} alt="hero-img" className='hero-image' />
            <motion.img
               initial={{ right: '11rem' }}
               whileInView={{ right: '20rem' }}
               transition={transition}
               src={hero_image_back} alt="hero-img-back" className='hero-image-back' />

            {/* Calories */}
            <motion.div
               initial={{ right: '37rem' }}
               whileInView={{ right: '28rem' }}
               transition={transition}
               className="calories">
               <img src={Calories} alt="calories" />
               <div>
                  <span>Calories Burned</span>
                  <span>220 kcal</span>
               </div>
            </motion.div>
         </div>
      </div>
   )
}

export default Hero