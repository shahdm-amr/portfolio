import { CalendarDays, Code2, Database, Layers } from "lucide-react";
import { SiBootstrap, SiCss, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiNumpy, SiPandas, SiPhp, SiPython, SiReact, SiVuedotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

function Experience(){
    const experiences = [
        {
            role:"Data Engineering Trainee",
            company:"Digital Egypt Pioneers Initiative (DEPI)",
            date:"Jul 2026 - Present",
            icon: Database,
            description:[ 
                "Developing Python skills for data engineering workflows and data processing.", 
                "Working with Pandas and NumPy for data manipulation and analysis.", 
                "Using Matplotlib and Seaborn to explore and visualize datasets.", 
                "Strengthening problem-solving skills through advanced data structures and algorithms."
            ],
            technologies:[ 
                { name: "Python", icon: SiPython }, 
                { name: "Pandas", icon: SiPandas }, 
                { name: "NumPy", icon: SiNumpy }, 
                { name: "Matplotlib", icon: SiPython }, 
                { name: "Seaborn", icon: SiPython }
            ]
        },
        {
            role:"Web Development Using react JS",
            company:"Information Technology Institute (ITI)",
            date:"Jul 2026 - Aug 2026",
            icon: Code2,
            description:[ 
                "Developed modern, component-based web applications using React.js.", 
                "Applied advanced JavaScript concepts to build interactive user interfaces.", 
                "Worked with reusable React components and single-page application concepts.", 
                "Explored Generative AI concepts and their integration into web applications."
            ],
            technologies:[ 
                { name: "React", icon: SiReact }, 
                { name: "JavaScript", icon: SiJavascript }, 
                { name: "HTML5", icon: SiHtml5 }, 
                { name: "CSS3", icon: SiCss }
            ]
        },
        {
            role:"Full Stack Web Development",
            company:"Createivo",
            date:"Nov 2025 - Jun 2026",
            icon: Layers,
            description:[ 
                "Built responsive web applications across frontend and backend technologies.", 
                "Developed full-stack projects with authentication and dashboard functionality.", 
                "Integrated web applications with relational databases.", 
                "Worked across frontend and backend development workflows."
            ],
            technologies:[ 
                { name: "HTML5", icon: SiHtml5 }, 
                { name: "CSS3", icon: SiCss }, 
                { name: "JavaScript", icon: SiJavascript }, 
                { name: "Bootstrap", icon: SiBootstrap }, 
                { name: "PHP", icon: SiPhp }, 
                { name: "Laravel", icon: SiLaravel }, 
                { name: "Vue.js", icon: SiVuedotjs }, 
                { name: "MySQL", icon: SiMysql }
            ]
        },
    ]
    return(
        <section id="experience" className="relative overflow-hidden bg-[#FFFFFF] px-5 py-20 text-[#18181B] dark:bg-[#08080A] dark:text-[#F5F5F7] sm:px-8 sm:py-24 lg:px-20">
            <div className="mx-auto w-full max-w-7xl">
                {/* Heading */}
                <div className="mb-10 text-center sm:mb-14">
                    <h1 className="mb-7 relative inline-block text-3xl
                        font-bold tracking-tight text-[#18181B]
                        sm:text-4xl md:text-5xl 
                        dark:text-[#F5F5F7]">
                            MY{" "}
                            <span className="bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">EXPERIENCE</span>
                            {/* Line */}
                            <span className="absolute -bottom-3 left-1/2 h-[2px] w-12
                                    -translate-x-1/2 rounded-full
                                    bg-gradient-to-r from-[#A855F7] to-[#3B82F6]
                                    sm:-bottom-4 sm:w-16"/>
                    </h1>
                    <span className="block text-xs font-medium uppercase tracking-[0.25em] text-[#A855F7] sm:text-sm sm:tracking-[0.3em]"> My professional learning journey </span>
                </div>
                {/* Timeline */}
                <div className="relative">
                    {/* line */}
                    <div className="absolute left-5 top-0 h-full w-px bg-gray-300 dark:bg-white/10 sm:left-6" />
                    {/* Experience */}
                    {experiences.map((experience)=>{
                        const ExperienceIcon = experience.icon ;
                        return(
                            <motion.div key={`${experience.role}-${experience.company}`}
                                className="relative mb-10 pl-12 sm:mb-12 sm:pl-16"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}>
                                    {/* Dot */}
                                    <div className="absolute left-2.5 top-5 flex h-5 w-5 items-center justify-center 
                                        rounded-full border-4 border-[#F8F7FC] bg-[#A855F7] shadow-[0_0_15px_rgba(168,85,247,0.35)] 
                                        dark:border-[#08080A] sm:left-3 sm:h-6 sm:w-6" />
                                    {/* Card */}
                                    <div className="rounded-xl border border-gray-200 bg-white/70 p-5 
                                        transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 
                                        hover:shadow-[0_10px_35px_rgba(168,85,247,0.1)] dark:border-white/10 dark:bg-white/[0.03] 
                                        dark:hover:border-purple-500/30 sm:rounded-2xl sm:p-6">
                                        {/* header */}
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-berween">
                                            <div className="flex items-start gap-4">
                                                {/* icon */}
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center 
                                                        rounded-xl border border-purple-200 bg-purple-50 text-[#A855F7] 
                                                        dark:border-purple-500/20 dark:bg-purple-500/5">
                                                    <ExperienceIcon size={21} />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-[#18181B] dark:text-[#F5F5F7] sm:text-xl">
                                                        {experience.role}
                                                    </h3>
                                                    <p className="mt-1 text-sm font-medium text-[#A855F7]">
                                                        {experience.company}
                                                    </p>
                                                </div>
                                            </div>
                                            {/* date */}
                                            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-gray-50 
                                                    px-3 py-1.5 text-xs font-medium text-[#71717A] dark:border-white/10 dark:bg-white/5 
                                                    dark:text-[#92929D]">
                                                <CalendarDays size={14} />
                                                {experience.date}
                                            </div>
                                        </div>
                                        {/* description */}
                                        <ul className="mt-6 space-y-3">
                                            {experience.description.map((item,index)=>(
                                                <li key={index}
                                                    className="flex items-start gap-3 text-sm leading-6 text-[#71717A] dark:text-[#92929D]">
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A855F7]" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        {/* technologies */}
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {experience.technologies.map(({name,icon:TechnologyIcon})=>(
                                                <span key={name} 
                                                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 
                                                        py-1.5 text-xs font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 
                                                        hover:border-purple-300 hover:bg-purple-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 
                                                        dark:hover:border-purple-500/30 dark:hover:bg-purple-500/10">
                                                    <TechnologyIcon size={15} />
                                                    {name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Experience;