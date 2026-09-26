import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Shreyansh Agarwal",
  initials: "SA",
  url: "https://shreyansh-portfolio33.vercel.app",
  location: "Jaipur, India",
  description:
    "AI/ML & Software Engineer building intelligent applications, RAG systems, and scalable backend services.",
  summary:
    "I’m a Computer Science undergraduate at The LNM Institute of Information Technology, Jaipur, passionate about building intelligent applications and scalable software systems. My work spans AI/ML, RAG and LLM applications, backend engineering, and machine learning pipelines using technologies such as Java, Python, Spring Boot, FastAPI, LangChain, and LangGraph.",
  avatarUrl: "/profile.jpeg",
  skills: [
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "Spring Boot" },
    { name: "FastAPI" },
    { name: "LangChain" },
    { name: "LangGraph" },
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB" },
    { name: "Docker", icon: Docker },
    { name: "AWS" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Resume.pdf", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "shreyanshagarwal004@gmail.com",
    tel: "+918005681982",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Shreyansh-10-oss",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shreyansh-agarwal-08943b280/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:shreyanshagarwal004@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Eficaz HR Services Private Limited",
      href: "https://www.eficazindia.com/",
      badges: [],
      location: "Remote",
      title: "AI Engineer Intern",
      logoUrl: "/images.png",
      start: "June 2026",
      end: "Aug 2026",
      description:
        " Developed AI-powered applications using LLMs, LangChain and Retrieval-Augmented Generation (RAG), improving response relevance for context-aware user queries built document intelligence pipelines using vector embeddings and semantic search across vector databases",
    },
  ],
  education: [
    {
      school: "The LNM Institute of Information Technology",
      href: "https://lnmiit.ac.in/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/LnmiitLogo.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Truth Engine",
      href: "https://github.com/Shreyansh-10-oss/truth-engine-rag",
      dates: "2026",
      active: true,

      description:
        "An automated fact-verification and truth-assessment system built using RAG. It combines BM25 and dense retrieval, Reciprocal Rank Fusion, cross-encoder reranking, contradiction detection, and confidence scoring to retrieve and evaluate evidence for claims.",

      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "FAISS",
        "BM25",
        "RAG",
        "Cross-Encoder",
        "LLMs",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/Shreyansh-10-oss/truth-engine-rag",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/TruthEngine.png",
      video: "",
    },
    {
      title: "ScaleCart",
      href: "https://github.com/Shreyansh-10-oss/ScaleCart",
      dates: "2026",
      active: true,

      description:
        "A scalable Spring Boot e-commerce backend designed to demonstrate production-oriented backend and system design concepts including inventory management, concurrency control, caching, rate limiting, API gateway architecture, and PostgreSQL persistence.",

      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "REST APIs",
        "Concurrency",
        "Caching",
        "Rate Limiting",
        "System Design",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/Shreyansh-10-oss/ScaleCart",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/ScaleCart.png",
      video: "",
    },
    {
      title: "AI Trip Planner",
      href: "https://github.com/Shreyansh-10-oss/ai-trip-planner",
      dates: "2026",
      active: true,

      description:
        "An AI-powered travel planning application that uses LangGraph and LLM-based tool calling to dynamically generate travel itineraries using weather, places, web search, and currency information.",

      technologies: [
        "Python",
        "LangGraph",
        "LangChain",
        "Groq",
        "FastAPI",
        "Streamlit",
        "Google Places",
        "OpenWeatherMap",
        "Tavily",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/Shreyansh-10-oss/ai-trip-planner",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "AiTripPlanner.png",
      video: "",
    },
  ],
} as const;
