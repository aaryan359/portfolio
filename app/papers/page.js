import Papers from "./index";

export const metadata = {
  title: "Publications & Papers – Aaryan Meena",
  description: "Browse the machine learning and engineering papers published by Aaryan Meena.",
};

export default function Page() {
  return (
    <div className="py-10">
      <Papers />
    </div>
  );
}
