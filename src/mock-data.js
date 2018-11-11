// dev
import uuid from "uuid";
import Dates from "./utilities/dates";

const createNewNote = ({ title, dateCreated = new Date(), body }) => ({ id: uuid(), title, dateCreated: Dates.format(dateCreated), body });

const notes = [
  createNewNote({
    title: "TODO for this project"
  }),
  createNewNote({
    title: "Grocery List"
  }),
  createNewNote({
    title: "Birthdays and stuff"
  })
];

export default { notes, createNewNote };
