const marvelHeroes = [
  {
    nombreSuperheroe: "Iron Man",
    nombreReal: "Tony Stark",
    imagen: "./assets/avengers/ironman.jpg",
    primeraAparicion: "Iron Man (2008)",
    poder:
      "Genio, multimillonario, filántropo con armadura tecnológica avanzada",
    origen: "Estados Unidos",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Capitán América",
    nombreReal: "Steve Rogers",
    imagen: "./assets/avengers/capitanamerica.webp",
    primeraAparicion: "Captain America: The First Avenger (2011)",
    poder:
      "Fuerza, velocidad y resistencia sobrehumanas gracias al suero del supersoldado",
    origen: "Estados Unidos",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Thor",
    nombreReal: "Thor Odinson",
    imagen: "./assets/avengers/thor.webp",
    primeraAparicion: "Thor (2011)",
    poder: "Dios del trueno, fuerza sobrehumana, control del clima y Mjolnir",
    origen: "Asgard",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Hulk",
    nombreReal: "Bruce Banner",
    imagen: "./assets/avengers/hulk.webp",
    primeraAparicion: "The Incredible Hulk (2008)",
    poder: "Fuerza descomunal, resistencia extrema y regeneración acelerada",
    origen: "Estados Unidos",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Black Widow",
    nombreReal: "Natasha Romanoff",
    imagen: "./assets/avengers/blackwidow.webp",
    primeraAparicion: "Iron Man 2 (2010)",
    poder: "Habilidad en combate cuerpo a cuerpo, sigilo y espionaje",
    origen: "Rusia",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Spider-Man",
    nombreReal: "Peter Parker",
    imagen: "./assets/avengers/spiderman.webp",
    primeraAparicion: "Captain America: Civil War (2016)",
    poder: "Agilidad, fuerza mejorada, sentido arácnido y lanzar telarañas",
    origen: "Estados Unidos",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Doctor Strange",
    nombreReal: "Stephen Strange",
    imagen: "./assets/avengers/doctorstrange.jpg",
    primeraAparicion: "Doctor Strange (2016)",
    poder: "Magia y manipulación de la realidad a través de hechizos",
    origen: "Estados Unidos",
    grupo: "Vengadores / Iluminati",
  },
  {
    nombreSuperheroe: "Black Panther",
    nombreReal: "T'Challa",
    imagen: "./assets/avengers/blackpanther.webp",
    primeraAparicion: "Captain America: Civil War (2016)",
    poder:
      "Fuerza, agilidad y sentidos mejorados gracias a la hierba en forma de corazón",
    origen: "Wakanda",
    grupo: "Vengadores / Iluminati",
  },
  {
    nombreSuperheroe: "Captain Marvel",
    nombreReal: "Carol Danvers",
    imagen: "./assets/avengers/capitanamarvel.jpg",
    primeraAparicion: "Captain Marvel (2019)",
    poder: "Superfuerza, vuelo y manipulación de energía cósmica",
    origen: "Estados Unidos",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Loki",
    nombreReal: "Loki Laufeyson",
    imagen: "./assets/villains/loki.jpg",
    primeraAparicion: "Thor (2011)",
    poder: "Dios del engaño, ilusiones, teletransportación y magia asgardiana",
    origen: "Jotunheim / Asgard",
    grupo: "Ninguno (antagonista ocasional)",
  },
  {
    nombreSuperheroe: "Ant-Man",
    nombreReal: "Scott Lang",
    imagen: "./assets/avengers/antman.jpg",
    primeraAparicion: "Ant-Man (2015)",
    poder:
      "Cambio de tamaño gracias a las partículas Pym, comunicación con hormigas",
    origen: "Estados Unidos",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Wasp",
    nombreReal: "Hope van Dyne",
    imagen: "./assets/avengers/wasp.jpeg",
    primeraAparicion: "Ant-Man and the Wasp (2018)",
    poder: "Cambio de tamaño, vuelo y blásters de energía",
    origen: "Estados Unidos",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Falcon",
    nombreReal: "Sam Wilson",
    imagen: "./assets/avengers/falcon.jpg",
    primeraAparicion: "Captain America: The Winter Soldier (2014)",
    poder: "Uso de alas mecánicas para volar, combate avanzado",
    origen: "Estados Unidos",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Winter Soldier",
    nombreReal: "Bucky Barnes",
    imagen: "./assets/avengers/wintersoldier.webp",
    primeraAparicion: "Captain America: The First Avenger (2011)",
    poder: "Fuerza y resistencia aumentadas, brazo biónico",
    origen: "Estados Unidos",
    grupo: "Vengadores / Thunderbolts",
  },
  {
    nombreSuperheroe: "Scarlet Witch",
    nombreReal: "Wanda Maximoff",
    imagen: "./assets/avengers/scarletwitch.webp",
    primeraAparicion: "Avengers: Age of Ultron (2015)",
    poder: "Magia del caos, manipulación de la realidad, telequinesis",
    origen: "Sokovia",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Vision",
    nombreReal: "Vision",
    imagen: "./assets/avengers/vision.webp",
    primeraAparicion: "Avengers: Age of Ultron (2015)",
    poder: "Vuelo, intangibilidad, rayo de la Gema de la Mente",
    origen: "Creado por Tony Stark, Bruce Banner y Ultron",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Hawkeye",
    nombreReal: "Clint Barton",
    imagen: "./assets/avengers/hawkeye.jpg",
    primeraAparicion: "Thor (2011)",
    poder: "Experto arquero y combatiente",
    origen: "Estados Unidos",
    grupo: "Vengadores",
  },
  {
    nombreSuperheroe: "Star-Lord",
    nombreReal: "Peter Quill",
    imagen: "./assets/guardians/starlord.jpg",
    primeraAparicion: "Guardians of the Galaxy (2014)",
    poder:
      "Habilidades de combate y pilotaje, medio-celestial con resistencia aumentada",
    origen: "Estados Unidos / Espacio",
    grupo: "Guardianes de la Galaxia",
  },
  {
    nombreSuperheroe: "Gamora",
    nombreReal: "Gamora",
    imagen: "./assets/guardians/gamora.jpg",
    primeraAparicion: "Guardians of the Galaxy (2014)",
    poder: "Fuerza, agilidad y habilidades de combate sobrehumanas",
    origen: "Zen-Whoberi",
    grupo: "Guardianes de la Galaxia",
  },
  {
    nombreSuperheroe: "Drax",
    nombreReal: "Drax el Destructor",
    imagen: "./assets/guardians/drax.webp",
    primeraAparicion: "Guardians of the Galaxy (2014)",
    poder: "Fuerza sobrehumana y resistencia",
    origen: "Kylos",
    grupo: "Guardianes de la Galaxia",
  },
  {
    nombreSuperheroe: "Rocket Raccoon",
    nombreReal: "Rocket",
    imagen: "./assets/guardians/rocket.jpeg",
    primeraAparicion: "Guardians of the Galaxy (2014)",
    poder: "Estratega, experto en armas y tecnología",
    origen: "Contraxia (experimento genético)",
    grupo: "Guardianes de la Galaxia",
  },
  {
    nombreSuperheroe: "Groot",
    nombreReal: "Groot",
    imagen: "./assets/guardians/groot.webp",
    primeraAparicion: "Guardians of the Galaxy (2014)",
    poder: "Fuerza sobrehumana, regeneración y crecimiento",
    origen: "Planeta X",
    grupo: "Guardianes de la Galaxia",
  },
  {
    nombreSuperheroe: "Mantis",
    nombreReal: "Mantis",
    imagen: "./assets/guardians/mantis.webp",
    primeraAparicion: "Guardians of the Galaxy Vol. 2 (2017)",
    poder: "Empatía, manipulación emocional",
    origen: "Criada por Ego el Planeta Viviente",
    grupo: "Guardianes de la Galaxia",
  },
];





const paintAvangers = (marvelHeroes) => {

    const sectionHeroes = document.querySelector("#heroes");
    marvelHeroes.forEach(heroe => {
        const article =  document.createElement("article");
        article.innerHTML = `
        <h3>${heroe.nombreSuperheroe}</h3>
        <img src="${heroe.imagen}" alt="${heroe.nombreSuperheroe}">
        <h4>${heroe.grupo}</h4>
        <p>Poder: ${heroe.poder}</p>
        `;
        console.log(article)
        sectionHeroes.appendChild(article);
    });
}
paintAvangers(marvelHeroes);



