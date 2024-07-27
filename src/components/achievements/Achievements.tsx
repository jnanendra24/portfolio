import AchivementsCarousel from "./AchivementsCarousel";

function Achievements() {
  return (
    <>
      <section
        id="achievements"
        className="h-screen pt-[9vh] flex flex-col items-center gap-4"
      >
        <h2 className="text-4xl text-balance text-center">
          Achievements & Certifications
        </h2>
        <AchivementsCarousel />
      </section>
    </>
  );
}

export default Achievements;
