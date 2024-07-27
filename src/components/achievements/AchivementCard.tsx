import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaLink } from "react-icons/fa";
type AchivementCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  link: string | null;
};
function AchivementCard({
  title,
  description,
  imageSrc,
  link,
}: AchivementCardProps) {
  return (
    <Card className="lg:w-11/12">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <div className="flex">
          {link && (
            <Button
              variant="link"
              className="hover:scale-110 transition-all text-xl"
            >
              <a href={link}>
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

export default AchivementCard;
