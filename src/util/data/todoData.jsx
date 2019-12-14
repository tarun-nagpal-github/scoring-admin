export const listNames = [
  {
    id: 1,
    title: "first",
    count: 1
  },
  {
    id: 2,
    title: "second",
    count: 0
  }
];

export const todosData = [
  {
    id: 1,
    title: "Make designs",
    listId: 1,
    isBookmark: true,
    myDay: new Date(),
    isImportant: false,
    isComplete: false,
    dueDate: "October 11, 2019 12:00 AM",
    files: [],
    notes: "Design Notes",
    createdAt: 1571554013,
    steps: [
      {
        id: 1,
        title: "Gather requirement",
        isCompleteisCompleteisComplete: false
      },
      {
        id: 2,
        title: "Select Tools",
        isComplete: true
      },
      {
        id: 3,
        title: "Paper Designs",
        isComplete: false
      }
    ]
  },
  {
    id: 2,
    title: "Api integration and development",
    listId: null,
    isBookmark: false,
    myDay: null,
    isImportant: true,
    isComplete: true,
    dueDate: "October 11, 2019 12:00 AM",
    files: [],
    notes: "Api Notes",
    createdAt: 1571554013,
    steps: [
      {
        id: 1,
        title: "Gather requirement",
        isComplete: true
      },
      {
        id: 2,
        title: "Design Structure",
        isComplete: false
      },
      {
        id: 3,
        title: "Make document of api",
        isComplete: false
      }
    ]
  }
];
