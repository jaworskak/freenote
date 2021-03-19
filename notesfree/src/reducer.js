const reducer = (state, action) =>{
    if(action.type==='ADD_NEW_SECTION'){
        var timestamp = new Date().getUTCMilliseconds();
        var newItem = {section_id:parseInt(timestamp),section_name:"Filmy do obejrzenia"}
        return {section_list:[state.section_list,newItem],opened_section_id:parseInt(timestamp),opened_section_name:"Filmy do obejrzenia"}
    }
}

export default reducer
