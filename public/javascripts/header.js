//alert("me vinculé") //-->usar un alert para verificar si está bien vinculado

let navBar = document.querySelector("#navigation-bar-mobile"); // Capturo el elemento por el ID
let searchBar = document.querySelector("#search"); // Capturo el elemento por el ID
let logo = document.querySelector(".logo"); // Capturo el elemento por el ID

/* logo.addEventListener('click', () => {
   navBar.style.display = "block"
}) */

// addEventListener : escuchador de eventos 
// le paso el evento 'click'
//tomo navbar y a su style le cambio el display a "block", o none o in line etc

//1° creamos una funcion que vamos a llamar en la vista--->onclick="dropMenu() --> linea 33
// esta funcion se ejecuta solo si el usuario hace click en el menu
function dropMenu() {
  //2° capturar un elemento dentro del DOM que tiene clase active (lo guarda dentro de variable)
  let subcategoryMenu = document.querySelector(".active");
  //3° preguntamos con if else --> if (condition) { } else { } 
  //   si existe un navBar en su lista de estilos existe la propiedad display y es === a block
  if (navBar.style.display === "block") {
    //entonces si existe tomar el elemento y asignarle display none
    navBar.style.display = "none";
    //a su vez al elemento subcategoryMenu accedemos a su lista de clases le removemos la clase active
    //subcategoryMenu? --> el signo de pregunta señala si es distinto de null
    subcategoryMenu?.classList.remove("active");
  } else {// sino..
    // le asignamos display al navbar
    navBar.style.display = "block"; // aparece la caja
    searchBar.style.display = "none"; // desaparece el buscador en el caso de que este abierto
   //si subcategoryMenu si tienen algo adentro tomo el elemento y entro a su lista de clases y le quito la clase active
    subcategoryMenu ? subcategoryMenu.classList.remove("active") : "";
  }
}

function dropSearch() {
    let subcategoryMenu = document.querySelector(".active");
    if (searchBar.style.display === "block") {
      searchBar.style.display = "none";
      subcategoryMenu.classList.remove("active");
    } else {
      searchBar.style.display = "block";
      navBar.style.display = "none";
      subcategoryMenu.classList.remove("active");
    }
  }

  function dropSubCategoryMenu(id) {
    
    let list = document.getElementById(`${id}`);
    list.classList.toggle("active");
    navBar.style.display = "none";
    searchBar.style.display = "none";
  }
  
  function closeWindow() {
    document.querySelector(".active").classList.remove("active");
  }
