import type { Metadata } from "next";
import React from "react";
import { PageBanner } from "@/components/PageBanner";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { CallToAction } from "@/components/CallToAction";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Crystaline ERP Services",
  description:
    "Explore our services: Hardware and software installation, card payment solutions, product cataloging, and support.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
  },
};

const services: {
  title: string;
  description: string;
  image: string;
  alt: string;
}[] = [
  {
    title: "Hardware and software installation",
    description:
      "As you start your journey, we will work with you to assess your current systems and infrastructure to design a solution that is tailored to your specific needs. We will also provide training and support to ensure that you and your team are able to make the most of your new ERP system.",
    image: "/services/pos.jpg",
    alt: "Happy customer being served through Crystaline POS system",
  },
  // {
  //   title: "Crystaline ERP card payment solution",
  //   description:
  //     "Seamlessly process transactions with our integrated card payment solutions. We support a wide array of payment methods ensuring convenience for your customers.",
  //   image: "/services/payment.jpg",
  //   alt: "Crystaline ERP card payment solution",
  // },
  {
    title: "Product and service cataloging",
    description:
      "Our team of experts will work with you to create a comprehensive catalog of your products and services, complete with detailed descriptions, images, and pricing information. This will help you streamline your operations and make it easier for you to manage your inventory and pricing.",
    image: "/services/cataloging.jpg",
    alt: "Product and service cataloging",
  },
  {
    title: "Support and maintenance",
    description:"Implementing an POS system in Kenya can be a complex and time-consuming process. That's why our ERP software company offers a range of round-the-clock technical support and maintenance services to ensure that your system stays up and running smoothly.",
    image: "/services/support.jpg",
    alt: "Support and maintenance",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <PageBanner
        eyebrow="Our Services"
        title="Comprehensive services to run your business."
        subtitle="End-to-end hardware installation, product cataloging, integrated payments, and dedicated support."
      />
      <BreadcrumbJsonLd
        id="breadcrumb-services"
        items={[{ name: "Home" }, { name: "Services", path: "/services" }]}
      />

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="space-y-20 lg:space-y-32">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 w-full relative h-[350px] sm:h-[450px] rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-slate-900/5 bg-white flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  {service.title}
                </h2>
                <div className="w-12 h-1.5 bg-brand-500 rounded-full"></div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16">
        <CallToAction />
      </div>
    </div>
  );
}
