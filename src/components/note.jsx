
import  React  from "react";
import Delete from '@material-ui/icons/Delete'; 


function Note(props){

function handleClick(event){

    props.onDelete(props.id)
event.preventDefault();
}

return(
    

    <div className="note">
<h1> {props.title}</h1>
<p>{props.content}</p>
<form action="/deleteNote" >
<input type='hidden' value={props.id}></input>
<button onClick={handleClick} type='submit'><Delete/></button>
</form>
</div>


)

}

export default Note;