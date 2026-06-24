import Blogs from "./index";

export const metadata = {
  title: "Blogs – Aaryan Meena",
  description: "Read engineering blogs and technical articles written by Aaryan Meena.",
};

export default function Page() {
  return (
    <div className="py-10">
      <Blogs />
    </div>
  );
}
