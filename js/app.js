var cargarPagina = function () {
	obtenerCoordendas();
     mostrarRestaurantes();
    $("#buscador").click(filtrarContactos);
};

var obtenerCoordendas = function () {
	var coordenadas = {
        lat:19.4177435,
        lng:-99.16479129999999
	};
	mostrarMapa(coordenadas);
};

var mostrarMapa = function (coordenadas) {
	var map = new google.maps.Map($('.map')[0], {
      zoom: 17,
      center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: map
    });
}

var mostrarRestaurantes = function () {

    var arregloRestaurantes = [
        {
            nombre: "Zapote",
            direccion: "Calle Guanajuato 138, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",
            cordenadas: { latitud: 19.416378,
            longitud: -99.16085},
            comida: "mediterránea"
  },
        {
            nombre: "El Japonez",
            direccion: "Av. Vicente Suarez 42A, Cuauhtemoc, Hipódromo Condesa, 06170 Ciudad de México, CDMX",
            latitud: 19.4111767,
            longitud: -99.1749857,
            comida: "japones"
   },
        {
            nombre: "Fonda Mexicana",
            direccion: "Avenida Montevideo 279, Gustavo A. Madero, Lindavista",
            latitud: 19.4901029,
            longitud: -99.1309569,
            comida: "mexicana"
   },
        {
            nombre: "El Cardenal",
            direccion: "Av. de la Paz Núm. 32, Alvaro Obregon, San Ángel, 01000 Ciudad de México, CDMX",
            latitud: 19.34692,
            longitud: -99.1887497,
            comida: "mexicana"
   },
        {
            nombre: "Falafelito",
            direccion: "Av. México 105, Hipódromo Condesa, 06100, CDMX.",
            latitud: 19.4102471,
            longitud: -99.1704605,
            comida: "Vegana"
    }
];

    var plantillaContacto =
        '<article class="restaurante00">' +
        '<div class="col s12 m7">' +
        '<div class="card horizontal">' +
        '<div class="card-image">' +
        '<img src="https://dummyimage.com/100x110/000/fff">' +
        '</div>' +
        ' <div class="card-stacked">' +
        '<div class="card-content">' +
        '<h6><strong>__nombre__</strong></h6>' +
        '<p>__direccion__</p>' +
        '<p class="tamanio-letra-chico">Tipo: __tipoDeComida__</p>' +
        ' </div>' +
        ' </div>' +
        ' </div>' +
        '</div>' +
        '</article>';

    var plantillaFinal = "";

    arregloRestaurantes.forEach(function (contacto) {
        plantillaFinal += plantillaContacto.replace("__nombre__", contacto.nombre)
            .replace("__direccion__", contacto.direccion)
            .replace("__tipoDeComida__", contacto.comida);
    });
    $("#sectionRes").html(plantillaFinal);


}

var filtrarContactos = function (e) {
	e.preventDefault();
	var criterioBusqueda = $("#search").val().toLowerCase();
	var contactosFiltrados = contactos.filter(function (contacto) {
		return contacto.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
	});
	mostrarRestaurantes(contactosFiltrados);
};



$(document).ready(cargarPagina);

