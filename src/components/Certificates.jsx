import { useState, useEffect } from "react";

const certificates = [
  { title: "Java Core Programming", file: "/certificates/Java Core Programming-certificate.pdf" },
  { title: "Generative AI – Microsoft", file: "/certificates/Career Essentials in Generative AI.pdf" },
  { title: "German Language", file: "/certificates/German Language Certificate-Udemy.pdf" },
  { title: "Google Cloud Career Launchpad", file: "/certificates/Google Cloud Career Launchpad Certificate .pdf" },
  { title: "Google Cloud - Cloud Engineer Track", file: "/certificates/Google Cloud - Cloud Engineer Track.pdf" },
  { title: "Google Solution Challenge submission", file: "/certificates/Google Solution Challenge submission-Certificate.pdf" },
  { title: "ServiceNow Virtual Internship Program", file: "/certificates/Certificate  ServiceNow.pdf" },
  { title: "Emerging Technologies (AI & Cloud)", file: "/certificates/IBM internship certificate.pdf" },
  { title: "AWS Academy Graduate", file: "/certificates/AWS Academy Graduate.pdf" },
];

const Certificates = ({ theme }) => {
  const [active, setActive] = useState(null);
  const isDark = theme === "dark";

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <section
      id="certificates"
      className={`relative py-24 px-6 ${isDark ? "bg-gradient-to-b from-slate-950 to-slate-900" : "bg-gradient-to-b from-gray-200 to-gray-300"}`}
    >
      <h2 className="text-4xl text-center font-bold text-cyan-400 mb-12">
        Certificates
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {certificates.map((c, index) => (
          <a
            key={index}
            href={c.file}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              backdrop-blur
              border rounded-2xl p-6
              hover:scale-105 hover:border-cyan-400/40
              transition-all duration-300
              block
              ${isDark ? "bg-white/5 border-white/10 text-white" : "bg-white border-black/10 text-gray-900"}
            `}
          >
            <p className="text-lg font-medium">{c.title}</p>
            <p className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Click to view
            </p>
          </a>
        ))}
      </div>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className={`relative rounded-2xl w-full max-w-5xl h-[90vh] p-6 ${isDark ? "bg-slate-900" : "bg-white"}`}>

            <button
              onClick={() => setActive(null)}
              className={`absolute top-4 right-4 hover:text-cyan-400 ${isDark ? "text-cyan-400" : "text-gray-900"}`}
            >
              ✕ Close
            </button>

            <iframe
              src={active}
              title="Certificate Preview"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
