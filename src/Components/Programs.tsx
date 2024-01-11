import Card from "./Card";
import Exp from "../assets/Simple-and-Easy.jpg"
import mang from "../assets/datamanagement.png"
import acc from "../assets/acc.jpg"

export default function Programs() {
    return (
        <section className="flex flex-col justify-center items-center mx-[10vw] rounded-s">
            <div className="font-poppins">
                <h2 className="text-2xl font-bold text-center">{"ADVANTAGES"}</h2>
                <p className="text-[10px] text-balance text-center my-4">Our Student Manager streamlines academic tasks, ensuring swift access to schedules, assignments, and grades with just a click. Embrace a seamless experience that optimizes your educational journey, making every interaction effortlessly efficient.</p>
            </div>
          <div className="flex min-w-full mx-10">
             <Card imglink={Exp} srchead="Seamless Student Experience" srctxt="Your Complete Academic Resource! crafted with an emphasis on simplicity, our intuitive interface. . . . . student path to success."/>
             <Card imglink={mang} srchead="Efficient Data Management" srctxt="Experience the pinnacle of efficiency in academic data management with our Student Manager. . . . effortlessly enhancing your academic experience."/>
             <Card imglink={acc} srchead="Accurate Record Keeping" srctxt="Embark on a journey of precise academic record-keeping with our Student Manager. . . . accuracy of your record as much as you do."/>

          </div>
        </section>
    );
}
