import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiFirebaseLine } from "react-icons/ri";
import { RiFlutterLine } from "react-icons/ri";
import { RiAndroidLine } from "react-icons/ri";
import {  motion } from "framer-motion"

const iconVarient=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
    duration:duration,
    ease:"linear",
    repeat:Infinity,
    repeatType:"reverse"
  },
}
})


const Technologies = () => {
  return <div className="border-b border-neutral-800 pb-24">
    <motion.h1 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className="my-20 text-center text-4xl">Technology</motion.h1>
    <motion.div
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}

     className="flex flex-wrap justify-center gap-4">
    <motion.div
    variants={iconVarient(2.5)}
    initial="initial"
    animate="animate"
     className="border-4 rounded-2xl p-4 border-neutral-800">
     < RiReactjsLine className="text-7xl text-cyan-400"/>
    </motion.div>
    <motion.div 
     variants={iconVarient(3)}
    initial="initial"
    animate="animate"
    className="border-4 rounded-2xl p-4 border-neutral-800">
     < RiJavaLine className="text-7xl text-orange-400"/>
    </motion.div>
    <motion.div 
     variants={iconVarient(5)}
    initial="initial"
    animate="animate"
    className="border-4 rounded-2xl p-4 border-neutral-800">
     < RiAndroidLine className="text-7xl text-green-400"/>
    </motion.div>
    <motion.div
     variants={iconVarient(2)}
    initial="initial"
    animate="animate"
     className="border-4 rounded-2xl p-4 border-neutral-800">
     < RiFlutterLine className="text-7xl text-cyan-200"/>
    </motion.div>
    <motion.div
     variants={iconVarient(6)}
    initial="initial"
    animate="animate"
     className="border-4 rounded-2xl p-4 border-neutral-800">
     < RiFirebaseLine className="text-7xl text-yellow-400"/>
    </motion.div>

    </motion.div>
  </div>;
};

export default Technologies;
