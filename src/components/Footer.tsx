import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Headphones, ShieldCheck } from 'lucide-react';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { footerNavigation, contactInfo } from '@/data/navigation';
import { FooterStickyReveal } from '@/components/ui/footer-sticky-reveal';
import { accreditations } from '@/data/content';

export default function Footer() {
  return (
    <FooterStickyReveal className="mt-14 sm:mt-20 lg:mt-28">
      <footer className="relative bg-slate-50 border-t border-slate-200/80 text-slate-700 overflow-hidden">
        <div className="container-custom py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
          {/* Top Accreditation & Government Recognition Single Row */}
          <div className="mb-10 sm:mb-14 pb-8 sm:pb-10 border-b border-slate-200/80">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-1.5">
                  Institutional Accreditations & Recognitions
                </span>
                <p className="text-xs text-slate-500 max-w-md">
                  Certified quality management, indigenous MSME governance, and paperless Digital India aligned workflows.
                </p>
              </div>

              {/* Single row of 4 accreditation images */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 items-center">
                {accreditations.map((item) => (
                  <div
                    key={item.id}
                    className="h-20 sm:h-24 px-4 sm:px-5 py-2.5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow flex items-center justify-center"
                    title={`${item.name} — ${item.tag}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={200}
                      height={80}
                      className="max-h-16 sm:max-h-20 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Layout: 2 columns on mobile, 4 on tablet, 6 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 sm:gap-x-8 gap-y-10 lg:gap-8">
            {/* Brand Column (Full width on mobile & tablet, 2 cols on desktop) */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
                <Image
                  src="/assets/logos/nextsolves-brand-logo.png"
                  alt="NextSolves"
                  width={150}
                  height={42}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </Link>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                The operating system for the future campus. Transforming paper-based examination chaos into an automated, zero-paper workflow.
              </p>



              <div className="pt-2 space-y-2 text-xs sm:text-sm">
                <div className="flex flex-col gap-1.5">
                  <a
                    href="mailto:contact@nextsolves.in"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors py-0.5"
                  >
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span><strong className="text-slate-800 font-medium">Contact:</strong> contact@nextsolves.in</span>
                  </a>
                  <a
                    href="mailto:help@nextsolves.in"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors py-0.5"
                  >
                    <Headphones className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong className="text-slate-800 font-medium">Support:</strong> help@nextsolves.in</span>
                  </a>
                  <a
                    href="mailto:grievance@nextsolves.in"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors py-0.5"
                  >
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong className="text-slate-800 font-medium">Grievance:</strong> grievance@nextsolves.in</span>
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 pt-1">
                  {contactInfo.phone.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors py-1"
                    >
                      <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{p}</span>
                    </a>
                  ))}
                </div>
                <div className="flex items-start gap-2.5 text-slate-500 pt-0.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{contactInfo.address}</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://www.linkedin.com/company/nextsolves-edutech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white hover:bg-blue-50/70 hover:border-blue-300 text-slate-700 hover:text-[#0A66C2] text-xs font-semibold shadow-xs transition-all cursor-pointer group"
                  aria-label="NextSolves LinkedIn"
                >
                  <IconBrandLinkedin className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform shrink-0" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/NextSolves"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white hover:bg-slate-100 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-xs transition-all cursor-pointer group"
                  aria-label="NextSolves GitHub"
                >
                  <IconBrandGithub className="w-4 h-4 text-slate-900 group-hover:scale-110 transition-transform shrink-0" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold text-slate-900 mb-3 sm:mb-4 uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerNavigation.product.map((item) => (
                  <li key={`${item.label}-${item.href}`}>
                    <Link
                      href={item.href}
                      className="inline-block py-0.5 text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold text-slate-900 mb-3 sm:mb-4 uppercase tracking-wider">
                Solutions
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerNavigation.solutions.map((item) => (
                  <li key={`${item.label}-${item.href}`}>
                    <Link
                      href={item.href}
                      className="inline-block py-0.5 text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold text-slate-900 mb-3 sm:mb-4 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerNavigation.company.map((item) => {
                  const isExternal = item.href.startsWith('http');
                  return (
                    <li key={`${item.label}-${item.href}`}>
                      {isExternal ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 py-0.5 text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors group"
                        >
                          <span>{item.label}</span>
                          <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-1.5 py-0.2 rounded border border-emerald-200">
                            Hiring
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="inline-block py-0.5 text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Resources & Legal Links */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold text-slate-900 mb-3 sm:mb-4 uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                {footerNavigation.resources.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block py-0.5 text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-xs font-bold text-slate-900 mb-3 sm:mb-4 uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerNavigation.legal.map((item) => (
                  <li key={`${item.label}-${item.href}`}>
                    <Link
                      href={item.href}
                      className="inline-block py-0.5 text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Stacked & centered on mobile, inline on desktop */}
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500">
            <div>
              <p>© {new Date().getFullYear()} NextSolves. All rights reserved.</p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                Autonomous Examination & Institutional Workflow Infrastructure.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/nextsolves-edutech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-blue-50/70 hover:border-blue-200 text-slate-700 hover:text-[#0A66C2] text-xs font-semibold shadow-xs transition-all cursor-pointer group"
                aria-label="NextSolves on LinkedIn"
              >
                <IconBrandLinkedin className="w-3.5 h-3.5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/NextSolves"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-100 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-xs transition-all cursor-pointer group"
                aria-label="NextSolves on GitHub"
              >
                <IconBrandGithub className="w-3.5 h-3.5 text-slate-900 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </FooterStickyReveal>
  );
}
