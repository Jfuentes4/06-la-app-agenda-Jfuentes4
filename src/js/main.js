import ContactManager from './ContactManager.js'

class Main {
  constructor () {
    this._form = document.getElementById('newContactForm');
    this._contactManager = new ContactManager();
    document.getElementById('addContact').addEventListener('click', this._addContact);
    document.getElementById('byName').addEventListener('click', () => { this._contactManager.refreshTable() });
    document.getElementById('byAge').addEventListener('click', () => { this._contactManager.refreshTable() });
  }

  _addContact = () => {
    if(this._form.checkValidity() === true) {
      let dataContact = this._getData();
      this._contactManager.addContact(dataContact);
    }
   this._form.classList.add("was-validated");
  }

  _getData  = () => {
    let name = document.getElementById('name').value;
    let birthday = new Date(document.getElementById('birthday').value);
    //console.log(birthday);
    birthday.setDate(birthday.getDate() +1);
    let telephone = document.getElementById('telephone').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    //console.log(birthday);
    let objContact = {
      name: name,
      birthday: birthday,
      telephone: telephone,
      email: email,
      address: address
    };
    return objContact;
  }

}

var main = new Main();
