import Link from "next/link";
import * as React from "react";

interface ReadyToWorkProps {
  title: string;
  description: string;
}

const ReadtoWork: React.FC<ReadyToWorkProps> = ({ title, description }) => {
  return (
    <section className=" p-8  text-center relative">
      <div className="absolute w-72 h-72 bg-teal-500 rounded-full blur-3xl opacity-30 top-0 right-40 -z-10"></div>

      <div className="customWidth">
        <h2 className="text-white sectionHeading">{title}</h2>
        <p className="text-white paragraph">{description}</p>
        <div className="flex gap-6 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-700 transition-colors mt-6"
          >
            Get Started
          </Link>
          <Link
            href="/contact"
            className="border border-blue-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-700 transition-colors mt-6"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadtoWork;
