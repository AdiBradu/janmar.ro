import React, { useState } from 'react'
import './Produse.component.scss'
import { motion } from "framer-motion"
import produse from '../../data/Produse.json'
import SearchBox from '../../components/SearchBox/SearchBox.component'
import {Helmet} from "react-helmet"

export default function Produse() {

    const [searchfield, setSearchField] = useState('')
    console.log(searchfield)

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredProducts = produse.filter( produs => {
        return produs.Subcategory.toLowerCase().includes(searchfield.toLowerCase())
    })
    console.log(filteredProducts)

    return (
        <motion.div className="produse" exit={{opacity:0}}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>JANMAR - Constructii, gradinarit si bricolaj</title>
                <meta 
                name="description" 
                content={ `La noi gasiti materiale de constructii, gradinarit si bricolaj.` }
                />
            </Helmet>
            <div className="header">
                <h3>Lista categoriilor si subcategoriilor de produse disponibile in depozitele noastre:</h3>
                <SearchBox searchChange={onSearchChange}/>
            </div>
            <div className="container">
                {
                    filteredProducts.map( produs => 
                        <div className="card" key={Math.random()}>
                            <h4>{produs.Subcategory}</h4>
                            <p>{produs.Category}</p>
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}
