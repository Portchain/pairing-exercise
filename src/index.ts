import { contacts } from "./data.ts";

const newContact = await contacts.create({
  first: "John",
  last: "Doe",
  twitter: "@john_doe",
});

console.log(newContact);
