import React from 'react'
import './MainSection.css'
import '../App.css'
import Section from './Section/Section'

const MainSection = () =>{
    return (
        <div className="mainsection">
            <Section className="section even"/>
            <Section className="section odd"/>
            <Section className="section even active"/>
        </div>
    )
}

export default MainSection