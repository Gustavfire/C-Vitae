
var usuario = [];
var obj;

async function generadorUsuarioRandom(){
  const response = await fetch('https://randomuser.me/api', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
});
  const usuario = await response.json();
  addData(JSON.stringify(usuario))
  }

function addData(respuesta) {
  usuario.push(respuesta);
  let obj = JSON.parse(usuario);
  
}

let oficios = ["Carpintero", "Lechero",	"Frutero",
  "Cerrajero",	"Cocinero",	"Deshollinador",
  "Mecánico",	"Lavandero",	"Artesano",
  "Pescador",	"Escultor",	"Tornero",
  "Albañil",	"Editor",	"Barrendero",
  "Fontanero", "plomero",	"Obrero",	"Panadero",
  "Carpintero",	"Locutor",	"Barbero",
  "Soldador",	"Escritor",	"Leñador",
  "Pintor",	"Vendedor",	"Peletero",
  "Sastre",	"Repartidor",	"Impresor",
  "Pastor", "ganadero",	"Cajero",	"Policía",
  "Agricultor",	"Vigilante"	,"Exterminador",
  "Carnicero"	,"Animador",	"Peluquero"]

  let profesiones = ["Abogado",	"Médico cirujano", "Paleontólogo",
    "Ingeniero",	"Historiador",	"Geógrafo",
    "Biólogo",	"Filólogo",	"Psicólogo",
    "Matemático",	"Arquitecto",	"Computista",
    "Profesor",	"Periodista",	"Botánico",
    "Físico",	"Sociólogo",	"Farmacólogo",
    "Químico", "Politólogo",	"Enfermero",
    "Electricista",	"Bibliotecólogo",	"Paramédico",
    "Técnico de sonido",	"Archivólogo", "Músico",
    "Filósofo",	"Secretaria",	"Traductor",
    "Antropólogo",	"Técnico en turismo",	"Economista",
    "Administrador",	"Lingüista	Radiólogo",
    "Contador",	"Psicoanalista",	"Ecólogo"]
    
    function rangoAnios(inicio,final){
      var anios = [];
      for (var i = inicio; i < final; i++) {
      anios.push(i);
     
      }
    return anios
    }
    let anios = rangoAnios(1990,2022);

    function tresAleatorios(lista){
      return [...lista]
      .sort(()=> Math.random() > 0.5 ? 1: -1)
      .slice(0,3)
      .sort(

      )
      
    }


    

    



generadorUsuarioRandom()

document.getElementById('btn').addEventListener('click', ()=>{
  if (usuario != []){
  let obj = JSON.parse(usuario);

  /* Modifico Seccion Hero*/
  document.getElementById('nombre').innerHTML = obj.results[0].name.first + " " + obj.results[0].name.last
  document.getElementById('fotoperfil').setAttribute("src", obj.results[0].picture.medium);
  
  /* Modifico Datos personales*/
  document.getElementById('data').innerHTML = '<i class="fa-regular fa-user"></i>' + " Nombre completo: " + obj.results[0].name.first + " " + obj.results[0].name.last + "<br>" +
  '<i class="fa-solid fa-cake-candles"></i>' + " Edad: " + obj.results[0].dob.age + "<br>" +
  '<i class="fa-solid fa-location-dot"></i>' + " Direccion: " + obj.results[0].location.street.name + " " + obj.results[0].location.street.number + "<br>" +
  '<i class="fa-solid fa-city"></i>' + " Ciudad: " + obj.results[0].location.city + "<br>" +
  '<i class="fa-solid fa-earth-americas"></i>' + " Pais: " + obj.results[0].location.country + "<br>" +
  '<i class="fa-solid fa-envelope"></i>' + " E-mail: " + obj.results[0].email + "<br>" +
  '<i class="fa-solid fa-phone"></i>' + " Celular: " + obj.results[0].cell + "<br>" 
  usuario = [];
    if(usuario.length === 0){
      generadorUsuarioRandom()
    }
  /* Modifico Experiencia Laboral*/
  let trabajos = tresAleatorios(profesiones)
  let fecha = tresAleatorios(anios)
  let fecha2 = tresAleatorios(anios)
  let estudios = tresAleatorios(oficios)
  document.getElementById('exp').innerHTML = '<i class="fa-solid fa-angle-right"></i>' + " En el año " + fecha[0] + " me desempeñe como " + estudios[0] + "<br>" +
  '<i class="fa-solid fa-angle-right"></i>' + " En el año " + fecha[1] + " me desempeñe como " + estudios[1] + "<br>" +
  '<i class="fa-solid fa-angle-right"></i>' + " En el año " + fecha[2] + " me desempeñe como " + estudios[2] + "<br>" 
  

  /* Modifico Estudios*/
  document.getElementById('estudy').innerHTML = '<i class="fa-solid fa-angle-right"></i>' + " En el año " + fecha2[0] + " estudié para  " + trabajos[0] + "<br>" +
  '<i class="fa-solid fa-angle-right"></i>' + " En el año " + fecha2[1] + " estudié para  " + trabajos[1] + "<br>" +
 '<i class="fa-solid fa-angle-right"></i>' + " En el año " + fecha2[2] + " estudié para  " + trabajos[2] + "<br>" 
  }
}

)




    
    
    



