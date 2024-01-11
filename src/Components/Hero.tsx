import img from '../assets/homeicons-removebg.png';
import quote from '../assets/quote.png';
import dquote from '../assets/double-quotes.png';
import { Link } from 'react-router-dom';
export default function Hero() {
  return (
    <section className="flex mx-[10vh] mb-5  overflow-hidden ">
          <div className="min-w-[58vw] max-w-[68vw] flex flex-col justify-center items-center  m-l-[5vw] select-none">
            <img src={quote} alt="doublequotes" className="w-[5vw] my-[-3vh] self-start ml-[5vw] opacity-20" />
            <div>
            <p className="mx-[5vw] text-5xl font-Alton ">Efficiency in Education's </p>
            <p className="mx-[5vw] text-4xl font-Alton text-blue-900 text-end self-end">Every Click.
            </p>
            </div>
            <img src={dquote} alt="doublequotes" className="w-[5vw] self-end mx-[5vw] my-[-4vh] opacity-20" />
            <div className='px-3.5 py-2 rounded-[4px] shadow-[0_1px_6px_5px_rgba(0,0,0,0.25)] bg-blue-900 text-white font-bold my-10'>
                            <Link to="/Login" className="drop-shadow-md">{"Get Started".toUpperCase()}</Link>
            </div>
          </div>
          <div className="min-w-[30vw] max-w-[30vw] flex justify-center items-end  p-5 shadow-md shadow-blue-900 rotate-[70deg] bg-blue-900">
            <img src={img} alt="Homeimg" className="w-[20vw] h-[50vh] rotate-[-69deg]" />
          </div>
        </section>
  )
}
