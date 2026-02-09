import { useState } from 'react';
import {
  FileText,
  Download,
  Briefcase,
  GraduationCap,
  Trophy,
  Globe,
  Zap,
  CheckCircle2,
  Calendar,
  MapPin,
  ExternalLink,
  X,
  Printer,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section } from '../ui/Section';
import {
  experienceList,
  skillCategories,
  educationList,
  contactInfo,
  certificationList
} from '@/data';
import { ModernCV } from './ModernCV';

const CV = () => {
  const [showModernCV, setShowModernCV] = useState(false);
  const cvPath = 'https://drive.google.com/file/d/1-2r-uOqoQTiWL0tfx-aG9UeEkiyJJPgM/view';

  const handlePrint = () => {
    window.print();
  };

  const handleViewCV = () => {
    window.open(cvPath, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'DIOP_CHEIKH_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section
      id="cv"
      title="Mon Curriculum Vitae"
      subtitle="Un aperçu clair de mon parcours professionnel et de mes compétences"
      className="bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Resume Container */}
        <div className={cn(
          "relative rounded-3xl overflow-hidden shadow-2xl",
          "bg-white dark:bg-slate-900",
          "border border-slate-200 dark:border-slate-800"
        )}>
          {/* Header Banner - Premium Gradient */}
          <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500" />

          <div className="p-8 md:p-12">
            {/* Top Bar: Profile & Action Buttons */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">DIOP CHEIKH</h3>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Développeur Full-Stack & Expert IoT
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mt-2">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {contactInfo.address}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {contactInfo.availability}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleViewCV}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all",
                    "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200",
                    "hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95"
                  )}
                >
                  <FileText className="w-5 h-5" />
                  Consulter (PDF)
                </button>
                <button
                  onClick={() => setShowModernCV(true)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all",
                    "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25",
                    "hover:scale-105 active:scale-95"
                  )}
                >
                  <Sparkles className="w-5 h-5" />
                  Style Moderne
                </button>
                <button
                  onClick={handleDownload}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all shadow-lg",
                    "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-blue-500/25"
                  )}
                >
                  <Download className="w-5 h-5" />
                  Télécharger
                </button>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Left Column: Summary & Skills */}
              <div className="lg:col-span-1 space-y-10">
                {/* Profile Summary */}
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                    <Globe className="w-4 h-4" /> À Propos
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                    Développeur passionné spécialisé en solutions Full-Stack et IoT.
                    Expert NestJS, React et Flutter, je crée des architectures performantes
                    et sécurisées (RBAC, SOLID) pour des dashboard intelligents et
                    applications métiers à fort impact.
                  </p>
                </div>

                {/* Technical Strengths */}
                <div className="space-y-6">
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                    <CheckCircle2 className="w-4 h-4" /> Expertise Technique
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategories.slice(0, 3).flatMap(cat => cat.skills.slice(0, 4)).map((skill, i) => (
                      <span
                        key={i}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide",
                          "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
                          "border border-blue-100 dark:border-blue-800/50"
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                    <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800/50">
                      IoT Architecture
                    </span>
                  </div>
                </div>

                {/* Education Section (Compact) */}
                <div className="space-y-6">
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                    <GraduationCap className="w-4 h-4" /> Éducation
                  </h4>
                  <div className="space-y-4">
                    {educationList.slice(0, 2).map((edu) => (
                      <div key={edu.id} className="relative pl-4 border-l border-slate-200 dark:border-slate-800">
                        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">{edu.date}</p>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{edu.title}</h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{edu.institution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Experience & Certifications */}
              <div className="lg:col-span-2 space-y-12">
                {/* Work Experience */}
                <div className="space-y-8">
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                    <Briefcase className="w-4 h-4" /> Expériences Marquantes
                  </h4>
                  <div className="space-y-8">
                    {experienceList.slice(0, 2).map((exp) => (
                      <div key={exp.id} className="group flex gap-4">
                        <div className="hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 ring-4 ring-white dark:ring-slate-900 z-10 transition-transform group-hover:scale-110">
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <div className="w-0.5 h-full bg-slate-100 dark:bg-slate-800 -mt-1" />
                        </div>
                        <div className="flex-1 pb-2">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                            <h5 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {exp.title}
                            </h5>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                              {exp.date}
                            </span>
                          </div>
                          <p className="text-base font-semibold text-slate-700 dark:text-slate-200 mb-3">{exp.company} • {exp.location}</p>
                          <ul className="space-y-2">
                            {exp.achievements.map((ach, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                {ach}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications & Awards */}
                <div className="space-y-6 pt-4">
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                    <Trophy className="w-4 h-4" /> Certifications & Impact
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certificationList.map((cert) => (
                      <div key={cert.id} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                        <div className="flex items-start justify-between mb-2">
                          <Trophy className="w-6 h-6 text-amber-500" />
                          <span className="text-[10px] font-bold text-slate-400">{cert.date}</span>
                        </div>
                        <h6 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-500 transition-colors">{cert.title}</h6>
                        <p className="text-xs text-slate-500 dark:text-slate-404">{cert.platform}</p>
                      </div>
                    ))}

                    {/* Impact Box */}
                    <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">Impact Clé</span>
                      </div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        +40% d'efficacité opérationnelle réalisée sur la solution de sécurité physique Sonatel.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
                  >
                    Discutons de votre prochain projet <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Decorative Hint */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400 dark:text-slate-500 italic">
            "Passionné par l'amélioration continue et l'innovation technologique."
          </p>
        </div>
      </div>

      {/* Modern CV Modal */}
      {showModernCV && (
        <div id="modern-cv-modal" className="fixed inset-0 z-[100] overflow-y-auto bg-slate-900/95 backdrop-blur-2xl p-4 md:p-10 print:p-0 print:bg-white print:static">
          <button
            onClick={() => setShowModernCV(false)}
            className="fixed top-6 right-10 z-[110] p-3 rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-colors shadow-2xl print:hidden animate-in fade-in zoom-in duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-[900px] mx-auto pb-10 print:pb-0 animate-in slide-in-from-bottom-10 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 print:hidden">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <Sparkles className="text-emerald-400" />
                  Design Premium
                </h2>
                <p className="text-slate-400 text-sm mt-1">Prêt pour impression ou export PDF</p>
              </div>
              <button
                onClick={handlePrint}
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-2xl shadow-blue-500/40 active:scale-95"
              >
                <Printer className="w-5 h-5 group-hover:animate-bounce" />
                Imprimer / Sauvegarder PDF
              </button>
            </div>

            <div className="bg-white shadow-2xl rounded-sm overflow-hidden print:shadow-none print:rounded-none">
              <ModernCV />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #modern-cv-modal, #modern-cv-modal * {
            visibility: visible;
          }
          #modern-cv-modal {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
            background: white;
          }
        }
      `}</style>
    </Section>
  );
};

export default CV;

