export const settings = {
  columnCreatorText: "Add new column",
  cardCreatorText: "Add new card",
  creator: {
    buttonOK: "OK",
    buttonCancel: "Cancel",
    defaultText: "Add new item",
  },
  search: {
    defaultText: "Search...",
    icon: "search",
  },
  defaultListDescription: "<p>I can do all the things!!!</p>",
  defaultColumnIcon: "list-alt",
  headerIcon: "rocket",
};

export const pageContents = {
  title: "My first React app",
  subtitle: "A simple to-do app, with lists, columns and cards",
};

export const infoContent = {
  title: "info",
  image:
    "https://images.pexels.com/photos/16516/pexels-photo.jpg?cs=srgb&dl=pexels-khairul-nizam-16516.jpg&fm=jpg",
  subtitle: "Why it is?",
};

export const aboutContent = {
  title: "about",
  image:
    "https://images.pexels.com/photos/7476134/pexels-photo-7476134.jpeg?cs=srgb&dl=pexels-kindel-media-7476134.jpg&fm=jpg",
  subtitle: "Why do we use it?",
};

const lists = [
  {
    id: "list-1",
    title: "Things to do <sup>soon!</sup>",
    description: "Interesting things I want to check out!",
    image: "http://uploads.kodilla.com/bootcamp/fer/11.react/space.png",
  },
];

const columns = [
  {
    id: "column-1",
    listId: "list-1",
    title: "Books",
    icon: "book",
  },
  {
    id: "column-2",
    listId: "list-1",
    title: "Movies",
    icon: "film",
  },
  {
    id: "column-3",
    listId: "list-1",
    title: "Games",
    icon: "gamepad",
  },
  {
    id: "column-4",
    listId: "list-2",
    title: "Strange column",
    icon: "question",
  },
];

const cards = [
  {
    id: "card-1",
    columnId: "column-1",
    title: "This Is Going to Hurt",
  },
  {
    id: "card-2",
    columnId: "column-1",
    title: "Interpreter of Maladies",
  },
  {
    id: "card-3",
    columnId: "column-2",
    title: "Harry Potter",
  },
  {
    id: "card-4",
    columnId: "column-2",
    title: "Star Wars",
  },
  {
    id: "card-5",
    columnId: "column-3",
    title: "The Witcher",
  },
  {
    id: "card-6",
    columnId: "column-3",
    title: "Skyrim",
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
