import { ArrowDownToLine, Send, Check } from 'lucide-react';
import { useState } from "react";
import Notification from "./Notification";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations";

function Hero(){
    const [showNotification, setShowNotification] = useState(false);
    const handleDownload = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 5000);
    };
    return(
        <div id="home" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 pt-24 pb-1 lg:px-12">
            {/* Text */}
            <motion.div  className="order-2 lg:order-1 col-span-1 lg:translate-x-10"
                    variants={fadeLeft}
                    initial="hidden"
                    animate="visible">
                <span className="inline-block rounded-2xl p-2 mb-4 font-bold
                bg-gradient-to-r from-purple-100 via-pink-100 to-cyan-100
                shadow-[0_0_20px_rgba(168,85,247,0.2)]
                dark:from-purple-900/60 dark:via-pink-900/40 dark:to-cyan-900/40
                border border-purple-200 dark:border-purple-500/30
                text-gray-800 dark:text-gray-200">
                    Shahd Gamal Eldein
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] dark:text-[#F5F5F7]">Hi! I'm Shahd</h1>
                <h3 className="text-xl sm:text-2xl mb-2 font-medium text-[#71717A] dark:text-[#92929D]">Data Engineer & Full Stack Developer</h3>
                <p className="text-base sm:text-lg leading-7 dark:text-[#F5F5F7]">I’m focused on <b>Data Engineering</b>, with a strong foundation in Python, data analysis, SQL, 
                    and databases. I also have hands-on experience in <b>Full Stack Web Development</b>  using JavaScript, 
                    React, Vue.js, PHP, Laravel, and MySQL. I’m passionate about building practical, efficient, and 
                    reliable solutions while continuously expanding my technical skills.</p>
                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row justify-start gap-4 sm:gap-7">
                    <a href="#contact" 
                        className="flex items-center gap-2 rounded-xl border border-purple-300
                        px-5 py-3 text-white bg-gradient-to-r from-purple-700 to-blue-700
                        shadow-[0_0_20px_rgba(168,85,247,0.25)]
                        transition hover:scale-105">
                        Get In Touch
                        <Send size={20} />
                    </a>
                    <a href="/resume.pdf" download
                        onClick={handleDownload}
                        className="flex items-center gap-2 rounded-xl border border-purple-300
                        bg-gradient-to-r from-purple-600 to-blue-600
                        px-5 py-3 text-white
                        shadow-[0_0_20px_rgba(168,85,247,0.25)]
                        transition hover:scale-105">
                        Download Resume
                        <ArrowDownToLine size={20} />
                    </a>
                </div>
            </motion.div>
            {/* Photo */}
            <motion.div className="order-1 lg:order-2 col-span-1 flex justify-center"
                        variants={fadeRight}
                        initial="hidden"
                        animate="visible">
                <div className="w-60 h-60 rounded-full p-[3px] sm:w-72 sm:h-72 lg:w-80 lg:h-80
                    bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
                    shadow-[0_0_30px_rgba(168,85,247,0.25)]">
                        <img src="shahd.jpeg" alt="Shahd" className="w-full h-full rounded-full object-cover" />
                </div>
            </motion.div>
            <Notification show={showNotification}
                        message="The resume has been downloaded successfully."
            />
        </div>
    )
}
export default Hero;