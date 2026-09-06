import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden bg-[#F8F7FC] px-5 py-24 
            text-[#18181B] transition-colors duration-300 dark:bg-[#08080A] dark:text-[#F5F5F7] 
            sm:px-8 sm:py-28 lg:px-20">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-[120px] dark:bg-[#8B5CF6]/10" />
            <div className="relative mx-auto max-w-6xl">
                {/* Heading */}
                <motion.div className="mx-auto max-w-3xl text-center"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#18181B]/10 bg-white/60 px-4 py-2 text-xs font-medium uppercase 
                        tracking-[0.2em] text-[#71717A] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-[#A1A1AA]">
                        <span className="h-2 w-2 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_#8B5CF6]" />
                        Have a project in mind?
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Let's build something
                        <span className="block text-[#8B5CF6]">
                            great together.
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#71717A] dark:text-[#A1A1AA] sm:text-lg">
                        Whether you have an idea, a project, or an opportunity,
                        I'd love to hear from you.
                    </p>
                </motion.div>
                {/* Cards */}
                <motion.div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}>
                    {/* Email */}
                    <motion.a variants={fadeUp} href="mailto:shahdm.amr@gmail.com"
                        className="group flex min-h-[190px] flex-col items-center justify-center rounded-2xl
                        border border-[#18181B]/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm
                        transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40
                        hover:shadow-lg hover:shadow-[#8B5CF6]/5
                        dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none
                        dark:hover:border-[#8B5CF6]/40 dark:hover:bg-white/[0.05]">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl
                            bg-[#8B5CF6]/10 text-[#8B5CF6] transition-transform duration-300
                            group-hover:scale-110">
                            <Mail size={22} />
                        </div>
                        <p className="text-sm text-[#71717A] dark:text-[#A1A1AA]">
                            Email
                        </p>
                        <p className="mt-1 break-all text-sm font-medium text-[#18181B] dark:text-[#F5F5F7]">
                            shahdm.amr@gmail.com
                        </p>
                    </motion.a>
                   {/* Phone */}
                    <motion.a variants={fadeUp} href="tel:+201555572218"
                        className="group flex min-h-[190px] flex-col items-center justify-center rounded-2xl
                        border border-[#18181B]/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm
                        transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40
                        hover:shadow-lg hover:shadow-[#8B5CF6]/5
                        dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none
                        dark:hover:border-[#8B5CF6]/40 dark:hover:bg-white/[0.05]">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl
                            bg-[#8B5CF6]/10 text-[#8B5CF6] transition-transform duration-300
                            group-hover:scale-110">
                            <Phone size={22} />
                        </div>
                        <p className="text-sm text-[#71717A] dark:text-[#A1A1AA]">
                            Phone
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#18181B] dark:text-[#F5F5F7]">
                            +20 155 557 2218
                        </p>
                    </motion.a>
                    {/* LinkedIn */}
                    <motion.a variants={fadeUp} href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex min-h-[190px] flex-col items-center justify-center rounded-2xl
                        border border-[#18181B]/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm
                        transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40
                        hover:shadow-lg hover:shadow-[#8B5CF6]/5
                        dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none
                        dark:hover:border-[#8B5CF6]/40 dark:hover:bg-white/[0.05]">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl
                            bg-[#8B5CF6]/10 text-[#8B5CF6] transition-transform duration-300
                            group-hover:scale-110">
                            <SlSocialLinkedin size={21} />
                        </div>
                        <p className="text-sm text-[#71717A] dark:text-[#A1A1AA]">
                            LinkedIn
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#18181B] dark:text-[#F5F5F7]">
                            Let's connect professionally
                        </p>
                        <ArrowUpRight size={17}
                            className="mt-4 text-[#A1A1AA] transition-all duration-300
                                        group-hover:-translate-y-1 group-hover:translate-x-1
                                        group-hover:text-[#8B5CF6] dark:text-[#52525B]"/>
                    </motion.a>
                    {/* GitHub */}
                    <motion.a variants={fadeUp} href="https://github.com/shahdm-amr"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex min-h-[190px] flex-col items-center justify-center rounded-2xl
                        border border-[#18181B]/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm
                        transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40
                        hover:shadow-lg hover:shadow-[#8B5CF6]/5
                        dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none
                        dark:hover:border-[#8B5CF6]/40 dark:hover:bg-white/[0.05]">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl
                            bg-[#8B5CF6]/10 text-[#8B5CF6] transition-transform duration-300
                            group-hover:scale-110">
                            <SiGithub size={21} />
                        </div>
                        <p className="text-sm text-[#71717A] dark:text-[#A1A1AA]">
                            GitHub
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#18181B] dark:text-[#F5F5F7]">
                            Explore my projects
                        </p>
                        <ArrowUpRight size={17}
                            className="mt-4 text-[#A1A1AA] transition-all duration-300
                                        group-hover:-translate-y-1 group-hover:translate-x-1
                                        group-hover:text-[#8B5CF6] dark:text-[#52525B]"/>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;

