import { BarChart3, Check, Code2 } from "lucide-react";
import { SiPython, SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

function Services(){
    const services = [
        {
            number:"01",
            title:"Data Analysis & Visualization",
            description:"Transforming raw Excel and CSV data into meaningful insights through Python-based analysis and visualization.",
            icon:SiPython,
            iconColor:"#A855F7",
            items: [
                "Data Cleaning with Pandas & NumPy",
                "Data Analysis",
                "Charts with Matplotlib & Seaborn"
            ]
        },
        {
            number:"02",
            title:"Power BI Dashboards",
            description:"Creating interactive dashboards that turn business data into clear and decision-ready reports.",
            icon: BarChart3,
            iconColor:"#3B82F6",
            items: [
                "Interactive Dashboards",
                "Sales & Performance Reports",
                "Business Data Visualization"
            ]
        },
        {
            number:"03",
            title:"Full Stack Web Development",
            description:"Designing and building responsive web solutions for businesses, shops, and service-based platforms.",
            icon: Code2,
            iconColor:"#A855F7",
            items: [
                "Landing Pages & Business Websites",
                "Booking & Management Systems",
                "PHP & MySQL Integration"
            ]
        },
        {
            number:"04",
            title:"React Applications",
            description:"Building dynamic and interactive React applications that consume APIs and deliver smooth user experiences.",
            icon: SiReact,
            iconColor:"#3B82F6",
            items: [
                "API Integration",
                "Search & Filtering",
                "Dynamic Data Display"
            ]
        }
    ];
    return(
        <section id="services" className="relative min-h-screen overflow-hidden
                bg-[#F8F7FC] px-5 py-24 text-[#18181B] dark:bg-[#08080A]
                dark:text-[#F5F5F7] sm:px-8 sm:py-28 lg:px-20">
                <div className="relative mx-auto w-full max-w-7xl">
                    {/* heading */}
                    <div className="mb-14 mt-7 text-center sm:mb-16">
                        <span className="mb-3 block text-xs font-medium uppercase
                                    tracking-[0.25em] text-[#A855F7]
                                    sm:text-sm sm:tracking-[0.3em]">
                                    What I Offer
                        </span>
                        <h2 className="relative mb-7 inline-block text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            MY{" "}
                            <span className="bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">SERVICES</span>
                            <span className="absolute -bottom-3 left-1/2 h-[2px] w-12 -translate-x-1/2 rounded-full
                                    bg-gradient-to-r from-[#A855F7] to-[#3B82F6] sm:-bottom-4 sm:w-16" />
                        </h2>
                        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#71717A] dark:text-[#92929D] uppercase
                                font-medium tracking-[0.25em]">
                            Practical digital solutions built around your needs
                        </p>
                    </div>
                    {/* cards */}
                    <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}>
                        {services.map((service)=>{
                            const ServiceIcon = service.icon;
                            return(
                                <motion.article key={service.number} className="group relative overflow-hidden
                                                                rounded-2xl border border-[#E4E4E7]
                                                                bg-[#F8F8FA] p-6 shadow-sm transition-all duration-500
                                                                hover:-translate-y-1 hover:border-purple-300
                                                                hover:shadow-[0_15px_45px_rgba(168,85,247,0.10)]
                                                                dark:border-white/10 dark:bg-[#111114]
                                                                dark:hover:border-purple-500/30
                                                                dark:hover:shadow-[0_15px_45px_rgba(168,85,247,0.10)]"
                                                                variants={fadeUp}>
                                    {/* card glow */}
                                    <div className="pointer-events-none absolute
                                        -right-16 -top-16
                                        h-40 w-40
                                        rounded-full
                                        bg-[#A855F7]/5
                                        blur-3xl
                                        transition-all duration-500
                                        group-hover:bg-[#A855F7]/10" />
                                    {/* number */}
                                    <div className="absolute right-6 top-6 text-xs font-semibold
                                            tracking-[0.2em] text-gray-300 dark:text-white/10
                                            transition-colors duration-300 group-hover:text-purple-300/40
                                            dark:group-hover:text-purple-400/20">
                                                {service.number}
                                    </div>
                                    {/* icon */}
                                    <div className="relative mb-5 flex h-12 w-12
                                        items-center justify-center rounded-xl
                                        border border-purple-200 bg-purple-50
                                        dark:border-purple-500/20 dark:bg-purple-500/5
                                        transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.12)]">
                                        <ServiceIcon size={23} style={{ color:service.iconColor }} />
                                    </div>
                                    {/* title */}
                                    <h3 className="relative max-w-[85%] text-lg font-semibold
                                        leading-6 text-[#18181B] dark:text-[#F5F5F7] sm:text-xl">
                                        {service.title}
                                    </h3>
                                    {/* description */}
                                    <p className="relative mt-4 max-w-xl text-sm leading-6 text-[#71717A] dark:text-[#92929D]">
                                        {service.description}
                                    </p>
                                    {/* divider */}
                                    <div className="relative my-5 h-px bg-gray-200 dark:bg-white/10" />
                                    {/* features */}
                                    <div className="relative space-y-3">
                                        {service.items.map((item)=>(
                                            <div key={item}
                                                className="flex items-center gap-3 text-xs text-[#71717A] dark:text-[#92929D]">
                                                {/* check */}
                                                <span className="flex h-5 w-5 shrink-0
                                                    items-center justify-center
                                                    rounded-full
                                                    bg-[#A855F7]/10
                                                    text-[#A855F7]
                                                    dark:bg-[#A855F7]/10">
                                                        <Check size={11} strokeWidth={3} />
                                                </span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </motion.article>
                            )
                        })}
                    </motion.div>
                </div>
        </section>
    )
    
}
export default Services;