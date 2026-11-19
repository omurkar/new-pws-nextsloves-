import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Compass, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About NextSolves — Modernizing Campus Operations',
  description:
    'Learn about NextSolves, our founders Jagruti Morvekar and Om Murkar, our mission to automate college examinations, and our paperless campus vision.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 pt-28 pb-16 sm:pb-20">
        {/* Hero */}
        <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 hero-radial-pattern border-b border-slate-100">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Next-Level Academic Technology
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
              About NextSolves
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-[65ch] mx-auto leading-relaxed">
              We build specialized educational software that modernizes higher education workflows, eliminates manual paperwork, and restores faculty focus to teaching.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
          <div className="container-custom max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 bg-slate-50/70 rounded-3xl border border-slate-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4 border border-blue-200">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Vision</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1.5 mb-2.5">
                    Secure, Fair Digital Assessment Environment
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[55ch]">
                    To establish a dependable, standardized digital infrastructure across college campuses where practical and internal assessments operate seamlessly with 100% data integrity and zero paper dependency.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-slate-50/70 rounded-3xl border border-slate-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Mission</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1.5 mb-2.5">
                    End-to-End Examination Automation
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[55ch]">
                    To eliminate the repetitive friction of physical question distribution, manual attendance rollcalls, and exhausting paper grading through automated randomized digital slips, real-time monitoring, and instant evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-200/80">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Leadership
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Meet the Founders
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-[60ch] mx-auto">
                Innovators dedicated to transforming collegiate examination processes from the ground up.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Jagruti Morvekar */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-6">
                    <div className="relative w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-sm">
                      <Image
                        src="/assets/team/jagruti-morvekar.jpeg"
                        alt="Jagruti Morvekar — Co-Founder"
                        fill
                        sizes="(max-width: 640px) 128px, 144px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="text-center sm:text-left min-w-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Co-Founder
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                        Jagruti Morvekar
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                        Systems Architecture & Operational Strategy
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                        Co-architect of NextSolves PWS, steering the foundational convergence between distributed database architecture, real-time exam telemetry, and zero-paper institutional logistics. Directed continuous rollouts across 2,500+ active students with 100% operational uptime.
                      </p>
                    </div>
                  </div>

                  {/* Pillars: Technical, Operational, Execution */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                    <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/70">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        Technical Architecture
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Full-stack systems design, asynchronous state synchronization, and zero-latency digital question distribution engines.
                      </p>
                    </div>

                    <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/70">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                        Operational Scaling
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Institutional stakeholder alignment, examination council compliance, and academic lab workflow modernization.
                      </p>
                    </div>

                    <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/70">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                        <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                        Execution Excellence
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Proven on-ground delivery across multi-batch semester examination cycles and automated real-time grading pipelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Om Murkar */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-6">
                    <div className="relative w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-sm">
                      <Image
                        src="/assets/team/om-murkar.jpeg"
                        alt="Om Murkar — Co-Founder"
                        fill
                        sizes="(max-width: 640px) 128px, 144px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="text-center sm:text-left min-w-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Co-Founder
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                        Om Murkar
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                        Core Engineering & Execution Infrastructure
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                        Co-architect of NextSolves PWS, engineering secure examination environments, locked kiosk proctoring protocols, and automated evaluation engines. Spearheaded the technical implementation and operational rollout eliminating paper examination overhead.
                      </p>
                    </div>
                  </div>

                  {/* Pillars: Technical, Operational, Execution */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                    <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/70">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        Technical Architecture
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Safe Exam Browser enforcement, client-side sandbox isolation, and real-time live heartbeat surveillance protocols.
                      </p>
                    </div>

                    <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/70">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                        Operational Scaling
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Rapid lab infrastructure provisioning, high-concurrency batch orchestration, and fail-safe exam recovery mechanisms.
                      </p>
                    </div>

                    <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/70">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                        <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                        Execution Excellence
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Precision execution in live high-stakes collegiate lab sessions, driving measurable cost reduction and instant result publication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Principles */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Foundational Values
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
                Our Core Product Philosophy
              </h2>
            </div>

            <div className="space-y-4 text-slate-700">
              <div className="p-5 sm:p-6 bg-slate-50/70 rounded-2xl border border-slate-200/90 flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Workflows Over Gimmicks</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed max-w-[65ch]">
                    We do not build bloated software. PWS focuses squarely on the actual daily challenges of running lab practicals and internal examinations without manual paperwork.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-slate-50/70 rounded-2xl border border-slate-200/90 flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Zero-Paper Commitment</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed max-w-[65ch]">
                    Every feature is designed to eliminate paper entirely — from digital slip generation to online code submission and instant result export.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-slate-50/70 rounded-2xl border border-slate-200/90 flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Institutional Security & Integrity</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed max-w-[65ch]">
                    Multi-tenant data isolation, Safe Exam Browser enforcement, and server-side heartbeat tracking protect academic integrity at every stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10 sm:mt-12 flex justify-center">
              <Link href="/#contact">
                <Button variant="default" size="lg" className="rounded-full px-7 shadow-sm hover:shadow font-semibold">
                  <span>Connect With NextSolves</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
