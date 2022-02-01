import React from 'react'

function Travel(props) {
    return(
        <div className='travel-plans'>
            <img src={`../images/${props.img}`} className='travel-img'/>
            <div className='travel-journal'>
                <div className='travel-map'>
                    <p className='travel-location'>{props.location}</p>
                    <a href={props.googleMapsUrl} className='travel-url'>View on Google Maps</a>
                </div>
                <div className='travel-title'>{props.title}</div>
                <div className='travel-date'>
                    <span>{props.startDate} - </span>
                    <span>{props.endDate}</span>
                </div>
                <p className='travel-info'>{props.description}</p>
            </div>
        </div>
    )
}

export default Travel;