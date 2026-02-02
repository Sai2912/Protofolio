// Mock data for Sai Kumar's Portfolio

export const personalInfo = {
  name: "Sai Kumar Hussainappagari",
  title: "Software Test Engineer",
  tagline: "Automation & Manual Testing Specialist",
  location: "Hyderabad, India",
  experience: "3 Years",
  email: "hussainsai7575@gmail.com",
  phone: "+91-8686836044",
  linkedin: "https://www.linkedin.com/in/sai-kumar-h",
  summary: "Experienced Software Test Engineer with 3 years of expertise in Manual and Automation Testing. Specialized in Playwright, Selenium, API Testing, and CI/CD integration. Strong background in Agile methodologies with proven track record of delivering quality solutions for enterprise clients."
};

export const workExperience = [
  {
    id: 1,
    company: "LOA Technologies",
    role: "Software Test Engineer",
    duration: "Feb 2024 – Nov 2024",
    location: "Remote",
    client: "PDI Technologies",
    project: "Fuel & POS Management System",
    description: "PDI Fuel & POS Management System used by fuel stations and convenience stores for day-to-day operations including fuel inventory, wet stock management, POS transactions, and reconciliation.",
    responsibilities: [
      "Performed functional, smoke, and regression testing across multiple customer implementations",
      "Validated core workflows across Fuel Management, POS Transactions, Inventory, Pricing, Dispatch, and HHT modules",
      "Executed end-to-end store operations including fuel reconciliation and wet stock updates",
      "Conducted backend testing using SQL for data validation and cross-system consistency",
      "Collaborated with Business Analysts, Developers, and Product Owners for requirement discussions",
      "Participated in Agile ceremonies including sprint planning, grooming, and daily standups"
    ],
    technologies: ["Playwright", "SQL", "Postman", "Jira", "Agile/Scrum"]
  },
  {
    id: 2,
    company: "Tecra Systems Pvt Ltd",
    role: "Software Test Engineer",
    duration: "July 2023 – Jan 2024",
    location: "Remote",
    client: "360insights",
    project: "Co-Op / MDF Solution",
    description: "360insights marketing automation platform with modules for Customer Management, User Hierarchies, PA Management, Claim Processing, Promotions, and Payment Registers.",
    responsibilities: [
      "Worked on multiple projects simultaneously meeting tight deadlines",
      "Created detailed test cases and test data for project-specific requirements",
      "Performed defect reporting and tracking ensuring timely closure",
      "Acted as coordinator between onsite and offsite teams",
      "Participated in weekly client meetings and demonstrated sprint changes",
      "Involved in Build Verification Testing before and after production releases"
    ],
    technologies: ["Selenium", "TestNG", "Maven", "Jira", "API Testing"]
  }
];

export const skills = [
  { name: "Core Java", level: 85, category: "Programming" },
  { name: "SQL", level: 80, category: "Programming" },
  { name: "Playwright (Java)", level: 90, category: "Automation" },
  { name: "Selenium WebDriver", level: 85, category: "Automation" },
  { name: "Cucumber BDD", level: 85, category: "Automation" },
  { name: "TestNG", level: 80, category: "Automation" },
  { name: "Maven", level: 75, category: "Automation" },
  { name: "Page Object Model (POM)", level: 90, category: "Framework" },
  { name: "Hybrid Frameworks", level: 85, category: "Framework" },
  { name: "Data-Driven Framework", level: 80, category: "Framework" },
  { name: "REST Assured", level: 80, category: "API Testing" },
  { name: "Postman", level: 85, category: "API Testing" },
  { name: "Jenkins", level: 75, category: "CI/CD" },
  { name: "Azure DevOps", level: 70, category: "CI/CD" },
  { name: "Git", level: 80, category: "CI/CD" },
  { name: "Maven Surefire", level: 75, category: "CI/CD" },
  { name: "Allure Reports", level: 85, category: "Reporting" },
  { name: "Custom Reporting", level: 75, category: "Reporting" },
  { name: "MySQL", level: 75, category: "Database" },
  { name: "SQL Server", level: 75, category: "Database" },
  { name: "JDBC", level: 70, category: "Database" },
  { name: "ChatGPT", level: 80, category: "AI Tools" },
  { name: "Claude AI", level: 80, category: "AI Tools" },
  { name: "Test Script Generators", level: 75, category: "AI Tools" }
];

export const projects = [
  {
    id: 1,
    title: "Fuel & POS Management System",
    client: "PDI Technologies",
    description: "Comprehensive testing solution for fuel stations and convenience stores managing operations, inventory, and transactions.",
    role: "Lead Test Engineer",
    highlights: [
      "Executed 500+ test cases across multiple customer implementations",
      "Reduced regression testing time by 40% through automation",
      "Implemented end-to-end validation for critical business workflows",
      "Performed backend data validation ensuring 99.9% data accuracy"
    ],
    technologies: ["Playwright", "SQL", "Postman", "Jenkins", "Jira"],
    testingTypes: ["Functional", "Regression", "Backend", "API Testing"]
  },
  {
    id: 2,
    title: "Co-Op Marketing Automation Platform",
    client: "360insights",
    description: "Enterprise-grade marketing automation and channel sales incentive platform with complex claim processing workflows.",
    role: "QA Engineer",
    highlights: [
      "Coordinated testing across onsite and offsite teams",
      "Achieved 95% defect detection rate during sprint testing",
      "Participated in 20+ client demos and feedback sessions",
      "Ensured zero critical bugs in production releases"
    ],
    technologies: ["Selenium", "TestNG", "Maven", "API Testing", "Jira"],
    testingTypes: ["Smoke", "BVT", "UAT", "GUI Testing"]
  }
];

export const education = {
  degree: "B.Tech in Civil Engineering",
  institution: "DVR & DR.HS MIC College of Technology",
  university: "JNTU Kakinada",
  location: "Andhra Pradesh, India",
  year: "2021",
  cgpa: "6.39"
};

export const achievements = [
  "Received appreciation from clients for quality deliverables and meeting tight timelines",
  "Recognized by development team for effective issue resolution in meetings",
  "Successfully coordinated cross-functional teams across multiple time zones",
  "Mentored junior team members in automation best practices"
];

export const testingExpertise = [
  "Smoke Testing",
  "Functional Testing",
  "GUI Testing",
  "Regression Testing",
  "Re-testing",
  "Backend Testing",
  "UAT Testing",
  "API Testing",
  "Cross-browser Testing",
  "Build Verification Testing"
];
