import ProjectCarousel from "@/components/projects/ProjectCarousel";
function Projects() {
  return (
    <>
      <section
        id="projects"
        className="h-screen pt-[9vh]  flex flex-col items-center gap-4"
      >
        <h2 className="text-4xl">Projects</h2>
        <ProjectCarousel />
      </section>
    </>
  );
}

export default Projects;
