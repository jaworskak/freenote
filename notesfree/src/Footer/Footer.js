import React, {useState} from 'react'
import './Footer.css'
import '../App.css'
import {useGlobalContext} from '../context'

const Footer = (props) =>{

      const ShowModal = () =>{     
        setModalAddSectionOpen(true);
    }
   
    const {parent_section_id,parent_section_name,opened_section_id,AddNewSection} = useGlobalContext()
    const [ModalAddSectionOpen,setModalAddSectionOpen] = useState(false)
    const [newSectionName,setNewsetionName] = useState("")

    
      const BtnAddNewSection = ()=>{
          setModalAddSectionOpen(false);
          AddNewSection(parent_section_id,opened_section_id,newSectionName)
      }
 
    return (
        <div className="footer">
            <button className="btn-add-section" onClick={ShowModal}>Dodaj nową sekcję do 
            { parent_section_id===0 && <b> głównego widoku</b>}
            {parent_section_id!==0 && <b> {parent_section_name}</b>}
             </button>

            { ModalAddSectionOpen &&
         <div className="modal">
             <div className="modalSectionName">
                 <form>
                <label>Nazwa sekcji:</label>
                <input type="text"  onChange={(e)=>setNewsetionName(e.target.value)}></input>
                </form>
                <button className="btn-section-add" onClick={()=>BtnAddNewSection()}>Dodaj</button>
            </div>          
         </div>
            }
        </div>
 
    )
}

export default Footer