export type Lang = "zh" | "en";
export type Copy = { zh: string; en: string };
export const c = (zh: string, en: string): Copy => ({ zh, en });
export const catalog =
  "https://packages.robonix.ai/robots/robonix.robot.unitree.go2/";
export const projects = [
  {
    id: "navigation",
    number: "01",
    category: "Systems",
    title: c(
      "Robonix-Go2 · 中间件与自主导航",
      "Robonix-Go2: Robotics Middleware & Autonomous Navigation",
    ),
    short: c(
      "从中文任务到真实机器人的导航闭环。",
      "From a spoken task to navigation on a real robot.",
    ),
    role: c(
      "主要开发者 · Go2开源项目维护者",
      "Core developer · Go2 project maintainer",
    ),
    date: "2026.07 — Present",
    stack: [
      "C++",
      "ROS 2 Humble",
      "CycloneDDS",
      "Unitree SDK2",
      "RTAB-Map",
      "Nav2",
      "TF",
      "Python",
    ],
    source: "https://github.com/syswonder/robot-unitree-go2",
    catalog,
    details: [
      c(
        "让上层任务稳定地连接到底盘、传感器与导航系统，处理真实部署中的通信和坐标系问题。",
        "Connect high-level tasks to chassis, sensors and navigation while addressing communication and coordinate-frame issues in deployment.",
      ),
      c(
        "中文语音 → 语义地标 → Robonix → Nav2 → 受保护的速度指令 → Unitree SDK2；RTAB-Map与传感器/TF链路提供环境与状态信息。",
        "Chinese speech → semantic landmark → Robonix → Nav2 → guarded velocity commands → Unitree SDK2, with RTAB-Map and sensor/TF integration.",
      ),
      c(
        "参与底盘控制、里程计、IMU、激光雷达、相机与TF接口适配；集成建图、导航与中文语音任务，开展运行保护、安全停止和通信故障排查。",
        "Adapted chassis and odometry/IMU/lidar/camera/TF interfaces; integrated mapping, navigation and Chinese voice tasks, and worked on safeguards, safe stopping and communication diagnosis.",
      ),
      c(
        "完成真实Go2中文语音导航与自主返航闭环验证。团队代码已开源并发布至Robonix Package Catalog；视频为连续片段，不等同于完整验收记录。",
        "Validated Chinese voice navigation and autonomous return on a real Go2. Team code is open source and listed in the Robonix Package Catalog. The continuous video excerpt is not a complete acceptance record.",
      ),
    ],
  },
  {
    id: "tracking",
    number: "02",
    category: "Robotics",
    title: c(
      "MiniCPM-RobotTrack · 视觉目标跟随",
      "MiniCPM-RobotTrack: Vision-Guided Robot Following",
    ),
    short: c(
      "将视觉模型接入Go2的感知与运动链路。",
      "Bringing a vision model into the Go2 perception–action loop.",
    ),
    role: c(
      "模型部署与机器人接口适配",
      "Model deployment & robot interface integration",
    ),
    date: "",
    stack: ["Linux", "MiniCPM-RobotTrack", "VLM", "Jetson", "Robot Control"],
    source: "https://github.com/OpenBMB/MiniCPM-Robot",
    upstream: true,
    catalog,
    details: [
      c(
        "将上游视觉跟随能力部署到真实设备，打通摄像头输入、模型推理与运动控制。",
        "Deploy upstream visual tracking on physical hardware and connect camera input, inference and motion control.",
      ),
      c(
        "视觉输入 → MiniCPM-RobotTrack推理 → 运动命令适配 → Go2底盘反馈。",
        "Camera input → MiniCPM-RobotTrack inference → motion-command adaptation → Go2 chassis feedback.",
      ),
      c(
        "参与模型部署、推理链路调试、视觉数据接入和底盘接口联调；不涉及MiniCPM基础模型原创或训练。",
        "Worked on deployment, inference debugging, visual input and chassis integration. This work does not claim authorship or training of the MiniCPM foundation model.",
      ),
      c(
        "完成视觉目标跟随的实机验证。展示链接为OpenBMB上游代码；尚未核实可公开的专用适配仓库。",
        "Demonstrated visual following on real hardware. The source link points to OpenBMB upstream; a separate public adaptation repository has not been verified.",
      ),
    ],
  },
  {
    id: "simulation",
    number: "03",
    category: "Systems",
    title: c(
      "Robonix-Go2 · MuJoCo仿真系统",
      "Robonix-Go2: MuJoCo Simulation & System Integration",
    ),
    short: c(
      "在仿真中联调，在实机前验证。",
      "Integrate in simulation. Validate before hardware deployment.",
    ),
    role: c(
      "仿真适配与系统集成参与者",
      "Simulation adaptation & system integration contributor",
    ),
    date: "",
    stack: ["MuJoCo", "ROS 2", "Python", "WebSocket", "RTAB-Map", "Nav2"],
    source: "https://github.com/syswonder/robot-unitree-go2-mujoco",
    details: [
      c(
        "降低对实机的依赖，为接口、状态和任务链路提供可重复的调试环境。",
        "Reduce dependence on physical hardware with a repeatable environment for debugging interfaces, state and task execution.",
      ),
      c(
        "Web / Native MuJoCo运行环境连接模拟里程计、IMU、激光雷达与RGB-D传感器，并通过ROS 2对接机器人能力。",
        "Web and native MuJoCo environments connect simulated odometry, IMU, lidar and RGB-D sensors to robot capabilities through ROS 2.",
      ),
      c(
        "参与Go2仿真本体适配、通信与状态接口联调，以及建图、导航和场景交互的系统集成。相关能力由开源团队共同开发。",
        "Contributed to Go2 simulation adaptation, communication/state interfaces and integration for mapping, navigation and scene interaction. Capabilities are developed collaboratively by the open-source team.",
      ),
      c(
        "支持脱离实机的系统验证；本段演示展示Native MuJoCo场景中的运动与交互，不据此宣称全部导航能力已完成实机验证。",
        "Supports system checks without physical hardware. This excerpt shows locomotion and interaction in native MuJoCo; it does not establish hardware validation of every navigation capability.",
      ),
    ],
  },
  {
    id: "sport",
    number: "04",
    category: "Robotics",
    title: c(
      "Go2 Sport Actions · 可复用运动技能",
      "Go2 Sport Actions: Reusable Robot Skills",
    ),
    short: c(
      "将底层动作组织为可调用、可取消的技能。",
      "Turning low-level actions into callable, cancellable skills.",
    ),
    role: c(
      "运动技能封装与实机联调",
      "Skill integration & physical robot testing",
    ),
    date: "",
    stack: [
      "Unitree Sport SDK",
      "Robonix Skills",
      "Python",
      "Robotics Control",
    ],
    source: "https://github.com/syswonder/skill-unitree-go2-sport-actions-rbnx",
    details: [
      c(
        "让运动动作具有统一调用方式，并处理冲突、状态反馈与生命周期。",
        "Provide consistent action invocation with conflict handling, state feedback and lifecycle management.",
      ),
      c(
        "Robonix Client → Skill注册与调用 → 共享动作服务 → 官方Sport接口 → Go2。",
        "Robonix Client → skill registration and invocation → shared action service → official Sport interface → Go2.",
      ),
      c(
        "参与动作封装、状态反馈与取消、共享服务生命周期管理、运动冲突控制及安全停止，并开展实机动作验证。",
        "Worked on action wrappers, feedback and cancellation, shared-service lifecycle, motion conflict handling and safe stopping, with physical robot checks.",
      ),
      c(
        "演示展示语音触发的Go2动作。仓库版本持续更新，本页不将历史底层动作验收等同于当前所有Skill均完成实机测试。",
        "The demo shows voice-triggered Go2 actions. As the repository evolves, historical validation of underlying actions is not treated as hardware validation of every current skill.",
      ),
    ],
  },
];
