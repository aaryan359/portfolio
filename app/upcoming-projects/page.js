import UpcomingProjects from "../upcomingProjects/index";

export const metadata = {
  title: "Upcoming Projects – Aaryan Meena",
  description: "Check out the projects and concepts currently in active design and building phase by Aaryan Meena.",
};

export default function Page() {
  return (
    <div className="py-10">
      <UpcomingProjects />
    </div>
  );
}
