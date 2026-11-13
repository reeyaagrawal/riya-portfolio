export const PROFILE = {
  name: "Riya Agrawal",
  title: "Data Analyst",
  tagline: "Turning data into insights through analysis, logic and visualization.",
  email: "riyaagrawal2712@gmail.com",
  phone: "+91 7534043912",
  github: "https://github.com/reeyaagrawal",
  linkedin: "https://www.linkedin.com/in/riya-agrawal-tech/",
  resume: "https://drive.google.com/drive/folders/1eXJX1w0uZ1qPObzR6gFxKEBqPuW5gvWj?usp=drive_link",
};

export const CERT_URL =
  "https://drive.google.com/file/d/1jDGnLiwQK9slLJWdFE4JWfWlIE63IxcC/view?usp=drivesdk";
const CERT_REPO = "https://github.com/reeyaagrawal/certificates";

export const SKILLS = [
  { group: "Programming & Query Languages", items: ["SQL", "Python", "Java", "C", "C++", "JavaScript", "HTML", "CSS"] },
  { group: "Data Analytics", items: ["Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "Dashboard Development"] },
  { group: "Visualization & BI", items: ["Power BI", "DAX", "Power Query", "Data Modeling", "Interactive Dashboards", "Excel Dashboards"] },
  { group: "Libraries, Databases & Tools", items: ["NumPy", "MySQL", "MongoDB", "Microsoft Excel", "Google Sheets", "GitHub"] },
  { group: "Professional Skills", items: ["Analytical Thinking", "Problem Solving", "Communication", "Attention to Detail", "Team Collaboration"] },
];

export const EXPERIENCE = {
  org: "InAmigos Foundation",
  role: "AI Data Analytics Intern",
  period: "Aug – Sep 2026",
  mode: "Remote",
  status: "Internship Completed",
  points: [
    "Prepared analytical reports on social-impact topics.",
    "Generated AI-assisted insights and recommendations for organizational growth.",
    "Analyzed and structured information from multiple sources to support data-driven decision-making.",
  ],
  repo: "https://github.com/reeyaagrawal/AI-Data-Analytics-Internship-InAmigos",
};

export const EDUCATION = [
  {
    degree: "Master of Computer Application (MCA)",
    school: "Aligarh Muslim University, U.P., India",
    period: "July 2025 – Pursuing",
    score: "GPA: 9.00 (current)",
  },
  {
    degree: "Bachelor of Science (Honors) — Mathematics",
    school: "Aligarh Muslim University, U.P., India",
    period: "June 2022 – May 2025",
    score: "CGPA: 8.00",
  },
];

export const CERTS = [
  { title: "AI Data Analytics Internship Completion Certificate", org: "InAmigos Foundation", date: "Aug – Sep 2026", url: CERT_URL },
  { title: "Power BI Certificate", org: "Listed on resume", date: "", url: `${CERT_REPO}/blob/HEAD/Power%20BI%20certificate.png` },
  { title: "SQL Certificate", org: "HackerRank", date: "", url: `${CERT_REPO}/blob/HEAD/hackerrank%20sql%20certificate.png` },
];

export const MORE_DASHBOARDS = [
  {
    title: "Cybersecurity Dashboard",
    images: ["/img/cyber-executive.webp", "/img/cyber-threat.webp"],
    alt: "Executive and threat analysis pages of the Cybersecurity Power BI dashboard",
    desc: "Interactive Power BI dashboard on incidents, threat patterns and response performance, with executive, threat-analysis and incident-response pages.",
    tech: ["Power BI", "DAX", "Excel"],
    url: "https://github.com/reeyaagrawal/Cybersecurity-PowerBI-Dashboard",
  },
  {
    title: "Financial Performance Dashboard",
    images: ["/img/finance-1.webp", "/img/finance-2.webp"],
    alt: "Pages of the Financial Performance Power BI dashboard",
    desc: "Power BI dashboard on sales, profit, COGS and product performance across segments and countries, using the Microsoft Financial Sample dataset.",
    tech: ["Power BI", "Excel"],
    url: "https://github.com/reeyaagrawal/Finance-dashboard",
  },
  {
    title: "Netflix Content Analytics",
    images: ["/img/netflix-1.webp", "/img/netflix-2.webp"],
    alt: "Pages of the Netflix Content Power BI dashboard",
    desc: "Power BI dashboard exploring movies, TV shows, genres, ratings, directors and release trends with country and year slicers.",
    tech: ["Power BI", "Power Query", "DAX"],
    url: "https://github.com/reeyaagrawal/Netflix-content-dashboard",
  },
];

export const REPOS = [
  { name: "AI-Data-Analytics-Internship-InAmigos", desc: "Offer letter, completion certificate and task work from the InAmigos internship.", lang: "Documentation" },
  { name: "numpy-python", desc: "NumPy practice: array properties, indexing, reshaping, broadcasting, vectorization and missing values.", lang: "Python" },
  { name: "python-mini-projects", desc: "Small Python programs including a calculator, to-do list, games and a QR code generator.", lang: "Python" },
  { name: "excel-dashboard", desc: "Excel workbook containing a dashboard.", lang: "Excel" },
  { name: "Quiz-App", desc: "Java Swing quiz application with MySQL.", lang: "Java" },
  { name: "certificates", desc: "Collection of my learning certificates.", lang: "Images / PDF" },
].map((r) => ({ ...r, url: `https://github.com/reeyaagrawal/${r.name}` }));
