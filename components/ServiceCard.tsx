import Link from "next/link";
import { IconType } from "react-icons";
import { MdElectricalServices, MdBuild, MdBuildCircle } from "react-icons/md";
import { PiEngine } from "react-icons/pi";
import { RiRoadsterLine } from "react-icons/ri";

const iconMap: Record<string, IconType> = {
  MdElectricalServices,
  PiEngine,
  MdBuild,
  RiRoadsterLine,
  MdBuildCircle,
};

type Props = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export default function ServiceCard({ slug, title, description, icon }: Props) {
  const Icon = iconMap[icon] ?? MdBuild;
  return (
    <Link
      href={`/services/${slug}`}
      className="group h-full flex flex-col rounded-xl border border-black/5 p-6 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 will-change-transform"
    >
      <div className="h-12 w-12 rounded-lg bg-secondary/40 text-[#0C2D48] grid place-items-center">
        <Icon size={24} />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-foreground/80 line-clamp-3">{description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-primary font-medium mt-auto">
        En savoir plus
        <svg width="16" height="16" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-0.5"><path fill="currentColor" d="M13 5l7 7l-7 7v-4H4v-6h9z"/></svg>
      </span>
    </Link>
  );
}


