export const projects = [
  {
    title: "TeachTeam Web Prototype",
    description:
      "A front-end tutor recruitment system prototype that allows lecturers to select tutors and manage applications. Built with React + TypeScript and styled using Chakra UI, this system lets tutor applicants submit their availability, skills, and qualifications, while lecturers can search, rank, and comment on candidates. All data is handled via localStorage, with no backend or external APIs. The interface is modular, responsive, and follows modern UI principles.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "HTML/CSS",
      "Chakra UI",
      "localStorage",
    ],
    image: "/images/techteam-web-prototype.png",
    github: "https://github.com/minghsuan0317/techteam-react-ts",
    link: "https://your-demo-link.com",
  },
  {
    title: "Pharmacy CLI",
    description:
      "A command-line pharmacy management system that handles inventory, orders, and customer reward points using OOP in Python. Designed as a fully object-oriented application, this program allows pharmacy staff to manage medicine stock, process customer purchases, apply discounts and late penalties, and track reward points. Data is persisted via file I/O, and error handling ensures robust interaction. Supports search, filtered reporting, and exception handling for invalid input.",
    tech: ["Python", "OOP", "File I/O", "Exception Handling"],
    image: "/images/pharmacy-opp.png",
    github: "https://github.com/minghsuan0317/pharmacy-cli-python",
  },
  {
    title: "Library System",
    description:
      "A secure web-based library management system that supports user login, book search, download, and admin control. Developed using Flask + SQLite with role-based access control. The system features user registration, password reset (email + token), book search/download, and admin capabilities for managing book inventory and user accounts. All communications are secured with HTTPS and CSRF protection.",
    tech: ["Python", "Flask", "SQLite", "HTML/CSS", "AWS", "EC2", "HTTPS"],
    image: "/images/library-system.png",
    github: "https://github.com/minghsuan0317/library-system-flask",
  },
  {
    title: "Bookstore App",
    description:
      "A JavaFX desktop bookstore app that supports user login, shopping cart, admin stock control, and CSV export. Built with JavaFX and SQLite using MVC and design patterns (e.g., Singleton), this GUI application allows users to register, browse top-selling books, manage orders, and complete purchases with basic credit card validation. Admins can update stock levels and track sold items. Includes persistent data storage, error handling, and SOLID-compliant structure.",
    tech: ["Java", "JavaFX", "JDBC", "MVC", "SQLite", "Design Patterns"],
    image: "/images/the-reading-room.png",
    github: "https://github.com/minghsuan0317/bookstore-javafx",
  },
];
