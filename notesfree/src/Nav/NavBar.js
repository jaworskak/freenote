import React, {useState, useEffect, useRef}  from 'react'
import {useGlobalContext} from '../context'
import axios from 'axios';

import { FaHamburger } from 'react-icons/fa'

const NavBar = () =>{

    const {parent_section_id,parent_section_name} = useGlobalContext()
    const [ModalAddSectionOpen,setModalAddSectionOpen] = useState(false)
    const [newSectionName,setNewsetionName] = useState("")
    const linksContainerRef = useRef(null)

    const [showLinks,setShowLinks] = useState(false)

    useEffect(()=>{
        if(showLinks){ // jak klikniete pokaz linki to pokazujemy
            linksContainerRef.current.style.height='130px'
        }
        else{
            linksContainerRef.current.style.height='0px'
        }
    },[showLinks])

    const ShowModal = () =>{   
         console.log(document.getElementsByClassName("mainsection").style)  
        // document.getElementsByClassName("mainsection").style.display='block'
        setModalAddSectionOpen(true);
    }

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
            <div className="navbar__logo_toggle_container">
                    <div className="logo">
                    </div>
                    <button className="navbar_toggle_btn" onClick={()=>setShowLinks(!showLinks)}>
                        <FaHamburger />
                    </button>
            </div>
            <hr/>
            <div className="navbar__links_container" ref={linksContainerRef}>
                <ul className="links">
                    <li>
                        <a href="#" class="navbar_menu_btn search">
                        WYSZUKAJ
                        </a>                  
                    </li>
                    <li>
                        <a href="#" class="navbar_menu_btn add" onClick={ShowModal}>
                         DODAJ SEKCJĘ
                        </a>
                    </li>
                    <li>
                        <a href="#" class="navbar_menu_btn login">
                         ZALOGUJ
                        </a>
                    </li>
                </ul>
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