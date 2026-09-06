import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations";
function About(){
    const highlights = [
        {
            title:"Data",
            description:"Engineering & SQL",
            color:"text-[#A855F7]",
            hover:"hover:border-purple-300 dark:hover:border-purple-500/30"
        },
        {
            title:"Web",
            description:"Full Stack Development",
            color:"text-[#3B82F6]",
            hover:"hover:border-blue-300 dark:hover:border-blue-500/30"
        },
        {
            title:"Focus",
            description:"Problem Solving",
            color:"text-[#A855F7]",
            hover:"hover:border-purple-300 dark:hover:border-purple-500/30"
        }
    ]
    return(
        <section id="about" className="min-h-screen bg-[#F8F7FC] dark:bg-[#0D0D10] px-5 py-24 sm:px-8 lg:px-20">
            <div className="mx-auto w-full max-w-7xl">
                <div className="mb-12 text-center sm:mb-16">
                    <span className="mb-3 block text-xs font-medium uppercase tracking-[0.25em] text-[#A855F7] sm:text-sm sm:tracking-[0.3em]"> Get to know me </span>
                    <h1 className="relative inline-block text-3xl
                        font-bold tracking-tight text-[#18181B]
                        sm:text-4xl md:text-5xl 
                        dark:text-[#F5F5F7]">
                            About{" "}
                            <span className="bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">ME</span>
                            {/* Line */}
                            <span className="absolute -bottom-3 left-1/2 h-[2px] w-12
                                    -translate-x-1/2 rounded-full
                                    bg-gradient-to-r from-[#A855F7] to-[#3B82F6]
                                    sm:-bottom-4 sm:w-16"/>
                    </h1>
                </div>
                {/* Content */}
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
                    <motion.div className="flex justify-center" variants={fadeLeft} initial="hidden" whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}>
                                        <img src="about.png" alt="about" className="w-full rounded-xl object-cover
                                            transition-transform duration-500 
                                            hover:scale-[1.02] sm:rounded-2xl" />
                    </motion.div>
                    {/* text */}
                    <motion.div className="text-center lg:text-left" variants={fadeRight} initial="hidden" whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}>
                        <h2 className="mx-auto max-w-2xl text-2xl font-bold
                            leading-tight text-[#18181B] sm:text-3xl
                            md:text-4xl lg:mx-0 dark:text-[#F5F5F7]">
                                I’m passionate about {" "} 
                                <span className="bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">
                                    Data Engineering and Full Stack Development
                                </span>
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-sm
                            leading-7 text-gray-600 sm:mt-4
                            sm:text-base sm:leading-8 lg:mx-0 
                            dark:text-gray-400">
                                with a strong foundation in Python, data analysis, SQL, and database technologies. 
                            I enjoy working with data, solving problems, and turning ideas into practical, user-focused solutions.
                            My experience also includes building responsive web applications using JavaScript, 
                            React, Vue.js, PHP, Laravel, and MySQL. I’m always exploring new technologies and looking for 
                            opportunities to create efficient solutions while continuously growing as a developer.
                        </p>
                        {/* Highlights */}
                        <div className="mx-auto mt-7 grid
                            max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 lg:mx-0">
                            {highlights.map((item)=>(
                                <div key={item.title}
                                    className={`rounded-xl border border-gray-200 bg-white/70
                                    px-4 py-3 text-center transition hover:-translate-y-1
                                    dark:border-white/10 dark:bg-white/[0.02] sm:py-4
                                    ${item.hover}`}>
                                        <p className={`text-sm font-semibold ${item.color}`}>
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                            {item.description}
                                        </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        
    )
}
export default About;