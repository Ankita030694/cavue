"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "../../component/navbar";
import FAQSection from "../../component/faq";
import Footer from "../../component/footer";

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  livePreviewUrl?: string;
  industry: string;
  services: string;
  year: string;
  accentColor: string; // Used for cursive tags or highlights
  challenge: {
    heading: string;
    description: string;
  };
  strategy: {
    heading: string;
    description: string;
    images: [string, string];
  };
  results: {
    heading: string;
    description: string;
    images: [string, string];
    metrics: [
      { value: string; label: string; bg: string; text?: string },
      { value: string; label: string; bg: string; text?: string },
      { value: string; label: string; bg: string; text?: string }
    ];
  };
}

export const projectsDatabase: Record<string, ProjectDetail> = {
  "mouliq": {
    slug: "mouliq",
    title: "Mouliq",
    subtitle: "A Story Rooted in One Origin.",
    heroImage: "/Mouliq/Mouli Logo.png",
    industry: "FMCG",
    services: "Brand Identity · Logo Design · Packaging Design",
    year: "2026",
    accentColor: "text-[#A28CFF]",
    challenge: {
      heading: "The Objective",
      description: "The aim was to translate Mouliq's single-origin philosophy into a simple and recognisable visual identity. The branding needed to communicate the idea behind the brand without making the design unnecessarily complicated, while extending naturally across its product packaging.",
    },
    strategy: {
      heading: "Strategy and creative execution",
      description: "The logo was designed to remain simple and aligned with Mouliq's tonality. Rather than relying on unnecessary visual elements, the identity incorporates an icon representing the idea of a single origin being brought to people. With the brand identity established, Cavue developed product packaging that carried the same design direction forward.",
      images: [
        "/Mouliq/mouliq 2.png",
        "/Mouliq/mouliq 3.png",
      ],
    },
    results: {
      heading: "A Cohesive Brand Language",
      description: "The focus throughout the project was alignment. From the central identity to the packaging, every element was approached as part of the same brand system. This helped translate Mouliq's single-origin proposition into a unified visual direction rather than treating the logo and packaging as separate design exercises.",
      images: [
        "/Mouliq/mouliq 4.png",
        "/Mouliq/Mouli Logo.png",
      ],
      metrics: [
        {
          value: "100%",
          label: "Visual Consistency",
          bg: "bg-[#9C84FF] text-[#111827]",
        },
        {
          value: "1",
          label: "Unified Identity System",
          bg: "bg-[#F9A048] text-[#111827]",
        },
        {
          value: "Clear",
          label: "Single-Origin Proposition",
          bg: "bg-[#0EA5E9] text-white",
        },
      ],
    },
  },
  "pp-green-city": {
    slug: "pp-green-city",
    title: "PP Green City",
    subtitle: "Building a Digital Address.",
    heroImage: "/PP green/149.png",
    industry: "Real Estate",
    services: "Website Strategy · UI/UX Design · Website Development",
    year: "2026",
    accentColor: "text-[#FB7185]",
    challenge: {
      heading: "The Objective",
      description: "The objective was to establish a professional online presence that would showcase PP Green City's offering, organise relevant project information, and provide visitors with a straightforward way to understand the brand and its proposition.",
    },
    strategy: {
      heading: "Website Structure & Planning",
      description: "Cavue developed the visual direction and page layouts to present PP Green City in a professional, consistent manner. The focus was on clear information hierarchy, intuitive navigation, and a design approach suited to the real estate category.",
      images: [
        "/PP green/150.png",
        "/PP green/151.png",
      ],
    },
    results: {
      heading: "Testing & Final Delivery",
      description: "The website was reviewed against the agreed scope, with attention to page presentation, navigation, content, and functionality. The completed website brought PP Green City's brand and real estate offering into one accessible digital destination.",
      images: [
        "/PP green/149.png",
        "/PP green/150.png",
      ],
      metrics: [
        {
          value: "100%",
          label: "Scope Delivered",
          bg: "bg-[#FDA4AF] text-[#111827]",
        },
        {
          value: "Clear",
          label: "Information Hierarchy",
          bg: "bg-[#FBBF24] text-[#111827]",
        },
        {
          value: "Intuitive",
          label: "User Navigation",
          bg: "bg-[#38BDF8] text-white",
        },
      ],
    },
  },
  "kalky-by-nitika": {
    slug: "kalky-by-nitika",
    title: "Kalky by Nitika",
    subtitle: "Festive Elegance, Captured.",
    heroImage: "/Kalky by Nitika/1.png",
    industry: "Fashion Label",
    services: "Creative Direction · Fashion Shoot · Content Production",
    year: "2026",
    accentColor: "text-[#60A5FA]",
    challenge: {
      heading: "The Objective",
      description: "The objective was to create content for the festive collection that felt elegant, refined, and aligned with the brand. The visual storytelling needed to showcase the outfits while capturing the occasion, mood, and sophistication associated with festive dressing.",
    },
    strategy: {
      heading: "Creative Direction & Styling",
      description: "We established a visual direction around elegance and festive sophistication. The visual approach centred on presenting the garments with care, allowing their silhouettes, embroidery, textures, and design details to remain in focus.",
      images: [
        "/Kalky by Nitika/2.png",
        "/Kalky by Nitika/3.png",
      ],
    },
    results: {
      heading: "A Cohesive Visual Story",
      description: "The creative direction was built around maintaining consistency across the collection's visual presentation. The intention was to create content that could communicate the festive mood while remaining true to Kalky by Nitika's brand identity.",
      images: [
        "/Kalky by Nitika/4_.png",
        "/Kalky by Nitika/5.png",
      ],
      metrics: [
        {
          value: "Elegant",
          label: "Visual Storytelling",
          bg: "bg-[#93C5FD] text-[#111827]",
        },
        {
          value: "Refined",
          label: "Brand Identity",
          bg: "bg-[#FCD34D] text-[#111827]",
        },
        {
          value: "Detailed",
          label: "Garment Presentation",
          bg: "bg-[#2563EB] text-white",
        },
      ],
    },
  },
  "galaxy-sawasdee": {
    slug: "galaxy-sawasdee",
    title: "Galaxy & Sawasdee Group",
    subtitle: "Building a Stronger Digital Presence for a Real Estate Group",
    heroImage: "/Galaxy Sawasdee/146.png",
    industry: "Real Estate",
    services: "Social Media Management · Content Strategy · Personal Branding · Digital Growth",
    year: "2026",
    accentColor: "text-[#A28CFF]",
    challenge: {
      heading: "The Objective",
      description: "To establish a more cohesive digital identity for the group, strengthen its online visibility, and build a social media presence that reflected the larger organisation rather than focusing solely on individual projects.",
    },
    strategy: {
      heading: "Building a Group-Level Digital Identity",
      description: "We shaped the content approach to balance project-led communication with brand-building content. One of the key initiatives was introducing Director’s Desk, a content IP featuring the Managing Director to share insights and perspectives.",
      images: [
        "/Galaxy Sawasdee/147.png",
        "/Galaxy Sawasdee/148.png",
      ],
    },
    results: {
      heading: "Growing the Brand’s Digital Presence",
      description: "Through consistent social media management and a more considered content direction, we focused on strengthening the group’s visibility and building a recognisable presence over time, balancing property updates with brand-building.",
      images: [
        "/Galaxy Sawasdee/146.png",
        "/Galaxy Sawasdee/147.png",
      ],
      metrics: [
        {
          value: "Cohesive",
          label: "Digital Identity",
          bg: "bg-[#9C84FF] text-[#111827]",
        },
        {
          value: "New IP",
          label: "Director's Desk Series",
          bg: "bg-[#F97316] text-white",
        },
        {
          value: "Stronger",
          label: "Online Visibility",
          bg: "bg-[#06B6D4] text-white",
        },
      ],
    },
  },
  "patanjali": {
    slug: "patanjali",
    title: "Patanjali",
    subtitle: "Taking Everyday Products to Audiences Across India",
    heroImage: "/Patanjali/cherish story (3).png",
    industry: "FMCG",
    services: "Influencer Marketing · Creator Strategy · Pan-India Campaign Management",
    year: "2026",
    accentColor: "text-[#FACC15]",
    challenge: {
      heading: "The Objective",
      description: "To strengthen product visibility through influencer marketing, reaching diverse audiences across regions, languages, and content categories while maintaining consistency with the brand.",
    },
    strategy: {
      heading: "Influencer Strategy & Outreach",
      description: "We identified and engaged relevant creators across content categories, audience profiles, languages, and regions, aligning creator selection with product relevance and campaign objectives.",
      images: [
        "/Patanjali/cherish story (3).png",
        "/Patanjali/cherish story (4).png",
      ],
    },
    results: {
      heading: "Project Impact",
      description: "From creator outreach and briefing to coordination, content approvals, and publishing, we managed the campaign process hands-on, working as an extended influencer marketing partner.",
      images: [
        "/Patanjali/cherish story (4).png",
        "/Patanjali/cherish story (3).png",
      ],
      metrics: [
        {
          value: "5M+",
          label: "Views",
          bg: "bg-[#FDE047] text-[#111827]",
        },
        {
          value: "₹0.25",
          label: "CPV",
          bg: "bg-[#A78BFA] text-[#111827]",
        },
        {
          value: "Pan-India",
          label: "Reach",
          bg: "bg-[#10B981] text-white",
        },
      ],
    },
  },
};

export default function ProjectSlugPage() {
  const params = useParams();
  const slugParam = typeof params?.slug === "string" ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : "";
  const project = projectsDatabase[slugParam] || projectsDatabase["novaskin"];

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0C3852] font-sans selection:bg-[#3CA8D9] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Case Study Article */}
      <main className="w-full pt-4 sm:pt-6 pb-20 sm:pb-28">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar with Back Button */}
          <div className="flex items-center justify-between py-4 mb-4">
            <Link
              href="/projectpage"
              className="inline-flex items-center gap-2 px-5 py-2 bg-white text-[#0C3852] font-medium text-xs sm:text-sm border border-black/[0.06] hover:bg-[#F3F4F6] transition-colors shadow-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back</span>
            </Link>

            <span className="font-gochi text-[#2B7DA8] text-base sm:text-lg tracking-wider">
              / CASE STUDY
            </span>
          </div>

          {/* 1. Giant Hero Card */}
          <div className="relative w-full aspect-[4/3.2] sm:aspect-[16/10] md:aspect-[16/9.5] overflow-hidden bg-[#0C4568] shadow-md border border-black/[0.04] mb-4">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              className="object-cover object-center"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 z-10" />

            {/* Content Over Hero Image */}
            <div className="absolute inset-0 z-20 p-6 sm:p-10 md:p-12 flex flex-col justify-between">
              {/* Top Tag */}
              <div className="flex justify-between items-start">
                <span className="font-gochi text-2xl sm:text-3xl text-white/95 tracking-wide">
                  Project
                </span>
              </div>

              {/* Bottom Details & Live Preview CTA */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-3">
                    {project.title}
                  </h1>
                  <p className="text-white/90 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal">
                    {project.subtitle}
                  </p>
                </div>

                {project.livePreviewUrl && (
                  <Link
                    href={project.livePreviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-[#111827] font-semibold text-xs sm:text-sm hover:bg-white/90 transition-all shadow-md flex-shrink-0 self-start md:self-auto"
                  >
                    Live preview
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* 2. Metadata Specs Bar */}
          <div className="bg-white p-5 sm:p-7 border border-black/[0.04] shadow-sm mb-8 sm:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div>
                <span className="text-xs text-[#6B899E] block mb-1">Industry</span>
                <span className="font-semibold text-sm sm:text-base text-[#0C3852]">
                  {project.industry}
                </span>
              </div>
              <div>
                <span className="text-xs text-[#6B899E] block mb-1">Services</span>
                <span className="font-semibold text-sm sm:text-base text-[#0C3852] leading-snug">
                  {project.services}
                </span>
              </div>
              <div>
                <span className="text-xs text-[#6B899E] block mb-1">Year</span>
                <span className="font-semibold text-sm sm:text-base text-[#0C3852]">
                  {project.year}
                </span>
              </div>
            </div>
          </div>

          {/* 3. The Challenge Section Card */}
          <section className="bg-white p-6 sm:p-10 md:p-12 border border-black/[0.04] shadow-sm mb-12 sm:mb-16">
            <span className={`font-gochi text-2xl sm:text-3xl ${project.accentColor} block mb-1`}>
              The challenge
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight leading-tight mb-4">
              {project.challenge.heading}
            </h2>
            <p className="text-[#4B5563] text-sm sm:text-base md:text-[16px] leading-relaxed">
              {project.challenge.description}
            </p>
          </section>

          {/* 4. Our Strategy Section */}
          <section className="mb-12 sm:mb-16">
            <div className="mb-6 sm:mb-8">
              <span className={`font-gochi text-2xl sm:text-3xl ${project.accentColor} block mb-1`}>
                Our strategy
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight leading-tight mb-4">
                {project.strategy.heading}
              </h2>
              <p className="text-[#4B5563] text-sm sm:text-base md:text-[16px] leading-relaxed max-w-3xl">
                {project.strategy.description}
              </p>
            </div>

            {/* 2-Column Showcase Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {project.strategy.images.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[3/4] w-full overflow-hidden bg-[#E5E7EB] border border-black/[0.04] shadow-sm group"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} strategy visual ${idx + 1}`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* 5. The Results Section */}
          <section className="mb-12 sm:mb-16">
            <div className="mb-6 sm:mb-8">
              <span className={`font-gochi text-2xl sm:text-3xl ${project.accentColor} block mb-1`}>
                The results
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight leading-tight mb-4">
                {project.results.heading}
              </h2>
              <p className="text-[#4B5563] text-sm sm:text-base md:text-[16px] leading-relaxed max-w-3xl">
                {project.results.description}
              </p>
            </div>

            {/* 2-Column Results Visuals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {project.results.images.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[3/4] w-full overflow-hidden bg-[#E5E7EB] border border-black/[0.04] shadow-sm group"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} results visual ${idx + 1}`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* 3 Metric Highlight Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {project.results.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`${metric.bg} p-6 sm:p-7 flex flex-col justify-between shadow-sm transition-transform hover:-translate-y-1 duration-300`}
                >
                  <span className="text-3xl sm:text-4xl md:text-[38px] font-bold tracking-tight leading-none mb-3">
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-[13px] font-medium leading-snug opacity-90">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
