class GraphicManager {
  constructor () {
    this._Table = document.getElementById('tableBody');
  }

  showOnTable = (contacts) => {
    this._Table.innerHTML = '';
    contacts.forEach((contact, index) => {
      let row = this._Table.insertRow(-1);
      let nameCell = row.insertCell(0);
      let ageCell = row.insertCell(1);
      let emailCell = row.insertCell(2);
      let telephoneCell = row.insertCell(3);
      let addressCell = row.insertCell(4);

      nameCell.innerHTML = contact.name;
      ageCell.innerHTML = contact.getAge();
      emailCell.innerHTML = contact.email;
      telephoneCell.innerHTML = contact.telephone;
      addressCell.innerHTML = contact.address;

    });
  }
}

export default GraphicManager;
