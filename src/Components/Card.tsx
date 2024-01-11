import { Link } from "react-router-dom"


export default function Card(props:any) {
  return (
    

<div className="my-[5vh] mx-[2vw] max-w-[24vw] max-h-[74vh] sm:max-h-fit p-[10px] bg-white border border-blue-900 rounded-[5px] shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to="/About">
        <img className="rounded-t-lg  max-w-[22vw]" src={props.imglink} alt="" />
    </Link>
    <div className="">
        <Link to="/About">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-blue-900">{props.srchead}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-balance">{props.srctxt}</p>
        <Link to="/About" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 ">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>
  )
}
