import { Arrow } from "../assets/icons"
import { Header } from "../assets/images"


const Hero = () => 
   (
    <section className={`w-full bg-img  h-[100vh]`}>
        <div className="flex justify-center gap-10 items-center w-full h-full flex-col">
            <h1 className="font-Fraunces tracking-wide text-white text-center text-7xl 
            max-sm:text-5xl max-sm:leading-[65px]">WE ARE CREATIVES</h1>
            <div className="mb-20">
                <img src={Arrow} alt="arrow"
                 className=" w-[50px] " />
                
            </div>
        </div>

    </section>
    
  )


export default Hero
