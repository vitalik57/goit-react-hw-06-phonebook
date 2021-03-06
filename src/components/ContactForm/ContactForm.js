import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addNewContact } from "../../redux/clientActions";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: uuidv4(),
      name: name,
      number: number
    };
    this.props.addNewContact(contact);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Name..."
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Number:
          <input type="tell" value={number} name="number" placeholder="Number..." onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit" disabled={!name.length || !number.length}>
          Add contact
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = {
  addNewContact
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired
// };
