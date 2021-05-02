import React, {useState, useEffect} from 'react'
import './MainSection.css'
import '../App.css'
import Section from './Section'
import axios from 'axios';

const MainSection = () =>{

  
    const [sectionList,setSectionList] = useState([])
    const [openedSectionId, setOpenedSectionId] = useState(0)

    const OpenSection = (section_id) =>{
        //setOpenedSectionId(section_id)

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
            <div className="sectionList">
                 {sectionList.map((section)=>{
                 const {_id, section_name} = section  
                return( // tutaj trzeba sprawdzac jak zrobic rozne rozmairy
                <div className={`sectionListItem ${section_name.length>10 ? "importantItem":""}`} onClick={()=>OpenSection(_id)} key={_id} >
                    <Section 
                    key={_id} 
                    section_id={_id} 
                    section_name={section_name} 
                    open={openedSectionId} />
                </div>           
                )
            })} 
            </div>    
            }  
            <div className="currentSection">
            </div>
        </div>
    )  
}

export default MainSection