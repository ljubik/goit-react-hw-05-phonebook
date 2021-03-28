import React, { Component } from "react";
import PropTypes from "prop-types";

import { v4 as id } from "uuid";
import style from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    tel: "",
  };

  handleChange = (e) => {
    const { getValue } = this.props;

    getValue(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addContact } = this.props;
    const { name, number } = this.state;
    const el = { name, number, id: id() };
    addContact(el);
    this.setState({ name: "", tel: "" });
  };

  render() {
    const { handleSubmit } = this;
    const { name, number } = this.state;
    return (
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          id="name"
          placeholder="Імя"
          value={name}
          required
        />
        <input
          onChange={this.handleChange}
          type="number"
          name="number"
          id="tel"
          placeholder="номер телефону"
          value={number}
          required
        />
        <button type="submit">Додати</button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  getValue: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
};
