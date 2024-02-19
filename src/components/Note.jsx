import React from "react";
import { MdDelete } from "react-icons/md";


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className=" bg-white mt-5 mx-5 shadow-md min-w-[300px] lg:w-[700px]">
      <h1 className="font-semibold p-2 uppercase">{props.title}</h1>
      <p className="p-2">{props.content}</p>
      <div className="flex justify-end p-2">
      <button className="bg-[#ffbf00] text-white font-bold px-3 py-1 rounded-md text-[2rem]" onClick={handleClick}><MdDelete /></button>
      </div>
     
    </div>
  );
}

export default Note;
