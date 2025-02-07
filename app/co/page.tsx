"use client";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";
const ContactPage = () => {
  return (
    <div style={{minHeight: "100vh" }}>
      <div style={{ paddingInline: "16", paddingBlock: "48", textAlign: "center" ,display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column", gap:"20px"}}>
        <div style={{
          width: "100%",
          maxWidth: "32rem",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "1rem",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          padding: "2rem",
        }}>
          <h2 style={{
            fontSize: "1.875rem",
            fontWeight: 700,
            textAlign: "center",
            color: "white",
            marginBottom: "2rem",
          }}>
            Contact Me
          </h2>
          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent page reload
              Swal.fire({
                title: `Message Sent!`,
                icon: "success",
                confirmButtonText: "OK",
              });
            }}
            style={{ marginBlock: "24" }}
          >
            <div>
              <label
                htmlFor="name"
                style={{ fontSize: "0.875rem", color: "white", fontWeight: "500" }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={{
                  marginTop: "0.25rem",
                  padding: "1rem",
                  width: "100%",
                  borderRadius: "0.375rem",
                  border: "1px solid #d1d5db",
                  backgroundColor: "rgb(255 255 255 / 0.05)",
                  color: "white",
                }}
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{ fontSize: "0.875rem", color: "white", fontWeight: "500" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                style={{
                  marginTop: "0.25rem",
                  padding: "1rem",
                  width: "100%",
                  borderRadius: "0.375rem",
                  border: "1px solid #d1d5db",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  color: "white",
                }}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                style={{ fontSize: "0.875rem", color: "white", fontWeight: "500" }}

              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                style={{
                  marginTop: "0.25rem",
                  padding: "1rem",
                  width: "100%",
                  borderRadius: "0.375rem",
                  border: "1px solid #d1d5db",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  color: "white",
                }}
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#4f46e5",
                color: "white",
                borderRadius: "0.375rem",
                marginTop: "1.5rem", 
              }}
            >
              Send Message
            </button>
          </form>
          {/* Contact Details */}
          <div
            style={{ textAlign: "center", color: "white", marginBlock: "16px", marginTop: "32px" }}
          >
            <p>Email: <a href="mailto:muhammedsuhaib@example.com" >muhammedsuhaib@example.com</a></p>
            <p>Address: 123 Example Street, City, Country</p>
            <p>Phone: <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
          </div>

          {/* Social Media Links */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem", // space-x-6
            marginTop: "1.5rem", // mt-6
          }}>
            <a
              href="https://www.linkedin.com/in/suhaib1/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#60a5fa",
                transition: "color 0.3s ease",
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MuhammedSuhaib"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#60a5fa",
                transition: "color 0.3s ease",
              }}
            >
              GitHub
            </a>
          </div>
        </div>
        {/* Back to Home Button */}
        <Link href="/" >
          <button style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#4f46e5",
            color: "white",
            borderRadius: "0.375rem",
          }}>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
