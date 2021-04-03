import "./App.css";
import React, { Component } from "react";

import Main from "./components/Main/Main";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

// import routes from "./routes";
import { connect } from "react-redux";
import addUserAction from "./redux/actions/userAction";
import actions from './redux/modal/actions';



class App extends Component {
  state = {
    contacts: [ {id: "1", name: 'Любомир', tel: '050 187 13 16'},
                {id: "2", name: 'Rosie Simpson', tel: '459-12-56'},
                {id: "3", name: 'Hermione Kline', tel: '443-89-12'},
                {id: "4", name: 'Eden Clements', tel: '645-17-79'},
                {id: "5", name: 'Annie Copeland', tel: '227-91-26'},],
    name: "",
    tel: "",
    filter: "",
  };
  
  addContact = (el) => {
    console.log("add contact state",this.state)
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
  
  toggleModal = () => {
    const { myModal, myChangeModal } = this.props
    console.log(myModal)
    return myChangeModal(!myModal)
  }

  render() {
    const { addContact, getValue, getList, toDelete, toggleModal } = this;
    const { state, myModal } = this.props
    return (
      <div className="App">
        <Main title="Телефонна книжка v.1.3"/>
        <ContactForm  getValue={getValue} />
        <p className="pApp">Пошук контактів </p>
        <Filter filterContact={getValue} />
        <ContactList contacts={getList()} />
        {/* <div>
          {this.state.contacts.map((el) => {
            return (
              <li key={el.id}>
                {el.name}{" "}{el.tel}{" "}
                <button onClick={() => toDelete(el.id)}>Видалити localStorage</button>
                <button
                  type="button"
                  onClick={() => this.props.delnum(el.id)}
                >
                  del
                </button>
              </li>
            );
          })}
        </div> */}
        {/* <button onClick={toggleModal}>{`click ${myModal}`}</button> */}
      </div>
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
  adnum: addUserAction.addNumber,
  delnum: addUserAction.deleteNumber,
  myChangeModal: actions.changeShowModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
