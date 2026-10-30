import { c } from "./projects";
export const research = [
  {
    id: "frame",
    title: "FRAME",
    full: "Criticality-Aware RoI Batch Scheduling for Real-Time Embedded GPU Perception",
    status: c(
      "已投稿 · EMSOFT 2026",
      "Submitted · EMSOFT 2026",
    ),
    role: c(
      "核心参与成员",
      "Core research contributor",
    ),
    text: c(
      "参与在线RoI批处理调度框架与Resizing策略设计，协调动态RoI尺寸、任务关键度与硬实时截止时间。在所报告的高负载实验配置下，截止时间错失率最高降低65%。",
      "Contributed to online RoI batch scheduling and resizing strategies that reconcile variable RoI sizes, task criticality and hard deadlines. Deadline misses were reduced by up to 65% in the reported high-load experimental configurations.",
    ),
    tags: ["C++", "Python", "Jetson Orin", "Real-Time Systems"],
  },
  {
    id: "aios",
    title: "Embedded AIOS",
    full: "System Architecture and Orchestration in Embedded AIOS: A Survey",
    status: c(
      "英文稿基本完成 · 拟投JSA / ACM TECS",
      "Manuscript largely complete · intended for JSA / ACM TECS",
    ),
    role: c("第一作者", "First author"),
    text: c(
      "研究Agent Runtime、AI Execution Kernel、Model Runtime、硬件抽象、任务调度与上下文管理，梳理端侧AI系统的跨层资源编排。尚未录用或发表。",
      "A survey of agent runtimes, AI execution kernels, model runtimes, hardware abstraction, scheduling and context management, with a focus on cross-layer orchestration at the edge. Not accepted or published.",
    ),
    tags: ["AI Runtime", "Embedded AI", "System Architecture"],
  },
  {
    id: "ink",
    title: "水墨丹青 / E-Ink",
    full: "Connected E-Ink Information Display System",
    status: c(
      "国家级大创结项 · 2024.11—2026.04",
      "Completed national undergraduate innovation project · 2024.11–2026.04",
    ),
    role: c("项目负责人", "Project lead"),
    text: c(
      "负责ESP终端与SPI刷新、Node.js/Web管理和华为云IoTDA接入。获全国大学生物联网设计竞赛全国总决赛二等奖，项目形成两项电子纸系统相关软件著作权。",
      "Led ESP device integration, SPI display updates, Node.js/Web management and Huawei Cloud IoTDA connectivity. The project received second prize in the national IoT design competition finals and two e-paper software copyright registrations.",
    ),
    tags: ["ESP", "SPI", "Node.js", "IoTDA"],
  },
];
