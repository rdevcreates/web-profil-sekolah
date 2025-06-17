"use client";

import SectionWelcome from "./components/section/home/SectionWelcome";
import SectionArticle from "./components/section/home/SectionArticle";
import SectionExtracurricular from "./components/section/home/SectionExtracurricular";
import SectionFacility from "./components/section/home/SectionFacility";
import WaveDivider from "./components/ui/WaveDivider";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <SectionWelcome />
      <WaveDivider color="blue-50" flip />

      <SectionFacility />
      <WaveDivider color="blue-50" flip />

      <SectionExtracurricular />
      <WaveDivider color="blue-50" flip />

      <SectionArticle />
    </main>
  );
}
