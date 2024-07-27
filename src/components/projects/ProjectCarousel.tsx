import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/projects/ProjectCard";
const myProjects = [
  {
    title: "Good Recipes",
    description:
      "Online recipe sharing platform, leverages Tanstack Query and Zustand for efficient data handling and state management, providing a smooth user experience for food enthusiasts to interact with and contribute recipes.",
    imageSrc:
      "https://res.cloudinary.com/duznb5jsl/image/upload/v1722061184/good-recipes_wd0jkf.png",
    githubLink: "https://github.com/jnanendra24/good-recipes",
    demoLink: "https://good-recipes-ashy.vercel.app/",
  },
  {
    title: "Web Snap",
    description:
      "Simple web screenshot tool leveraging Screenshot One API. Instantly captures high-quality images of any website with a simple URL input. Ideal for content creators, designers, and developers needing quick, accurate web captures.",
    imageSrc:
      "https://res.cloudinary.com/duznb5jsl/image/upload/v1722061179/web-snap_brh564.png",
    githubLink: "https://github.com/jnanendra24/web_snap",
    demoLink: "https://web-snap.vercel.app/",
  },
  {
    title: "Fake Review Detection",
    description:
      "Led the development of a sophisticated fake review detection system using XGBoost and BERT. Engineered advanced features including sentiment analysis and typographical error detection, achieving 86% accuracy on Amazon review data.",
    imageSrc:
      "https://res.cloudinary.com/duznb5jsl/image/upload/v1722061176/fake-review-detection_s3dtnb.png",
    githubLink: "https://github.com/jnanendra24/fake-reviews",
    demoLink: null,
  },
  {
    title: "Blog Website",
    description:
      "Full-stack blog website with user authentication and authorization, leveraging Next.js and MongoDB. Features include user registration, login, and profile management, with the ability to create, edit, and delete blog posts.",
    imageSrc:
      "https://res.cloudinary.com/duznb5jsl/image/upload/v1722061176/blog-website_e91ut1.png",
    githubLink: "https://github.com/jnanendra24/indhra_blogs",
    demoLink: "https://indhra-blogs.vercel.app/",
  },
];
function ProjectCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-96 md:w-10/12"
    >
      <CarouselContent>
        {myProjects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <ProjectCard {...project} key={project.title} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}

export default ProjectCarousel;
