import { CiStickyNote } from "react-icons/ci";

const Header = () =>{

return (

<div className="bg-[#ffbf00] max-sm:flex max-sm:justify-center">
<h1 className="font-titillium font-semibold text-white text-[2rem] p-2 
max-sm:text-center flex items-center gap-3 "> <CiStickyNote /><a href="/">KeepApp</a> </h1>
</div>
)
}

export default Header