import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const mySkills = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "CPP", "Java"],
  },
  {
    title: "Libraries",
    skills: ["React JS", "Shadcn-UI", "Tailwind CSS", "Pandas", "Numpy"],
  },
  { title: "FrameWorks", skills: ["Next JS", "Express JS", "Flask"] },
  { title: "Tools", skills: ["Git", "Github", "Vs Code"] },
];
const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="pt-[9vh] flex flex-col items-center justify-center gap-4"
      >
        <h2 className="text-4xl">Techincal Skills</h2>
        <div className="w-fit mx-auto gap-4 grid grid-cols-2 lg:grid-cols-4 place-items-center">
          {mySkills.map((techSkill) => (
            <Card className="w-full" key={techSkill.title}>
              <CardHeader>
                <CardTitle>{techSkill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {techSkill.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
