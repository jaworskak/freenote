import React, {useState, useEffect} from 'react'
import '../index.css'
import Section from './Section'
import axios from 'axios';

const Dashboard = () =>{

  
    const [sectionList,setSectionList] = useState([])
   const [openedSectionId, setOpenedSectionId] = useState(0)
    const [addedSection, setAddedSection] = useState(0)

    const OpenSection = (section_id) =>{
        setOpenedSectionId(section_id)

    }

    function refreshSectionList(){
        var newSection = addedSection + 1
        setAddedSection(newSection)

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
                <div 
                className={`sectionListItem ${section_name.length>9 ? "importantItem":""}`} 
                onClick={()=>OpenSection(_id)} 
                key={_id} 
                id={_id}>
                    <Section 
                    key={_id} 
                    section_id={_id} 
                    section_name={section_name} 
                    open={0} // tu nigdy nie pokazujemy otwartych 
                    onChange={refreshSectionList}/>
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

export default Dashboard