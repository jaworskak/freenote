import React from 'react'
import './Section.css'
import {useGlobalContext} from '../context'

const Section = (props) =>{

     
    const {Toggle} = useGlobalContext()

    return (
        <div> 
             { props.open===props.section_id &&     
        <div className="section active">
            <div className="section-actv-navbar">
             {props.section_name}
            </div>
            <div className="section-actv-continer">
            </div>
            <div className="section-actv-footer">
             <button>Dodaj nowy element do <b>{props.section_name}</b></button> 
              <button>Dodaj nową sekcję do <b>{props.section_name}</b></button>         
            </div>
        </div>
            }
            { props.open!==props.section_id &&
            <div className="section"  onClick={() => Toggle(props.section_id,props.section_name)} >
              <p>{props.section_name}</p>
            </div>           
            }
          </div>
    )
}

export default Section