import React from 'react'
import './Footer.css'
import '../App.css'
import {useGlobalContext} from '../context'

const Footer = (props) =>{

  

    const {AddSection,parent_section_id,parent_section_name} = useGlobalContext()

   
    return (
        <div className="footer">
            <button className="btn-add-section" onClick={AddSection}>Dodaj nową sekcję do 
            { parent_section_id===0 && <b> głównego widoku</b>}
            {parent_section_id!==0 && <b> {parent_section_name}</b>}
             </button>
        </div>
    )
}

export default Footer