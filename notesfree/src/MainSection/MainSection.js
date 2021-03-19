import React from 'react'
import './MainSection.css'
import '../App.css'
import Section from './Section/Section'

const MainSection = () =>{
    return (
        <div className="mainsection road">
            <Section />
            <Section />
            <Section className="active"/>
        </div>
    )
}

export default MainSection