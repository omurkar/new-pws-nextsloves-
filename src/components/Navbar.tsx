'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight, Briefcase } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { Button } from '@/components/ui/button';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* Top of viewport Progressive Blur for smooth Apple-style scroll fading */}
      <ProgressiveBlur
        position="top"
        height="96px"
        className="fixed top-0 inset-x-0 z-40 pointer-events-none bg-gradient-to-b from-white/70 via-white/25 to-transparent"
        blurLevels={[0.5, 1, 2, 4, 8, 12, 16, 24]}
      />

      {/* Bottom of viewport Progressive Blur for smooth scroll fading */}
      <ProgressiveBlur
        position="bottom"
        height="96px"
        className="fixed bottom-0 inset-x-0 z-40 pointer-events-none bg-gradient-to-t from-white/70 via-white/25 to-transparent"
        blurLevels={[0.5, 1, 2, 4, 8, 12, 16, 24]}
      />

      <header className="fixed top-3 sm:top-4 inset-x-0 mx-auto max-w-5xl z-50 px-3 sm:px-4 transition-all duration-300">
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-300/80 shadow-md'
            : 'bg-white/90 backdrop-blur-md border-slate-200/90 shadow-sm'
        }`}
        aria-label="Main navigation"
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/assets/logos/nextsolves-brand-logo.png"
            alt="NextSolves"
            width={140}
            height={40}
            className="h-8 sm:h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => {
            const isExternal = item.href.startsWith('http');
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`w-3 h-3 text-slate-400 transition-transform ${
                          openDropdown === item.label ? 'rotate-180 text-primary' : ''
                        }`}
                      />
                    )}
                  </Link>
                )}

                {/* Clean Desktop Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-1.5 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-primary hover:bg-blue-50/60 rounded-xl transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          {/* Career Button */}
          <a
            href="https://internship.nextsolves.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-3.5 text-xs font-semibold border-slate-200 text-slate-700 hover:text-primary hover:border-primary/40 hover:bg-blue-50/50 shadow-xs transition-all cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5 mr-1.5 text-primary" />
              <span>Career</span>
            </Button>
          </a>

          <Link href="/#contact" className="hidden sm:inline-flex">
            <Button
              variant="default"
              size="sm"
              className="rounded-full px-4 text-xs font-semibold shadow-sm hover:shadow"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </Button>
          </Link>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{
              duration: 0.22,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="md:hidden fixed inset-x-3 top-20 bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200 p-5 shadow-2xl z-40 max-h-[80vh] overflow-y-auto"
          >
            <div className="space-y-1">
            {navigation.map((item) => {
              const isExternal = item.href.startsWith('http');
              return (
                <div key={item.label} className="border-b border-slate-100 last:border-0 pb-2 mb-2">
                  {isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-900 rounded-xl hover:bg-slate-50 cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <Briefcase className="w-4 h-4 text-primary" />
                    </a>
                  ) : item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.label ? null : item.label)
                        }
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-slate-900 rounded-xl hover:bg-slate-50 cursor-pointer"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 pt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-primary rounded-lg"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-3 py-2 text-sm font-semibold text-slate-900 rounded-xl hover:bg-slate-50"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-3 space-y-2 relative z-20">
            <a
              href="https://internship.nextsolves.in"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-slate-200 text-slate-700 hover:text-primary hover:bg-slate-50 text-sm font-semibold transition-colors"
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <span>Career & Internships</span>
            </a>

            <Link
              href="/#contact"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-primary text-white text-sm font-semibold shadow hover:bg-primary-hover transition-colors"
            >
              <span>Request an Institutional Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
            <ProgressiveBlur
              position="bottom"
              height="40px"
              className="pointer-events-none rounded-b-3xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
