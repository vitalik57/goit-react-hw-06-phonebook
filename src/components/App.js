import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewContact, removeContact } from "../redux/clientActions";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Section from "./Section/Section";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };
  componentDidMount() {
    const todos = localStorage.getItem("contacts");
    const parse = JSON.parse(todos);
    if (parse) {
      this.setState({ contacts: parse });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  removeContact = id => {
    const { contacts } = this.state;
    const updated = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: [...updated]
    });
  };

  addContact = contact => {
    const newName = contact.name;
    const names = this.state.contacts.map(contact => contact.name.toLowerCase());
    console.log(names);
    if (names.includes(newName.toLowerCase())) {
      alert(`${newName} is already in contact list`);
    } else {
      this.setState(state => ({
        contacts: [...state.contacts, contact]
      }));
    }
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.props;
    if (contacts.length) {
      return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
  };

  render() {
    const { contacts } = this.props;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          {contacts.length > 1 && <Filter onChange={this.handleChange} />}
          {contacts.length ? <ContactList /> : <p>There are no contacts here</p>}
        </Section>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  contacts: state.contacts,
  filter: state.filter
});

const mapDispatchToProps = {
  addNewContact,
  removeContact
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
