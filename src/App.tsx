import { useEffect, useState } from "react";
import { profile, skills, experience, honors } from "./data/profile";
import { research } from "./data/research";
import type { Lang } from "./data/projects";
import { Projects } from "./sections/Projects";
const nav = [
  "Home",
  "About",
  "Projects",
  "Research",
  "Skills",
  "Experience",
  "Contact",
];
const navZh = ["首页", "关于", "项目", "研究", "技能", "经历", "联系"];
function read(key: string, fallback: string) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}
function timeTheme() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? "light" : "dark";
}
export default function App() {
  const [lang, setLang] = useState<Lang>(
    read("lang", "zh") === "en" ? "en" : "zh",
  );
  const [theme, setTheme] = useState(timeTheme);
  const [menu, setMenu] = useState(false);
  const z = lang === "zh";
  useEffect(() => {
    document.documentElement.lang = z ? "zh-CN" : "en";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.documentElement.style.backgroundColor =
      theme === "light" ? "#f4f7fa" : "#0b1120";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#f4f7fa" : "#0b1120");
    document.title = z
      ? "张修齐 · Robotics & Systems"
      : "Xiuqi Zhang · Robotics & Systems";
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* Storage may be disabled. */
    }
  }, [lang, theme, z]);
  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) setTheme(timeTheme());
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.06 },
    );
    document.querySelectorAll("main > section:not(.hero)").forEach((e) => {
      e.classList.add("reveal");
      observer.observe(e);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a className="skip" href="#main">
        {z ? "跳转到正文" : "Skip to content"}
      </a>
      <header>
        <a className="brand" href="#home">
          <span className="brand-mark">xz.</span>
          <span>
            XIUQI ZHANG<small>ROBOTICS & SYSTEMS</small>
          </span>
        </a>
        <nav
          className={menu ? "open" : ""}
          aria-label={z ? "主导航" : "Main navigation"}
        >
          {nav.map((n, i) => (
            <a
              key={n}
              href={"#" + n.toLowerCase()}
              onClick={() => setMenu(false)}
            >
              {z ? navZh[i] : n}
            </a>
          ))}
        </nav>
        <div className="toolbar">
          <button
            onClick={() => setLang(z ? "en" : "zh")}
            aria-label={z ? "EN — Switch to English" : "切换为中文"}
          >
            {z ? "EN" : "中"}
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={z ? "切换明暗主题" : "Toggle color theme"}
            title={
              z
                ? "打开页面时按当地时间选择主题；点击可手动切换"
                : "Starts with your local time; click to switch manually"
            }
          >
            {theme === "dark" ? "☼" : "◐"}
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GH ↗ GitHub"
          >
            GH ↗
          </a>
          <button
            className="menu-button"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
            aria-label={z ? "展开导航菜单" : "Toggle navigation"}
          >
            ☰
          </button>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" /> ROBOTICS / SYSTEMS / EMBEDDED AI
            </p>
            <div className="identity-card">
              <a
                className="portrait-link"
                href="#about"
                aria-label={z ? "了解张修齐" : "About Xiuqi Zhang"}
              >
                <img
                  src="/images/xiuqi-portrait.webp"
                  alt={z ? "张修齐个人照片" : "Portrait of Xiuqi Zhang"}
                  width="360"
                  height="545"
                  fetchPriority="high"
                  decoding="async"
                />
              </a>
              <div>
                <p className="identity">
                  {z ? "张修齐" : "Xiuqi Zhang"}{" "}
                  <span>/ {z ? "Xiuqi Zhang" : "张修齐"}</span>
                </p>
                <p className="identity-caption">
                  {z
                    ? "机器人系统软件 · 嵌入式 AI"
                    : "Robotics systems · Embedded AI"}
                </p>
              </div>
            </div>
            <h1>
              Building Reliable
              <br />
              Intelligence on
              <br />
              <em>Real Robots.</em>
            </h1>
            <p className="hero-sub">
              {z
                ? "让智能模型真正运行在可靠、高效、可预测的机器人与嵌入式系统之上。"
                : "Intelligence belongs on systems that are reliable, efficient and predictable."}
            </p>
            <p className="intro">{profile.intro[lang]}</p>
            <div className="actions">
              <a className="button primary" href="#projects">
                Explore Projects <span>↘</span>
              </a>
              <a
                className="button"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub ↗
              </a>
              <a className="text-link" href="#contact">
                Contact Me ↗
              </a>
            </div>
          </div>
          <div
            className="system-art"
            aria-label={
              z
                ? "机器人系统架构示意"
                : "Illustrative robotics system architecture"
            }
          >
            <div className="art-heading">
              <span>ROBOT SYSTEM / 01</span>
              <span className="dot" />
            </div>
            <div className="orbit o1" />
            <div className="orbit o2" />
            <svg
              viewBox="0 0 440 330"
              role="img"
              aria-label={
                z
                  ? "原创四足机器人线稿"
                  : "Original quadruped robot line illustration"
              }
            >
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M102 137 206 86 329 120 225 177Z M102 137v43l124 43 103-57v-46 M225 177v46 M119 181l-14 57 36 40 M148 191l-11 47 20 25 M293 184l20 45-13 60 M319 169l34 40-9 62 M178 113l51 15 43-21 M196 157l-41-15 M269 145l34-17" />
                <path
                  d="m91 286 133 38 143-64 M40 245 174 284 390 180"
                  opacity=".2"
                />
                <circle cx="305" cy="145" r="7" />
                <circle cx="105" cy="238" r="5" />
                <circle cx="313" cy="229" r="5" />
              </g>
            </svg>
            <div className="system-layer">
              <span>01</span>
              <strong>PERCEPTION</strong>
              <small>Camera / LiDAR / IMU</small>
            </div>
            <div className="system-layer">
              <span>02</span>
              <strong>ORCHESTRATION</strong>
              <small>Robonix / ROS 2 / AI Runtime</small>
            </div>
            <div className="system-layer">
              <span>03</span>
              <strong>EXECUTION</strong>
              <small>Planning / Control / Hardware</small>
            </div>
            <p className="art-foot">
              SENSE → REASON → ACT <span>↗</span>
            </p>
          </div>
          <div className="hero-bottom">
            <span>
              {z
                ? "东北大学 · 物联网工程"
                : "Northeastern University · IoT Engineering"}
            </span>
            <span>
              {z
                ? "北京大学硕士推免拟录取 · 预计2027年9月入学"
                : "PKU master’s provisional admission · Expected September 2027"}
            </span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>
        <section id="about" className="about">
          <div>
            <p className="eyebrow">THE ENGINEER BEHIND THE SYSTEM</p>
            <h2>
              {z
                ? "从系统出发，连接智能与硬件。"
                : "Connecting intelligence with hardware."}
            </h2>
            <p className="accent-note">
              Robotics Middleware
              <br />
              Systems Software
              <br />
              Embedded AI
            </p>
          </div>
          <div>
            {profile.about.map((p, i) => (
              <p key={i}>{p[lang]}</p>
            ))}
          </div>
        </section>
        <Projects lang={lang} />
        <section id="research">
          <div className="section-top">
            <div>
              <p className="eyebrow">02 / RESEARCH & EXPLORATION</p>
              <h2>
                {z ? "工程背后的研究。" : "Research behind the engineering."}
              </h2>
            </div>
            <p className="section-note">
              {z
                ? "研究进展与早期系统实践"
                : "Research in progress & earlier systems work"}
            </p>
          </div>
          {research.map((r, i) => (
            <article
              className="research-row"
              id={"research-" + r.id}
              key={r.id}
            >
              <span className="row-number">0{i + 1}</span>
              <div>
                <span className="status">{r.status[lang]}</span>
                <h3>{r.title}</h3>
                <h4>
                  {r.id === "frame" ? "FRAME: " : ""}
                  {r.full}
                </h4>
                <p>{r.text[lang]}</p>
                <div className="tags">
                  {r.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <span className="research-role">{r.role[lang]}</span>
            </article>
          ))}
        </section>
        <section id="skills">
          <p className="eyebrow">03 / TECHNICAL TOOLKIT</p>
          <h2>
            {z ? "以问题为中心的技术栈。" : "Tools chosen for the problem."}
          </h2>
          <p className="section-note">
            {z
              ? "以下为项目实践与使用经验，不代表全部精通。TensorRT相关部署经验待补充可核实案例。"
              : "These reflect hands-on use and project experience, not expert-level mastery of every tool. TensorRT deployment details await a verifiable case."}
          </p>
          <div className="skills-grid">
            {skills.map(([name, items]) => (
              <div key={name}>
                <h3>{name}</h3>
                <p>{items}</p>
                <span className="small-label">
                  {z
                    ? "项目实践 / 使用经验"
                    : "PROJECT PRACTICE / WORKING EXPERIENCE"}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section id="experience">
          <p className="eyebrow">04 / EDUCATION & EXPERIENCE</p>
          <h2>
            {z ? "持续构建，持续学习。" : "A continuing path of building."}
          </h2>
          <div className="timeline">
            {experience.map((e) => (
              <article key={e.title.en}>
                <time>{e.date}</time>
                <div>
                  <h3 className="experience-title">
                    <span className="institution-logos">
                      {e.logos.map((logo) => (
                        <a
                          key={logo.url}
                          className={
                            "school-seal" + (logo.wide ? " brand-wordmark" : "")
                          }
                          href={logo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={logo.label[lang]}
                          title={logo.label[lang]}
                        >
                          <img
                            src={logo.src}
                            alt={logo.label[lang]}
                            width={logo.wide ? 140 : 52}
                            height="52"
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </span>
                    {e.links?.length === 1 ? (
                      <a
                        className="institution-link"
                        href={e.links[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {e.title[lang]} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      e.title[lang]
                    )}
                  </h3>
                  {e.logoNote && (
                    <p className="institution-note">{e.logoNote[lang]}</p>
                  )}
                  <p>{e.text[lang]}</p>
                  {e.links && e.links.length > 1 && (
                    <div className="community-links">
                      {e.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="honors">
            <h3>Selected Honors</h3>
            <ul>
              {honors.map((h) => (
                <li key={h.en}>{h[lang]}</li>
              ))}
            </ul>
          </div>
        </section>
        <section id="contact" className="contact">
          <p className="eyebrow">LET’S BUILD SOMETHING THAT WORKS.</p>
          <h2>
            {z
              ? "将下一行代码，带到真实世界。"
              : "Bring the next line of code into the real world."}
          </h2>
          <p>
            {z
              ? "寻找机器人软件、C++系统研发、嵌入式系统与AI Runtime相关实习机会。"
              : "Seeking internships in robotics software, C++ systems engineering, embedded systems and AI runtimes."}
          </p>
          <a className="email" href={"mailto:" + profile.email}>
            {profile.email} ↗
          </a>
          <div className="actions">
            <a className="button primary" href={"mailto:" + profile.email}>
              {z ? "邮件联系" : "Get in touch"} ↗
            </a>
            <a
              className="button"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub / Origamii520 ↗
            </a>
          </div>
        </section>
      </main>
      <footer>
        <span>© 2026 Xiuqi Zhang</span>
        <span>Built with React & TypeScript · Hosted on GitHub Pages</span>
        <p>
          {z
            ? "第三方模型、SDK与机器人资源归原作者所有。"
            : "Third-party models, SDKs and robot resources belong to their respective authors."}
        </p>
        <a href="#home" aria-label={z ? "返回顶部" : "Back to top"}>
          ↑ {z ? "返回顶部" : "Back to top"}
        </a>
      </footer>
    </>
  );
}
