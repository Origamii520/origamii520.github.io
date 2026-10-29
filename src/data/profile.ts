import { c } from "./projects";
export const profile = {
  name: c("张修齐", "Xiuqi Zhang"),
  github: "https://github.com/Origamii520",
  email: "zxq13204030517@163.com",
  intro: c(
    "我主要关注机器人系统软件、嵌入式实时调度与端侧AI Runtime，具有真实四足机器人部署、ROS 2中间件适配、仿真联调与Jetson Orin平台实验经验。希望通过扎实的软件系统工作，将智能算法与真实硬件连接起来。",
    "I work at the intersection of robotics systems software, embedded real-time scheduling and edge AI runtimes. My experience spans physical quadruped deployment, ROS 2 middleware integration, simulation and experiments on Jetson Orin. I aim to connect intelligent algorithms with real hardware through reliable systems engineering.",
  ),
  about: [
    c(
      "我是东北大学计算机科学与工程学院物联网工程本科生，曾获本科生国家奖学金（获奖比例约前1%）。已接受北京大学软件与微电子学院电子信息专业硕士推免拟录取通知，预计2027年9月入学。",
      "I am an undergraduate in Internet of Things Engineering at Northeastern University’s School of Computer Science and Engineering, and a National Scholarship recipient (approximately the top 1%). I have accepted a provisional offer of admission through recommendation to the master’s program in Electronic Information at Peking University’s School of Software and Microelectronics, with entry expected in September 2027.",
    ),
    c(
      "我的兴趣从操作系统延伸至AI Runtime与机器人中间件：在FRAME研究中探索实时GPU调度，以第一作者撰写Embedded AIOS英文综述；作为Syswonder / Robonix开源开发者，参与Unitree Go2的真实机器人适配。",
      "My interests extend from operating systems to AI runtimes and robotics middleware. I contribute to real-time GPU scheduling research in FRAME, lead an English-language survey on Embedded AIOS, and work on Unitree Go2 integration in the Syswonder / Robonix open-source community.",
    ),
    c(
      "我重视设备调试、系统集成、性能测试与技术文档，让实验中的能力成为可部署、可追踪、可维护的软件。",
      "I value hands-on debugging, system integration, performance testing and technical documentation: the work that turns an experiment into deployable, traceable and maintainable software.",
    ),
  ],
};
export const skills = [
  ["Languages", "C · C++ · Python"],
  ["Systems", "Linux · Embedded Systems · Real-Time Scheduling · Git · Docker"],
  [
    "Robotics",
    "ROS 2 · CycloneDDS · Unitree SDK2 · RTAB-Map · Nav2 · MuJoCo · TF",
  ],
  ["AI / Runtime", "PyTorch · Embedded AI · AI Runtime · MiniCPM"],
  ["Tools", "GitHub · VS Code · LaTeX · Overleaf"],
];
export const experience = [
  {
    date: "2023.09 — 2027.06",
    title: c("东北大学", "Northeastern University"),
    text: c(
      "计算机科学与工程学院 · 物联网工程本科（预计毕业）",
      "School of Computer Science and Engineering · B.Eng. in Internet of Things Engineering (expected)",
    ),
  },
  {
    date: "2027.09 · Expected",
    title: c("北京大学", "Peking University"),
    text: c(
      "软件与微电子学院 · 电子信息专业，硕士推免拟录取，预计2027年9月入学",
      "School of Software and Microelectronics · provisional admission through recommendation to the master’s program in Electronic Information; expected entry in September 2027",
    ),
  },
  {
    date: "2026.07 — Present",
    title: c(
      "Syswonder / Robonix 开源社区",
      "Syswonder / Robonix Open Source Community",
    ),
    text: c(
      "Robonix-Go2机器人适配与能力部署",
      "Robonix-Go2 integration and capability deployment",
    ),
  },
  {
    date: "2024.03 — Present",
    title: c(
      "辽宁省嵌入式系统重点实验室",
      "Liaoning Provincial Key Laboratory of Embedded Systems",
    ),
    text: c(
      "GPU实时调度与嵌入式AI系统架构研究",
      "Real-time GPU scheduling and embedded AI system architecture research",
    ),
  },
];
export const honors = [
  c("2024 本科生国家奖学金", "2024 National Scholarship for Undergraduates"),
  c(
    "东北大学优秀学生标兵 · 校一等奖学金",
    "Northeastern University Outstanding Student Model · First-class University Scholarship",
  ),
  c(
    "2025 全国大学生物联网设计竞赛全国总决赛二等奖",
    "2025 National Undergraduate IoT Design Competition · Second Prize, National Finals",
  ),
  c(
    "2025 第二届全国创新工程大赛本科组三等奖",
    "2025 Second National Innovation Engineering Competition · Undergraduate Third Prize",
  ),
  c(
    "全国大学生英语竞赛三等奖",
    "National English Competition for College Students · Third Prize",
  ),
];
