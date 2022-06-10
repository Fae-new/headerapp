import React from "react";
import Fab from '@material-ui/core/Fab'
import AddCircleIcon from '@material-ui/icons/AddCircle';


function CreateArea(props) {

    const [value,newValue]=React.useState({
        key:'',
title:'',
content:''

    })
   
    function handleChange(event){
const {name,value}=event.target;

newValue((prevValue)=>{
    return({
...prevValue,
[name]:value


    })
})


   }

 function submitNote(event){
    props.addNote(value)
    newValue({
    title:'',
    content:''})
    event.preventDefault()
  
 }
 const [display,setDisplay]=React.useState(false)
 function handleClick(){



setDisplay(true)


 }

  
    
 
  return (
    <div>
      <form action='/createNote' className="create-note">
        {display?<input name="title" placeholder="Title" onChange={handleChange} value={value.title} />:null}
        <textarea name="content" placeholder="Take a note..." rows= {display?3:1} onChange={handleChange} onClick={handleClick} value={value.content}/>
        <Fab onClick={submitNote}><AddCircleIcon/></Fab>
      </form>
    </div>
  );
}

export default CreateArea;

