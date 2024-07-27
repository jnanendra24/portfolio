import ExperienceCard from "./ExperienceCard";
const myExperiences = [
  {
    company: "Trinwo Solutions",
    role: "Student Intern",
    startDate: "May 2024",
    endDate: "August 2024",
    description:
      "Spearheaded the development of an advanced machine learning model combining XGBoost and BERT (Bidirectional Encoder Representations from Transformers) for the detection of fraudulent or misleading online product reviews.",
    location: "Visakhapatanam, India",
  },
  {
    company: "Blackbuck Engineers",
    role: "Full Stack Developer",
    startDate: "June 2024",
    endDate: "August 2024",
    description:
      "Built URL shortening service using React and Django REST FrameWork.",
    location: "Remote",
  },
  {
    company: "Henotic Technology",
    role: "Machine Learning Intern",
    startDate: "July 2023",
    endDate: "September 2023",
    description:
      "Developed a machine learning model to predict the price of Houses using different ML algorithms.",
    location: "Remote",
  },
];
function Experience() {
  return (
    <>
      <section
        id="experience"
        className="pt-[9vh] flex flex-col justify-center items-center gap-4"
      >
        <h2 className="text-4xl">Experience</h2>
        {myExperiences.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </section>
    </>
  );
}

export default Experience;
