import React,{useState} from "react";
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const  CreateArea = (props) =>{
const [isExpanded, setExpanded] = useState(false);    
const [note, setNote]= useState({
    title:"",
    content:"",
})


  
function handleChange(e) {
    const {name , value} = e.target;
//setNote recieves prevnote
    setNote(prevNote =>{
        return {
            ...prevNote,
            [name]: value
        };
    });
}

function submitNote() {
    props.onAdd(note)
}

function expand() {
    setExpanded(true);
}
  

    return(
        <>
        <div className=" font-titillium bg-white flex flex-col rounded-lg 
        p-2 shadow-lg mt-5 mx-5 lg:w-[700px] max-sm:min-w-[350px] max-sm:mx-2 max-sm:my-10">

       {isExpanded ? 
       <input onChange={handleChange} 
       type="text" 
       name="title" 
       placeholder="title" 
       value={note.title} 
       className="rounded-sm outline-none pb-3 font-bold"/> : null}
       
       <textarea onClick={expand}
        onChange={handleChange}
         type="text" 
         name="content" 
         placeholder="Take a note..." 
         value={note.content} 
         className="outline-none"
         rows={isExpanded ? 3 : 1}/>
       <div className="flex font-bold justify-end gap-3">
        <Zoom in={isExpanded} > 
        <Fab size="small" color="primary" aria-label="add" onClick={submitNote} >
        <AddIcon />
      </Fab>
        </Zoom>
      
       </div>
      </div>
        </>
    )
}

export default CreateArea