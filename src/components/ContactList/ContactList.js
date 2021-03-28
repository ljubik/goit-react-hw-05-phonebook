import React from "react";
import style from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, toDelete }) => {
  return (
    <>
      {contacts && (
        <ul className={style.list}>
          {contacts.map((el) => (
            <li key={el.id} >
            <span>{el.name}</span> : <span>{el.number}</span>
            <span><button className={style.listBtn} onClick={() => toDelete(el.id)}>Видалити</button></span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    })
  ),
  toDelete: PropTypes.func.isRequired,
};
