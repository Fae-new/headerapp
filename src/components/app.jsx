import React from 'react';
import Header from './header'
import Footer from './footer'
import Note from './note'
import CreateArea from './createArea';



function App(){
const [newNotes,addNewNote]= React.useState([]);
function addNote(value){
  addNewNote((prevValue)=>{
    return(
[ ...prevValue,
  value
])
  })

}

function deleteNote(id){
addNewNote((prevValue)=>{
return(prevValue.filter((note,index)=>{
return index !== id
}))
})
}
 
    return (<div>

<Header/>
<CreateArea
addNote={addNote}
/>
{newNotes.map(function(note,index){
return(
<Note
key={index}
id={index}
title={note.title}
content={note.content}
onDelete={deleteNote}
/>
)
})}
<Footer/></div>)
}


export default App