import Registro from './Registro.js'
import Taller from './Taller.js'
import Lista from './Lista.js';
import Alumno from './Alumno.js';

class Main{
    constructor(){
        let registro = new Registro( document.querySelector('#registro'));
        document.querySelector('#add').addEventListener('click', () =>{
            let form = document.querySelector("#form")
            if(form.checkValidity() == true){
                let nombre = document.querySelector('#nombre').value;
                let sfechainicio = document.querySelector('#fechainicio').value;
                let sfechatermino = document.querySelector('#fechatermino').value;
                let lugares = Number(document.querySelector('#lugares').value);
                let duracion = Number(document.querySelector('#duracion').value);
                sfechainicio = sfechainicio.split('-');
                sfechatermino = sfechatermino.split('-');

                let fechainicio = new Date(sfechainicio[0], sfechainicio[1]-1, sfechainicio[2]);
                let fechatermino = new Date(sfechatermino[0], sfechatermino[1]-1, sfechatermino[2]);
                let ocupados =0;
                let objtaller = {
                    nombre: nombre,
                    fechainicio: fechainicio,
                    fechatermino: fechatermino,
                    lugares: lugares,
                    ocupados: ocupados,
                    duracion: duracion,
                  };

                let taller = new Taller(objtaller);

                registro.addTaller(taller);
            }
            form.classList.add("was-validated");
        
        })
        let lista = new Lista( document.querySelector('#lista'), registro);
        document.querySelector('#añadir').addEventListener('click', () =>{
            let formalumno = document.querySelector("#formalumno")
            if(formalumno.checkValidity() == true){
                let nombrealumno = document.querySelector('#nombreAlumno').value;
                let email = document.querySelector('#email').value;
                let taller = document.querySelector('#selecttaller').value;
                let sfechanacimineto = document.querySelector('#fechanacimiento').value;
                sfechanacimineto = sfechanacimineto.split('-');
                let fechanacimiento = new Date(sfechanacimineto[0], sfechanacimineto[1]-1, sfechanacimineto[2]);
                let objalumno = {
                    nombre: nombrealumno,
                    email: email,
                    taller: taller,
                    fechanacimiento: fechanacimiento
                    
                  };

                let alumno = new Alumno(objalumno);

                lista.addAlumno(alumno);
            }
            formalumno.classList.add("was-validated");
        })

        document.querySelector('#filtrador').addEventListener('change', ()=>{
            let filtro = document.querySelector('#filtrador').value
            document.querySelector('#lista').innerHTML='<thead>'
            +'<tr>'
                + '<th>Nombre</th>'
                +'<th>Email</th>'
            +'</tr>'
         +'</thead>'
        +'<tbody id="tbody"></tbody>';
            if(filtro!="all"){
               lista.filtrar(filtro); 
            }else{
                lista._initTable();
            }

            
        })

    }
}

let m = new Main();