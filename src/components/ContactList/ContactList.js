import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";
import styles from "../ContactList/Contact.module.css";
import { connect } from "react-redux";
import { removeContact } from "../../redux/clientActions";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} onRemove={() => removeContact(id)} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    ),
    PropTypes.array
  ]),
  onRemove: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  removeContact
};
const getVisibleContacts = state => {
  const { contacts, filter } = state;
  if (contacts.length) {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
};
const mapStateToProps = (state, ownProps) => ({
  contacts: getVisibleContacts(state)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);
