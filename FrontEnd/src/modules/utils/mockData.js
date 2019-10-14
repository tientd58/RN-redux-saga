export const ALL_TASK = {
  data: {
    todos: [
      {
        taskId: '111111111',
        title: 'Complete Todo Application',
        description: 'test description',
        updatedAt: 1566235508136,
        startDate: 1566235508136,
        startTime: 1566235508136,
        endTime: 1566235508136,
        status: 'TO_DO',
        bookmark: false,
        isComplete: false,
        tags: [
          {
            tagId: 4,
            color: 'yellow',
            title: 'Yellow',
            isSelect: true
          },
          {
            tagId: 5,
            color: 'orange',
            title: 'Orange',
            isSelect: true
          }
        ],
      },
      {
        taskId: '222222222',
        title: 'Update UI for Todos',
        description: 'test description',
        updatedAt: 1566235508136,
        startDate: 1566235508136,
        startTime: 1566235508136,
        endTime: 1566235508136,
        status: 'IN_PROGRESS',
        bookmark: false,
        isComplete: false,
        isPinned: true,
        tags: [
          {
            tagId: 1,
            color: 'red',
            title: 'Red',
            isSelect: true
          },
          {
            tagId: 2,
            color: 'blue',
            title: 'Blue',
            isSelect: true
          }
        ],
      },
      {
        taskId: '333333333',
        title: 'Add unit test for components',
        description: 'test description',
        updatedAt: 1566235508136,
        startDate: 1566235508136,
        startTime: 1566235508136,
        endTime: 1566235508136,
        status: 'COMPLETED',
        bookmark: false,
        isComplete: false,
        tags: [
          {
            tagId: 2,
            color: 'blue',
            title: 'Blue',
            isSelect: true
          },
          {
            tagId: 3,
            color: 'green',
            title: 'Green',
            isSelect: true
          }
        ],
      },
      {
        taskId: '4444444444',
        title: 'Add unit test for logics',
        description: 'test description',
        updatedAt: 1566235508136,
        startTime: 1566235508136,
        startDate: 1566235508136,
        endTime: 1566235508136,
        status: 'TO_DO',
        bookmark: true,
        isComplete: false,
        tags: [
          {
            tagId: 3,
            color: 'green',
            title: 'Green',
            isSelect: true
          },
          {
            tagId: 4,
            color: 'yellow',
            title: 'Yellow',
            isSelect: true
          }
        ],
      },
    ],
  }
};

export const TAGS = [
  {
    tagId: 1,
    color: 'red',
    title: 'Red',
    isSelect: false
  },
  {
    tagId: 2,
    color: 'blue',
    title: 'Blue',
    isSelect: false
  },
  {
    tagId: 3,
    color: 'green',
    title: 'Green',
    isSelect: false
  },
  {
    tagId: 4,
    color: 'yellow',
    title: 'Yellow',
    isSelect: false
  },
  {
    tagId: 5,
    color: 'orange',
    title: 'Orange',
    isSelect: false
  },
  {
    tagId: 6,
    color: 'pink',
    title: 'Pink',
    isSelect: false
  },
];