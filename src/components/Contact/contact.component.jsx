import React, { useEffect } from 'react'
import './contact.component.scss'
import { ReactComponent as FacebookLogo } from '../../assets/facebook.svg';
import { ReactComponent as YoutubeLogo } from '../../assets/youtube.svg';
import { ReactComponent as LocationLogo } from '../../assets/location.svg';
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion"
import ContactForm from '../../components/ContactForm/ContactForm.component'

export default function Contact() {

    const animation = useAnimation()

    const [contactRef, inView] = useInView({
        triggerOnce: true,
    })

    useEffect( () => {
        if(inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <motion.div 
        className="section section-06" 
        ref={contactRef}
        animate={animation}
        initial="hidden" 
        variants={{
            hidden: { 
                x: '100%'
            },
            visible: { 
                x: 0,
                transition:{duration:0.5,  delay:0.6}
            }
        }}
        >
            <motion.div 
            className="container"
            animate={animation}
            initial="hidden" 
            variants={{
                hidden: { 
                    opacity: 0
                },
                visible: { 
                    opacity: 1,
                    transition:{ duration: 0.2, delay:1.3}
                }
            }}
            >
                <div className="contact"> 
                    <div className="contact-body">
                        <div className="social">
                            <h2>Follow us</h2>
                            <div className="social-icons"> 
                                <motion.div 
                                className="social-icons"
                                animate={animation}
                                initial="hidden"
                                variants={{
                                    hidden: { 
                                        opacity: 0,
                                        scale: 0
                                    },
                                    visible: { 
                                        opacity: 1,
                                        scale: 1,
                                        transition: {delay:1.5, delayChildren: 0.1}
                                    }
                                }}
                                >
                                    <a
                                        href="https://www.facebook.com/janmarcom/"
                                    >
                                        <FacebookLogo/>
                                    </a>
                                    <a
                                        href="https://www.youtube.com/channel/UCucNz2AyKE7zWhUCtfV2DUA"
                                    >
                                        <YoutubeLogo/>
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                        <div className="locations" >
                            <h2>Contact</h2>
                            <div className="location">
                                <h4>depozit fagaras</h4>
                                <div className="location-body">
                                    <div className="location-descriptiom">
                                        <p>Str. Doamna Stanca nr. 76</p>
                                        <p>Fagaras - Jud. Brasov</p>
                                        <p>email: janmar.com.srl@gmail.com</p>
                                        <p>tel: +40 371 169 607</p>
                                    </div>
                                    <motion.div 
                                    className="location-icon"
                                    animate={animation}
                                    initial="hidden"
                                    variants={{
                                        hidden: { 
                                            opacity: 0,
                                            scale: 0
                                        },
                                        visible: { 
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                delay:1.6
                                            }
                                        }
                                    }}
                                    >   
                                        <a href="https://goo.gl/maps/Mk8eBUiNZNicSZtd8">
                                            <LocationLogo/>
                                            <p>Vezi pe harta</p>
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="location">
                                <h4>depozit oltet</h4>
                                <div className="location-body">
                                    <div className="location-descriptiom">
                                        <p>Com. Vistea de Jos - Intersectia cu Rucar</p>
                                        <p>Jud. Brasov</p>
                                        <p>email: janmarcom.oltet@gmail.com</p>
                                        <p>tel: +40 732 409 951</p>
                                    </div>
                                    <motion.div 
                                    className="location-icon"
                                    ref={contactRef}
                                    animate={animation}
                                    initial="hidden"
                                    variants={{
                                        hidden: { 
                                            opacity: 0,
                                            scale: 0
                                        },
                                        visible: { 
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                delay:1.7
                                            }
                                        }
                                    }}
                                    >
                                        <a href="https://goo.gl/maps/QAKYNVa3eD4Ju8Hv9">
                                            <LocationLogo/>
                                            <p>Vezi pe harta</p>
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <h4>Lasa-ne un mesaj</h4>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}