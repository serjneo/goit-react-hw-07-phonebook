export const getContacts = state => state.contacts;
export const filterValue = state => state.filter;

// export const filteredContacts = state => {
//   const contact = getContacts(state);
//   const filter = filterValue(state);
//   const normalizedFilter = filter.toLowerCase();
//   return contact.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };
