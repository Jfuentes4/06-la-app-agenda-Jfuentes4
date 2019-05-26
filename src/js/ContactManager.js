import Contact from './Contact.js';
import GraphicManager from './GraphicManager.js'

class ContactManager {
  constructor () {
    this._contacts = [];
    this._graphicManager = new GraphicManager();
  }

  addContact = (dataContact) => {
    if (this._ifDontExist(dataContact.telephone)) {
      let contact = new Contact(dataContact);
      this._contacts.push(contact);
      localStorage.setItem('contactsList', JSON.stringify(this._contacts));
      this._graphicManager.showOnTable(this._contacts);
      console.log(this._contacts)
    } else {
      alert('este telefono ya esta actualemnet registrado');
    }
  }

  _deleteContact = (index) => {
    this._contacts.splice(index, 1);
    localStorage.setItem('contactsList', JSON.stringify(this._contacts));
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
