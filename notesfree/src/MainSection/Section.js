import React from 'react'
import './Section.css'
import {useGlobalContext} from '../context'
import Element from './Element'

const Section = (props) =>{

     
    const {Toggle} = useGlobalContext()

    return (
        <div> 
             { props.open===props.section_id &&     
        <div className="section active">
            <div className="section-actv-navbar">
              <h3>{props.section_name}</h3>
            </div>
            <div className="section-actv-continer">
              <Element/>   
            </div>
            <div className="section-actv-footer">
             <button className="section-actv-add-elem">Dodaj nowy element do <b>{props.section_name}</b></button> 
              <button className="section-actv-add-sect">Dodaj nową sekcję do <b>{props.section_name}</b></button>         
            </div>
        </div>
            }
            { props.open!==props.section_id &&
            <div className="section"  onClick={() => Toggle(props.section_id,props.section_name)} >
              <h3>{props.section_name}</h3>
            </div>           
            }
          </div>
    )
}

export default Section