import { SiBootstrap, SiCss, SiHtml5, SiJavascript, SiMysql, SiPhp, SiReact, SiVuedotjs, SiGithub, SiTailwindcss } from "react-icons/si";
import { ArrowUpRight, CalendarDays, ExternalLink, FolderGit2, } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

function Projects(){
    const projects = [
        {
            title:"Movie App",
            type:"Team Graduation Project",
            training:"ITI Summer Training",
            year:"2026",
            featured:true,
            image:"movie.png",
            description:"A full-featured movie and TV browsing application built with React and the TMDB API.",
            technologies:[
                {name:"React" , icon: SiReact},
                {name:"HTML" , icon: SiHtml5},
                {name:"Tailwind CSS" , icon: SiTailwindcss},
                {name:"TMDB API" , icon: null}
            ],
            github:"https://github.com/asmaa757/movie-app"
        },
        {
            title:"Dental Clinic Management System",
            type:"Full Stack Web Application",
            training:"Createivo Full Stack Web Development",
            year:"2026",
            featured:false,
            image:"dental.png",
            description:"A full-stack web application for managing clinic operations, patient authentication, doctor scheduling, and appointments.",
            technologies:[
                {name:"HTML" , icon: SiHtml5},
                {name:"CSS" , icon: SiCss},
                {name:"Bootstrap" , icon: SiBootstrap},
                {name:"JavaScript" , icon: SiJavascript},
                {name:"PHP" , icon: SiPhp},
                {name:"MySQL" , icon: SiMysql}
            ],
            github:"https://github.com/shahdm-amr/dental-clinic"
        },
        {
            title:"Flower Shop Website",
            type:"Responsive Frontend Website",
            training:"Createivo Full Stack Web Development",
            year:"2026",
            featured:false,
            image:"flower.png",
            description:"A modern and responsive flower shop website with an elegant interface and smooth user experience.",
            technologies:[
                {name:"HTML" , icon: SiHtml5},
                {name:"Bootstrap" , icon: SiBootstrap},
                {name:"JavaScript" , icon: SiJavascript},
                {name:"Vue.js" , icon: SiVuedotjs}
            ],
            github:"https://github.com/shahdm-amr/flowers-shop"
        }
    ];
    const featuredProject = projects.find((project)=> project.featured);
    const otherProjects = projects.filter((project)=> !project.featured);
    return(
        <section id="projects" className="min-h-screen bg-[#F8F7FC] px-5 py-24 text-[#18181B] dark:bg-[#08080A] dark:text-[#F5F5F7] sm:px-8 sm:py-28 lg:px-20">
            <div className="mx-auto w-full max-w-7xl">
                {/* Heading */}
                <motion.div className="mt-7 mb-10 text-center sm:mb-14" variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}>
                    <h1 className="mb-7 relative inline-block text-3xl
                        font-bold tracking-tight text-[#18181B]
                        sm:text-4xl md:text-5xl 
                        dark:text-[#F5F5F7]">
                            MY{" "}
                            <span className="bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">PROJECTS</span>
                            {/* Line */}
                            <span className="absolute -bottom-3 left-1/2 h-[2px] w-12
                                    -translate-x-1/2 rounded-full
                                    bg-gradient-to-r from-[#A855F7] to-[#3B82F6]
                                    sm:-bottom-4 sm:w-16"/>
                    </h1>
                    <span className="block text-xs font-medium uppercase tracking-[0.25em] text-[#A855F7] sm:text-sm sm:tracking-[0.3em]"> Selected work I've built </span>
                </motion.div>
                {/* featured project */}
                {featuredProject && (
                    <motion.div className="mb-10"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}>
                        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/70 shadow-sm transition-all 
                                duration-500 hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_15px_45px_rgba(168,85,247,0.12)] 
                                dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-purple-500/30">
                            <div className="border-b border-gray-200 px-5 py-3 dark:border-white/10 sm:px-7">
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A855F7]">
                                    <FolderGit2 size={15} />
                                    Featured Project
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Image */}
                                <div className="relative overflow-hidden bg-gray-100 dark:bg-black/20">
                                    <img src={featuredProject.image} alt={featuredProject.title}
                                        className="h-full min-h-[250px] w-full object-cover transition-transform duration-700 group-hover:scale-105 
                                        sm:min-h-[350px] lg:min-h-[430px]" />
                                    {/* overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                                </div>
                                {/* content */}
                                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                                    {/* Meta */}
                                    <div className="mb-5 flex flex-wrap items-center gap-2">
                                        <span className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 
                                            text-xs font-medium text-[#A855F7] dark:border-purple-500/20 dark:bg-purple-500/5">
                                                {featuredProject.type}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 
                                                rounded-full border border-gray-200 
                                                bg-gray-50 px-3 py-1.5 text-xs font-medium text-[#71717A] 
                                                dark:border-white/10 dark:bg-white/5 dark:text-[#92929D]">
                                                    <CalendarDays size={13} />
                                                    {featuredProject.year}
                                        </span>
                                    </div>
                                    {/* title */}
                                    <h2 className="text-2xl font-bold tracking-tight text-[#18181B] dark:text-[#F5F5F7] sm:text-3xl">
                                        {featuredProject.title}
                                    </h2>
                                    {/* Training */}
                                    <p className="mt-2 text-sm font-medium text-[#A855F7]">
                                        {featuredProject.training}
                                    </p>
                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#71717A] dark:text-[#92929D]">
                                        {featuredProject.description}
                                    </p>
                                    {/* technologies */}
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {featuredProject.technologies.map(({ name, icon: TechnologyIcon })=>(
                                            <span key={name}
                                                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 
                                                px-3 py-1.5 text-xs font-medium text-gray-700 transition-all 
                                                duration-300 hover:-translate-y-0.5 hover:border-purple-300 
                                                hover:bg-purple-50 dark:border-white/10 dark:bg-white/5 
                                                dark:text-gray-300 dark:hover:border-purple-500/30 dark:hover:bg-purple-500/10">
                                                    {TechnologyIcon && <TechnologyIcon size={14} />}
                                                    {name}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Github */}
                                    <div className="mt-8">
                                        <a href={featuredProject.github} target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 
                                            text-sm font-medium text-[#18181B] transition-all duration-300 hover:-translate-y-0.5 
                                            hover:border-purple-300 hover:text-[#A855F7] dark:border-white/10 dark:bg-white/5 dark:text-gray-200 
                                            dark:hover:border-purple-500/30 dark:hover:text-[#A855F7]">
                                                <SiGithub size={18} />
                                                View On GitHub
                                                <ArrowUpRight size={15} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
                {/* Other projects */}
                <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}>
                    {otherProjects.map((project)=>(
                        <motion.div key={project.title}
                            variants={fadeUp}
                            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/70 transition-all 
                            duration-500 hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_15px_40px_rgba(168,85,247,0.1)] 
                            dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-purple-500/30">
                                {/* Image */}
                                <div className="relative overflow-hidden bg-gray-100 dark:bg-black/20">
                                    <img src={project.image} alt={project.title}
                                        className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-64" />
                                    {/*overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
                                </div>
                                {/* content */}
                                <div className="p-5 sm:p-6">
                                    {/* meta */}
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-xs font-medium 
                                            text-[#A855F7] dark:border-purple-500/20 dark:bg-purple-500/5">
                                                {project.type}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 
                                            text-xs font-medium text-[#71717A] dark:border-white/10 dark:bg-white/5 dark:text-[#92929D]">
                                                <CalendarDays size={13} />
                                                {project.year}
                                        </span>
                                    </div>
                                    {/* title */}
                                    <h3 className="mt-5 text-xl font-semibold text-[#18181B] dark:text-[#F5F5F7]">
                                        {project.title}
                                    </h3>
                                    {/* training */}
                                    <p className="mt-1.5 text-sm font-medium text-[#A855F7]">
                                        {project.training}
                                    </p>
                                    {/* description */}
                                    <p className="mt-4 text-sm leading-6 text-[#71717A] dark:text-[#92929D]">
                                        {project.description}
                                    </p>
                                    {/* technologies */}
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            ({name, icon:TechnologyIcon})=>(
                                                <span key = {name} 
                                                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 
                                                    px-3 py-1.5 text-xs font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 
                                                    hover:border-purple-300 hover:bg-purple-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 
                                                    dark:hover:border-purple-500/30 dark:hover:bg-purple-500/10">
                                                        {TechnologyIcon && <TechnologyIcon size={14} />} {name}
                                                </span>
                                            )
                                        )}
                                    </div>
                                    {/* github */}
                                    <div className="mt-6 border-t border-gray-200 pt-5 dark:border-white/10">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-[#71717A] transition-colors 
                                            duration-300 hover:text-[#A855F7] dark:text-[#92929D]">
                                                <SiGithub size={18} />
                                                View On GitHub
                                                <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
export default Projects;