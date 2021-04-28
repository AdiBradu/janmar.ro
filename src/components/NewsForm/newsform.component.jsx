import React from 'react'
import './newsform.component.scss'
import { ReactComponent as Send } from './send.svg';

export default function Newsform(props) {

    const clicked = props.click
    const handleClick = props.handleClick

    return (
        <div className="news-form-body">
            <input placeholder="email"></input>
            <button 
            type="submit" 
            className="send-btn"
            onClick={(e) => {
                e.preventDefault();
                handleClick()
            }
            }
            >
                <Send />
            </button>
        </div>
    )
}
