import { Button } from "@/components/ui/button";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "@/components/theme-provider";
const navas = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];
import { useState } from "react";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const { theme, setTheme } = useTheme();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="lg:h-[9vh] text-foreground p-2 sticky top-0 z-50 bg-background md:bg-transparent">
        <div className="grid grid-cols-2 place-items-center md:mx-auto md:flex md:justify-between md:items-center">
          <a href="#home">
            <h1 className="text-2xl">Jnanendra</h1>
          </a>
          <div className="md:hidden place-self-end">
            <Button onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
          <div
            className={`md:flex flex-col md:flex-row col-span-2 md:items-center place-self-end items-end ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            {navas.map((a) => (
              <Button
                variant="link"
                onClick={() => {
                  toggleMenu();
                }}
                key={a.href}
              >
                <a href={a.href}>{a.label}</a>
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <MdSunny /> : <FaMoon />}
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
