import React, { Component } from "react";
import PropTypes from "prop-types";

import { v4 as id } from "uuid";
import style from "./ContactForm.module.css";

import { connect } from "react-redux";
import userAction from "../../redux/actions/userAction";


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
    // const { addContact } = this.props;
    const { name, tel } = this.state;
    const el = { id: id(), name, tel };
    // addContact(el);
    // this.setState({ name: "", tel: "" });
    this.setState(el);
    this.props.addNumber(el);
  };

  render() {
    const { handleSubmit } = this;
    const { name, tel } = this.state;
    return (
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          id="name"
          placeholder="Ім'я"
          value={name}
          required
        />
        <input
          onChange={this.handleChange}
          type="number"
          name="tel"
          id="tel"
          placeholder="номер телефону"
          value={tel}
          required
        />
        <button type="submit">Додати</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  getValue: PropTypes.func.isRequired,
  // addContact: PropTypes.func.isRequired,
};


const mapStateToProps = (store) => {
  // console.log("store in contact form", store);

  return {
    contacts: store.contacts,
  };
};

const mapDispatchToProps = {
  addNumber: userAction.addNumber,
  // create: userAction.createNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
