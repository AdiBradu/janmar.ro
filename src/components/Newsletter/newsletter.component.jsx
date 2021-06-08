import React, { useEffect, useState } from 'react'
import './newsletter.component.scss'
import NewsForm from '../NewsForm/newsform.component'
import {ReactComponent as AirPlane} from '../../assets/art-send.svg'
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion"

export default function Newsletter() {

    const animation = useAnimation()
    const [newsRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px'
    })
    const transition = { duration: 0.5, delay: 0.7, ease:[.02,.65,.5,.73]}

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <section className="section section-04">
            <div className="container">
                <div className="newsletter-message">
                    <div className="display-2"><h1>Newsletter</h1></div>
                    <p>Abonează-te la newsletter-ul nostru și primești cele mai noi știri din domeniu cât si promoțiile noastre.</p>
                    <NewsForm/>
                </div>"
                <motion.div 
                    className="air" 
                    ref={newsRef}
                    animate={animation}
                    initial="hidden"
                    variants={{
                        hidden: { 
                            opacity: 0, 
                            x: '20%',
                            y: "40%"
                        },
                        visible: { 
                            opacity: 1, 
                            x: '50%',
                            y: '10%',
                            transition:{
                                ...transition
                            }
                        }
                    }}
                    >
                    <AirPlane/>
                </motion.div>
            </div>
        </section>
    )
}