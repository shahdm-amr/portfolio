import { useState } from "react";
import { SiBootstrap, SiCss, SiGit, SiGithub, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiPhp, SiPython, SiReact, SiTailwindcss, SiVuedotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

function Skills(){
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All" , "Frontend" , "Backend" , "Data" , "Tools"];
    const skills = [
        {
            name:"HTML5",
            category:"Frontend",
            icon: SiHtml5
        },
        {
            name:"CSS3",
            category:"Frontend",
            icon: SiCss
        },
        {
            name:"JavaScript",
            category:"Frontend",
            icon: SiJavascript
        },
        {
            name:"React",
            category:"Frontend",
            icon: SiReact
        },
        {
            name:"Vue.js",
            category:"Frontend",
            icon: SiVuedotjs
        },
        {
            name:"Tailwind CSS",
            category:"Frontend",
            icon: SiTailwindcss
        },
        {
            name:"Bootstrap",
            category:"Frontend",
            icon: SiBootstrap
        },
        {
            name:"PHP",
            category:"Backend",
            icon: SiPhp
        },
        {
            name:"Laravel",
            category:"Backend",
            icon: SiLaravel
        },
        {
            name:"Python",
            category:"Data",
            icon: SiPython
        },
        {
            name:"MySQL",
            category:"Data",
            icon: SiMysql
        },
        {
            name:"Git",
            category:"Tools",
            icon: SiGit
        },
        {
            name:"GitHub",
            category:"Tools",
            icon: SiGithub
        },
    ];
    const filteredSkills = activeFilter ==="All" ? skills : skills.filter((skill)=> skill.category === activeFilter);
    return(
        <section id="skills" className="min-h-screen px-5 py-24 sm:px-8 lg:px-20">
            <div className="mx-auto w-full max-w-7xl">
                {/* Heading */}
                <div className="mb-10 text-center sm:mb-14">
                    <h1 className="mb-7 relative inline-block text-3xl
                        font-bold tracking-tight text-[#18181B]
                        sm:text-4xl md:text-5xl 
                        dark:text-[#F5F5F7]">
                            MY{" "}
                            <span className="bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">SKILLS</span>
                            {/* Line */}
                            <span className="absolute -bottom-3 left-1/2 h-[2px] w-12
                                    -translate-x-1/2 rounded-full
                                    bg-gradient-to-r from-[#A855F7] to-[#3B82F6]
                                    sm:-bottom-4 sm:w-16"/>
                    </h1>
                    <span className="block text-xs font-medium uppercase tracking-[0.25em] text-[#A855F7] sm:text-sm sm:tracking-[0.3em]"> Technologies I work with </span>
                </div>
                {/* filters */}
                <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    {filters.map((filter)=>(
                        <button key={filter}
                                onClick={()=> setActiveFilter(filter)}
                                className={`rounded-full border px-4 py-2 text-sm font-medium
                                    transition-all duration-300 sm:px-5
                                    ${activeFilter === filter ? "border-purple-500 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] text-white shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                                        :"border-gray-200 bg-white/70 text-gray-600 hover:border-purple-300 hover:text-[#A855F7] dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:border-purple-500/30 dark:hover:text-purple-400"
                                    }`}>
                                        {filter}
                        </button>
                    ))}
                </div>
                {/* skills grid */}
                <motion.div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols lg:grid-cols-5" variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}>
                    {filteredSkills.map((skill)=>{
                        const Icon = skill.icon;
                        return(
                            <motion.div key={skill.name}
                            variants={fadeUp}
                            className="group flex min-h-[130px] flex-col items-center
                                    justify-center rounded-2xl border border-gray-200
                                    bg-white/70 p-5 text-center
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-purple-300
                                    hover:shadow-[0_10px_30px_rgba(168,85,247,0.10)]
                                    dark:border-white/10
                                    dark:bg-white/[0.02]
                                    dark:hover:border-purple-500/30
                                    dark:hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)]">
                                <Icon size={38}
                                        className="mb-4 text-gray-500 transition-all duration-300
                                        group-hover:scale-110
                                        group-hover:text-[#A855F7]
                                        dark:text-gray-400
                                        dark:group-hover:text-[#A855F7]" />
                                <h3 className="text-sm font-semibold text-[#18181B] dark:text-[#F5F5F7]">
                                    {skill.name}
                                </h3>
                                <span className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                                    {skill.category}
                                </span>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
export default Skills;