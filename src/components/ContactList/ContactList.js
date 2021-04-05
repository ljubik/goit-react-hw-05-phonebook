import React from "react";
import style from "./ContactList.module.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import userAction from "../../redux/actions/userAction";

const ContactList = ({ contacts, delnum, filter }) => {
  return (
    <>
      {contacts && filter ? (
        <ul className={style.list}>
          {contacts.map((el) => (
            <li key={el.id} >
            <span>{el.name}</span> : <span>{el.tel}</span>
            {/* <span><button className={style.listBtn} onClick={() => toDelete(el.id)}>Видалити</button></span> */}
            <span><button className={style.listBtn} onClick={() => delnum(el.id)}>Видалити</button></span>
            </li>
          ))}
        </ul>
      ): "Empty "}
    </>
  );
};
// export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    })
  ),

};


const mapStateToProps = (store) => {
  // console.log("store", store);

  return {
    contacts: store.contacts,
  };
};

const mapDispatchToProps = {
  filter: userAction.filterName,
  delnum: userAction.deleteNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
