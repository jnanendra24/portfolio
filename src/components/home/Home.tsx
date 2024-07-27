import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const socialLinks = [
  {
    href: "https://github.com/jnanendra24/",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/jnanendra24/",
    icon: <FaLinkedin />,
  },
  {
    href: "mailto:jnanendra2424@gmail.com",
    icon: <FaEnvelope />,
  },
];
export default function Home() {
  return (
    <>
      <section
        id="home"
        className="h-[91vh] pt-4 px-4 md:px-0 md:w-7/12 mx-auto flex flex-col md:flex-row items-center gap-8 justify-center"
      >
        <div className="flex flex-col items-center gap-3">
          <Avatar className="size-48">
            <AvatarImage
              src={import.meta.env.VITE_ME_PNG_SRC}
              alt="Jnanendra Koppineedi"
              className="z-0"
            />
            <AvatarFallback className="text-4xl">J</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xl">Hello, This is</span>
          <TypeAnimation
            className="text-4xl font-bold text-balance"
            sequence={["Koppineedi Jnanendra Venkata Kumar"]}
            wrapper="h1"
            speed={50}
            repeat={1}
            cursor={false}
          />
          <p className="text-lg">
            Dedicated full stack developer with a focus on MERN stack and
            machine learning technologies combining academic knowledge with
            practical implementation experience.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                className="text-xl hover:scale-110 transition-all"
                key={index}
                href={link.href}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
