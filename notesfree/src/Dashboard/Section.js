import React, {useState,useEffect } from 'react'
import Element from './Element'
import axios from 'axios';
import AddedElement from './AddedElement'
import {AiFillCloseSquare} from 'react-icons/ai'

const Section = (props) =>{

  
    const [addNewElem,setAddNewElem] = useState(false)
    const [SectionElements,setSectionElements] = useState([])
    const [closedSection,setSectionClosed] = useState(false)

     useEffect(async()=>{
        const result = await axios.get('http://localhost:5000/notedElements/'+props.section_id)
        setSectionElements(result.data)           
    },[addNewElem]) // ladowanie wszystkich elementów w sekcji

    function newEelementAdded(){ // zamykamy okno dodawania nowego elementu
       console.log('props onchange1')
      setAddNewElem(false)
      // info do parenta zeby odswiezyc liste sekcji
      console.log('props onchange')
    }

  
 
    return (  
        <div className={`currentSection__container ${closedSection ? "":"visible" }`} >
            <div className="currentSection__navbar">
              <h3 className="currentSection__name">{props.section_name}</h3>
              <button className="currentSection__add_btn" onClick={() =>setAddNewElem(true)}>Dodaj nowy element do <span>{props.section_name}</span></button>  
                    <button className="currentSection__exit_btn" onClick={()=>setSectionClosed(true)}>
                        <AiFillCloseSquare/>
                    </button>
            </div>
             <div className="currentSection__addNewElement">
              {addNewElem &&
              <Element section_id={props.section_id} section_name={props.section_name} onChange={newEelementAdded} /> }        
            </div>
            <div className="currentSection__elements">
               {SectionElements.map((element)=>{
                 const {_id,is_text_note_link,photo_name,photo_url,section_id,tag,text_note } = element  
                return(
                  <AddedElement key={_id} tag={tag} text_note={text_note} photo_name={photo_name} is_text_note_link={is_text_note_link} photo_url={photo_url} section_id={section_id}/>         
                )
            })}  
            </div>
        </div>
    )
}

export default Section