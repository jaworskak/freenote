import React, {useState, useEffect} from 'react'
import Section from './Section'
import axios from 'axios';

const Dashboard = (props) =>{

    const [sectionList,setSectionList] = useState([]) // lista sekcji wyswietlana po lewej
    const [openedSectionId, setOpenedSectionId] = useState(0) // ktora sekcja jest teraz otwarta
    const [openedSectionName, setOpenedSectionName] = useState('') // nazwa otwartej sekcji
  
    const OpenSection = (section_id, section_name) =>{ // ktora sekcja jest otwarta?
        setOpenedSectionId(section_id)
        setOpenedSectionName(section_name)
    }

    const timer = ms => new Promise(res => setTimeout(res, ms)) // powoli pokazujemy kafelki
    async function loadElements(){
        const sectionList = document.querySelectorAll('.sectionListItem')
        
        for(var i=0; i<sectionList.length;i++){
            sectionList[i].classList.add("visible")
            await timer(30);
        }
    }

    useEffect(async()=>{ // pobieram sekcje z bazy
        const result = await axios.get('http://localhost:5000/sections/')
        setSectionList(result.data)
        
        loadElements()

    },[props.newSection]) // jak przyjda nowe propertisy to sie przeladuje

  
    return ( 
        <div className="dashboard"> 
            {        
            sectionList.length>0 &&
            <div className="sectionList">
                 {sectionList.map((section)=>{
                 const {_id, section_name, elements_count } = section  
                return( 
                <div 
                className={`sectionListItem ${section_name.length>9 ? "importantItem":"" } ${elements_count!=='0' ? "elements_inside":""}`} 
                onClick={()=>OpenSection(_id,section_name)} 
                key={_id}>
                   <p>{section_name}</p> 
                </div>           
                )
            })} 
            </div>    
            }  
            {openedSectionId!==0 &&
            <div className="currentSection">
                 <Section 
                    key={openedSectionId} 
                    section_id={openedSectionId} 
                    section_name={openedSectionName} 
                    />
            </div>}
        </div>
    )  
}

export default Dashboard