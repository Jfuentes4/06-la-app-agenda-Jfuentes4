import Contact from './Contact.js';
import GraphicManager from './GraphicManager.js'

class ContactManager {
  constructor () {
    this._dataContacts = [];
    this._contacts = [];
    this._graphicManager = new GraphicManager();
    this._initializeTable();
  }

  _initializeTable  = () => {
    let contacts = JSON.parse(localStorage.getItem('contactsList'));
    if (contacts !== null) {
      console.log(contacts)
      contacts.forEach((contact, index) => {
        console.log(contact._name)
        this._setContactToArrayAndLS(contact);
      });
      this._graphicManager.showOnTable(this._contacts);
    }
  }

  addContact = (dataContact) => {
    if (this._ifDontExist(dataContact.telephone)) {
      this._setContactToArrayAndLS(dataContact);
      this._graphicManager.showOnTable(this._contacts);
    } else {
      alert('este telefono ya esta actualmente registrado');
    }
  }

  _setContactToArrayAndLS = (dataContact) => {
    let contact = new Contact(dataContact);
    this._contacts.push(contact);
    this._dataContacts.push(dataContact);
    localStorage.setItem('contactsList', JSON.stringify(this._dataContacts));
    console.log(this._contacts)
  }

  _deleteContact = (index) => {
    this._contacts.splice(index, 1);
    this._dataContacts.splice(index, 1);
    localStorage.setItem('contactsList', JSON.stringify(this._dataContacts));
  }

  _ifDontExist = (telephone) => {
    let dontExist = true;
    this._contacts.forEach((currentContact, index) => {
      console.log(currentContact);
      if (currentContact.telephone === telephone ) {
        dontExist = false;
      }
    });
    return dontExist;
  }

}

export default ContactManager;
