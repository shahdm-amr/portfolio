import { useState } from "react";
import { Award, BarChart3, CalendarDays, Code2, ExternalLink, X } from "lucide-react";
import { SiPython } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

function Certifications(){
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const certifications = [
        {
            title:"Advanced Python for Data Science & Machine Learning",
            issuer:"Computer Consulting Center",
            category:"Certification",
            status:"Earned",
            date:"2025",
            icon: SiPython,
            description:"Advanced training covering Python, data analysis, visualization, preprocessing, and machine learning concepts using real datasets.",
            image:"/c1.jpeg"
        },
        {
            title:"Data Analysis & Visualization Using Microsoft Power BI",
            issuer:"Computer Consulting Center",
            category:"Certification",
            status:"Earned",
            date:"2025",
            icon: BarChart3,
            description:"Training focused on building interactive dashboards, analyzing datasets, and transforming raw data into meaningful business insights using Power BI and DAX.",
            image:"c2.jpeg"
        },
        {
            title:"Full Stack Web Development",
            issuer:"Createivo",
            category:"Certification",
            status:"Earned",
            date:"2026",
            icon: Code2,
            description:"Full-stack web development training covering frontend and backend technologies, responsive interfaces, authentication, dashboards, and relational database integration.",
            image:"c3.jpeg"
        }
    ];
    return(
        <section id="certifications" className="min-h-screen bg-[#FFFFFF] dark:bg-[#08080A] px-5 py-24 sm:px-8 lg:px-20">
            <div className="mx-auto w-full max-w-7xl">
                {/* Heading */}
                <motion.div className="mb-14 mt-7 text-center sm:mb-16"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}>
                    <span className="mb-3 block text-xs font-medium uppercase
                            tracking-[0.25em] text-[#A855F7]
                            sm:text-sm sm:tracking-[0.3em]">
                            Cerdentials
                    </span>
                    <h2 className="relative mb-7 inline-block text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        MY{" "}
                        <span className="bg-gradient-to-r from-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">CERTIFICATIONS</span>
                        <span className="absolute -bottom-3 left-1/2 h-[2px] w-12 -translate-x-1/2 rounded-full
                                bg-gradient-to-r from-[#A855F7] to-[#3B82F6] sm:-bottom-4 sm:w-16" />
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#71717A] dark:text-[#92929D] uppercase
                            font-medium tracking-[0.25em]">
                        Professional certifications and continuous learning
                    </p>
                </motion.div>
                {/* Certification cards */}
                <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}>
                    {certifications.map((certificate)=>{
                        const CertificationIcon = certificate.icon;
                        return(
                            <motion.article key={certificate.title}
                                    variants={fadeUp}
                                    className="group relative overflow-hidden rounded-2xl border border-gray-200
                                            bg-white/70 p-5 shadow-sm transition-all duration-500
                                            hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_15px_45px_rgba(168,85,247,0.10)]
                                            dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-purple-500/30
                                            dark:hover:shadow-[0_15px_45px_rgba(168,85,247,0.10)] sm:p-6">
                                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-400/5 blur-3xl
                                                transition-all duration-500 group-hover:bg-purple-500/10" />
                                {/* top */}
                                <div className="relative flex items-start justify-between gap-4">
                                    <div className="flex min-w-0 items-start gap-4">
                                        {/* Icon */}
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center
                                                rounded-xl border border-purple-200 bg-purple-50 text-[#A855F7]
                                                transition-all duration-300 group-hover:border-purple-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.12)]
                                                dark:border-purple-500/20 dark:bg-purple-500/5 dark:text-[#A855F7]
                                                dark:group-hover:border-purple-500/30">
                                            <CertificationIcon size={21} />
                                        </div>
                                        {/* title */}
                                        <h3 className="pt-1 text-base font-semibold leading-6 text-[#18181B]
                                                dark:text-[#F5F5F7] sm:text-lg">
                                                    {certificate.title}
                                        </h3>
                                    </div>
                                    {/* status */}
                                    <span className="shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[10px]
                                            font-medium text-emerald-600 dark:text-emerald-400">
                                                {certificate.status}
                                    </span>
                                </div>
                                {/* issuer */}
                                <div className="relative mt-5 flex items-center gap-2">
                                    <Award size={14} className="text-[#3B82F6]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#3B82F6]">
                                        {certificate.issuer}
                                    </span>
                                </div>
                                {/* description */}
                                <p className="relative mt-4 text-sm leading-6 text-[#71717A] dark:text-[#92929D]">
                                    {certificate.description}
                                </p>
                                {/* divider */}
                                <div className="relative my-5 h-px bg-gray-200 dark:bg-white/10" />
                                {/* bottom */}
                                <div className="relative flex items-center justify-between gap-4">
                                    {/* date */}
                                    <div className="inline-flex items-center gap-2 text-xs text-[#71717A] dark:text-[#92929D]">
                                        <CalendarDays size={14} />
                                        {certificate.date}
                                    </div>
                                    {/* view certification */}
                                    <button onClick={()=> setSelectedCertificate(certificate)}
                                            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#71717A]
                                                    transition-all duration-300 hover:text-[#A855F7] dark:text-[#92929D] dark:hover:text-[#A855F7]">
                                        View Certificate 
                                        <ExternalLink size={13} />
                                    </button>
                                </div>
                            </motion.article>
                        )
                    })}
                </motion.div>
            </div>
            {/* Modal */}
            {selectedCertificate && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
                onClick={()=> setSelectedCertificate(null)}>
                    <div className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl 
                            bg-white shadow-2xl dark:bg-[#111114]" onClick={(e) => e.stopPropagation()}>
                        {/* header */}
                        <div className="flex items-center justify-between border-b border-gray-200 
                            px-5 py-4 dark:border-white/10">
                            <div className="min-w-0">
                                <h3 className="truncate font-semibold text-[#18181B] dark:text-[#F5F5F7]">
                                    {selectedCertificate.title}
                                </h3>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    {selectedCertificate.issuer}
                                </p>
                            </div>
                            {/* close button */}
                            <button onClick={()=> setSelectedCertificate(null)}
                                className="ml-4 shrink-0 rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 
                                hover:text-gray-900 dark:hover:bg-white/10 dark:hover:text-white" aria-label="Close preview">
                                <X size={20} />
                            </button>
                        </div>
                        {/* image */}
                        <div className="flex flex-1 items-center justify-center overflow-auto bg-gray-100 p-4 dark:bg-[#08080A]">
                            <img src={selectedCertificate.image} alt={selectedCertificate.title} 
                                className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-lg" />
                        </div>
                        {/* footer */}
                        <div className="flex justify-end border-t border-gray-200 px-5 py-3 dark:border-white/10">
                            <a href={selectedCertificate.image} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#A855F7] to-[#3B82F6] px-4 
                                py-2 text-sm font-medium text-white transition hover:opacity-90">
                                    Open Image
                                    <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
export default Certifications;