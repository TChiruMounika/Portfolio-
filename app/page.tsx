import {
  ArrowUpRight,
  Download,
  Mail,
  Code2,
  Award,
} from "lucide-react";
import {
  profile,
  projects,
  skillGroups,
  experience,
  achievements,
} from "@/data/portfolio";
import CopyEmailButton from "@/components/CopyEmailButton";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-indigo-500/30">
      {/* Sticky Glass Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f19]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-base font-bold tracking-tight text-white">
            Chiru<span className="text-indigo-400">.</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-500 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-indigo-400"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-24 px-6 py-16 sm:py-24">
        {/* Hero */}
        <section className="space-y-6">
          <span className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium text-indigo-300">
            Open to Software & AI Internships · {profile.location}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>
          <p className="text-lg font-medium text-indigo-300 sm:text-xl">
            {profile.role}
          </p>
          <p className="max-w-2xl leading-relaxed text-slate-400">
            {profile.bio}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div>
            <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            <p className="mt-1 text-sm text-slate-400">
              Selected full-stack, AI, and frontend builds.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={`flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition hover:border-indigo-400/40 ${
                  idx === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="space-y-3">
                  <span className="text-xs font-medium text-indigo-400">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-4 text-sm font-medium">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-slate-200 hover:text-indigo-400"
                    >
                      <GithubIcon className="h-4 w-4" /> GitHub
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300"
                    >
                      Live Demo <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <h2 className="text-2xl font-bold text-white">Technical Stack</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="mb-3 text-sm font-semibold text-indigo-300">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Achievements */}
        <section id="experience" className="space-y-12 scroll-mt-24">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Experience & Leadership
            </h2>
            <div className="space-y-4">
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-white">{item.role}</h3>
                    <span className="text-xs text-slate-400">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-indigo-300">{item.org}</p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-400">
                    {item.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
              <Award className="h-5 w-5 text-indigo-400" /> Hackathons & Achievements
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {achievements.map((ach) => (
                <div
                  key={ach}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300"
                >
                  {ach}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center scroll-mt-24"
        >
          <h2 className="text-2xl font-bold text-white">Let&apos;s Connect</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Reach out for internships, collaborations, or project discussions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <CopyEmailButton email={profile.email} />
          </div>
          <div className="mt-6 flex justify-center gap-6 text-sm text-slate-400">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Code2 className="h-4 w-4" /> LeetCode
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © 2026 {profile.name}. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}