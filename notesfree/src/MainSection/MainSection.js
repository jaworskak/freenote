import React from 'react'
import './MainSection.css'
import '../App.css'
import Section from './Section/Section'
import {useGlobalContext} from '../context'

const MainSection = () =>{

    const {section_list,opened_section_id}  = useGlobalContext()
    
    return (
        <div className="mainsection road">
            {section_list.length>0 &&
            <div>
            {section_list.map((section)=>{
                 const {section_id, section_name} = section
                return(
               <Section key={section_id} section_id={section_id} section_name={section_name} open={opened_section_id}/>
                )
            })}  
            </div>    
            }  
        </div>
    )
}

export default MainSection