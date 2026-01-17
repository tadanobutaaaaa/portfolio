import ProjectCard from "../features/Works/ProjectCard";

export default function Works() {
    return (
        <div className="flex flex-col items-center gap-5">
            <h2 className="text-4xl font-bold">Works</h2>
            <div>
                {/* for文でProjectCardをまわす */}
                <ProjectCard 
                title="VRC-Avatar-Library"
                imageSrc="/images/thumbnails/VRC-Avatar-Library.png"
                year="2025"
                categories={["Desktop App", "Chrome-Extension", "Tool", "VRChat", "Avatar", "Library"]}
                />
            </div>
        </div>
    );
}