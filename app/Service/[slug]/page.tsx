"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "../../component/navbar";
import FAQSection from "../../component/faq";
import Footer from "../../component/footer";

export interface ServiceDetailFull {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  tags: string[];
  deliverables: string[];
  process: {
    heading: string;
    description: string;
  }[];
}

export const servicesDatabase: Record<string, ServiceDetailFull> = {
  "social-media-management": {
    slug: "social-media-management",
    title: "Social Media Management",
    subtitle: "Built to stay relevant.",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&auto=format&fit=crop&q=85",
    description:
      "We help brands build a consistent and meaningful social media presence through strategy, content planning, creative development, and performance analysis. Our social media management services are tailored to your audience, industry, and business goals, helping your brand stay relevant and build lasting connections across platforms.",
    tags: ["Strategy", "Content planning", "Creative", "Performance"],
    deliverables: [
      "Social Media Strategy & Planning",
      "Creative Development & Content Creation",
      "Audience & Industry Tailored Management",
      "Performance Analysis & Reporting",
    ],
    process: [
      {
        heading: "Audit & Strategy",
        description: "We analyze your current presence, competitors, and audience to build a comprehensive roadmap.",
      },
      {
        heading: "Content Creation",
        description: "We produce engaging visuals and copy tailored to each social platform and its unique format.",
      },
      {
        heading: "Community Management",
        description: "We engage directly with your followers, fostering community and handling inquiries actively.",
      },
      {
        heading: "Optimization",
        description: "We review analytics regularly to pivot strategies and ensure consistent engagement growth.",
      },
    ],
  },
  "content-production": {
    slug: "content-production",
    title: "Content Production",
    subtitle: "Made to be noticed.",
    heroImage: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=1600&auto=format&fit=crop&q=85",
    description:
      "From concept development to the final frame, we create purposeful visual content that brings your brand to life. Our content production services include reels, brand films, product photography, lifestyle shoots, campaign assets, and digital-first video content designed to capture attention and communicate your brand story.",
    tags: ["Brand films", "Photography", "Campaign assets", "Reels"],
    deliverables: [
      "Concept Development & Visual Storytelling",
      "Reels, Brand Films & Digital-First Video",
      "Product Photography & Lifestyle Shoots",
      "Campaign Asset Creation & Production",
    ],
    process: [
      {
        heading: "Concept & Pre-Production",
        description: "We develop the creative direction, storyboard, and plan all logistical elements of the shoot.",
      },
      {
        heading: "Production & Direction",
        description: "Our team executes the shoot focusing on high-quality visuals, lighting, and performance.",
      },
      {
        heading: "Post-Production",
        description: "We handle editing, color grading, sound design, and formatting for all digital channels.",
      },
      {
        heading: "Delivery & Rollout",
        description: "We deliver final assets formatted perfectly for your campaigns and digital platforms.",
      },
    ],
  },
  "branding": {
    slug: "branding",
    title: "Branding",
    subtitle: "Made to be remembered.",
    heroImage: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?w=1600&auto=format&fit=crop&q=85",
    description:
      "We build distinctive brand identities rooted in strategy, positioning, and purpose. From brand strategy and naming to logo design, visual identity, packaging, and brand guidelines, we help businesses create a cohesive identity that reflects who they are and makes them recognisable across every touchpoint.",
    tags: ["Brand strategy", "Identity design", "Packaging", "Guidelines"],
    deliverables: [
      "Brand Strategy, Naming & Positioning",
      "Logo Design & Visual Identity Systems",
      "Packaging Design & Experience",
      "Comprehensive Brand Guidelines",
    ],
    process: [
      {
        heading: "Discovery & Positioning",
        description: "We dive deep into your business goals, target market, and core values to define your position.",
      },
      {
        heading: "Visual Identity Design",
        description: "We develop logos, color palettes, and typography that bring your brand's personality to life.",
      },
      {
        heading: "Application & Packaging",
        description: "We apply the identity across physical and digital touchpoints, including product packaging.",
      },
      {
        heading: "Guidelines & Handoff",
        description: "We provide comprehensive brand books to ensure consistency across all future communications.",
      },
    ],
  },
  "influencer-marketing": {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    subtitle: "Built on influence.",
    heroImage: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1600&auto=format&fit=crop&q=85",
    description:
      "We connect brands with creators who speak to the right audiences. Our influencer marketing services cover creator discovery, influencer outreach, campaign strategy, negotiations, content coordination, campaign management, and performance reporting. Every collaboration is selected to align with your brand, audience, and campaign objectives.",
    tags: ["Creator discovery", "Outreach", "Campaign management", "Negotiations"],
    deliverables: [
      "Creator Discovery & Influencer Outreach",
      "Campaign Strategy & Content Coordination",
      "Negotiations & Partnership Management",
      "Performance Reporting & Analytics",
    ],
    process: [
      {
        heading: "Strategy & Discovery",
        description: "We identify the right creators whose audience and aesthetic align perfectly with your brand.",
      },
      {
        heading: "Outreach & Negotiation",
        description: "We handle all communication, brief development, and contract negotiations with creators.",
      },
      {
        heading: "Campaign Management",
        description: "We coordinate content creation, ensure brand alignment, and manage publishing schedules.",
      },
      {
        heading: "Reporting & ROI",
        description: "We track performance metrics and provide detailed reports on campaign reach and impact.",
      },
    ],
  },
  "performance-marketing": {
    slug: "performance-marketing",
    title: "Performance Marketing",
    subtitle: "Built to perform.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&q=85",
    description:
      "We turn marketing objectives into measurable digital campaigns. Through paid social advertising, Meta Ads, audience targeting, creative testing, lead generation, and ongoing optimisation, we help businesses reach relevant audiences and improve campaign efficiency. Every campaign is guided by clear objectives and data-informed decisions.",
    tags: ["Paid social", "Meta Ads", "Audience targeting", "Lead generation"],
    deliverables: [
      "Paid Social Advertising & Meta Ads",
      "Audience Targeting & Lead Generation",
      "Creative Testing & Ongoing Optimisation",
      "Data-Informed Campaign Management",
    ],
    process: [
      {
        heading: "Audience & Funnel Setup",
        description: "We map out the customer journey and define target audiences for each stage of the funnel.",
      },
      {
        heading: "Creative Development",
        description: "We produce highly engaging ad creatives designed specifically for conversion and click-throughs.",
      },
      {
        heading: "Campaign Launch",
        description: "We launch structured campaigns across platforms like Meta, Google, and TikTok with strict KPIs.",
      },
      {
        heading: "Testing & Scaling",
        description: "We continuously A/B test creatives and audiences, scaling the most profitable variations.",
      },
    ],
  },
  "website-design-development": {
    slug: "website-design-development",
    title: "Website Design & Development",
    subtitle: "Built for the digital world.",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&auto=format&fit=crop&q=85",
    description:
      "We design and develop websites that combine thoughtful visual design with intuitive user experiences. From business websites and landing pages to brand-led digital experiences, we bring together responsive design, clear navigation, purposeful content, and SEO-friendly foundations to help your website represent your brand and support your business goals.",
    tags: ["UI/UX design", "Responsive", "Landing pages", "SEO-friendly"],
    deliverables: [
      "Thoughtful Visual Design & UI/UX",
      "Business Websites & Landing Pages",
      "Responsive Design & Clear Navigation",
      "SEO-Friendly Foundations & Optimization",
    ],
    process: [
      {
        heading: "Wireframing & UX",
        description: "We map out the site structure, user journeys, and create wireframes for optimal navigation.",
      },
      {
        heading: "UI Design",
        description: "We design high-fidelity interfaces that reflect your brand identity and engage visitors.",
      },
      {
        heading: "Development",
        description: "We build responsive, fast, and accessible websites using modern frameworks and technologies.",
      },
      {
        heading: "Testing & Launch",
        description: "We conduct rigorous QA testing across devices before deploying the site to production.",
      },
    ],
  },
};

export default function ServiceSlugPage() {
  const params = useParams();
  const slugParam = typeof params?.slug === "string" ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : "";
  const service = servicesDatabase[slugParam];

  if (!service) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0C3852] font-sans selection:bg-[#3CA8D9] selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main className="w-full pt-4 sm:pt-6 pb-20 sm:pb-28">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar with Back Button */}
          <div className="flex items-center justify-between py-4 mb-4">
            <Link
              href="/Service"
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
              <span>Back to Services</span>
            </Link>

            <span className="font-gochi text-[#2B7DA8] text-base sm:text-lg tracking-wider">
              / SERVICE DETAILS
            </span>
          </div>

          {/* Hero Section */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] md:aspect-[24/9] overflow-hidden bg-[#0C4568] shadow-md border border-black/[0.04] mb-12 sm:mb-16">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              priority
              className="object-cover object-center opacity-80"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C3852]/90 via-[#0C3852]/40 to-transparent z-10" />

            {/* Content Over Hero Image */}
            <div className="absolute inset-0 z-20 p-6 sm:p-10 md:p-12 flex flex-col justify-end">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white tracking-tight leading-[1.05] mb-3">
                {service.title}
              </h1>
              <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-gochi tracking-wide">
                {service.subtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Content (Overview & Process) */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-6">Overview</h2>
                <p className="text-[#38607A] text-base sm:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-8">Our Approach</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="bg-white p-6 border border-black/[0.05] shadow-sm flex flex-col">
                      <span className="text-[#3CA8D9] font-gochi text-2xl mb-2">0{idx + 1}</span>
                      <h3 className="text-lg font-bold text-[#0C3852] mb-3">{step.heading}</h3>
                      <p className="text-[#476B82] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (Tags & Deliverables) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-white p-6 sm:p-8 border border-black/[0.04] shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0C3852] mb-5">
                  Disciplines
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-[#D9EFF9] text-[#0C3852] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#0C3852] p-6 sm:p-8 shadow-sm text-white">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#3CA8D9] mb-5">
                  Key Deliverables
                </h3>
                <ul className="space-y-4">
                  {service.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-white/90"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3CA8D9] mt-1.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-7 py-4 bg-gradient-to-b from-[#125883] via-[#0C4568] to-[#083550] text-white font-medium text-sm border-t border-white/25 border-b border-black/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_5px_rgba(0,0,0,0.45)] hover:opacity-95 transition-opacity"
                >
                  Start a project
                </Link>
              </div>
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
