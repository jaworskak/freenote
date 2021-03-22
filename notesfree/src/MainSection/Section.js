import React from 'react'
import './Section.css'
import {useGlobalContext} from '../context'

const Section = (props) =>{

     
    const {Toggle} = useGlobalContext()


    return (
        <div> 
             { props.open===props.section_id &&     
        <div className="section active">
            
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