import { describe, it, expect } from "vitest";
import { contacts } from "./data";

describe("Contacts", () => {
  describe("get", () => {
    it("should return a contact when given a valid id", async () => {
      // Get all contacts first to find a valid ID
      const allContacts = await contacts.getAll();
      const firstContact = allContacts[0];

      // Test getting the contact by ID
      const contact = await contacts.get(firstContact.id);

      expect(contact).not.toBeNull();
      expect(contact).toEqual(firstContact);
    });

    it("should return null when given an invalid id", async () => {
      const contact = await contacts.get("invalid-id");
      expect(contact).toBeNull();
    });
  });
});
