import { useState } from "react";
import type { Lang } from "../data/projects";
import { showcaseViews as views } from "../data/showcase";

export function HeroShowcase({ lang }: { lang: Lang }) {
  const [selected, setSelected] = useState(0);
  const view = views[selected];
  const z = lang === "zh";
  return (
    <aside
      className="system-art hero-showcase"
      aria-label={z ? "机器人项目展示" : "Robotics project showcase"}
    >
      <div className="showcase-heading">
        <span>ROBONIX / GO2</span>
        <span>{z ? "工程实录" : "ENGINEERING IN PRACTICE"}</span>
      </div>
      <div
        className="showcase-switch"
        aria-label={z ? "选择项目视图" : "Choose project view"}
      >
        {views.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={i === selected}
            onClick={() => setSelected(i)}
          >
            {item.label[lang]}
          </button>
        ))}
      </div>
      <a
        className="showcase-photo"
        href="#projects"
        aria-label={
          z ? "查看项目与完整演示" : "Explore projects and demonstrations"
        }
      >
        <img
          key={view.image}
          src={view.image}
          alt={view.caption[lang]}
          width="800"
          height="443"
          decoding="async"
          fetchPriority={selected === 0 ? "high" : "auto"}
        />
        <span className="showcase-photo-label">{view.caption[lang]}</span>
        <span className="showcase-photo-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
      <div className="showcase-copy" aria-live="polite" aria-atomic="true">
        <h2>{view.title}</h2>
        <p>{view.description[lang]}</p>
        <div className="showcase-stack">
          {view.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div
        className="showcase-flow"
        aria-label={
          z
            ? "系统链路：感知、运行时、执行"
            : "System flow: perception, runtime, execution"
        }
      >
        <span>
          <small>01</small>
          {z ? "感知" : "SENSE"}
        </span>
        <i aria-hidden="true">→</i>
        <span>
          <small>02</small>
          {z ? "运行时" : "RUNTIME"}
        </span>
        <i aria-hidden="true">→</i>
        <span>
          <small>03</small>
          {z ? "执行" : "ACT"}
        </span>
      </div>
      <a href="#projects" className="showcase-link">
        {z ? "探索工程项目" : "Explore the engineering"}
        <span aria-hidden="true">↗</span>
      </a>
    </aside>
  );
}
