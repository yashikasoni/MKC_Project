"use client";

import { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, IconButton, InputBase } from "@mui/material";
import { Search, ShoppingCart, Mic, Menu } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const topLinks = [
    "Career",
    "Gallery",
    "Blog",
    "News",
    "Success Story",
    "Event",
    "Location",
    "Answer Key",
  ];

  const navLinks = [
    "Home",
    "All Courses",
    "Test Series",
    "Books",
    "Medical",
    "Hostel",
  ];

  return (
    <div className="w-full">
      {/* Top Banner */}
      {showBanner && (
        <div
          className="bg-green-50 text-center text-xs sm:text-sm text-[#003E33] py-2 px-2 flex justify-center items-center gap-2 transition-all duration-300"
        >
          <span>
            For Scholarships on MKC’s Online Courses{" "}
            <Link
              href="/register"
              className="text-green-700 font-semibold underline"
            >
              Click here to Register Now
            </Link>
          </span>
          <CloseIcon
            className="cursor-pointer text-[#003E33]"
            fontSize="small"
            onClick={() => setShowBanner(false)}
            aria-label="close banner"
          />
        </div>
      )}

      {/* Top Menu Bar */}
      <div className="bg-[#003E33]">
        <AppBar
          position="static"
          sx={{ backgroundColor: "#003E33", boxShadow: "none" }}
        >
          <Toolbar className="flex justify-between items-center">
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-8 text-white text-sm">
              {topLinks.map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                  {item}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden">
              <IconButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white"
                aria-label="toggle menu"
              >
                {mobileMenuOpen ? <CloseIcon /> : <Menu />}
              </IconButton>
            </div>

            {/* Login/Register Button */}
            <Button
              variant="contained"
              className="bg-white text-green-900 normal-case font-semibold text-xs sm:text-sm"
            >
              Login/Register
            </Button>
          </Toolbar>
        </AppBar>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="bg-[#003E33] text-white flex flex-col space-y-3 px-6 py-4 lg:hidden text-sm">
            {topLinks.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Main Header Section */}
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-between px-4 md:px-6 py-3 shadow bg-white gap-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-green-900 text-white font-bold px-2 py-1 rounded">
            MKC
          </div>
          <div className="text-sm leading-tight text-black text-center md:text-left">
            <div className="font-bold">MAJOR KALSHI CLASSES</div>
            <div className="text-xs md:text-sm">India’s No.1 Institute</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 lg:gap-6 text-sm font-medium text-black">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Search & Cart */}
        <div className="flex items-center space-x-3 md:space-x-4 w-full md:w-auto justify-center">
          <div className="flex items-center border rounded-full px-3 py-1 w-full md:w-64 border-[#757575]">
            <Search className="text-black mr-2" fontSize="small" />
            <InputBase
              placeholder="Search courses..."
              className="flex-1 text-sm"
              inputProps={{ "aria-label": "search courses" }}
            />
            <Mic className="text-gray-500" fontSize="small" />
          </div>
          <IconButton aria-label="shopping cart">
            <ShoppingCart />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
