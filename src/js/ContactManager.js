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
      contacts.forEach((contact) => {
        this._setContactToArrayAndLS(contact);
      });
      this.refreshTable();
    }
  }

  addContact = (dataContact) => {
    if (this._ifDontExist(dataContact.telephone)) {
      this._setContactToArrayAndLS(dataContact);
      this.refreshTable();
      $('#addContactForm').modal('hide');
      $('#addContactForm').reset();
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
    console.log(index);
    this._contacts.splice(index, 1);
    this._dataContacts.splice(index, 1);
    localStorage.setItem('contactsList', JSON.stringify(this._dataContacts));
    this.refreshTable();
  }

  refreshTable = () => {
    console.log('refresh');
    this._sortArray();
    this._graphicManager.showOnTable(this._contacts, this._deleteContact);
  }

  _sortArray = () => {
    let orderByName = document.getElementById('byName');
    let orderByAge = document.getElementById('byAge');
    if (orderByName.checked) {
      this._contacts.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    } else if (orderByAge.checked) {
      this._contacts.sort((a, b) => {
        if (a.getAge() > b.getAge()) {
          return 1;
        }
        if (a.getAge() < b.getAge()) {
          return -1;
        }
        return 0;
      });
    }
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
