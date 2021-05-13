import React, {useState,useEffect } from 'react'
import './Section.css'
import {useGlobalContext} from '../context'
import Element from './Element'
import axios from 'axios';
import AddedElement from './AddedElement'

const Section = (props) =>{

    const {Toggle} = useGlobalContext()
    const [addNewElem,setAddNewElem] = useState(false)
    const [SectionElements,setSectionElements] = useState([])

     useEffect(async()=>{
        const result = await axios.get('http://localhost:5000/notedElements/'+props.section_id)
        setSectionElements(result.data)

        const section = document.getElementById(props.section_id)
        
        // TODO - COS TU JEST NIE TAK POWINNAM SPRAWDZAC ILOSC ELEMENTOW W DATA ZEBY STOPNIOWAC KOLORY
        if(typeof result.data[0]!=='undefined'){ // elements exists
          section.style.backgroundColor='rgb(42,73,116, 1)';
        }
         
    },[addNewElem]) // pobranie wszystkich elementów w sekcji (potem jeszcze ogarnac sekcje w sekcji)

    function newEelementAdded(){ // zamykamy okno dodawania nowego elementu
       console.log('props onchange1')
      setAddNewElem(false)
      // info do parenta zeby odswiezyc liste sekcji
      console.log('props onchange')
      props.onChange()
    }

   
    


    return (
        <div> 
             { props.open===props.section_id &&     
        <div className="section active">
            <div className="section-actv-navbar">
              <h3>{props.section_name}</h3>
            </div>
            <div className="addedElementsContainer">
               {SectionElements.map((element)=>{
                 const {_id,is_text_note_link,photo_name,photo_url,section_id,tag,text_note } = element  
                return(
                  <AddedElement key={_id} tag={tag} text_note={text_note} photo_name={photo_name} is_text_note_link={is_text_note_link} photo_url={photo_url} section_id={section_id}/>         
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