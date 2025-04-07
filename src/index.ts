import { contacts } from "./data";

const newContact = await contacts.create({
  first: "John",
  last: "Doe",
  twitter: "@john_doe",
});

console.log(newContact);
