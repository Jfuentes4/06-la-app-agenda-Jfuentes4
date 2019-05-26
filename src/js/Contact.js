class Contact {
  constructor (dataContact) {
    this._name = dataContact.name;
    this._birthday = new Date(dataContact.birthday);
    this._email = dataContact.email;
    this._address = dataContact.address;
    this._telephone = dataContact.telephone;
  }

  get name () {
    return this._name;
  }

  get birthday () {
    return this._birthday;
  }

  getAge = () => {
    let agems = new Date - this._birthday;
    age = agems/(525600*60*1000);
    return age;
  }

  getBirthdayAsString = () => {
    let year = this._birthday.getFullYear();
    let month = this._birthday.getMonth();
    let day = this._birthday.getDate();
    let strDate = day + '/' + month + '/' + year;
    return strDate;
  }

  get email () {
    return this._email;
  }

  get address () {
    return this._address;
  }

  get telephone () {
    return this._telephone;
  }
}

export default Contact;
