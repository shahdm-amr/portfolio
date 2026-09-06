import { useState } from "react";
import { Moon, Sun, Database, Menu, X  } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

function Navbar(){
    const { darkMode, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { name: "About", href: "#about" }, 
        { name: "Education", href: "#education" }, 
        { name: "Skills", href: "#skills" }, 
        { name: "Experience", href: "#experience" },
        { name: "Services", href: "#services" },  
        { name: "Projects", href: "#projects" }, 
        { name: "Certifications", href: "#certifications" }, 
        { name: "Contact", href: "#contact" }
    ];
    return(
        <motion.nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80
                        backdrop-blur-md dark:border-white/10 dark:bg-[#08080A]/80"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="flex items-center gap-1">
                    <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white">Shahd</a>
                    <Database size={18} className="text-[#A855F7]" />
                </div>
                {/* Desktop Navigation */}
                <div className="hidden items-center gap-7 md:flex">
                    {navLinks.map((link)=>(
                        <a key={link.name}
                            href={link.href}
                            className="text-sm text-gray-600 transition hover:text-[#A855F7] dark:text-gray-300">
                                {link.name}
                        </a>
                    ))}
                    {/* Theme Button */}
                    <button onClick={toggleTheme}
                            className="rounded-full border border-gray-200
                            p-2.5 text-gray-700 transition hover:border-[#A855F7]
                            hover:text-[#A855F7]
                            dark:border-white/10 
                            dark:text-gray-200">
                        {darkMode ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                </div>
                {/* Mobile Menu Button */}
                <button onClick={()=>setIsMenuOpen(!isMenuOpen)}
                    className="rounded-lg border border-gray-200 p-2 
                    text-gray-700 transition hover:border-[#A855F7] 
                    hover:text-[#A855F7] md:hidden dark:border-white/10 
                    dark:text-gray-200">
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
            {/* Mobile Navigation */}
            {isMenuOpen && ( 
                <div className="border-t border-gray-200 bg-white/95 px-6 py-5 
                backdrop-blur-md dark:border-white/10 dark:bg-[#08080A]/95 md:hidden" > 
                    <div className="flex flex-col gap-4"> 
                        {navLinks.map((link) => ( <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} 
                            className="text-sm text-gray-600 transition hover:text-[#A855F7] dark:text-gray-300" > 
                            {link.name}
                        </a> ))} 
                        {/* Mobile Theme Button */} 
                        <button onClick={toggleTheme}
                            className="mt-2 flex w-fit items-center gap-2 
                            rounded-full border border-gray-200 px-3 py-2 text-gray-700 transition 
                            hover:border-[#A855F7] hover:text-[#A855F7] dark:border-white/10 dark:text-gray-200" > 
                            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
                            <span className="text-sm"> Theme </span> 
                        </button> 
                    </div>
                </div> 
            )}
        </motion.nav>
    )
}
export default Navbar;