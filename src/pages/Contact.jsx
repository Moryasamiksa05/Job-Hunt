

import React from "react";
import { TextField, Button } from "@mui/material";
import { Phone, Email, LocationOn, WhatsApp } from "@mui/icons-material";

const Contact = () => {
  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      background: "rgba(255,255,255,0.05)",
      borderRadius: "12px",
      color: "white",
      backdropFilter: "blur(10px)",
      "& fieldset": {
        borderColor: "rgba(255,255,255,0.2)",
      },
      "&:hover fieldset": {
        borderColor: "#67e8f9",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#06b6d4",
        boxShadow: "0 0 15px rgba(6,182,212,0.6)",
      },
      "& input": {
        color: "white",
      },
      "& textarea": {
        color: "white",
      },
    },

    // Autofill Fix
    "& input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px rgba(255,255,255,0.05) inset",
      WebkitTextFillColor: "white",
      transition: "background-color 5000s ease-in-out 0s",
    },
    "& input:-webkit-autofill:focus": {
      WebkitBoxShadow: "0 0 0 100px rgba(255,255,255,0.05) inset",
      WebkitTextFillColor: "white",
    },
    "& input:-webkit-autofill:hover": {
      WebkitBoxShadow: "0 0 0 100px rgba(255,255,255,0.05) inset",
      WebkitTextFillColor: "white",
    },

    "& .MuiInputLabel-root": {
      color: "rgba(255,255,255,0.7)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#67e8f9",
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 overflow-hidden relative">
      <h1 className="text-white text-4xl font-extrabold mb-8 drop-shadow-lg relative z-10">
        Contact <span className="text-cyan-400">Us</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl relative z-10">
        {/* Left: Contact Form */}
        <div className="flex-1 rounded-3xl p-8 shadow-xl border border-white/20 bg-white/10 backdrop-blur-xl hover:shadow-cyan-400/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-6">Get in Touch ✉️</h2>
          <form className="flex flex-col gap-6" >
            <TextField label="Full Name" variant="outlined" fullWidth sx={inputStyles} />
            <TextField label="Email Address" variant="outlined" fullWidth sx={inputStyles} />
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              sx={inputStyles}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
                color: "white",
                padding: "12px",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "12px",
                textTransform: "none",
                boxShadow: "0 5px 20px rgba(6,182,212,0.4)",
                "&:hover": {
                  background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
                  transform: "scale(1.05)",
                  boxShadow: "0 5px 25px rgba(6,182,212,0.6)",
                },
              }}
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Right: Quick Info */}
        <div className="flex-1 rounded-3xl p-8 shadow-xl border border-white/20 bg-white/10 backdrop-blur-xl hover:shadow-cyan-400/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Info</h2>
          <p className="text-gray-300 mb-6">
            Have questions? We reply within{" "}
            <span className="text-cyan-400 font-bold">1–2 business days</span>.
          </p>

          <div className="space-y-4 text-white text-lg">
            <p className="flex items-center gap-2">
              <LocationOn /> Noida, India
            </p>
            <p className="flex items-center gap-2">
              <Email /> hello@jobhunt.in
            </p>
            <p className="flex items-center gap-2">
              <Phone /> +91 98765 43210
            </p>
          </div>

          <div className="flex gap-4 mt-8 flex-wrap">
            <Button
              variant="outlined"
              sx={{
                borderColor: "#67e8f9",
                color: "#67e8f9",
                borderRadius: "12px",
                padding: "10px 20px",
                textTransform: "none",
                "&:hover": {
                  background: "rgba(6,182,212,0.1)",
                  borderColor: "#06b6d4",
                  color: "#06b6d4",
                },
              }}
            >
              Schedule a Call
            </Button>
            <Button
              variant="outlined"
              startIcon={<WhatsApp />}
              sx={{
                borderColor: "#25D366",
                color: "#25D366",
                borderRadius: "12px",
                padding: "10px 20px",
                textTransform: "none",
                "&:hover": {
                  background: "#25D36622",
                  borderColor: "#25D366",
                },
              }}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
