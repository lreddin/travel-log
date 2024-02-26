import React from 'react';


export default function Card(props){
    
    return(
        <div>
        <div className = 'card'>
            <div>
                 <img className = 'card--img' src ={props.imageUrl} />
            </div>
            <div className='card--info'>
                <div className='card--location'>
                    <i className ="fa-solid fa-location-dot"></i>
                    <p className = "card--country">{props.location}</p>
                    <a className='card--google'href={props.googleMapsUrl}>Visit on Google Maps</a>
                </div>
                <h1 className='card--place'>{props.title}</h1>
                <h3 className='card--date'>{props.startDate} - {props.endDate}</h3>
                <p  className = 'card--desc'>{props.description}</p>  
            </div>
        </div>
        <hr/>
        </div>
    )
}