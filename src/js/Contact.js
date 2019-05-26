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
    let agems = Date.now() - this._birthday.getTime();
    let ageDate = new Date(agems);
    let age = Math.abs(ageDate.getUTCFullYear() - 1970);
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
