const reducer = (state, action) =>{
    if(action.type==='ADD_NEW_SECTION'){   
        var timestamp = new Date().getUTCMilliseconds();
        var tempState =[...state.section_list]; // kopia tablicy a nie referancja do niej
        var newItem = {section_id:parseInt(timestamp),section_name:action.section_name, parent_id:action.parent_section_id}    
        tempState.push(newItem)
        return {...state,section_list:tempState,opened_section_id:parseInt(timestamp),opened_section_name:action.section_name}
    }
    if(action.type==='TOGGLE'){
        return {...state,opened_section_id:action.opened_section_id, opened_section_name:action.opened_section_name}
    }
}

export default reducer
