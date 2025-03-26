const Data = [
  {
    title: "This is a long title, so long that",
    id: 1,
    content: "Hello World!"
  },
  {
    title: "Note 2",
    id: 2,
    content: "Quick reminder to follow up on this."
  },
  {
    title: "Note 3",
    id: 3,
    content: "Detailed analysis of the current situation with multiple points to consider and evaluate."
  },
  {
    title: "Note 4",
    id: 4,
    content: "Short note here."
  },
  {
    title: "Note 5",
    id: 5,
    content: "Planning session notes including timelines, resources, and key deliverables for the next quarter."
  },
  {
    title: "Note 6",
    id: 6,
    content: "TODO: Complete this section."
  },
  {
    title: "Note 7",
    id: 7,
    content: "Meeting summary with action items assigned to team members and deadlines set for next week."
  },
  {
    title: "Note 8",
    id: 8,
    content: "Just a placeholder."
  },
  {
    title: "Note 9",
    id: 9,
    content: "Extended documentation covering all aspects of the feature implementation and testing procedures."
  },
  {
    title: "This is not a long title",
    id: 10,
    content: "Brief update on progress."
  },
  {
    title: "Meeting Notes - Product Launch 🚀",
    id: 11,
    content: "Launch strategy discussion including marketing plans, target audience, and key messaging for the campaign."
  },
  {
    title: "React Native Best Practices 📱",
    id: 12,
    content: "Guidelines for optimal mobile development."
  },
  {
    title: "Weekly Goals & Objectives 🎯",
    id: 13,
    content: "List of priorities and measurable outcomes for the team to achieve by end of week."
  },
  {
    title: "Project Timeline - Q2 2024",
    id: 14,
    content: "Detailed schedule with milestones and dependencies."
  },
  {
    title: "API Documentation Draft 📝",
    id: 15,
    content: "Initial draft of endpoints, parameters, and response structures for review."
  },
  {
    title: "Bug Fixes - v2.0.1",
    id: 16,
    content: "List of resolved issues and testing notes."
  },
  {
    title: "Team Feedback Session Notes",
    id: 17,
    content: "Collected input from team members regarding workflow improvements and tool suggestions."
  },
  {
    title: "Design System Guidelines 🎨",
    id: 18,
    content: "Comprehensive style guide with examples."
  },
  {
    title: "Client Meeting - ABC Corp",
    id: 19,
    content: "Key points discussed and next steps."
  },
  {
    title: "Feature Ideas for v3.0",
    id: 20,
    content: "Brainstorming session output with prioritized feature list and potential impact analysis."
  },
  {
    title: "Code Review Checklist ✅",
    id: 21,
    content: "Essential items to verify during reviews."
  },
  {
    title: "User Research Findings",
    id: 22,
    content: "Detailed report of user testing sessions including pain points and recommendations."
  },
  {
    title: "Performance Optimization Tips",
    id: 23,
    content: "Best practices for improving app speed."
  },
  {
    title: "Marketing Strategy Draft",
    id: 24,
    content: "Initial plan with channels, budget, and timeline considerations for Q3."
  },
  {
    title: "UI Component Library 🎯",
    id: 25,
    content: "Catalog of reusable components with usage examples."
  },
  {
    title: "Sprint Planning Notes",
    id: 26,
    content: "Tasks assigned and sprint goals defined."
  },
  {
    title: "Database Schema Design",
    id: 27,
    content: "ERD and table relationships documentation."
  },
  {
    title: "Testing Strategy Document",
    id: 28,
    content: "Comprehensive approach to QA including unit, integration, and end-to-end tests."
  },
  {
    title: "Accessibility Guidelines ♿",
    id: 29,
    content: "WCAG compliance checklist and implementation notes."
  },
  {
    title: "Project Dependencies List",
    id: 30,
    content: "Required libraries and versions."
  },
  {
    title: "Security Audit Findings 🔒",
    id: 31,
    content: "Vulnerabilities identified and mitigation strategies proposed."
  },
  {
    title: "CI/CD Pipeline Setup",
    id: 32,
    content: "Configuration details and deployment steps."
  },
  {
    title: "App Store Release Notes",
    id: 33,
    content: "Changelog for upcoming release."
  },
  {
    title: "User Onboarding Flow",
    id: 34,
    content: "Step-by-step guide for new users."
  },
  {
    title: "Analytics Implementation",
    id: 35,
    content: "Tracking events and metrics setup."
  },
  {
    title: "Tech Stack Evaluation 🔧",
    id: 36,
    content: "Pros and cons of current tools and alternatives."
  },
  {
    title: "Code Architecture Notes",
    id: 37,
    content: "Structural overview and design patterns."
  },
  {
    title: "Error Handling Guidelines",
    id: 38,
    content: "Standard approach to managing exceptions."
  },
  {
    title: "API Endpoints List",
    id: 39,
    content: "Complete inventory of available APIs."
  },
  {
    title: "Team Coding Standards",
    id: 40,
    content: "Agreed-upon conventions and formatting rules."
  },
  {
    title: "Mobile App Roadmap 📱",
    id: 41,
    content: "Long-term plan with feature releases and timelines."
  },
  {
    title: "UX Research Findings",
    id: 42,
    content: "User experience insights and recommendations."
  },
  {
    title: "Deployment Checklist",
    id: 43,
    content: "Pre-launch verification steps."
  },
  {
    title: "State Management Notes",
    id: 44,
    content: "Redux vs Context API comparison."
  },
  {
    title: "Git Workflow Guide",
    id: 45,
    content: "Branching strategy and commit guidelines."
  },
  {
    title: "Performance Metrics 📊",
    id: 46,
    content: "Key indicators and benchmarks."
  },
  {
    title: "Team Retro Notes",
    id: 47,
    content: "What went well and areas for improvement."
  },
  {
    title: "Debug Session Log",
    id: 48,
    content: "Steps taken to resolve recent issue."
  },
  {
    title: "Feature Flags Config",
    id: 49,
    content: "Toggle settings for staged rollouts."
  },
  {
    title: "Testing Environment Setup",
    id: 50,
    content: "Instructions for local and staging environments."
  },
  {
    title: "Design System Colors 🎨",
    id: 51,
    content: "Primary and secondary color palette definitions."
  },
  {
    title: "API Authentication Flow",
    id: 52,
    content: "OAuth2 implementation details."
  },
  {
    title: "Code Optimization Tips",
    id: 53,
    content: "Techniques for better performance."
  },
  {
    title: "Release Planning Notes",
    id: 54,
    content: "Timeline and resource allocation."
  },
  {
    title: "Component Library Docs",
    id: 55,
    content: "Usage instructions and examples."
  },
  {
    title: "Unit Testing Guide ✅",
    id: 56,
    content: "Best practices for writing tests."
  },
  {
    title: "Backend Integration Notes",
    id: 57,
    content: "API connection details and troubleshooting."
  },
  {
    title: "App Performance Report",
    id: 58,
    content: "Latest metrics and analysis."
  },
  {
    title: "Design Review Feedback",
    id: 59,
    content: "Suggestions from last review session."
  },
  {
    title: "Project Timeline Update",
    id: 60,
    content: "Revised schedule with new deadlines."
  },
]

export default Data