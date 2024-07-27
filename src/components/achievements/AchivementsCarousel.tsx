import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AchivementCard from "@/components/achievements/AchivementCard";
const myAchievements = [
  {
    title: "Data Science for Engineers",
    description:
      "Certification with an impressive score of 82%, distinguishing as one of the top scorers.",
    score: "82%",
    imageSrc:
      "https://res.cloudinary.com/duznb5jsl/image/upload/v1722063127/nptel_z8lfq5.png",
    link: "/Data Science For Engineers.pdf",
  },
  {
    title: "Programming in Java",
    description:
      "Successfully completed the course with an impressive score of 78% earning Silver Badge.",
    score: "78%",
    imageSrc:
      "https://res.cloudinary.com/duznb5jsl/image/upload/v1722063127/nptel_z8lfq5.png",
    link: "https://res.cloudinary.com/duznb5jsl/image/upload/v1722063232/Programming_In_Java_rnrtqj.jpg",
  },
  {
    title: "Programming, DSA using Python",
    description:
      "Successfully completed the course with an impressive score of 78% earning Silver Badge.",
    score: "78%",
    imageSrc:
      "https://res.cloudinary.com/duznb5jsl/image/upload/v1722063127/nptel_z8lfq5.png",
    link: "https://res.cloudinary.com/duznb5jsl/image/upload/v1722063399/Data_Science_For_Engineers_page-0001_nu4zz6.jpg",
  },
];
function AchivementsCarousel() {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-screen md:w-10/12 mx-4"
      >
        <CarouselContent>
          {myAchievements.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <AchivementCard {...project} key={project.title} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </>
  );
}

export default AchivementsCarousel;
