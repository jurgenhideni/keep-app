
const Footer = () =>{

const date = new Date();
const currentDate = date.getFullYear();

    return(
        <>
        <h2 className=" text-center text-slate-300 font-semibold">Copyright © {currentDate}</h2>
        </>
    )
}

export default Footer