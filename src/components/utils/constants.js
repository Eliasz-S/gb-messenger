export const AUTHORS = {
    human: "me",
    robot: "bot",
}

export const initialChatState = [
    {
      id: "chat1",
      name: "Richard Adams",
    },
    {
      id: "chat2",
      name: "Jenna Richards",
    },
    {
      id: "chat3",
      name: "Maria Antonova",
    },
    {
      id: "chat4",
      name: "Vasiliy Detochkin",
    },
];

export const initialMessageState = initialChatState.reduce((acc, chat) => {
    acc[chat.id] = [];
    return acc;
}, {});