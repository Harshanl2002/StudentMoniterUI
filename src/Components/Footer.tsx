import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {fab} from "@fortawesome/free-brands-svg-icons";
import { faFacebookF,faTwitter,faGithub} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab,faFacebookF,faTwitter,faGithub);
export default function footer() {
  return (
    <div className="bg-blue-900 flex flex-col shadow-xl items-center select-none">
        <p className="text-2xl font-poppins font-bold text-white mt-10 mb-5">{"Student Manager"}</p>
        <ul className="my-5 flex h-full items-center gap-20 text-teritory font-light font-ubuntu text-md text-white" >
                    <li className='hover:text-texthover hover:transition-all'><Link to={"/home"}>Home</Link></li>
                    <li className='hover:text-texthover hover:transition-all'><Link to={"/about"}>About</Link></li>
                    <li className='hover:text-texthover hover:transition-all'><Link to={"/Contact"}>Contact</Link></li>
        </ul>
        <ul className="my-5 flex h-full items-center gap-20 text-teritory font-light font-ubuntu text-md text-white" >
                    <li className='hover:text-texthover hover:transition-all'>
                      <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li className='hover:text-texthover hover:transition-all'>
                      <a href="#"><FontAwesomeIcon icon="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li className='hover:text-texthover hover:transition-all'>
                      <a href="https://github.com/Harshanl2002/StudentMoniterUI">
                        <FontAwesomeIcon icon="fa-brands fa-github" />
                        </a>
                    </li>
        </ul>

        <p className="font-poppins text-white font-thin text-[8px] self-end mx-10 my-5">@ 2024 Student Manager. All rights reserved</p>
    </div>
  )
}
