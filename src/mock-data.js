// dev
import uuid from "uuid";
const notes = [
  {
    id: uuid(),
    dateCreated: "August 6 1993",
    title: "Todo list for some project",
    body:
      "asdfasdfasdf asdf asdf asdf asdfasdf asdfas dfa sdfasdf asdf as asdfasdfas df."
  },
  {
    id: uuid(),
    dateCreated: "August 4 1989",
    title: "Grocery List",
    body:
      "asdfasdfasdf asdf asdf asdf asdfasdf asdfas dfa sdfasdf asdf as asdfasdfas df."
  },
  {
    id: uuid(),
    dateCreated: "December 19 2018",
    title: "Birthdays and stuff",
    body:
      "asdfasdfasdf asdf asdf asdf asdfasdf asdfas dfa sdfasdf asdf as asdfasdfas df."
  }
];

export default { notes };
