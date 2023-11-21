import React, { useState } from "react";
import { primary, sections } from "../variables";
// import fullLogo from "../assets/PNG/logo transparent.png";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import cybLogoFull from "../assets/PNG/cybLogoFull.png";
import facebook from "../assets/SVG/facebook.svg";
import gmail from "../assets/SVG/gmail.svg";
import instagram from "../assets/SVG/instagram.svg";
import twitter from "../assets/SVG/twitter.svg";
import "../styles/Navbar.css";

export default function Nav() {
  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Function to open sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // Variants for nav items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const listItemYVariants = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const listItemXVariants = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      {/* Mobile sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <Dialog static open={isSidebarOpen} onClose={closeSidebar}>
            <motion.div
              onClick={closeSidebar}
              className="fixed z-[2] top-0 left-0 w-full h-screen bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>

            <motion.nav
              className="fixed z-[3] top-0 right-0 bg-white h-screen w-1/2 text-primary text-lg"
              initial={{ x: 250 }}
              animate={{
                x: 0,
                transition: { duration: 0.3, stiffness: 2000 },
              }}
              exit={{
                x: 350,
                transition: { duration: 0.3, stiffness: 2000 },
              }}
            >
              <div className="p-8">
                <div className="w-full flex items-center justify-end">
                  <button onClick={closeSidebar}>
                    <svg
                      height="1.5em"
                      width="1.5em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Menu / Close_LG">
                          {" "}
                          <path
                            id="Vector"
                            d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                            stroke={primary}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </button>
                </div>

                <motion.ul
                  className="my-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                >
                  {sections.map((section, i) => {
                    return (
                      <motion.li
                        key={i}
                        variants={listItemXVariants}
                        className="mb-4"
                      >
                        <a href="">
                          <span className="active:ring-4 active:ring-offset-2 active:ring-primary-light ">
                            {section}
                          </span>
                        </a>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </motion.nav>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Desktop navbar */}
      <nav className="h-32 w-full  fixed top-0 left-0 z-[1] text-lg bg-gradient-to-b from-primary-dark">
        <div className="mx-auto max-w-full h-full flex items-center ">
          {/* LOGO */}
          <motion.a
            href=""
            className="flex items-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={cybLogoFull}
              alt="Logo of cyb.org"
              className="nav-logo lg:ml-24"
            />
          </motion.a>

          {/* Responsive nav button */}
          <button onClick={openSidebar} className="lg:hidden">
            <svg
              height="1.75em"
              width="1.75em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Menu / Menu_Alt_04">
                  <path
                    id="Vector"
                    d="M5 17H19M5 12H19M5 7H13"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
          </button>

          {/* Desktop nav items */}
          <motion.ul
            className="lg:flex space-x-1 hidden lg:mx-auto lg:placeholder:text-lg "
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {sections.map((section, i) => {
              return (
                <motion.li key={i} variants={listItemYVariants} className="">
                  <a href="" className="px-16 ">
                    <span className="nav-items cursor-pointer">{section}</span>
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Contacts */}
          <motion.a
            href=""
            className="flex lg:mr-32 "
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={facebook}
              alt="facebook icon"
              className="pr-3.5 nav-items social"
            />
            <img src={gmail} alt="gmail icon" className="pr-3.5 social" />
            <img
              src={instagram}
              alt="instagram icon"
              className="pr-3.5 social"
            />
            <img src={twitter} alt="twitter icon" className="social" />
          </motion.a>
        </div>
      </nav>
    </>
  );
}
