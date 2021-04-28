import React, { useEffect } from 'react'
import './benefit.component.scss'
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export default function Benefit(props) {

    const animation = useAnimation()
    const [benefitRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px'
    })

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])
    
    return (
        <motion.div 
        className="benefit" 
        style={props.style} 
        ref={benefitRef}
        animate={animation}
        initial="hidden"
        variants={{
            hidden: { 
                opacity: 0,
                x: 50
            },
            visible: { 
                opacity: 1,
                x: 0,
                transition:{
                    duration: 0.5,
                    delay: 0.5
                }
            }
        }}
        > 
            <div className="benefit-header">
                <h4>{props.title}</h4>
            </div>
            <div className="benefit-body">
                <div className="benefit-icon">
                    <img src={props.svg} alt=""/>
                </div>
                <div className="benefit-description">
                    <p>{props.description}</p>
                </div>
            </div>
        </motion.div>
    )
}
