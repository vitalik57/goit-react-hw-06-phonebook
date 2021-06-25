import { createAction } from "@reduxjs/toolkit";

export const ADD_CONTACT = "contact/add";
export const REMOVE_CONTACT = "contact/remove";
export const FILTER_CONTACT = "contact/filter";
const addNewContact = createAction(ADD_CONTACT);
const removeContact = createAction(REMOVE_CONTACT);
const filterContact = createAction(FILTER_CONTACT);

// const addNewContact = client => ({
//   type: ADD_CONTACT,
//   payload: client
// });
// const removeContact = id => ({
//   type: REMOVE_CONTACT,
//   payload: id
// });
// const filterContact = payload => ({
//   type: FILTER_CONTACT,
//   payload
// });
export { addNewContact, removeContact, filterContact };
