import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@shared/schema";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-muted aspect-[4/3] cursor-pointer border border-white/5 shadow-lg"
    >
      {/* Background Image with Fallback */}
      <img
        src={project.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6 md:translate-y-4 md:group-hover:translate-y-0">
        <div className="transform transition-transform duration-300">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary mb-3 backdrop-blur-sm border border-primary/20">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2 font-heading">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2 md:line-clamp-none">
            {project.description}
          </p>
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-white transition-colors"
            >
              Ver Projeto <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
