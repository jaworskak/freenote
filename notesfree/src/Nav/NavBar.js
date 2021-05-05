import React, {useState}  from 'react'
import './NavBar.css'
import '../App.css'
import {useGlobalContext} from '../context'
import axios from 'axios';

const NavBar = () =>{

     const ShowModal = () =>{   
         console.log(document.getElementsByClassName("mainsection").style)  
        // document.getElementsByClassName("mainsection").style.display='block'
        setModalAddSectionOpen(true);
    }

    const {parent_section_id,parent_section_name} = useGlobalContext()
    const [ModalAddSectionOpen,setModalAddSectionOpen] = useState(false)
    const [newSectionName,setNewsetionName] = useState("")

    
      const BtnAddNewSection = ()=>{
          setModalAddSectionOpen(false);
         // AddNewSection(parent_section_id,opened_section_id,newSectionName)

        const section = {
            section_name: newSectionName
        }
        axios.post('http://localhost:5000/sections/add', section)
        .then(res => console.log(res.data));

      }

    return (
        <nav className="navbar">
           <h2>Notatnik</h2>
           <div className="navbar_menu">                      
            <button class="navbar_menu_btn search">
                <span>WYSZUKAJ</span>
            </button>
            <button class="navbar_menu_btn add" onClick={ShowModal}>
                <span>DODAJ SEKCJĘ</span>
            </button>
            <button class="navbar_menu_btn login">
                <span>ZALOGUJ</span>
            </button>
           </div>

                { ModalAddSectionOpen &&
        <div className="modalOverlay">
         <div className="modal">
             <div className="modalSectionName">
                 <form>
                <input type="text" placeholder="Nazwa sekcji" onChange={(e)=>setNewsetionName(e.target.value)}></input>
                </form>
                <button className="btn-section-add" onClick={()=>BtnAddNewSection()}>Dodaj</button>
            </div>          
         </div>
         </div>
            }
        </nav>
    )
}

export default NavBar