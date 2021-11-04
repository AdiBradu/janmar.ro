import React from 'react'
import './ModalVideo.component.scss'

export default function ModalVideo(props) {

    let modal = props.showModal
    let close = props.showModal

    if(modal){
        modal = 
        <div className="modal-video" >
            <iframe width="100%" height="100%" src={props.source} title="Video locatie depozit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </div>
        close = <p onClick={() => props.handleShow(false)}>inchide video</p>
    }

    return (
        <div className="modal-wrapper">
            {close}
            {modal}
        </div>
    )
}
