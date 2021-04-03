import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Filter.module.css";

import { connect } from "react-redux";
import userAction from "../../redux/actions/userAction";

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

const mapStateToProps = (store) => {
  console.log("store", store);

  return {
    contacts: store.contacts,
  };
};

const mapDispatchToProps = {
  // adnum: userAction.addNumber,
  delnum: userAction.deleteNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
