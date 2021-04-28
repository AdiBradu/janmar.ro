import React from 'react'
import './SearchBox.component.scss'

export default function SearchBox({searchfield, searchChange}) {
    return (
            <input type="search" placeholder="cauta produs" onChange={searchChange}/>
    )
}
