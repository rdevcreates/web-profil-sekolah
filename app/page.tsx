"use client";

import SectionWelcome from "./components/section/home/SectionWelcome";
import SectionHistory from "./components/section/home/SectionHistory";
import SectionArticle from "./components/section/home/SectionArticle";
import SectionExtracurricular from "./components/section/home/SectionExtracurricular";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SectionWelcome/>
      <SectionHistory/>
      <SectionExtracurricular/>
      <SectionArticle/>
    </div>
  );
}
