import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
type Project = {
  title: string;
  description: string;
  imageSrc: string;
  githubLink: string;
  demoLink: string | null;
};
function ProjectCard({
  title,
  description,
  imageSrc,
  githubLink,
  demoLink,
}: Project) {
  return (
    <Card className="lg:w-11/12">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <div className="flex">
          <Button
            variant="link"
            className="hover:scale-105 transition-all text-xl"
          >
            <a href={githubLink}>
              <FaGithub />
            </a>
          </Button>
          {demoLink && (
            <Button
              variant="link"
              className="hover:scale-110 transition-all text-xl"
            >
              <a href={demoLink}>
                <FaLink />
              </a>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Avatar className="h-32 md:h-64 w-full rounded-none">
          <AvatarImage src={imageSrc} className="cover" />
          <AvatarFallback className="rounded-none text-5xl">
            {title.slice(0, 1)}
          </AvatarFallback>
        </Avatar>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
