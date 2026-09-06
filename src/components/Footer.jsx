import { ArrowUp, Heart } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

function Footer() {
    return (
        <motion.footer
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="border-t border-[#18181B]/10 bg-[#FFFFFF] 
                px-5 py-10 text-[#71717A] transition-colors duration-300 
                dark:border-white/10 dark:bg-[#08080A] dark:text-[#A1A1AA] sm:px-8 lg:px-20">
            <div className="mx-auto max-w-6xl">
                {/* Top */}
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <a href="#home" className="inline-flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8B5CF6] 
                                    text-sm font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.20)]">
                                SG
                            </span>
                            <span className="text-lg font-semibold text-[#18181B] dark:text-[#F5F5F7]">
                                Shahd Gamal Eldein
                            </span>
                        </a>
                        <p className="mt-4 text-sm leading-6 text-[#71717A]">
                            Data Engineer with a Full Stack background, passionate about building
                            scalable data solutions and modern, user-focused digital
                            experiences.
                        </p>
                    </div>
                    {/* Navigation */}
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1A1AA] dark:text-[#52525B]">
                            Navigation
                        </p>
                        <nav className="flex flex-col gap-3 text-sm">
                            <a href="#about" className="transition-colors hover:text-[#8B5CF6]">
                                About
                            </a> 
                            <a href="#projects" className="transition-colors hover:text-[#8B5CF6]">
                                Projects
                            </a>
                            <a href="#certifications" className="transition-colors hover:text-[#8B5CF6]">
                                Certifications
                            </a>
                            <a href="#contact" className="transition-colors hover:text-[#8B5CF6]">
                                Contact
                            </a>
                        </nav>
                    </div>
                    {/* Social */}
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1A1AA] dark:text-[#52525B]">
                            Follow me
                        </p>
                        <div className="flex gap-3">
                            <a href="https://github.com/shahdm-amr" target="_blank" rel="noreferrer"aria-label="GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border 
                                border-[#18181B]/10 bg-[#F8F7FC] transition-all duration-300 hover:-translate-y-1 
                                hover:border-[#8B5CF6]/40 hover:text-[#8B5CF6] dark:border-white/10 dark:bg-white/[0.03]">
                                <SiGithub size={18} />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#18181B]/10 bg-[#F8F7FC] 
                                transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40 hover:text-[#8B5CF6] dark:border-white/10 
                                dark:bg-white/[0.03]">
                                <SlSocialLinkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Divider */}
                <div className="my-8 h-px bg-[#18181B]/10 dark:bg-white/10" />
                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-5 text-xs sm:flex-row">
                    <p>
                        © 2026 Shahd Gamal Eldein. All rights reserved.
                    </p>
                    {/* Back to top */}
                    <a href="#home" aria-label="Back to top"
                        className="group flex items-center gap-2 transition-colors hover:text-[#8B5CF6]">
                        Back to top
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#18181B]/10 transition-all 
                                duration-300 group-hover:-translate-y-1 group-hover:border-[#8B5CF6]/40 dark:border-white/10">
                            <ArrowUp size={15} />
                        </span>
                    </a>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer;
