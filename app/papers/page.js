import Papers from "./index";

export const metadata = {
  title: "Research Papers – Aaryan Meena",
  description: "Browse the research and machine learning papers written by Aaryan Meena.",
};

export default function Page() {
  return (
    <div className="py-10">
      <Papers />
    </div>
  );
}
