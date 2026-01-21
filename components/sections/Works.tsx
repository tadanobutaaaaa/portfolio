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
        categories: ["Desktop App", "Chrome-Extension"]
    },
    {
        key: "portfolio",
        title: "portfolio",
        imageSrc: "",
        year: "2026",
        categories: ["website"]
    }
]

export default function Works() {
    return (
        <div className="flex flex-col items-center gap-5">
            <h2 className="text-4xl font-bold">Works</h2>
            <div className="flex gap-6">
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