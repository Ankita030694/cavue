"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/navbar";
import FAQSection from "../component/faq";
import Footer from "../component/footer";

interface ServiceDetail {
  id: number;
  slug: string;
  title: string;
  tags: string[];
  description: string;
  deliverables: string[];
}

const servicesData: ServiceDetail[] = [
  {
    id: 1,
    slug: "social-media-management",
    title: "Social Media Management",
    tags: ["Strategy", "Content planning", "Creative", "Performance"],
    description:
      "Built to stay relevant. We help brands build a consistent and meaningful social media presence through strategy, content planning, creative development, and performance analysis. Our social media management services are tailored to your audience, industry, and business goals, helping your brand stay relevant and build lasting connections across platforms.",
    deliverables: [
      "Social Media Strategy & Planning",
      "Creative Development & Content Creation",
      "Audience & Industry Tailored Management",
      "Performance Analysis & Reporting",
    ],
  },
  {
    id: 2,
    slug: "content-production",
    title: "Content Production",
    tags: ["Brand films", "Photography", "Campaign assets", "Reels"],
    description:
      "Made to be noticed. From concept development to the final frame, we create purposeful visual content that brings your brand to life. Our content production services include reels, brand films, product photography, lifestyle shoots, campaign assets, and digital-first video content designed to capture attention and communicate your brand story.",
    deliverables: [
      "Concept Development & Visual Storytelling",
      "Reels, Brand Films & Digital-First Video",
      "Product Photography & Lifestyle Shoots",
      "Campaign Asset Creation & Production",
    ],
  },
  {
    id: 3,
    slug: "branding",
    title: "Branding",
    tags: ["Brand strategy", "Identity design", "Packaging", "Guidelines"],
    description:
      "Made to be remembered. We build distinctive brand identities rooted in strategy, positioning, and purpose. From brand strategy and naming to logo design, visual identity, packaging, and brand guidelines, we help businesses create a cohesive identity that reflects who they are and makes them recognisable across every touchpoint.",
    deliverables: [
      "Brand Strategy, Naming & Positioning",
      "Logo Design & Visual Identity Systems",
      "Packaging Design & Experience",
      "Comprehensive Brand Guidelines",
    ],
  },
  {
    id: 4,
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    tags: ["Creator discovery", "Outreach", "Campaign management", "Negotiations"],
    description:
      "Built on influence. We connect brands with creators who speak to the right audiences. Our influencer marketing services cover creator discovery, influencer outreach, campaign strategy, negotiations, content coordination, campaign management, and performance reporting. Every collaboration is selected to align with your brand, audience, and campaign objectives.",
    deliverables: [
      "Creator Discovery & Influencer Outreach",
      "Campaign Strategy & Content Coordination",
      "Negotiations & Partnership Management",
      "Performance Reporting & Analytics",
    ],
  },
  {
    id: 5,
    slug: "performance-marketing",
    title: "Performance Marketing",
    tags: ["Paid social", "Meta Ads", "Audience targeting", "Lead generation"],
    description:
      "Built to perform. We turn marketing objectives into measurable digital campaigns. Through paid social advertising, Meta Ads, audience targeting, creative testing, lead generation, and ongoing optimisation, we help businesses reach relevant audiences and improve campaign efficiency. Every campaign is guided by clear objectives and data-informed decisions.",
    deliverables: [
      "Paid Social Advertising & Meta Ads",
      "Audience Targeting & Lead Generation",
      "Creative Testing & Ongoing Optimisation",
      "Data-Informed Campaign Management",
    ],
  },
  {
    id: 6,
    slug: "website-design-development",
    title: "Website Design & Development",
    tags: ["UI/UX design", "Responsive", "Landing pages", "SEO-friendly"],
    description:
      "Built for the digital world. We design and develop websites that combine thoughtful visual design with intuitive user experiences. From business websites and landing pages to brand-led digital experiences, we bring together responsive design, clear navigation, purposeful content, and SEO-friendly foundations to help your website represent your brand and support your business goals.",
    deliverables: [
      "Thoughtful Visual Design & UI/UX",
      "Business Websites & Landing Pages",
      "Responsive Design & Clear Navigation",
      "SEO-Friendly Foundations & Optimization",
    ],
  },
];

export default function ServicesPage() {
  const [openServiceIds, setOpenServiceIds] = useState<number[]>([1]);

  const toggleService = (id: number) => {
    setOpenServiceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0C3852] font-sans selection:bg-[#3CA8D9] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero / Services Overview Section */}
      <main className="w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Subtitle Bar */}
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-4 mb-10 sm:mb-14">
            <span className="font-gochi text-[#2B7DA8] text-base sm:text-lg tracking-wider">
              / SERVICES
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#6B899E] tracking-wide">
              Capabilities — 2026
            </span>
          </div>

          {/* 2-Column Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-16 sm:pb-20">
            {/* Left Column: Huge Headline & CTA */}
            <div className="lg:col-span-7 flex flex-col">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-medium text-[#0C3852] tracking-tight leading-[1.08] mb-8 sm:mb-10">
                Everything Your <br />
                Brand Needs
              </h1>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-b from-[#125883] via-[#0C4568] to-[#083550] text-white font-medium text-sm sm:text-base border-t border-white/25 border-b border-black/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_5px_rgba(0,0,0,0.45)] hover:opacity-95 transition-opacity"
                >
                  Let&apos;s work together
                </Link>
              </div>
            </div>

            {/* Right Column: Paragraph Copy & Meta List */}
            <div className="lg:col-span-5 flex flex-col justify-start lg:pt-2">
              <p className="text-[#38607A] text-base sm:text-lg md:text-[19px] leading-relaxed mb-8 sm:mb-10">
                From branding and content to digital and performance, we bring clarity to every stage of your brand’s journey.
              </p>

              {/* Meta Specs Table */}
              <div className="flex flex-col divide-y divide-black/[0.08] border-t border-black/[0.08]">
                <div className="flex items-center justify-between py-3.5 sm:py-4 text-xs sm:text-sm">
                  <span className="text-[#6B899E]">Disciplines</span>
                  <span className="font-semibold text-[#0C3852]">Six</span>
                </div>
                <div className="flex items-center justify-between py-3.5 sm:py-4 text-xs sm:text-sm">
                  <span className="text-[#6B899E]">Engagement</span>
                  <span className="font-semibold text-[#0C3852]">Retainer &amp; Sprint</span>
                </div>
                <div className="flex items-center justify-between py-3.5 sm:py-4 text-xs sm:text-sm">
                  <span className="text-[#6B899E]">Practice since</span>
                  <span className="font-semibold text-[#0C3852]">2019</span>
                </div>
                <div className="flex items-center justify-between py-3.5 sm:py-4 text-xs sm:text-sm">
                  <span className="text-[#6B899E]">Based in</span>
                  <span className="font-semibold text-[#0C3852]">Delhi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Capabilities / Services Accordion List */}
          <div className="w-full border-t border-black/[0.1] pt-6 sm:pt-8">
            <div className="flex flex-col divide-y divide-black/[0.08]">
              {servicesData.map((service) => {
                const isOpen = openServiceIds.includes(service.id);

                return (
                  <div
                    key={service.id}
                    className="py-6 sm:py-8 transition-colors group"
                  >
                    {/* Header Row */}
                    <button
                      onClick={() => toggleService(service.id)}
                      className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 text-left cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      {/* Service Title */}
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium text-[#0C3852] tracking-tight leading-tight group-hover:text-[#2575A5] transition-colors">
                        {service.title}
                      </h2>

                      {/* Right Tags & Expand Button */}
                      <div className="flex items-center gap-3 sm:gap-4 flex-wrap self-start md:self-auto">
                        {/* Tags */}
                        <div className="flex items-center gap-2 flex-wrap">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3.5 py-1.5 rounded-full bg-[#D9EFF9] text-[#0C3852] text-xs sm:text-[13px] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Circular Expand Button with Smooth Morphing + / — */}
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D9EFF9] text-[#0C3852] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C2E7F8] transition-colors">
                          <div className="relative w-4 h-4 flex items-center justify-center">
                            <span className="absolute w-3.5 h-[1.8px] bg-current rounded-full" />
                            <span
                              className={`absolute h-3.5 w-[1.8px] bg-current rounded-full transition-all duration-300 ease-in-out ${
                                isOpen
                                  ? "scale-y-0 opacity-0 rotate-90"
                                  : "scale-y-100 opacity-100 rotate-0"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Smooth Collapsible Content Drawer */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity,margin,padding] duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-black/[0.05]"
                          : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-2">
                          <div className="lg:col-span-6">
                            <p className="text-[#38607A] text-sm sm:text-base leading-relaxed mb-4">
                              {service.description}
                            </p>
                          </div>
                          <div className="lg:col-span-6">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0C3852] mb-3">
                              Key Deliverables
                            </h3>
                            <ul className="space-y-2">
                              {service.deliverables.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-xs sm:text-sm text-[#476B82]"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#3CA8D9] mt-1.5 mr-2.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-6">
                              <Link
                                href={`/Service/${service.slug}`}
                                className="inline-flex items-center text-sm font-semibold text-[#0C3852] hover:text-[#3CA8D9] transition-colors"
                              >
                                View full service details
                                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
