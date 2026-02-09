import React from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Globe,
    Award,
    Circle,
    Briefcase,
    GraduationCap,
    Star
} from 'lucide-react';
import { experienceList, educationList, skillCategories, contactInfo } from '@/data';

export const ModernCV: React.FC = () => {
    return (
        <div className="bg-white text-slate-900 p-10 max-w-[900px] mx-auto shadow-2xl font-sans leading-relaxed border border-slate-100">
            {/* Header Section */}
            <header className="flex justify-between items-start border-b-2 border-slate-900 pb-8 mb-8">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter uppercase mb-2">Cheikh Diop</h1>
                    <h2 className="text-xl font-bold text-blue-600 uppercase tracking-widest">Architecte Logiciel Full Stack</h2>
                </div>
                <div className="text-right text-sm space-y-1 font-medium">
                    <p className="flex items-center justify-end gap-2 text-slate-600 font-bold">
                        {contactInfo.email} <Mail size={14} className="text-blue-600" />
                    </p>
                    <p className="flex items-center justify-end gap-2 text-slate-600 font-bold">
                        {contactInfo.phone} <Phone size={14} className="text-blue-600" />
                    </p>
                    <p className="flex items-center justify-end gap-2 text-slate-600">
                        {contactInfo.address} <MapPin size={14} className="text-blue-600" />
                    </p>
                    <p className="flex items-center justify-end gap-2 text-slate-600">
                        github.com/Cheikhydiop <Github size={14} className="text-blue-600" />
                    </p>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-10">
                {/* Main Content (Left) */}
                <div className="col-span-8 space-y-10">
                    {/* Professional Summary */}
                    <section>
                        <h3 className="text-lg font-black uppercase mb-4 border-l-4 border-slate-900 pl-3">Profil Professionnel</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Développeur Full Stack Senior avec une expertise approfondie en **Node.js, TypeScript et React**.
                            Spécialiste des architectures évolutives (**Layered Architecture, SOLID**) et des solutions innovantes (**AI/RAG**).
                            Reconnu pour ma capacité à transformer des besoins métier complexes en produits digitaux performants et sécurisés.
                            Maîtrise complète du cycle de vie DevOps, des tests automatisés et de la qualité logicielle.
                        </p>
                    </section>

                    {/* Key Achievements/Projects */}
                    <section>
                        <h3 className="text-lg font-black uppercase mb-6 border-l-4 border-slate-900 pl-3">Réalisations Stratégiques</h3>
                        <div className="space-y-6">
                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-blue-600">SmartOp360 - ERP Enterprise AI-Ready</h4>
                                    <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">2026</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Conception d'un ERP complet avec intégration IA (RAG) permettant d'interroger les assets via un chatbot intelligent. Architecture NestJS/React.</p>
                                <div className="flex flex-wrap gap-2 text-[9px] font-bold text-slate-400">
                                    <span>#RAG_AI</span> <span>#CLEAN_ARCHITECTURE</span> <span>#REAL_TIME</span>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-blue-600">MBAYAR - Plateforme P2P Betting PWA</h4>
                                    <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">2025</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Système de paris en temps réel sans intermédiaire. Gestion de flux monétaires complexes (Wave/OM) et notifications WebSockets.</p>
                                <div className="flex flex-wrap gap-2 text-[9px] font-bold text-slate-400">
                                    <span>#WEBSOCKETS</span> <span>#PWA</span> <span>#PAYMENT_GATEWAY</span>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-blue-600">FashionStyle - Fashion Tech Marketplace</h4>
                                    <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">2025</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-3">Marketplace unifiée connectant tailleurs et clients. Inclus gestion de mesures, portfolio dynamique et messagerie.</p>
                                <div className="flex flex-wrap gap-2 text-[9px] font-bold text-slate-400">
                                    <span>#MARKETPLACE</span> <span>#ERP_TAILLEUR</span> <span>#PRISMA</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Experience */}
                    <section>
                        <h3 className="text-lg font-black uppercase mb-6 border-l-4 border-slate-900 pl-3">Expériences Professionnelles</h3>
                        <div className="space-y-8 italic">
                            {experienceList.slice(0, 3).map((exp, i) => (
                                <div key={i} className="relative pl-6">
                                    <div className="absolute left-0 top-1.5 w-2 h-2 bg-slate-900 rounded-full" />
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-bold text-base not-italic text-slate-800">{exp.title}</h4>
                                        <span className="text-xs font-bold text-slate-400 uppercase">{exp.date}</span>
                                    </div>
                                    <p className="text-sm font-bold text-blue-600 mb-2 not-italic">{exp.company}</p>
                                    <ul className="space-y-1.5">
                                        {exp.achievements.map((ach, j) => (
                                            <li key={j} className="text-xs text-slate-600 flex items-start gap-2 not-italic">
                                                <span className="mt-1 text-slate-300">•</span>
                                                {ach}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar (Right) */}
                <div className="col-span-4 bg-slate-50 p-6 rounded-2xl h-fit border border-slate-100">
                    {/* Skills / Stack */}
                    <section className="mb-10">
                        <h3 className="text-sm font-black uppercase mb-6 flex items-center gap-2">
                            <Star size={16} className="text-blue-600" /> Technologies Clés
                        </h3>
                        <div className="space-y-6">
                            {skillCategories.slice(0, 5).map((cat, i) => (
                                <div key={i}>
                                    <h4 className="text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">{cat.title}</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cat.skills.map((skill, j) => (
                                            <span key={j} className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[9px] font-bold text-slate-700">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* DevOps & Tools */}
                    <section className="mb-10">
                        <h3 className="text-sm font-black uppercase mb-6 flex items-center gap-2">
                            <Briefcase size={16} className="text-blue-600" /> DevOps & Outils
                        </h3>
                        <ul className="space-y-2">
                            <li className="text-[10px] font-bold text-slate-600 flex items-center gap-2">
                                <Circle size={4} className="fill-blue-600 text-blue-600" /> Git / GitHub (CI/CD Actions)
                            </li>
                            <li className="text-[10px] font-bold text-slate-600 flex items-center gap-2">
                                <Circle size={4} className="fill-blue-600 text-blue-600" /> Docker & Containerisation
                            </li>
                            <li className="text-[10px] font-bold text-slate-600 flex items-center gap-2">
                                <Circle size={4} className="fill-blue-600 text-blue-600" /> Vercel, Render, Amazon EC2
                            </li>
                            <li className="text-[10px] font-bold text-slate-600 flex items-center gap-2">
                                <Circle size={4} className="fill-blue-600 text-blue-600" /> Jira, Trello (Méthode Agile)
                            </li>
                        </ul>
                    </section>

                    {/* Best Practices */}
                    <section className="mb-10">
                        <h3 className="text-sm font-black uppercase mb-6 flex items-center gap-2">
                            <Award size={16} className="text-blue-600" /> Bonnes Pratiques
                        </h3>
                        <ul className="space-y-2">
                            <li className="text-[10px] font-bold text-slate-600 flex items-center gap-2">
                                <Circle size={4} className="fill-emerald-600 text-emerald-600" /> Principes SOLID & Clean Code
                            </li>
                            <li className="text-[10px] font-bold text-slate-600 flex items-center gap-2">
                                <Circle size={4} className="fill-emerald-600 text-emerald-600" /> Sécurisation & Validation API
                            </li>
                            <li className="text-[10px] font-bold text-slate-600 flex items-center gap-2">
                                <Circle size={4} className="fill-emerald-600 text-emerald-600" /> Tests Cypress & Jest
                            </li>
                            <li className="text-[10px] font-bold text-slate-600 flex items-center gap-2">
                                <Circle size={4} className="fill-emerald-600 text-emerald-600" /> Documentation Swagger/OpenAPI
                            </li>
                        </ul>
                    </section>

                    {/* Education */}
                    <section>
                        <h3 className="text-sm font-black uppercase mb-6 flex items-center gap-2">
                            <GraduationCap size={16} className="text-blue-600" /> Formation
                        </h3>
                        <div className="space-y-4">
                            {educationList.slice(0, 2).map((edu, i) => (
                                <div key={i} className="border-l-2 border-slate-200 pl-3">
                                    <h4 className="text-[10px] font-bold text-slate-900 leading-tight">{edu.title}</h4>
                                    <p className="text-[9px] font-medium text-slate-500 mt-1">{edu.institution}</p>
                                    <p className="text-[8px] font-bold text-blue-600 uppercase mt-1">{edu.date}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 pt-8 border-t border-slate-100 text-center">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                </p>
            </footer>
        </div>
    );
};
