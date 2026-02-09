import { useState, useMemo } from 'react';
import { Project } from '@/types';
import { FilterTabs } from '../ui/FilterTabs';
import { Section } from '../ui/Section';
import { Github, ExternalLink, Calendar, ChevronRight, Sparkles, Layout as LayoutIcon, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Badge: React.FC<{ children: React.ReactNode; className?: string; variant?: 'default' | 'outline' | 'premium' }> = ({
  children,
  className,
  variant = 'default'
}) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase transition-colors";
  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
    outline: "border border-blue-200 text-blue-800 dark:border-blue-800 dark:text-blue-300",
    premium: "bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
};

export const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const categories = useMemo(() => ['Tous', ...new Set(projects.map(p => p.category))], [projects]);

  const filteredProjects = useMemo(() => {
    return (activeCategory === 'Tous'
      ? projects
      : projects.filter(p => p.category === activeCategory)
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [projects, activeCategory]);

  return (
    <Section
      id="projects"
      title="Réalisations Majeures"
      subtitle="Des solutions enterprise aux applications disruptives"
      className="bg-slate-50/50 dark:bg-slate-950/50"
    >
      <div className="flex justify-center mb-12">
        <FilterTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className={cn(
                "relative h-full flex flex-col rounded-3xl overflow-hidden border transition-all duration-500",
                "bg-white dark:bg-slate-900",
                "border-slate-200 dark:border-slate-800",
                "hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
              )}>
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="premium" className="backdrop-blur-md">
                      {project.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-6">
                    <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                      <Calendar size={14} className="text-blue-400" />
                      {project.date}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                        title="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                          title="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProjectId(selectedProjectId === project.id ? null : project.id)}
                      className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 group/btn"
                    >
                      <span>Case Study</span>
                      <ChevronRight size={16} className={cn("transition-transform", selectedProjectId === project.id && "rotate-90")} />
                    </button>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {selectedProjectId === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-6"
                      >
                        <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/30">
                          <h4 className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-4 flex items-center gap-2">
                            <Sparkles size={14} /> Architecture & Challenge
                          </h4>
                          <ul className="space-y-3">
                            <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                              <span>Conception d'une architecture modulaire garantissant haute disponibilité.</span>
                            </li>
                            <li className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                              <span>Gestion complexe de l'état en temps réel pour une expérience fluide.</span>
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};