class GraphicManager {
  constructor () {
    this._Table = document.getElementById('tableBody');
  }

  showOnTable = (contacts, deleteFunction) => {
    console.log('entre')
    this._Table.innerHTML = '';
    contacts.forEach((contact) => {
      let row = this._Table.insertRow(-1);
      let index = row.rowIndex - 1 ;
      let nameCell = row.insertCell(0);
      let ageCell = row.insertCell(1);
      let emailCell = row.insertCell(2);
      let telephoneCell = row.insertCell(3);
      let addressCell = row.insertCell(4);
      let deleteCell = row.insertCell(5);

      nameCell.innerHTML = contact.name;
      ageCell.innerHTML = contact.getAge();
      emailCell.innerHTML = contact.email;
      telephoneCell.innerHTML = contact.telephone;
      addressCell.innerHTML = contact.address;

      let deleteButton = document.createElement('button');
      deleteButton.className = 'btn btn-danger';
      deleteButton.innerHTML = 'Eliminar';
      deleteButton.addEventListener('click', () => { deleteFunction(index) });

      deleteCell.appendChild(deleteButton);

    });
  }
}

export default GraphicManager;
