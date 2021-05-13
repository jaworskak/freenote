import React, {useState, useEffect} from 'react'
import Section from './Section'
import axios from 'axios';

const Dashboard = (props) =>{

  
    const [sectionList,setSectionList] = useState([]) // lista sekcji wyswietlana po lewej
    const [openedSectionId, setOpenedSectionId] = useState(0) // ktora sekcja jest teraz otwarta
  
    const OpenSection = (section_id) =>{
        setOpenedSectionId(section_id)
    }

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function loadElements(){
        const sectionList = document.querySelectorAll('.sectionListItem')
        
        for(var i=0; i<sectionList.length;i++){
            sectionList[i].classList.add("visible")
            await timer(30);
        }
    }

    useEffect(async()=>{
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
                return( // tutaj trzeba sprawdzac jak zrobic rozne rozmairy
                <div 
                className={`sectionListItem ${section_name.length>9 ? "importantItem":"" } ${elements_count!=='0' ? "elements_inside":""}`} 
                onClick={()=>OpenSection(_id)} 
                key={_id} 
                id={_id}>
                    <Section 
                    key={_id} 
                    section_id={_id} 
                    section_name={section_name} 
                    open={0} // tu nigdy nie pokazujemy otwartych 
                    />
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