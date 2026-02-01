import ProjectCard from "../features/Works/ProjectCard";

type Project = {
    key: string
    title: string
    imageSrc: string
    year: string
    categories: string[]
};

const projects: Project[] = [
    {
        key: "vrc-avatar-library",
        title: "VRC-Avatar-Library",
        imageSrc: "/images/thumbnails/VRC-Avatar-Library.png",
        year: "2025",
        categories: ["Desktop-App", "Chrome-Extension"]
    },
    {
        key: "portfolio",
        title: "portfolio",
        imageSrc: "/images/thumbnails/inProduction.png",
        year: "2026",
        categories: ["Website"]
    },
    {
        key: "VRC-GameWorld",
        title: "VRC-GameWorld",
        imageSrc: "/images/thumbnails/inProduction.png",
        year: "2026-2027?",
        categories: ["VRChat", "Game"]
    }
]

export default function Works() {
    return (
        <div className="flex flex-col items-center gap-30">
            <h2 className="text-4xl font-bold">Works</h2>
            <div className="flex gap-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {projects.map(project => (
                    <ProjectCard 
                        key={project.key}
                        title={project.title}
                        imageSrc={project.imageSrc}
                        year={project.year}
                        categories={project.categories}
                    />
                ))}
            </div>
        </div>
    );
}