import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type ExperienceCardProps = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  location?: string;
};
function ExperienceCard({
  company,
  role,
  startDate,
  endDate,
  description,
  location,
}: ExperienceCardProps) {
  return (
    <>
      <Card className="lg:w-8/12">
        <CardHeader className="flex md:flex-row md:justify-between">
          <CardTitle>{company}</CardTitle>
          <CardDescription>
            <div>
              {role} |{` ${startDate} - ${endDate}`}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>{description}</CardContent>
        <CardFooter>
          {location && <CardDescription>{location}</CardDescription>}
        </CardFooter>
      </Card>
    </>
  );
}

export default ExperienceCard;
