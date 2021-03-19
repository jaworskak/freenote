import React from 'react'
import './MainSection.css'
import '../App.css'
import Section from './Section/Section'
import {useGlobalContext} from '../context'

const MainSection = () =>{
    
    return (
        <div className="mainsection road">
            <Section open={false}/>
            <Section open={true}/>
            <Section open={false}/>
        </div>
    )
}

export default MainSection