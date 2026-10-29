import { useRef, useState } from "react";
import type { Lang } from "../data/projects";
export function VideoDemo({
  id,
  title,
  source,
  lang,
}: {
  id: string;
  title: string;
  source: string;
  lang: Lang;
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <div className="demo">
      {loaded ? (
        <video
          ref={ref}
          controls
          playsInline
          preload="none"
          poster={"/images/" + id + ".webp"}
          src={"/videos/" + id + ".mp4"}
          onLoadedMetadata={() => {
            ref.current?.play().catch(() => {
              /* Native controls remain available. */
            });
          }}
          onError={() => setError(true)}
          aria-label={title}
        />
      ) : (
        <button
          className="poster"
          onClick={() => setLoaded(true)}
          aria-label={(lang === "zh" ? "播放演示：" : "Play demo: ") + title}
        >
          <img
            src={"/images/" + id + ".webp"}
            alt={
              title +
              (lang === "zh" ? "真实演示截图" : " — actual demonstration frame")
            }
            width="1280"
            height="720"
            loading="lazy"
          />
          <span className="play">▶</span>
          <span className="demo-caption">
            {lang === "zh" ? "播放演示 · 90秒片段" : "PLAY DEMO · 90s EXCERPT"}
          </span>
        </button>
      )}
      {error && (
        <p role="alert">
          {lang === "zh"
            ? "视频加载失败，请重试或查看"
            : "Video could not load. Retry or visit"}{" "}
          <a href={source} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </p>
      )}
    </div>
  );
}
