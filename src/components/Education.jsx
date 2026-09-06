import { motion } from "framer-motion";
import { fadeUp, staggerContainer  } from "../animations";
import { GraduationCap, University, BookOpen, CalendarDays, MapPin, ArrowUpRight, } from "lucide-react";
function Education(){
    return(
        <section id="education" className="min-h-screen bg-[#F8F7FC] dark:bg-[#0D0D10] px-5 py-24 sm:px-8 lg:px-20">
            <div className="mx-auto w-full max-w-7xl">
                {/* Heading */}
                <div className="mb-10 text-center sm:mb-14">
                    <h1 className="mb-7 relative inline-block text-3xl
                        font-bold tracking-tight text-[#18181B]
                        sm:text-4xl md:text-5xl 
                        dark:text-[#F5F5F7]">
                            MY{" "}
                            <span className="bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">EDUCATION</span>
                            {/* Line */}
                            <span className="absolute -bottom-3 left-1/2 h-[2px] w-12
                                    -translate-x-1/2 rounded-full
                                    bg-gradient-to-r from-[#A855F7] to-[#3B82F6]
                                    sm:-bottom-4 sm:w-16"/>
                    </h1>
                    <span className="block text-xs font-medium uppercase tracking-[0.25em] text-[#A855F7] sm:text-sm sm:tracking-[0.3em]"> My academic journey </span>
                </div>
                {/* Cards */}
                <motion.div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2" variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}>
                    {/* Degree */}
                    <motion.div variants={fadeUp} className="group flex min-h-[260px] flex-col items-center justify-center 
                                    rounded-2xl border border-gray-200 bg-white/70 p-6
                                    transition-all duration-300
                                    hover:-translate-y-2 hover:border-purple-300
                                    hover:shadow-[0_10px_40px_rgba(168,85,247,0.12)]
                                    dark:border-white/10 dark:bg-white/[0.03]
                                    dark:hover:border-purple-500/30">
                        <div className="mb-5 flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl
                                        bg-purple-100 text-[#A855F7]
                                        dark:bg-purple-500/10">
                                    <GraduationCap size={25} strokeWidth={1.8} />
                            </div>
                        </div>
                        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#A855F7]">
                            Degree
                        </p>
                        <h2 className="text-xl font-bold text-[#18181B] dark:text-[#F5F5F7]">
                            B.Sc. Computer Science
                        </h2>
                        <div className="mt-2 mb-2 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3 dark:border-purple-500/20 dark:bg-purple-500/5 w-40">
                            <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                GPA
                            </p>
                            <p className="mt-1 text-lg font-bold text-[#A855F7]">
                                Very Good
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <CalendarDays size={16} />
                            <span>2024 — 2028</span>
                        </div>
                    </motion.div>
                    {/* University */}
                    <motion.div className="group rounded-2xl border border-gray-200 bg-white/70 p-6
                                    flex min-h-[260px] flex-col items-center justify-center
                                    transition-all duration-300
                                    hover:-translate-y-2 hover:border-blue-300
                                    hover:shadow-[0_10px_40px_rgba(59,130,246,0.12)]
                                    dark:border-white/10 dark:bg-white/[0.03]
                                    dark:hover:border-blue-500/30" variants={fadeUp}>
                        <div className="mb-5 flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl
                                            bg-blue-100 text-[#3B82F6]
                                            dark:bg-blue-500/10">
                                <University size={25} strokeWidth={1.8} />
                            </div>
                        </div>
                        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#3B82F6]">
                            University
                        </p>
                        <h2 className="text-xl font-bold text-[#18181B] dark:text-[#F5F5F7]">
                            Tanta University
                        </h2>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Faculty of Computers and Information
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <MapPin size={16} />
                            <span>Tanta, Egypt</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
export default Education;