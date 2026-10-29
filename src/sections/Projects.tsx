import { useState } from "react";
import { projects, type Lang } from "../data/projects";
import { research } from "../data/research";
import { VideoDemo } from "../components/VideoDemo";
export function Projects({ lang }: { lang: Lang }) {
  const [filter, setFilter] = useState("All");
  return (
    <section id="projects">
      <div className="section-top">
        <div>
          <p className="eyebrow">01 / SELECTED ENGINEERING</p>
          <h2>
            {lang === "zh"
              ? "让系统走进真实世界。"
              : "Systems that meet the real world."}
          </h2>
        </div>
        <span className="section-note">
          {lang === "zh"
            ? "四项工程实践 · 真实演示"
            : "Four engineering projects · Real demos"}
        </span>
      </div>
      <div
        className="filters"
        aria-label={lang === "zh" ? "项目分类" : "Project category"}
      >
        {["All", "Robotics", "Systems", "Research"].map((x) => (
          <button
            key={x}
            aria-pressed={filter === x}
            onClick={() => setFilter(x)}
          >
            {x === "All" ? (lang === "zh" ? "全部项目" : "All work") : x}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects
          .filter((p) => filter === "All" || p.category === filter)
          .map((p) => (
            <article
              className={
                "project " +
                (p.number === "01" && filter === "All" ? "featured" : "")
              }
              key={p.id}
            >
              <VideoDemo
                id={p.id}
                title={p.title[lang]}
                source={p.source}
                lang={lang}
              />
              <div className="project-body">
                <div className="meta">
                  <span>
                    {p.number} / {p.category.toUpperCase()}
                  </span>
                  <span>{p.date}</span>
                </div>
                <h3>{p.title[lang]}</h3>
                <p>{p.short[lang]}</p>
                <div className="tags">
                  {p.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <details>
                  <summary>
                    {lang === "zh"
                      ? "查看工程详情"
                      : "Explore engineering details"}{" "}
                    <span>↗</span>
                  </summary>
                  <p className="role">{p.role[lang]}</p>
                  {p.details.map((d, i) => (
                    <div className="detail-block" key={i}>
                      <h4>
                        {
                          [
                            "Problem / Motivation",
                            "Architecture / Approach",
                            "My Contributions",
                            "Results / Validation",
                          ][i]
                        }
                      </h4>
                      <p>{d[lang]}</p>
                    </div>
                  ))}
                </details>
                <div className="project-links">
                  <a href={p.source} target="_blank" rel="noopener noreferrer">
                    {p.upstream
                      ? lang === "zh"
                        ? "上游代码"
                        : "Upstream source"
                      : "GitHub Source"}{" "}
                    ↗
                  </a>
                  <a
                    href={p.catalog || p.source + "#readme"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.catalog
                      ? "Live Catalog"
                      : lang === "zh"
                        ? "项目文档"
                        : "Documentation"}{" "}
                    ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        {filter === "Research" &&
          research.map((r) => (
            <article className="research-card" key={r.id}>
              <span className="status">{r.status[lang]}</span>
              <h3>{r.title}</h3>
              <p>{r.full}</p>
              <p>{r.text[lang]}</p>
              <a href={"#research-" + r.id}>
                {lang === "zh" ? "研究详情" : "Research details"} ↓
              </a>
            </article>
          ))}
      </div>
    </section>
  );
}
