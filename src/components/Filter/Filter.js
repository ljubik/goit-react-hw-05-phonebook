import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Filter.module.css";

class Filter extends Component {
  state = {
    filter: "",
  };

  handleChange = (e) => {
    const { filterContact } = this.props;
    this.setState({ [e.target.name]: e.target.value });
    filterContact(e.target);
  };

  render() {
    const { handleChange } = this;

    return (
      <input
        className={style.filter}
        onInput={handleChange}
        type="text"
        name="filter"
        placeholder="Введіть імя"
      />
    );
  }
}

export default Filter;

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
