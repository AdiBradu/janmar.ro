import React from 'react'
import './logo.component.scss'
import { motion } from "framer-motion"

export default function Logo(props) {
    console.log(props.showMenu)

    const navVariants = {
        initial: {
            fill: 'rgba(0,49,73,1)'
        },
        visible:{
            fill: 'rgba(252,191,73,1)',
            transition:{
                duration: 1.2
            }
        }
    }

    return (
        <motion.div className="logo">
            <motion.svg width="150" height="38" viewBox="0 0 150 38" xmlns="http://www.w3.org/2000/svg"
                    initial={"hidden"}
                    animate={ props.showMenu ? "visible" : "initial"}
                    variants={navVariants}
            >
            <g clip-path="url(#clip0)">
            <path d="M40.1233 24.7806L43.1624 21.9447C43.9878 22.9304 44.7661 23.4994 45.8116 23.4994C47.0018 23.4994 47.7564 22.705 47.7564 21.144V10.5017H52.4464V21.1782C52.4464 23.2927 51.9118 24.7837 50.7704 25.914C49.651 27.0194 48.0473 27.6242 46.1025 27.6242C43.1372 27.6164 41.315 26.3913 40.1233 24.7806Z"/>
            <path d="M60.5182 10.382H65.0636L72.3068 27.3288H67.2505L66.0116 24.3235H59.4476L58.2322 27.3288H53.2734L60.5182 10.382ZM64.6501 20.6947L62.754 15.9107L60.8343 20.6947H64.6501Z"/>
            <path d="M73.9608 10.5017H78.363L85.3642 19.3964V10.5017H90.0306V27.3288H85.8956L78.6272 18.0982V27.3288H73.9608V10.5017Z"/>
            <path d="M93.0414 10.5017H98.0253L102.085 17.0161L106.144 10.5017H111.127V27.3288H106.44V17.666L102.085 24.2519H101.987L97.6606 17.7142V27.3288H93.0414V10.5017Z"/>
            <path d="M120.024 10.382H124.569L131.813 27.3288H126.756L125.517 24.3235H118.955L117.739 27.3288H112.781L120.024 10.382ZM124.156 20.6947L122.26 15.9107L120.34 20.6947H124.156Z"/>
            <path d="M133.467 10.5017H141.512C144.114 10.5017 145.914 11.1749 147.054 12.3285C148.051 13.2909 148.561 14.5892 148.561 16.2481V16.2947C148.561 18.8678 147.176 20.5734 145.062 21.4627L149.121 27.3288H143.675L140.243 22.2323H138.182V27.3288H133.465L133.467 10.5017ZM141.293 18.5864C142.898 18.5864 143.821 17.809 143.821 16.5917V16.5435C143.821 15.2219 142.85 14.5487 141.269 14.5487H138.182V18.5911L141.293 18.5864Z"/>
            <path d="M13.2885 20.5874C9.83448 19.279 6.78883 17.0959 4.45662 14.257C2.12442 11.4181 0.587559 8.02297 0 4.41176L4.65851 3.68103C5.11491 6.48294 6.30776 9.11708 8.11759 11.3196C9.92743 13.5222 12.2907 15.2159 14.9708 16.231L13.2885 20.5874Z"/>
            <path d="M22.2942 8.78529L19.3164 5.16427C22.1875 2.85849 25.6215 1.34013 29.2736 0.761585C32.9257 0.183044 36.6675 0.564682 40.1233 1.86819L38.4394 6.2215C35.7572 5.21161 32.8536 4.91688 30.0199 5.36686C27.1861 5.81685 24.5218 6.99574 22.2942 8.78529Z"/>
            <path d="M22.2942 37.5031L19.3164 33.8852C21.5441 32.0944 23.2564 29.7556 24.2813 27.1036C25.3062 24.4516 25.6078 21.5797 25.1556 18.7761L29.8142 18.0438C29.9872 19.1321 30.0734 20.2321 30.072 21.3337C30.0775 24.4319 29.3819 27.4921 28.036 30.29C26.6902 33.0878 24.7283 35.5524 22.2942 37.5031Z"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="149.121" height="37" transform="translate(0 0.5)"/>
            </clipPath>
            </defs>
            </motion.svg>
        </motion.div>
    )
}