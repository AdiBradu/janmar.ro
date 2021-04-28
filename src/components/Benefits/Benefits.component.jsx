import React, { useEffect } from 'react'
import './Benefits.component.scss'
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Benefit from '../benefit/benefit.component'
import livrare from '../../assets/livrare.png'
import retur from '../../assets/retur.png'
import plata from '../../assets/plata.png'
import consiliere from '../../assets/consiliere.png'

export default function Benefits() {

    const animation = useAnimation()
    const [benefitsRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px'
    })

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <section className="section section-02">
            <motion.div 
            className="benefits" 
            ref={benefitsRef}
            animate={animation}
            initial="hidden"
            variants={{
                hidden: { 
                    opacity: 0
                },
                visible: { 
                    opacity: 1,
                    transition: {
                        when: "beforeChildren",
                        staggerChildren: 0.3
                    }
                }
            }}
            >
                <Benefit 
                title='livrare gratuita'
                description='Pentru comenzi ce depasesc 1500 RON'
                svg={livrare}
                />
                <Benefit 
                title='retur produse'
                description='Ai 30 zile la dispozitie sa returnezi produsul'
                svg={retur}
                />
                <Benefit 
                title='modalitati de plata'
                description='Poți plăti cu cardul, cash sau în rate'
                svg={plata}
                />
                <Benefit 
                title='consiliere telefonica'
                description='Comenzi telefonice speciale. Asistență la cumpărături.'
                svg={consiliere}
                />
            </motion.div>
        </section>
    )
}
