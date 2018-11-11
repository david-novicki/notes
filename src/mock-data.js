// dev
import uuid from "uuid";
import Dates from "./utilities/dates";

const createNewNote = ({ title, dateCreated = new Date(), body }) => ({ id: uuid(), title, dateCreated: Dates.format(dateCreated), body });

const testP = `     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit lacus, iaculis eu neque id, ornare finibus tortor. Aenean mollis molestie mattis. Fusce viverra vehicula justo quis sodales. Quisque ac lorem posuere, sagittis massa in, laoreet massa. Etiam egestas eget elit nec elementum. Donec mauris purus, mollis vitae viverra eu, convallis quis felis. Suspendisse sit amet pulvinar augue, quis auctor metus. Donec sodales turpis vel suscipit bibendum. Sed viverra tristique euismod. Sed ut tellus eu erat ultrices dignissim sed eu dui. Maecenas blandit efficitur consequat. Vestibulum elit augue, tincidunt ut nisi ut, blandit volutpat metus. Aenean eu nisi rutrum, lacinia metus a, luctus sapien. Morbi nec tortor vestibulum, ultricies turpis quis, convallis odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mattis non lorem in hendrerit.`;
const notes = [
  createNewNote({
    title: "TODO for this project"
    // body: `1. Initialize webpack and stuff\n2. Add hot loading\n3. Add service worker and sync layer\n4. Start creating views\n\nGeneral Idea\n\n${testP}`
  }),
  createNewNote({
    title: "Grocery List"
    // body: `1. Spicy Avocado Hummus\n2. Pita Chips\n3. Dairy free cheese\n4. Instant Cheesy Grits\n5. Pickles\n6. Salt`
  }),
  createNewNote({
    title: "Birthdays and stuff"
    // body: testP
  })
];

export default { notes, createNewNote };
