var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById("grilla-pixeles");
var colorIndicador = "";

function grillaDeColores(){
  for(var i = 0; i<nombreColores.length ; i++){
    var nuevoDiv = document.createElement('div');
    nuevoDiv.style.backgroundColor = nombreColores[i];
    nuevoDiv.className = 'color-paleta';
    paleta.appendChild(nuevoDiv);
  }
}

function grillaDeDibujo() {
  var i = 0;
  do{
    var nuevoDiv = document.createElement('div');
    grillaPixeles.appendChild(nuevoDiv);
    i++;
  }while(i < 1749);
}

//! funcion para capturar el color de la paleta de colores y asignarlo al indicador
document.getElementById('paleta').addEventListener("click", function (event) {
var colorSeleccionado = event.target.style.backgroundColor;
$("#indicador-de-color").css("background-color", colorSeleccionado);
return colorIndicador = colorSeleccionado;
});

//! funcion para asignar a la grilla de dibujo el color del indicador
grillaPixeles.addEventListener("click", function (event) {
  event.target.style.backgroundColor = colorIndicador;
});

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
      $("#indicador-de-color").css("background-color", colorActual);
      return colorIndicador = colorActual;
    })
);

//!creamos una variable que captura el estado del mouse pero lo aplicamos unicamente sobre el lienzo de dibujo
var estadoDeClickeo = "";

grillaPixeles.addEventListener("mousedown", function (event) {
  event.preventDefault();
  return estadoDeClickeo = true;
});

grillaPixeles.addEventListener("mouseup", function (event) {
  return estadoDeClickeo = false;
});

$("#grilla-pixeles").hover(function(){},function(){
  return estadoDeClickeo = false;
});

document.getElementById('grilla-pixeles').addEventListener("mousemove", function(event){
  if (estadoDeClickeo) {
    event.target.style.backgroundColor = colorIndicador;
  }
});

$("#borrar").click(function(){
  $("#grilla-pixeles").children("div").animate({"background-color":"white"},1000);
})

var array = "";

$("li img").click(function(){
  var heroe = $(this).attr("id");
  
  switch (heroe) {
    case 'batman':
      array = batman;

      break;
    case 'wonder':
      array = wonder;

      break;
    case 'flash':
      array = flash;

      break;
    case 'invisible':
      array = invisible;

      break;

    default:
      break;
  }
  cargarSuperheroe(array);
})

$("#guardar").click(function () {
  guardarPixelArt();
})

grillaDeColores();
grillaDeDibujo();