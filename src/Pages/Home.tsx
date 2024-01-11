import Hero from "../Components/Hero";
import Programs from "../Components/Programs";

export default function Home() {
  return (
    <div className='flex flex-col z-0'>
      <Hero/>
      <Programs/>
    </div>
    );
}
