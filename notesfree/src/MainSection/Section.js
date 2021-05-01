import React, {useState,useEffect } from 'react'
import './Section.css'
import {useGlobalContext} from '../context'
import Element from './Element'
import axios from 'axios';

const Section = (props) =>{

    const {Toggle} = useGlobalContext()
    const [addNewElem,setAddNewElem] = useState(false)
    const [SectionElements,setSectionElements] = useState([])

     useEffect(async()=>{
       console.log('wywolanie fetch')
        const result = await axios.get('http://localhost:5000/notedElements/'+props.section_id)
        setSectionElements(result.data)
    },[addNewElem]) // pobranie wszystkich elementów w sekcji (potem jeszcze ogarnac sekcje w sekcji)

    function newEelementAdded(){ // zamykamy okno dodawania nowego elementu
      setAddNewElem(false)
    }


    return (
        <div> 
             { props.open===props.section_id &&     
        <div className="section active">
            <div className="section-actv-navbar">
              <h3>{props.section_name}</h3>
            </div>
            <div>
               {SectionElements.map((element)=>{
                 const {_id,is_text_note_link,photo_name,photo_url,section_id,tag,text_note } = element  
                return(
                <div key={_id}  className="addedElem">
                   <p>{tag}</p>
                   <p>{text_note}</p>
                   <p>{photo_name}</p>
                   <p>{is_text_note_link}</p>
                   <p>{photo_url}</p>
                   <p>{section_id}</p>
                </div>           
                )
            })}  
            </div>
            <div className="section-actv-continer">
              {addNewElem &&
              <Element section_id={props.section_id} section_name={props.section_name} onChange={newEelementAdded} /> }        
            </div>
            <div className="section-actv-footer">
             <button className="section-actv-add-elem" onClick={() =>setAddNewElem(true)}>Dodaj nowy element do <b>{props.section_name}</b></button> 
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