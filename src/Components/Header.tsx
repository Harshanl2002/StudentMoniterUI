import {Link} from "react-router-dom"


export default function Header() {
  return (
    <div className="shadow-xl bg-blue-900 text-white max-h-16 z-50 top-0 sticky select-none">
        <nav className="">
            <div className='flex justify-between '>
                <Link to={"/"}>
                <h1 className="text-textlogo mx-5 font-bold text-2xl py-3 font-poppins">{"Student Manager".toUpperCase()}</h1>
                </Link>
                <div className="flex justify-around w-1/2">
                <ul className="mx-3 flex h-full items-center gap-10 text-teritory font-light font-ubuntu text-md" >
                    <li className='hover:text-texthover hover:transition-all'><Link to={"/home"}>Home</Link></li>
                    <li className='hover:text-texthover hover:transition-all'><Link to={"/about"}>About</Link></li>
                    <li className='hover:text-texthover hover:transition-all'><Link to={"/Contact"}>Contact</Link></li>
                </ul>
                <div className="flex justify-evenly items-center font-ubuntu w-0.5/3 gap-1 border-l-2 my-3">
                <div className='px-3.5 py-1 rounded-[2px] font-bold text-white'>
                            <Link to="/signup" className='shadow-[0_1px_6px_5px_rgba(0,0,0,0.25)'>{"Signup".toUpperCase()}</Link>
                    </div>
                    <div className='px-3.5 py-1 rounded-[2px] shadow-[0_1px_6px_5px_rgba(0,0,0,0.25)] bg-white text-blue-900 font-bold'>
                            <Link to="/Login" className="drop-shadow-md">{"Login".toUpperCase()}</Link>
                    </div>
                    
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
