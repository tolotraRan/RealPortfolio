import { FC, Fragment } from "react";
import {useTypewriter} from 'react-simple-typewriter';
import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { characters } from "../shared/contants";
import { m } from "framer-motion";

const Intro: FC = () => {
  const transition = { duration: 2, type: "spring" };
  const [text] = useTypewriter({
    words: ['Developer Frontend', 'Backend Developer'],
    loop: 0
  })
  return (
    <div id="#intro" className="relative h-screen flex justify-center items-center flex-col gap-5">
      <Canvas />

      <div className="text font-bold text-4xl md:text-6xl sm:text-5xl ">
        <h4>Hello World,</h4>
      </div>
      <div className="text font-bold mt-5 flex text-4xl md:text-6xl sm:text-5xl  ">
      <h4 className="text-orange-600">I'm -</h4>

        <h4 className="text">{text}</h4>
      </div> 
      <br/>
      <div className="ml-10"> 
        <Bouton/>
    </div>
      
      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#who"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </m.a>
    </div>
  );
};

export default Intro;
