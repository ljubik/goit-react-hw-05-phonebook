import "./App.css";
import React, { Component } from "react";

import Main from "./components/Main/Main";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [{id: "1", name: "Любомир", number: "050 187 13 16",  },
                {id: "2", name: 'Rosie Simpson', number: '459-12-56'},
                {id: "3", name: 'Hermione Kline', number: '443-89-12'},
                {id: "4", name: 'Eden Clements', number: '645-17-79'},
                {id: "5", name: 'Annie Copeland', number: '227-91-26'},],
    name: "",
    number: "",
    filter: "",
  };
  
  addContact = (el) => {
    const { contacts } = this.state;
    const twin = contacts.some((c) => c.name === el.name);
    twin
      ? alert(`Увага дане імя уже використовується!`)
      : this.setState((prev) => {
          return {
            contacts: [...prev.contacts, el],
          };
        });
  };

  getValue = (el) => {
    this.setState({ [el.name]: el.value });
  };

  toGetFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((el) => {
      return el.name.toLowerCase().includes(filter);
    });

    return filteredContacts;
  };

  getList = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = this.toGetFilteredContacts();
    if (filter) return filteredContacts;
    return contacts;
  };

  toDelete = (id) => {
    this.setState((prev) => {
      const contacts = prev.contacts.filter((el) => !(el.id === id));
      return { contacts };
    });
  };

  componentDidMount() {
    const contactLocalStorege = JSON.parse(localStorage.getItem("contacts"));
    if (contactLocalStorege) {
      this.setState(() => ({ contacts: [...contactLocalStorege] }));
      return;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { addContact, getValue, getList, toDelete } = this;
    return (
      <div className="App">
        <Main title="Телефонна книжка v.1.2"/>
        <ContactForm addContact={addContact} getValue={getValue} />
        <p className="pApp">Пошук контактів </p>
        <Filter filterContact={getValue} />
        <ContactList contacts={getList()} toDelete={toDelete} />
      </div>
    );
  }
}

export default App;
