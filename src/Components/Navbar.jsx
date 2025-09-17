import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Building2, Menu, X } from "lucide-react";

import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const scrollPercentage = (currentScroll / scrollHeight) * 100;
            setScrollPercent(scrollPercentage);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const mobileMenu = document.getElementById('mobile-menu');
            const menuButton = document.getElementById('menu-button');
            if (isMobileMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const linkVariants = {
        hover: { color: "text-black" }
    };

    const buttonVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        hover: {
            scale: 1.05,
            backgroundColor: "#1e3a8a",
            color: "#000000"
        }
    };

    const navBackground = scrollPercent > 2 ? "bg-white" : "bg-transparent";
    const textColor = "text-black";
    const logoFilter = scrollPercent === 0 ? "brightness-0 invert" : "none";
    

    const navigationItems = [
        { name: "Vision", path: "/vision" },
        { name: "Courses", path: "/courses" },
        { name: "Login", path: "/login" }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            className={`${navBackground} w-full  fixed top-0 z-50 transition-all duration-300 py-4  `}
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className="mx-auto px-5 md:px-10 container   py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        onClick={()=> navigate('/')}
                        className="flex items-center"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className={`text-4xl `}>
                           GramGurukul
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex transition-all items-center gap-14 ">
                        {navigationItems.map((item, index) => {
                            const [isHovered, setIsHovered] = useState(false);
                            const location = useLocation();
                            const isActive = location.pathname === item.path;
                            return (
                                <div key={item.name}>
                                    <motion.div
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        whileHover="hover"
                                        custom={index}
                                        transition={{ duration: 0.3 }}

                                    >
                                        <Link
                                            to={item.path}
                                            className={`text-black text-2xl md:text-xl lg:text-xl font-medium inter-font-400 ${isActive ? 'font-semibold' : ''}`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                    {(isHovered || isActive) && (
                                        <motion.div
                                            className="w-full h-[2px] rounded-full bg-black"
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        ></motion.div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        id="menu-button"
                        className="md:hidden p-2 rounded-lg transition-colors duration-200"
                        onClick={toggleMobileMenu}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-black" />
                        ) : (
                            <Menu className="w-6 h-6 text-black" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        className="md:hidden fixed inset-0 top-[72px] bg-white z-40"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 py-8 space-y-6">
                            {navigationItems.map((item, index) => {
                                const location = useLocation();
                                const isActive = location.pathname === item.path;
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={closeMobileMenu}
                                            className={`block text-base md:text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                                                isActive 
                                                    ? 'bg-black text-white' 
                                                    : 'text-black hover:bg-gray-100'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;