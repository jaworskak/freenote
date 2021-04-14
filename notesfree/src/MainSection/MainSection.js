import React, {useState, useEffect} from 'react'
import './MainSection.css'
import '../App.css'
import Section from './Section'
import axios from 'axios';

const MainSection = () =>{

  
    const [sectionList,setSectionList] = useState([])
    const [openedSectionId, setOpenedSectionId] = useState(0)

    const OpenSection = (section_id) =>{
        setOpenedSectionId(section_id)

    }

    useEffect(async()=>{
        const result = await axios.get('http://localhost:5000/sections/')
        setSectionList(result.data)
    },[]) // [] wywoluje  useEffect tylko raz - poczatkowe ladowanie elementów - wszystkie sekcje są zamknięte
    // jak klikne w dana sekcje to ona powinna sie otworzyc - get bedzie potem pobieral zagniezdzone sekcje na razie nie
    // na razie na onclick otwieram i zamykam daną sekcję

    return (
 
        <div className="mainsection">
            {        
            sectionList.length>0 &&
            <div>
            {sectionList.map((section)=>{
                 const {section_id, section_name} = section  
                return(
                <div onClick={()=>OpenSection(section_id)} key={section_id} >
                    <Section 
                    key={section_id} 
                    section_id={section_id} 
                    section_name={section_name} 
                    open={openedSectionId} />
                </div>           
                )
            })}  
            </div>    
            }  
        </div>
    )
}

export default MainSection