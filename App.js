import Card from './components/Card';
import Hero from './components/Hero';
import React from 'react';
import data from './data';

export default function App(){
    const cards = data.map(element=>{
        return(
            <Card 
                key = {element.title}
                {...element}
            />
        )
    })
    return (
        <div>
            <Hero/>
            <section className = 'cards-list'>
                {cards}
            </section>
        </div>
    )
        
}