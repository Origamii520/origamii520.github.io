import { c } from "./projects";

export const showcaseViews = [
  {
    id: "robot",
    label: c("Go2 实机", "Physical Go2"),
    image: "/images/hero-go2.webp",
    title: "Intelligence, on hardware.",
    description: c(
      "真实 Go2 部署：连接机载感知、机器人中间件与底盘控制。",
      "A physical Go2 deployment connecting onboard sensing, robotics middleware and chassis control.",
    ),
    caption: c("实机演示画面", "Physical robot demo frame"),
    stack: ["Unitree Go2", "ROS 2", "Robonix"],
  },
  {
    id: "perception",
    label: c("感知界面", "Perception"),
    image: "/images/hero-perception.webp",
    title: "From sensors to context.",
    description: c(
      "相机、深度与激光雷达：让系统获得可用于导航的环境信息。",
      "Camera, depth and lidar inputs provide environmental context for navigation.",
    ),
    caption: c("Robonix 实际运行界面", "Recorded Robonix interface"),
    stack: ["RGB-D", "LiDAR / IMU", "TF"],
  },
  {
    id: "simulation",
    label: c("MuJoCo 仿真", "Simulation"),
    image: "/images/simulation.webp",
    title: "Build. Simulate. Validate.",
    description: c(
      "在 MuJoCo 中联调机器人状态与任务链路，支持脱离实机的系统验证。",
      "Integrate robot state and task execution in MuJoCo for system checks without physical hardware.",
    ),
    caption: c("MuJoCo 实际演示画面", "Recorded MuJoCo demonstration"),
    stack: ["MuJoCo", "ROS 2", "System Integration"],
  },
];

