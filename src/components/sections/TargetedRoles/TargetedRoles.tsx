import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Smartphone, Stethoscope, Building2, ShieldCheck, Activity, Pill, HeartPulse, Users, FileText, CalendarClock, TestTube, FileSignature, CheckCircle2, ArrowUpRight, Lock, Folders, Wallet, FileCheck2 } from "lucide-react";
import { motion } from "motion/react";
import { FadeIn } from "@/components/common/FadeIn";

export const TargetedRoles = ({ initialRole = 'patient' }: { initialRole?: 'patient' | 'doctor' | 'clinic' }) => {
  const [activeRole, setActiveRole] = useState<'patient' | 'doctor' | 'clinic'>(initialRole);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    setActiveCardIndex(0); // Reset index when role changes
  }, [activeRole]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % 3);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [activeRole]);

  return (
    <section id="roles" className="py-24 md:py-32 bg-surface-50">
       <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-pine-900 mb-8">
                Built for your needs.
              </h2>
              
              {/* Role Selector Tabs */}
              <div className="inline-flex flex-col sm:flex-row bg-white rounded-2xl md:rounded-full p-2 border border-stone-200 shadow-sm gap-2">
                <button
                  onClick={() => setActiveRole('patient')}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-bold transition-[background-color,color,box-shadow] duration-150 ease-out ${
                    activeRole === 'patient'
                      ? 'bg-violet-600 text-white shadow-md'
                      : 'text-stone-500 hover:text-pine-900 hover:bg-stone-50'
                  }`}
                >
                  <Smartphone className="w-5 h-5" /> Everyone
                </button>
                <button
                  onClick={() => setActiveRole('doctor')}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-bold transition-[background-color,color,box-shadow] duration-150 ease-out ${
                    activeRole === 'doctor'
                      ? 'bg-teal-800 text-white shadow-md'
                      : 'text-stone-500 hover:text-pine-900 hover:bg-stone-50'
                  }`}
                >
                  <Stethoscope className="w-5 h-5" /> Doctors
                </button>
                <button
                  onClick={() => setActiveRole('clinic')}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-bold transition-[background-color,color,box-shadow] duration-150 ease-out ${
                    activeRole === 'clinic'
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'text-stone-500 hover:text-pine-900 hover:bg-stone-50'
                  }`}
                >
                  <Building2 className="w-5 h-5" /> Clinics
                </button>
              </div>
            </div>
          </FadeIn>

          <div className="relative">
            
            {/* FLOW 1: Patient */}
            {activeRole === 'patient' && (
              <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-200">
                <div className="w-full grid grid-cols-1" aria-live="polite" aria-atomic="true">
                  {/* Card 1 */}
                  <div className={`col-start-1 row-start-1 bg-white border border-stone-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-[transform,opacity,box-shadow] duration-200 ease-out flex flex-col md:flex-row gap-8 items-center ${activeCardIndex === 0 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}>
                    <div className="flex-1 w-full relative z-10">
                      <div className="w-12 h-12 bg-pine-100 text-accent-600 rounded-2xl flex items-center justify-center mb-6">
                        <Smartphone className="w-6 h-6"/>
                      </div>
                      <h3 className="text-xl font-bold text-pine-900 mb-4 tracking-tight">Your health records, all in one place</h3>
                      <ul className="space-y-3 text-stone-600 font-medium text-sm">
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0"></span> Every test, prescription, and doctor visit from any clinic or lab, in a single view</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0"></span> Records from new consultations update automatically</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0"></span> Your records belong to you, not the last clinic you visited</li>
                      </ul>
                    </div>
                    <div className="flex-1 w-full h-[200px] md:h-full flex items-center justify-center relative bg-stone-50/50 rounded-2xl overflow-hidden">
                      {activeCardIndex === 0 && (
                        <div className="relative w-48 h-48 border-2 border-dashed border-stone-200 rounded-full flex items-center justify-center">
                          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="z-10 bg-white p-4 rounded-2xl shadow-lg border border-stone-100">
                            <Smartphone className="w-8 h-8 text-pine-600" />
                          </motion.div>
                          <motion.div initial={{ x: -100, y: -60, opacity: 0 }} animate={{ x: -20, y: -20, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }} className="absolute bg-white p-2.5 rounded-xl shadow-md border border-stone-100"><FileText className="w-5 h-5 text-accent-500" /></motion.div>
                          <motion.div initial={{ x: 100, y: -40, opacity: 0 }} animate={{ x: 25, y: -15, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }} className="absolute bg-white p-2.5 rounded-xl shadow-md border border-stone-100"><Activity className="w-5 h-5 text-rose-500" /></motion.div>
                          <motion.div initial={{ x: -50, y: 100, opacity: 0 }} animate={{ x: -10, y: 30, opacity: 1 }} transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }} className="absolute bg-white p-2.5 rounded-xl shadow-md border border-stone-100"><Pill className="w-5 h-5 text-indigo-500" /></motion.div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className={`col-start-1 row-start-1 bg-white border border-stone-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-[transform,opacity,box-shadow] duration-200 ease-out flex flex-col md:flex-row gap-8 items-center ${activeCardIndex === 1 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}>
                    <div className="flex-1 w-full relative z-10">
                      <div className="w-12 h-12 bg-pine-100 text-accent-600 rounded-2xl flex items-center justify-center mb-6">
                        <ShieldCheck className="w-6 h-6"/>
                      </div>
                      <h3 className="text-xl font-bold text-pine-900 mb-4 tracking-tight">You decide who sees your records</h3>
                      <ul className="space-y-3 text-stone-600 font-medium text-sm">
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-1.5 shrink-0"></span> Full control over who can access health data (specific doctors/clinics)</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-1.5 shrink-0"></span> Selective sharing of specific records or data types for stated purposes</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-1.5 shrink-0"></span> Real-time notifications for access requests with instant approve/deny capability</li>
                      </ul>
                    </div>
                    <div className="flex-1 w-full h-[200px] md:h-full flex items-center justify-center relative bg-stone-50/50 rounded-2xl overflow-hidden">
                      {activeCardIndex === 1 && (
                        <div className="relative flex flex-col items-center">
                          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white px-6 py-4 rounded-2xl shadow-lg border border-stone-100 flex items-center gap-4 z-10">
                            <ShieldCheck className="w-8 h-8 text-pine-500" />
                            <div className="flex flex-col gap-1">
                              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Access Request</span>
                              <span className="text-sm font-medium text-stone-700">Dr. Sarah requires access</span>
                            </div>
                            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, type: "spring" }} className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 border border-accent-200">
                              <CheckCircle2 className="w-5 h-5"/>
                            </motion.div>
                          </motion.div>
                          <div className="absolute inset-x-0 bottom-0 translate-y-1/2 flex justify-center gap-8 -z-0">
                             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.5, y: 0 }} transition={{ delay: 0.4 }} className="bg-white p-3 rounded-xl shadow-sm border border-stone-100"><FileText className="w-5 h-5 text-stone-400"/></motion.div>
                             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white p-3 rounded-xl shadow-md border border-accent-200 ring-2 ring-accent-100"><Activity className="w-5 h-5 text-accent-500"/></motion.div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className={`col-start-1 row-start-1 bg-white border border-stone-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-[transform,opacity,box-shadow] duration-200 ease-out flex flex-col md:flex-row gap-8 items-center ${activeCardIndex === 2 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}>
                    <div className="flex-1 w-full relative z-10">
                      <div className="w-12 h-12 bg-pine-100 text-accent-600 rounded-2xl flex items-center justify-center mb-6">
                        <FileCheck2 className="w-6 h-6"/>
                      </div>
                      <h3 className="text-xl font-bold text-pine-900 mb-4 tracking-tight">Stay ahead of your health</h3>
                      <ul className="space-y-3 text-stone-600 font-medium text-sm">
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-1.5 shrink-0"></span> Medication reminders, health insights, and preventive care alerts — for you and your family</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-1.5 shrink-0"></span> Medication alerts and tracking of key health metrics</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-1.5 shrink-0"></span> Tools to manage health of entire family (children, elderly parents)</li>
                      </ul>
                    </div>
                    <div className="flex-1 w-full h-[200px] md:h-full flex items-center justify-center relative bg-stone-50/50 rounded-2xl overflow-hidden">
                      {activeCardIndex === 2 && (
                        <div className="w-full max-w-[240px] flex flex-col gap-3">
                          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", stiffness: 200 }} className="bg-white p-3 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500"><HeartPulse className="w-4 h-4"/></div>
                              <span className="text-sm font-medium text-stone-700">BP Normal</span>
                            </div>
                          </motion.div>
                          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 200 }} className="bg-white p-3 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500"><Pill className="w-4 h-4"/></div>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium text-stone-700">Vitamin D</span>
                                <span className="text-xs text-stone-400">8:00 AM</span>
                              </div>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                          </motion.div>
                          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, type: "spring", stiffness: 200 }} className="bg-white p-3 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600"><Users className="w-4 h-4"/></div>
                              <span className="text-sm font-medium text-stone-700">Mom's Checkup</span>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Indicators */}
                <div className="flex gap-2 mt-8 z-20">
                  {[0, 1, 2].map((idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setActiveCardIndex(idx)}
                      className="h-12 w-12 flex items-center justify-center group"
                      aria-label={`Show slide ${idx + 1}`}
                    >
                      <div className={`transition-[width,background-color] duration-150 ease-out h-2.5 rounded-full ${activeCardIndex === idx ? 'bg-accent-600 w-8' : 'bg-stone-300 w-2.5 group-hover:bg-stone-400'}`} />
                    </button>
                  ))}
                </div>

                <div className="mt-8 text-center flex justify-center z-20">
                  <Link to="/patient-app" className="font-bold text-accent-600 hover:text-accent-700 inline-flex items-center gap-2 text-lg">Explore the Patient App <ArrowUpRight className="w-5 h-5" /></Link>
                </div>
              </div>
            )}

            {/* FLOW 2: Doctor */}
            {activeRole === 'doctor' && (
              <div className="bg-teal-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-800/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                
                <div className="flex flex-col items-center relative z-10 w-full">
                  <div className="w-full grid grid-cols-1" aria-live="polite" aria-atomic="true">
                    {/* Card 1 */}
                    <div className={`col-start-1 row-start-1 bg-teal-950/80 border border-teal-800 p-8 rounded-3xl backdrop-blur-sm hover:bg-teal-950 transition-[transform,opacity,background-color] duration-200 ease-out flex flex-col md:flex-row gap-8 items-center ${activeCardIndex === 0 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}>
                      <div className="flex-1 w-full relative z-10">
                        <div className="w-12 h-12 bg-teal-800 text-white rounded-2xl flex items-center justify-center mb-6 border border-teal-700">
                          <Stethoscope className="w-6 h-6"/>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Smart Patient History Dashboard</h3>
                        <ul className="space-y-3 text-white font-medium text-sm">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span> Complete patient medical history at a glance before consultation begins</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span> Relevant patient information is available instantly to assist decision making, nothing is missed.</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span> Eliminates diagnostic errors and provides confidence in decision-making</li>
                        </ul>
                      </div>
                      <div className="flex-1 w-full h-[200px] md:h-full flex items-center justify-center relative bg-teal-900/50 rounded-2xl overflow-hidden border border-teal-800">
                        {activeCardIndex === 0 && (
                          <div className="w-full max-w-[280px] flex flex-col gap-4 relative">
                            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-teal-700/50"></div>
                            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-full bg-teal-800 border-2 border-teal-900 flex items-center justify-center text-white z-10 shrink-0"><CalendarClock className="w-5 h-5"/></div>
                              <div className="bg-teal-800/80 p-3 rounded-xl border border-teal-700 w-full">
                                <div className="h-2 w-1/3 bg-pine-600 rounded-full mb-2"></div>
                                <div className="h-1.5 w-3/4 bg-pine-700 rounded-full"></div>
                              </div>
                            </motion.div>
                            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-full bg-teal-800 border-2 border-teal-900 flex items-center justify-center text-white z-10 shrink-0"><Activity className="w-5 h-5"/></div>
                              <div className="bg-teal-800/80 p-3 rounded-xl border border-teal-700 w-full">
                                <div className="h-2 w-1/2 bg-rose-500/50 rounded-full mb-2"></div>
                                <div className="h-1.5 w-2/3 bg-pine-700 rounded-full"></div>
                              </div>
                            </motion.div>
                            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-full bg-teal-800 border-2 border-teal-900 flex items-center justify-center text-white z-10 shrink-0"><TestTube className="w-5 h-5"/></div>
                              <div className="bg-teal-800/80 p-3 rounded-xl border border-teal-700 w-full">
                                <div className="h-2 w-1/4 bg-indigo-500/50 rounded-full mb-2"></div>
                                <div className="h-1.5 w-1/2 bg-pine-700 rounded-full"></div>
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className={`col-start-1 row-start-1 bg-teal-950/80 border border-teal-800 p-8 rounded-3xl backdrop-blur-sm hover:bg-teal-950 transition-[transform,opacity,background-color] duration-200 ease-out flex flex-col md:flex-row gap-8 items-center ${activeCardIndex === 1 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}>
                      <div className="flex-1 w-full relative z-10">
                        <div className="w-12 h-12 bg-teal-800 text-white rounded-2xl flex items-center justify-center mb-6 border border-teal-700">
                          <FileCheck2 className="w-6 h-6"/>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Digital E-Prescription & Clinical Documentation</h3>
                        <ul className="space-y-3 text-white font-medium text-sm">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span> Searchable drug database for error-free prescriptions</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span> Customizable templates for common conditions enabling rapid data entry</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span> Eliminates handwriting confusion and enhances patient safety</li>
                        </ul>
                      </div>
                      <div className="flex-1 w-full h-[200px] md:h-full flex items-center justify-center relative bg-teal-900/50 rounded-2xl overflow-hidden border border-teal-800">
                        {activeCardIndex === 1 && (
                          <div className="w-full max-w-[200px] bg-white rounded-lg shadow-xl overflow-hidden transform rotate-2 origin-bottom-right">
                            <div className="bg-pine-100 p-2 text-center text-xs font-bold text-pine-800 border-b border-pine-200">
                              Rx Prescription
                            </div>
                            <div className="p-4 flex flex-col gap-3">
                              <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 0.2 }} className="h-1.5 bg-stone-200 rounded"></motion.div>
                              <div className="flex gap-2">
                                <motion.div initial={{ width: 0 }} animate={{ width: '20%' }} transition={{ delay: 0.3 }} className="h-1.5 bg-accent-500 rounded"></motion.div>
                                <motion.div initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ delay: 0.4 }} className="h-1.5 bg-stone-200 rounded"></motion.div>
                              </div>
                              <div className="flex gap-2">
                                <motion.div initial={{ width: 0 }} animate={{ width: '20%' }} transition={{ delay: 0.5 }} className="h-1.5 bg-accent-500 rounded"></motion.div>
                                <motion.div initial={{ width: 0 }} animate={{ width: '50%' }} transition={{ delay: 0.6 }} className="h-1.5 bg-stone-200 rounded"></motion.div>
                              </div>
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-2 self-end">
                                <FileSignature className="w-6 h-6 text-pine-600" />
                              </motion.div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className={`col-start-1 row-start-1 bg-teal-950/80 border border-teal-800 p-8 rounded-3xl backdrop-blur-sm hover:bg-teal-950 transition-[transform,opacity,background-color] duration-200 ease-out flex flex-col md:flex-row gap-8 items-center ${activeCardIndex === 2 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}>
                      <div className="flex-1 w-full relative z-10">
                        <div className="w-12 h-12 bg-teal-800 text-white rounded-2xl flex items-center justify-center mb-6 border border-teal-700">
                          <ShieldCheck className="w-6 h-6"/>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Secure, Consent-Based Access to Complete Patient EHR</h3>
                        <ul className="space-y-3 text-white font-medium text-sm">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span> Centralized interface to view/manage/update patient records</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span> Access to complete medical history, diagnoses, treatment plans, and allergies</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span> Reduces guesswork and enables faster, more confident clinical decisions</li>
                        </ul>
                      </div>
                      <div className="flex-1 w-full h-[200px] md:h-full flex items-center justify-center relative bg-teal-900/50 rounded-2xl overflow-hidden border border-teal-800">
                        {activeCardIndex === 2 && (
                          <div className="relative flex items-center justify-center">
                            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
                              <Folders className="w-16 h-16 text-white opacity-50 absolute -left-8 -top-8" />
                            </motion.div>
                            
                            <motion.div className="bg-pine-800 p-4 rounded-2xl border border-pine-700 shadow-xl flex items-center justify-center relative z-10 w-32 h-32"
                                initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
                              <Lock className="w-12 h-12 text-white" />
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="col-start-1 row-start-1 bg-pine-800 rounded-2xl border border-pine-700 flex items-center justify-center z-20">
                                 <ShieldCheck className="w-12 h-12 text-white" />
                              </motion.div>
                              <motion.div initial={{ scale: 1 }} animate={{ scale: 0 }} transition={{ delay: 0.8 }} className="absolute -right-4 -bottom-4 bg-white text-pine-900 text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-30 flex items-center gap-1">
                                <Smartphone className="w-3 h-3"/> Pending
                              </motion.div>
                              <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2 }} className="absolute -right-4 -bottom-4 bg-accent-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg z-30 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3"/> Approved
                              </motion.div>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Indicators */}
                  <div className="flex gap-2 mt-8 z-20">
                  {[0, 1, 2].map((idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setActiveCardIndex(idx)}
                      className="h-12 w-12 flex items-center justify-center group"
                      aria-label={`Show slide ${idx + 1}`}
                    >
                      <div className={`transition-[width,background-color] duration-150 ease-out h-2.5 rounded-full ${activeCardIndex === idx ? 'bg-teal-400 w-8' : 'bg-teal-700 group-hover:bg-teal-600'}`} />
                    </button>
                  ))}
                  </div>

                  <div className="mt-8 text-center flex justify-center z-20">
                    <Link to="/doctor-portal" className="inline-flex font-bold text-teal-300 hover:text-white items-center gap-2 text-lg">Explore the Doctor Portal <ArrowUpRight className="w-5 h-5" /></Link>
                  </div>
                </div>
              </div>
            )}

            {/* FLOW 3: Clinic */}
            {activeRole === 'clinic' && (
              <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-200">
                <div className="w-full grid grid-cols-1" aria-live="polite" aria-atomic="true">
                  {/* Card 1 */}
                  <div className={`col-start-1 row-start-1 bg-white border border-stone-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-[transform,opacity,box-shadow] duration-200 ease-out flex flex-col md:flex-row gap-8 items-center ${activeCardIndex === 0 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}>
                    <div className="flex-1 w-full relative z-10">
                      <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6">
                        <Building2 className="w-6 h-6"/>
                      </div>
                      <h3 className="text-xl font-bold text-pine-900 mb-4 tracking-tight">Patient Registration & Queue Management</h3>
                      <ul className="space-y-3 text-stone-600 font-medium text-sm">
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span> Digital pre-registration via Patient App or staff entry</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span> ABHA ID verification and automatic UHID generation</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span> Walk-in check-in, queue management, and real-time status tracking</li>
                      </ul>
                    </div>
                    <div className="flex-1 w-full h-[200px] md:h-full flex items-center justify-center relative bg-stone-50/50 rounded-2xl overflow-hidden border border-stone-100">
                      {activeCardIndex === 0 && (
                        <div className="flex flex-col gap-3 relative w-full px-8">
                          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white p-3 rounded-xl shadow-sm border border-stone-200 flex justify-between items-center z-20">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-pine-100 text-pine-600 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                              <span className="text-sm font-medium text-stone-800">John Doe</span>
                            </div>
                            <span className="text-xs font-bold text-pine-600 bg-pine-50 px-2 py-1 rounded-full">Consulting</span>
                          </motion.div>
                          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 0.8 }} transition={{ delay: 0.3 }} className="bg-white p-3 rounded-xl shadow-sm border border-stone-200 flex justify-between items-center z-10 scale-95 origin-left">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-stone-100 text-stone-500 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                              <span className="text-sm font-medium text-stone-600">Jane Smith</span>
                            </div>
                            <span className="text-xs font-bold text-stone-500 bg-stone-50 px-2 py-1 rounded-full">Waiting</span>
                          </motion.div>
                          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 0.6 }} transition={{ delay: 0.5 }} className="bg-white p-3 rounded-xl shadow-sm border border-stone-200 flex justify-between items-center z-0 scale-90 origin-left">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-stone-100 text-stone-500 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                              <span className="text-sm font-medium text-stone-600">Robert M.</span>
                            </div>
                            <span className="text-xs font-bold text-stone-500 bg-stone-50 px-2 py-1 rounded-full">Waiting</span>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className={`col-start-1 row-start-1 bg-white border border-stone-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-[transform,opacity,box-shadow] duration-200 ease-out flex flex-col md:flex-row gap-8 items-center ${activeCardIndex === 1 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}>
                    <div className="flex-1 w-full relative z-10">
                      <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6">
                        <Building2 className="w-6 h-6"/>
                      </div>
                      <h3 className="text-xl font-bold text-pine-900 mb-4 tracking-tight">Billing & Financial Management</h3>
                      <ul className="space-y-3 text-stone-600 font-medium text-sm">
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span> Itemized digital invoices with GST compliance</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span> Multiple online payment gateways (UPI, cards, net banking)</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span> Financial reporting with daily/weekly/monthly revenue summaries</li>
                      </ul>
                    </div>
                    <div className="flex-1 w-full h-[200px] md:h-full flex items-center justify-center relative bg-stone-50/50 rounded-2xl overflow-hidden border border-stone-100">
                      {activeCardIndex === 1 && (
                        <div className="relative flex flex-col items-center">
                          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white p-5 rounded-2xl shadow-lg border border-stone-200 w-48 relative z-20">
                            <div className="flex justify-between items-center mb-4">
                              <Wallet className="w-6 h-6 text-pine-600"/>
                              <span className="text-lg font-bold text-pine-900">₹1,200</span>
                            </div>
                            <div className="space-y-2">
                              <div className="h-1.5 w-full bg-stone-100 rounded"></div>
                              <div className="h-1.5 w-2/3 bg-stone-100 rounded"></div>
                            </div>
                          </motion.div>
                          <div className="absolute inset-x-0 bottom-0 top-10 flex justify-between px-4 -z-0">
                             <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white p-3 rounded-xl shadow-md border border-stone-200 self-end -rotate-6 translate-y-4">
                               <FileText className="w-6 h-6 text-stone-400" />
                             </motion.div>
                             <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="bg-stone-800 p-3 rounded-xl shadow-md border border-stone-700 self-center rotate-6 translate-y-8 translate-x-4">
                               <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7" /><path d="M3 10h18" /><path d="m16 20 2 2 4-4" /></svg>
                             </motion.div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className={`col-start-1 row-start-1 bg-white border border-stone-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-[transform,opacity,box-shadow] duration-200 ease-out flex flex-col md:flex-row gap-8 items-center ${activeCardIndex === 2 ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'}`}>
                    <div className="flex-1 w-full relative z-10">
                      <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6">
                        <Building2 className="w-6 h-6"/>
                      </div>
                      <h3 className="text-xl font-bold text-pine-900 mb-4 tracking-tight">Integrated Diagnostic Workflow</h3>
                      <ul className="space-y-3 text-stone-600 font-medium text-sm">
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span> Digital catalog of lab tests with affiliated diagnostic center directory</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span> Real-time order tracking from sample collection to results</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span> Automatic electronic delivery of test results directly into record</li>
                      </ul>
                    </div>
                    <div className="flex-1 w-full h-[200px] md:h-full flex items-center justify-center relative bg-stone-50/50 rounded-2xl overflow-hidden border border-stone-100">
                      {activeCardIndex === 2 && (
                        <div className="flex items-center gap-4">
                          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }} className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center">
                            <TestTube className="w-8 h-8 text-indigo-500" />
                          </motion.div>
                          <motion.div className="flex gap-1" initial="hidden" animate="visible" variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                          }}>
                            {[0,1,2].map((i) => (
                              <motion.div key={i} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="w-2 h-2 rounded-full bg-stone-300" />
                            ))}
                          </motion.div>
                          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }} className="relative">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-pine-200 flex items-center justify-center">
                              <FileCheck2 className="w-8 h-8 text-pine-600" />
                            </div>
                            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2, type: "spring" }} className="absolute -top-2 -right-2 w-6 h-6 bg-accent-500 rounded-full border-2 border-white flex items-center justify-center text-white">
                              <CheckCircle2 className="w-4 h-4" />
                            </motion.div>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Indicators */}
                <div className="flex gap-2 mt-8 z-20">
                {[0, 1, 2].map((idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveCardIndex(idx)}
                    className="h-12 w-12 flex items-center justify-center group"
                    aria-label={`Show slide ${idx + 1}`}
                  >
                    <div className={`transition-[width,background-color] duration-150 ease-out h-2.5 rounded-full ${activeCardIndex === idx ? 'bg-amber-600 w-8' : 'bg-stone-300 w-2.5 group-hover:bg-stone-400'}`} />
                  </button>
                ))}
                </div>

                <div className="mt-8 text-center flex justify-center z-20">
                  <Link to="/clinic-management" className="inline-flex font-bold text-amber-700 hover:text-amber-800 items-center gap-2 text-lg">View the Clinic SaaS <ArrowUpRight className="w-5 h-5" /></Link>
                </div>
              </div>
            )}

          </div>
       </div>
    </section>
  );
};
