import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  color: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  icon,
  link,
  color,
  tags,
}: ProjectCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="glass glass-hover group cursor-pointer rounded-2xl p-8 smooth-transition h-full flex flex-col justify-between relative overflow-hidden">
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition`}
          style={{
            background: `radial-gradient(circle at center, ${color}20, transparent)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6 text-5xl">{icon}</div>

          {/* Title */}
          <h2 className={`text-3xl font-bold mb-3`}>{title}</h2>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-3 py-1 rounded-full glass 
                   "bg-opacity-20"
                `}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Link arrow */}
        <div className="relative z-10 flex items-center gap-2 text-sm font-semibold pt-4 border-t border-white/10">
          <span>Visit Website</span>
          <span className={`inline-block smooth-transition `}>→</span>
        </div>
      </div>
    </Link>
  );
}
