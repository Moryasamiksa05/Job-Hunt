

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import clsx from "clsx";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    clsx(
      "px-3 py-2 rounded-xl transition-all duration-300 font-medium relative group",
      isActive
        ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
        : "text-white/90 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(25px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0, 255, 255, 0.3)"
            : "0 2px 20px rgba(0, 255, 255, 0.15)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar
          className={`container flex justify-between items-center transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* ===== Logo ===== */}
          <Box className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center text-black font-extrabold shadow-lg shadow-cyan-400/30 hover:scale-105 transition-transform duration-300">
                JH
              </div>
              <span className="text-lg md:text-xl font-extrabold text-white tracking-wide">
                Job Hunt
              </span>
            </Link>
          </Box>

          {/* ===== Desktop Nav Links ===== */}
          <Box className="ml-auto hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
                {/* Underline animation */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}

            {/* ===== Get Started Button ===== */}
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="medium"
              className="
                rounded-2xl
                bg-gradient-to-r from-cyan-400 to-blue-500
                text-black font-semibold
                hover:from-cyan-300 hover:to-blue-400
                hover:scale-105 transition-all duration-300
                shadow-lg shadow-cyan-400/40
                px-5 py-2
              "
            >
              Get Started
            </Button>
          </Box>

          {/* ===== Mobile Menu Icon ===== */}
          <Box className="md:hidden ml-auto">
            <IconButton onClick={() => setOpen(true)} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* ===== Mobile Drawer ===== */}
          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              sx: {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(25px)",
                color: "#fff",
                boxShadow: "0 0 25px rgba(34, 211, 238, 0.3)",
              },
            }}
          >
            <Box className="w-72 p-4 flex items-center justify-between border-b border-white/20">
              <span className="text-xl font-extrabold">Menu</span>
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ color: "#fff" }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <List>
              {navItems.map((item) => (
                <ListItem key={item.to} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(34, 211, 238, 0.1)",
                        borderRadius: "12px",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        className:
                          "text-white hover:text-cyan-300 transition-colors duration-300",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}

              {/* ===== Drawer Get Started Button ===== */}
              <Box className="px-4 pb-6 mt-4">
                <Button
                  fullWidth
                  component={Link}
                  to="/contact"
                  variant="contained"
                  onClick={() => setOpen(false)}
                  className="
                    rounded-2xl
                    bg-gradient-to-r from-cyan-400 to-blue-500
                    text-black font-semibold
                    hover:from-cyan-300 hover:to-blue-400
                    shadow-lg shadow-cyan-400/40
                    py-3
                  "
                >
                  Get Started
                </Button>
              </Box>
            </List>
          </Drawer>
        </Toolbar>

        {/* ===== Glass Shine Effect ===== */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-[-150%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ left: ["-150%", "150%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </AppBar>
    </motion.div>
  );
}
