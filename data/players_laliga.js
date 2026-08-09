// PLACEHOLDER VERİ — gerçek kadrolar sonraki adımda doldurulacak.
// Kulüp listesi 2025-26 sezonu gerçek listesidir; oyuncular otomatik üretilmiştir.
const LA_LIGA_DATA = {
  "formation": "4-2-3-1",
  "slots": [
    "gk",
    "rb",
    "cb1",
    "cb2",
    "lb",
    "dm1",
    "dm2",
    "rw",
    "cam",
    "lw",
    "st"
  ],
  "clubs": [
    {
      "id": "alaves",
      "name": "Alavés",
      "logo": null,
      "xi": {
        "gk": { "name": "Antonio Sivera", "value": 3500000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 29 },
        "rb": { "name": "Nahuel Tenaglia", "value": 2000000, "nationality": "Arjantin", "photo": null, "rating": 72, "age": 29 },
        "cb1": { "name": "Rafa Marín", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 23 },
        "cb2": { "name": "Abdel Abqar", "value": 4000000, "nationality": "Fas", "photo": null, "rating": 72, "age": 26 },
        "lb": { "name": "Manu Sánchez", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 25 },
        "dm1": { "name": "Antonio Blanco", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 24 },
        "dm2": { "name": "Ander Guevara", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 27 },
        "rw": { "name": "Carlos Vicente", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 24 },
        "cam": { "name": "Denis Suárez", "value": 2500000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 31 },
        "lw": { "name": "Abde Ezzalzouli", "value": 12000000, "nationality": "Fas", "photo": null, "rating": 75, "age": 23 },
        "st": { "name": "Kike García", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 34 }
      }
    },
    {
      "id": "athletic-bilbao",
      "name": "Athletic Bilbao",
      "logo": null,
      "xi": {
        "gk": { "name": "Unai Simón", "value": 20000000, "nationality": "İspanya", "photo": null, "rating": 84, "age": 28 },
        "rb": { "name": "Jesús Areso", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 24 },
        "cb1": { "name": "Dani Vivian", "value": 25000000, "nationality": "İspanya", "photo": null, "rating": 80, "age": 26 },
        "cb2": { "name": "Yeray Álvarez", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 30 },
        "lb": { "name": "Adama Boiro", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 21 },
        "dm1": { "name": "Mikel Vesga", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 30 },
        "dm2": { "name": "Ander Herrera", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 35 },
        "rw": { "name": "Álex Berenguer", "value": 12000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 29 },
        "cam": { "name": "Oihan Sancet", "value": 45000000, "nationality": "İspanya", "photo": null, "rating": 83, "age": 24 },
        "lw": { "name": "Nico Williams", "value": 80000000, "nationality": "İspanya", "photo": null, "rating": 87, "age": 23 },
        "st": { "name": "Gorka Guruzeta", "value": 18000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 28 }
      }
    },
    {
      "id": "atletico-madrid",
      "name": "Atlético Madrid",
      "logo": null,
      "xi": {
        "gk": { "name": "Jan Oblak", "value": 15000000, "nationality": "Slovenya", "photo": null, "rating": 87, "age": 32 },
        "rb": { "name": "Nahuel Molina", "value": 25000000, "nationality": "Arjantin", "photo": null, "rating": 80, "age": 27 },
        "cb1": { "name": "José María Giménez", "value": 20000000, "nationality": "Uruguay", "photo": null, "rating": 82, "age": 30 },
        "cb2": { "name": "Robin Le Normand", "value": 35000000, "nationality": "İspanya", "photo": null, "rating": 82, "age": 29 },
        "lb": { "name": "Javi Galán", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 29 },
        "dm1": { "name": "Rodrigo De Paul", "value": 25000000, "nationality": "Arjantin", "photo": null, "rating": 84, "age": 31 },
        "dm2": { "name": "Koke", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 80, "age": 33 },
        "rw": { "name": "Marcos Llorente", "value": 35000000, "nationality": "İspanya", "photo": null, "rating": 81, "age": 30 },
        "cam": { "name": "Antoine Griezmann", "value": 25000000, "nationality": "Fransa", "photo": null, "rating": 87, "age": 34 },
        "lw": { "name": "Nico González", "value": 35000000, "nationality": "Arjantin", "photo": null, "rating": 81, "age": 27 },
        "st": { "name": "Julián Álvarez", "value": 90000000, "nationality": "Arjantin", "photo": null, "rating": 88, "age": 25 }
      }
    },
    {
      "id": "barcelona",
      "name": "Barcelona",
      "logo": null,
      "xi": {
        "gk": { "name": "Joan García", "value": 25000000, "nationality": "İspanya", "photo": null, "rating": 84, "age": 24 },
        "rb": { "name": "Jules Koundé", "value": 60000000, "nationality": "Fransa", "photo": null, "rating": 86, "age": 26 },
        "cb1": { "name": "Pau Cubarsí", "value": 70000000, "nationality": "İspanya", "photo": null, "rating": 83, "age": 18 },
        "cb2": { "name": "Ronald Araújo", "value": 60000000, "nationality": "Uruguay", "photo": null, "rating": 85, "age": 26 },
        "lb": { "name": "Alejandro Balde", "value": 60000000, "nationality": "İspanya", "photo": null, "rating": 83, "age": 22 },
        "dm1": { "name": "Pedri", "value": 100000000, "nationality": "İspanya", "photo": null, "rating": 89, "age": 22 },
        "dm2": { "name": "Frenkie de Jong", "value": 50000000, "nationality": "Hollanda", "photo": null, "rating": 85, "age": 28 },
        "rw": { "name": "Lamine Yamal", "value": 180000000, "nationality": "İspanya", "photo": null, "rating": 90, "age": 18 },
        "cam": { "name": "Fermín López", "value": 60000000, "nationality": "İspanya", "photo": null, "rating": 83, "age": 22 },
        "lw": { "name": "Raphinha", "value": 80000000, "nationality": "Brezilya", "photo": null, "rating": 88, "age": 28 },
        "st": { "name": "Robert Lewandowski", "value": 15000000, "nationality": "Polonya", "photo": null, "rating": 85, "age": 37 }
      }
    },
    {
      "id": "celta-vigo",
      "name": "Celta Vigo",
      "logo": null,
      "xi": {
        "gk": { "name": "Vicente Guaita", "value": 1000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 38 },
        "rb": { "name": "Óscar Mingueza", "value": 12000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 26 },
        "cb1": { "name": "Carl Starfelt", "value": 6000000, "nationality": "İsveç", "photo": null, "rating": 74, "age": 30 },
        "cb2": { "name": "Yoel Lago", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 22 },
        "lb": { "name": "Manu Fernández", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 20 },
        "dm1": { "name": "Ilaix Moriba", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 22 },
        "dm2": { "name": "Hugo Sotelo", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 22 },
        "rw": { "name": "Fer López", "value": 20000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 21 },
        "cam": { "name": "Bryan Zaragoza", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 24 },
        "lw": { "name": "Williot Swedberg", "value": 10000000, "nationality": "İsveç", "photo": null, "rating": 74, "age": 21 },
        "st": { "name": "Iago Aspas", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 38 }
      }
    },
    {
      "id": "elche",
      "name": "Elche",
      "logo": null,
      "xi": {
        "gk": { "name": "Matías Dituro", "value": 1500000, "nationality": "Arjantin", "photo": null, "rating": 71, "age": 35 },
        "rb": { "name": "Álvaro Núñez", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 25 },
        "cb1": { "name": "Diego González", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 24 },
        "cb2": { "name": "Rodrigo Mendoza", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 26 },
        "lb": { "name": "Adrià Pedrosa", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 26 },
        "dm1": { "name": "Pol Lozano", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 26 },
        "dm2": { "name": "Josan Gómez", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 29 },
        "rw": { "name": "Germán Valera", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 21 },
        "cam": { "name": "Álex Collado", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 27 },
        "lw": { "name": "Alejandro Chuki", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 21 },
        "st": { "name": "Rafa Mir", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 28 }
      }
    },
    {
      "id": "espanyol",
      "name": "Espanyol",
      "logo": null,
      "xi": {
        "gk": { "name": "Marko Dmitrović", "value": 2000000, "nationality": "Sırbistan", "photo": null, "rating": 74, "age": 33 },
        "rb": { "name": "Omar El Hilali", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 21 },
        "cb1": { "name": "Leandro Cabrera", "value": 1500000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 35 },
        "cb2": { "name": "César Montes", "value": 3000000, "nationality": "Meksika", "photo": null, "rating": 74, "age": 28 },
        "lb": { "name": "Brian Oliván", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 31 },
        "dm1": { "name": "Edu Expósito", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 27 },
        "dm2": { "name": "Urko González de Zárate", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 25 },
        "rw": { "name": "Javi Puado", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 27 },
        "cam": { "name": "Alex Král", "value": 3000000, "nationality": "Çekya", "photo": null, "rating": 73, "age": 27 },
        "lw": { "name": "Irvin Cardona", "value": 4000000, "nationality": "Fransa", "photo": null, "rating": 74, "age": 27 },
        "st": { "name": "Roberto Fernández", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 22 }
      }
    },
    {
      "id": "getafe",
      "name": "Getafe",
      "logo": null,
      "xi": {
        "gk": { "name": "David Soria", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 33 },
        "rb": { "name": "Juan Iglesias", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 26 },
        "cb1": { "name": "Domingos Duarte", "value": 7000000, "nationality": "Portekiz", "photo": null, "rating": 76, "age": 30 },
        "cb2": { "name": "Djené Dakonam", "value": 4000000, "nationality": "Togo", "photo": null, "rating": 75, "age": 33 },
        "lb": { "name": "Diego Rico", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 32 },
        "dm1": { "name": "Mauro Arambarri", "value": 10000000, "nationality": "Uruguay", "photo": null, "rating": 77, "age": 29 },
        "dm2": { "name": "Luis Milla", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 29 },
        "rw": { "name": "Yellu Santiago", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 26 },
        "cam": { "name": "Mario Martín", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 22 },
        "lw": { "name": "Adrián Liso", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 20 },
        "st": { "name": "Borja Mayoral", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 28 }
      }
    },
    {
      "id": "girona",
      "name": "Girona",
      "logo": null,
      "xi": {
        "gk": { "name": "Paulo Gazzaniga", "value": 4000000, "nationality": "Arjantin", "photo": null, "rating": 75, "age": 33 },
        "rb": { "name": "Arnau Martínez", "value": 20000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 22 },
        "cb1": { "name": "David López", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 34 },
        "cb2": { "name": "Ladislav Krejčí", "value": 15000000, "nationality": "Çekya", "photo": null, "rating": 77, "age": 27 },
        "lb": { "name": "Miguel Gutiérrez", "value": 20000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 23 },
        "dm1": { "name": "Yangel Herrera", "value": 20000000, "nationality": "Venezuela", "photo": null, "rating": 78, "age": 27 },
        "dm2": { "name": "Pablo Torre", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 22 },
        "rw": { "name": "Bryan Gil", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 24 },
        "cam": { "name": "Iván Martín", "value": 20000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 26 },
        "lw": { "name": "Yaser Asprilla", "value": 12000000, "nationality": "Kolombiya", "photo": null, "rating": 76, "age": 21 },
        "st": { "name": "Bojan Miovski", "value": 10000000, "nationality": "Kuzey Makedonya", "photo": null, "rating": 76, "age": 25 }
      }
    },
    {
      "id": "levante",
      "name": "Levante",
      "logo": null,
      "xi": {
        "gk": { "name": "Andrés Fernández", "value": 1000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 35 },
        "rb": { "name": "Julián Chust", "value": 1000000, "nationality": "İspanya", "photo": null, "rating": 68, "age": 24 },
        "cb1": { "name": "Sergio Postigo", "value": 1500000, "nationality": "İspanya", "photo": null, "rating": 69, "age": 30 },
        "cb2": { "name": "Dimitrios Nikolaou", "value": 2000000, "nationality": "Yunanistan", "photo": null, "rating": 70, "age": 27 },
        "lb": { "name": "Álex Muñoz", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 25 },
        "dm1": { "name": "Pablo Martínez", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 25 },
        "dm2": { "name": "Álvaro Bustos", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 23 },
        "rw": { "name": "Jorge de Frutos", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 27 },
        "cam": { "name": "Etta Eyong", "value": 4000000, "nationality": "Kamerun", "photo": null, "rating": 71, "age": 20 },
        "lw": { "name": "Iván Romero", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 22 },
        "st": { "name": "Carlos José Álvarez", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 25 }
      }
    },
    {
      "id": "mallorca",
      "name": "Mallorca",
      "logo": null,
      "xi": {
        "gk": { "name": "Leo Román", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 24 },
        "rb": { "name": "Pablo Maffeo", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 27 },
        "cb1": { "name": "Martin Valjent", "value": 8000000, "nationality": "Slovakya", "photo": null, "rating": 76, "age": 29 },
        "cb2": { "name": "Antonio Raíllo", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 33 },
        "lb": { "name": "Johan Mojica", "value": 3000000, "nationality": "Kolombiya", "photo": null, "rating": 74, "age": 33 },
        "dm1": { "name": "Sergi Darder", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 32 },
        "dm2": { "name": "Antonio Sánchez", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 24 },
        "rw": { "name": "Pablo Torre", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 22 },
        "cam": { "name": "Dani Rodríguez", "value": 1000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 36 },
        "lw": { "name": "Abdón Prats", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 32 },
        "st": { "name": "Vedat Muriqi", "value": 12000000, "nationality": "Kosova", "photo": null, "rating": 79, "age": 31 }
      }
    },
    {
      "id": "osasuna",
      "name": "Osasuna",
      "logo": null,
      "xi": {
        "gk": { "name": "Sergio Herrera", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 31 },
        "rb": { "name": "Jesús Areso", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 25 },
        "cb1": { "name": "David García", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 30 },
        "cb2": { "name": "Alejandro Catena", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 29 },
        "lb": { "name": "Juan Cruz", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 26 },
        "dm1": { "name": "Lucas Torró", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 31 },
        "dm2": { "name": "Jon Moncayola", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 27 },
        "rw": { "name": "Rubén García", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 32 },
        "cam": { "name": "Aimar Oroz", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 23 },
        "lw": { "name": "Bryan Zaragoza", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 23 },
        "st": { "name": "Ante Budimir", "value": 8000000, "nationality": "Hırvatistan", "photo": null, "rating": 79, "age": 34 }
      }
    },
    {
      "id": "real-oviedo",
      "name": "Real Oviedo",
      "logo": null,
      "xi": {
        "gk": { "name": "Aarón Escandell", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 28 },
        "rb": { "name": "Alberto Reina", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 25 },
        "cb1": { "name": "Dani Calvo", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 28 },
        "cb2": { "name": "Sergio Barcia", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 24 },
        "lb": { "name": "Rahim Alhassane", "value": 2000000, "nationality": "Gana", "photo": null, "rating": 70, "age": 24 },
        "dm1": { "name": "Gonzalo Melero", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 29 },
        "dm2": { "name": "Nacho Vidal", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 26 },
        "rw": { "name": "Ilyas Chaira", "value": 3000000, "nationality": "Fas", "photo": null, "rating": 71, "age": 22 },
        "cam": { "name": "Borja Sánchez", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 28 },
        "lw": { "name": "Viti Rodríguez", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 23 },
        "st": { "name": "Alemao", "value": 5000000, "nationality": "Brezilya", "photo": null, "rating": 74, "age": 26 }
      }
    },
    {
      "id": "rayo-vallecano",
      "name": "Rayo Vallecano",
      "logo": null,
      "xi": {
        "gk": { "name": "Augusto Batalla", "value": 4000000, "nationality": "Arjantin", "photo": null, "rating": 76, "age": 28 },
        "rb": { "name": "Andrei Ratiu", "value": 8000000, "nationality": "Romanya", "photo": null, "rating": 77, "age": 27 },
        "cb1": { "name": "Abdul Mumin", "value": 8000000, "nationality": "Gana", "photo": null, "rating": 76, "age": 26 },
        "cb2": { "name": "Florian Lejeune", "value": 3000000, "nationality": "Fransa", "photo": null, "rating": 75, "age": 34 },
        "lb": { "name": "Pep Chavarría", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 24 },
        "dm1": { "name": "Óscar Valentín", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 27 },
        "dm2": { "name": "Unai López", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 29 },
        "rw": { "name": "Isi Palazón", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 28 },
        "cam": { "name": "Óscar Trejo", "value": 2000000, "nationality": "Arjantin", "photo": null, "rating": 76, "age": 36 },
        "lw": { "name": "Álvaro García", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 32 },
        "st": { "name": "Randy Nteka", "value": 8000000, "nationality": "DR Kongo", "photo": null, "rating": 76, "age": 27 }
      }
    },
    {
      "id": "real-betis",
      "name": "Real Betis",
      "logo": null,
      "xi": {
        "gk": { "name": "Rui Silva", "value": 8000000, "nationality": "Portekiz", "photo": null, "rating": 80, "age": 31 },
        "rb": { "name": "Héctor Bellerín", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 30 },
        "cb1": { "name": "Natan", "value": 15000000, "nationality": "Brezilya", "photo": null, "rating": 76, "age": 24 },
        "cb2": { "name": "Marc Bartra", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 34 },
        "lb": { "name": "Junior Firpo", "value": 10000000, "nationality": "Dominik Cumhuriyeti", "photo": null, "rating": 77, "age": 29 },
        "dm1": { "name": "Johnny Cardoso", "value": 25000000, "nationality": "ABD", "photo": null, "rating": 79, "age": 24 },
        "dm2": { "name": "Marc Roca", "value": 12000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 28 },
        "rw": { "name": "Ez Abde", "value": 20000000, "nationality": "Fas", "photo": null, "rating": 78, "age": 23 },
        "cam": { "name": "Isco", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 82, "age": 33 },
        "lw": { "name": "Antony", "value": 25000000, "nationality": "Brezilya", "photo": null, "rating": 81, "age": 25 },
        "st": { "name": "Vitor Roque", "value": 25000000, "nationality": "Brezilya", "photo": null, "rating": 79, "age": 21 }
      }
    },
    {
      "id": "real-madrid",
      "name": "Real Madrid",
      "logo": null,
      "xi": {
        "gk": { "name": "Thibaut Courtois", "value": 15000000, "nationality": "Belçika", "photo": null, "rating": 89, "age": 33 },
        "rb": { "name": "Trent Alexander-Arnold", "value": 70000000, "nationality": "İngiltere", "photo": null, "rating": 86, "age": 26 },
        "cb1": { "name": "Dean Huijsen", "value": 55000000, "nationality": "İspanya", "photo": null, "rating": 82, "age": 20 },
        "cb2": { "name": "Antonio Rüdiger", "value": 18000000, "nationality": "Almanya", "photo": null, "rating": 84, "age": 32 },
        "lb": { "name": "Álvaro Carreras", "value": 40000000, "nationality": "İspanya", "photo": null, "rating": 80, "age": 22 },
        "dm1": { "name": "Aurélien Tchouaméni", "value": 90000000, "nationality": "Fransa", "photo": null, "rating": 87, "age": 25 },
        "dm2": { "name": "Federico Valverde", "value": 100000000, "nationality": "Uruguay", "photo": null, "rating": 88, "age": 27 },
        "rw": { "name": "Rodrygo", "value": 80000000, "nationality": "Brezilya", "photo": null, "rating": 85, "age": 24 },
        "cam": { "name": "Jude Bellingham", "value": 180000000, "nationality": "İngiltere", "photo": null, "rating": 90, "age": 22 },
        "lw": { "name": "Vinícius Júnior", "value": 150000000, "nationality": "Brezilya", "photo": null, "rating": 90, "age": 25 },
        "st": { "name": "Kylian Mbappé", "value": 180000000, "nationality": "Fransa", "photo": null, "rating": 92, "age": 27 }
      }
    },
    {
      "id": "real-sociedad",
      "name": "Real Sociedad",
      "logo": null,
      "xi": {
        "gk": { "name": "Álex Remiro", "value": 18000000, "nationality": "İspanya", "photo": null, "rating": 82, "age": 30 },
        "rb": { "name": "Álvaro Odriozola", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 29 },
        "cb1": { "name": "Igor Zubeldia", "value": 22000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 28 },
        "cb2": { "name": "Jon Pacheco", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 24 },
        "lb": { "name": "Aihen Muñoz", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 28 },
        "dm1": { "name": "Beñat Turrientes", "value": 18000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 24 },
        "dm2": { "name": "Arsen Zakharyan", "value": 12000000, "nationality": "Rusya", "photo": null, "rating": 77, "age": 22 },
        "rw": { "name": "Take Kubo", "value": 45000000, "nationality": "Japonya", "photo": null, "rating": 82, "age": 24 },
        "cam": { "name": "Brais Méndez", "value": 20000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 28 },
        "lw": { "name": "Mikel Oyarzabal", "value": 40000000, "nationality": "İspanya", "photo": null, "rating": 84, "age": 28 },
        "st": { "name": "Sheraldo Becker", "value": 14000000, "nationality": "Surinam", "photo": null, "rating": 78, "age": 30 }
      }
    },
    {
      "id": "sevilla",
      "name": "Sevilla",
      "logo": null,
      "xi": {
        "gk": { "name": "Álvaro Fernández", "value": 12000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 25 },
        "rb": { "name": "José Ángel Carmona", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 24 },
        "cb1": { "name": "Kike Salas", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 22 },
        "cb2": { "name": "Marcão", "value": 10000000, "nationality": "Brezilya", "photo": null, "rating": 76, "age": 27 },
        "lb": { "name": "Adrià Pedrosa", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 26 },
        "dm1": { "name": "Djibril Sow", "value": 12000000, "nationality": "İsviçre", "photo": null, "rating": 78, "age": 28 },
        "dm2": { "name": "Lucien Agoumé", "value": 10000000, "nationality": "Fransa", "photo": null, "rating": 76, "age": 23 },
        "rw": { "name": "Rubén Vargas", "value": 12000000, "nationality": "İsviçre", "photo": null, "rating": 78, "age": 27 },
        "cam": { "name": "Chidera Ejuke", "value": 8000000, "nationality": "Nijerya", "photo": null, "rating": 76, "age": 27 },
        "lw": { "name": "Rafael Pérez (Peque)", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 24 },
        "st": { "name": "Isaac Romero", "value": 14000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 24 }
      }
    },
    {
      "id": "valencia",
      "name": "Valencia",
      "logo": null,
      "xi": {
        "gk": { "name": "Julen Agirrezabala", "value": 12000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 24 },
        "rb": { "name": "Thierry Correia", "value": 8000000, "nationality": "Portekiz", "photo": null, "rating": 76, "age": 27 },
        "cb1": { "name": "Eray Cömert", "value": 6000000, "nationality": "İsviçre", "photo": null, "rating": 75, "age": 27 },
        "cb2": { "name": "César Tárrega", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 23 },
        "lb": { "name": "José Gayà", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 30 },
        "dm1": { "name": "Javi Guerra", "value": 25000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 22 },
        "dm2": { "name": "Pepelu", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 27 },
        "rw": { "name": "Diego López", "value": 12000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 22 },
        "cam": { "name": "Fran Pérez", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 22 },
        "lw": { "name": "Sergi Canós", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 28 },
        "st": { "name": "Hugo Duro", "value": 16000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 27 }
      }
    },
    {
      "id": "villarreal",
      "name": "Villarreal",
      "logo": null,
      "xi": {
        "gk": { "name": "Diego Conde", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 25 },
        "rb": { "name": "Juan Foyth", "value": 20000000, "nationality": "Arjantin", "photo": null, "rating": 79, "age": 27 },
        "cb1": { "name": "Logan Costa", "value": 15000000, "nationality": "Cape Verde", "photo": null, "rating": 77, "age": 24 },
        "cb2": { "name": "Santiago Mouriño", "value": 10000000, "nationality": "Uruguay", "photo": null, "rating": 75, "age": 22 },
        "lb": { "name": "Alfonso Pedraza", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 28 },
        "dm1": { "name": "Santi Comesaña", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 26 },
        "dm2": { "name": "Pape Gueye", "value": 15000000, "nationality": "Senegal", "photo": null, "rating": 78, "age": 26 },
        "rw": { "name": "Ilias Akhomach", "value": 15000000, "nationality": "Fas", "photo": null, "rating": 77, "age": 21 },
        "cam": { "name": "Yeremy Pino", "value": 22000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 22 },
        "lw": { "name": "Ayoze Pérez", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 80, "age": 32 },
        "st": { "name": "Gerard Moreno", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 32 }
      }
    }
  ]
};
