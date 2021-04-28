import React, { useEffect } from 'react'
import './vopsele.component.scss'
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion"
import {ReactComponent as Spray} from '../../assets/spray.svg'

export default function Vopsele() {

    const animation = useAnimation()
    const [vopseleRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px'
    })
    const transition = { duration: 0.7, delay: 0.3,  ease:[.02,.65,.5,.73]}

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <section className="section section-03">
            <div className="container">

                    <div className="spray">
                        <Spray/>
                    </div>
       
                    <motion.div 
                    className="vopsele-message"
                    ref={vopseleRef}
                    animate={animation}
                    initial="hidden"
                    variants={{
                        hidden: { 
                            opacity: 0, 
                            y: 200 
                        },
                        visible: { 
                            opacity: 1, 
                            y: 0,
                            transition:{
                                ...transition
                            } 
                        }
                    }}
                    >
                        <h1>Mixare vopsele & tencuieli exterioare</h1>
                        <p>In cadrul departamentului nostru de mixare, puteti amesteca un sortiment bogat de vopsele lavabile si tencuieli</p>
                        <h4>Cum functioneaza?</h4>
                        <p>1. Alegem impreuna vopseaua sau tencuiala potrivita</p>
                        <p>2. Alegeti marimea recipientului</p>
                        <p>3. Cautati nuanta preferata</p>
                        <p>4. Verificam impreuna nuanta dorita</p>
                        <p>5. Prepararea vopselei – process care dureaza doar cateva minute</p>
                    </motion.div>
           
            </div>
        </section>
    )
}

