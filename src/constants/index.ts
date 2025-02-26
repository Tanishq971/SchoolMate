export const SidebarItems =  [
    {
      label: "Home",
      url: "/",
      visible: ["admin", "teacher", "student", "parent"],
    },
    {
      label: "Teachers",
      url: "/list/teachers",
      visible: ["admin", "teacher"],
    },
    {
      label: "Students",
      url: "/list/students",
      visible: ["admin", "teacher"],
    },
    {
      label: "Parents",
      url: "/list/parents",
      visible: ["admin", "teacher"],
    },
    {
      label: "Subjects",
      url: "/list/subjects",
      visible: ["admin"],
    },
    {
      label: "Classes",
      url: "/list/classes",
      visible: ["admin", "teacher"],
    },
    {
      label: "Lessons",
      url: "/list/lessons",
      visible: ["admin", "teacher"],
    },
    {
      label: "Exams",
      url: "/list/exams",
      visible: ["admin", "teacher"],
    },
    {
      label: "Assignments",
      url: "/list/assignments",
      visible: ["admin", "teacher"],
    },
    {
      label: "Results",
      url: "/list/results",
      visible: ["admin", "teacher"],
    },
    {
      label: "Attendance",
      url: "/list/attendance",
      visible: ["admin", "teacher"],
    },
    {
        label: "accounts",
        url: "/accounts",
        visible: ["admin"],
    }
  ]