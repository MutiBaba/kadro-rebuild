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
      "name": "Alaves",
      "logo": null,
      "xi": {
        "gk": { "name": "Antonnio Siverah", "value": 3500000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 29 },
        "rb": { "name": "Nahuell Tennaglia", "value": 2000000, "nationality": "Arjantin", "photo": null, "rating": 72, "age": 29 },
        "cb1": { "name": "Rafah Marin", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 23 },
        "cb2": { "name": "Abdell Abqarr", "value": 4000000, "nationality": "Fas", "photo": null, "rating": 72, "age": 26 },
        "lb": { "name": "Manuh Sanchez", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 25 },
        "dm1": { "name": "Antonnio Blancoh", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 24 },
        "dm2": { "name": "Anderr Guevarah", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 27 },
        "rw": { "name": "Carloss Viccente", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 24 },
        "cam": { "name": "Deniss Suarez", "value": 2500000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 31 },
        "lw": { "name": "Abde Ezalzouli", "value": 12000000, "nationality": "Fas", "photo": null, "rating": 75, "age": 23 },
        "st": { "name": "Kice Garcia", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 34 }
      }
    },
    {
      "id": "athletic-bilbao",
      "name": "Athletik Bilbao",
      "logo": null,
      "xi": {
        "gk": { "name": "Unnai Simon", "value": 20000000, "nationality": "İspanya", "photo": null, "rating": 84, "age": 28 },
        "rb": { "name": "Jesus Aresoh", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 24 },
        "cb1": { "name": "Dany Viviann", "value": 25000000, "nationality": "İspanya", "photo": null, "rating": 80, "age": 26 },
        "cb2": { "name": "Yerray Alvarez", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 30 },
        "lb": { "name": "Addama Boiroh", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 21 },
        "dm1": { "name": "Mikkel Vesgah", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 30 },
        "dm2": { "name": "Anderr Herera", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 35 },
        "rw": { "name": "Alex Berenguerr", "value": 12000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 29 },
        "cam": { "name": "Oihann Sancett", "value": 45000000, "nationality": "İspanya", "photo": null, "rating": 83, "age": 24 },
        "lw": { "name": "Nicoh Wiliams", "value": 80000000, "nationality": "İspanya", "photo": null, "rating": 87, "age": 23 },
        "st": { "name": "Gorca Guruzetah", "value": 18000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 28 }
      }
    },
    {
      "id": "atletico-madrid",
      "name": "Atletiko Madrid",
      "logo": null,
      "xi": {
        "gk": { "name": "Jan Oblac", "value": 15000000, "nationality": "Slovenya", "photo": null, "rating": 87, "age": 32 },
        "rb": { "name": "Nahuell Molinah", "value": 25000000, "nationality": "Arjantin", "photo": null, "rating": 80, "age": 27 },
        "cb1": { "name": "Jose Maria Gimenez", "value": 20000000, "nationality": "Uruguay", "photo": null, "rating": 82, "age": 30 },
        "cb2": { "name": "Robinn Le Normand", "value": 35000000, "nationality": "İspanya", "photo": null, "rating": 82, "age": 29 },
        "lb": { "name": "Javy Galan", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 29 },
        "dm1": { "name": "Rodrigoh De Paul", "value": 25000000, "nationality": "Arjantin", "photo": null, "rating": 84, "age": 31 },
        "dm2": { "name": "Koce", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 80, "age": 33 },
        "rw": { "name": "Marcoss Llorrente", "value": 35000000, "nationality": "İspanya", "photo": null, "rating": 81, "age": 30 },
        "cam": { "name": "Antoinne Griezman", "value": 25000000, "nationality": "Fransa", "photo": null, "rating": 87, "age": 34 },
        "lw": { "name": "Nicoh Gonzalez", "value": 35000000, "nationality": "Arjantin", "photo": null, "rating": 81, "age": 27 },
        "st": { "name": "Julian Alvarez", "value": 90000000, "nationality": "Arjantin", "photo": null, "rating": 88, "age": 25 }
      }
    },
    {
      "id": "barcelona",
      "name": "Barcelonna",
      "logo": null,
      "xi": {
        "gk": { "name": "Joan Garcia", "value": 25000000, "nationality": "İspanya", "photo": null, "rating": 84, "age": 24 },
        "rb": { "name": "Juless Kounde", "value": 60000000, "nationality": "Fransa", "photo": null, "rating": 86, "age": 26 },
        "cb1": { "name": "Pau Cubarsi", "value": 70000000, "nationality": "İspanya", "photo": null, "rating": 83, "age": 18 },
        "cb2": { "name": "Ronnald Araujo", "value": 60000000, "nationality": "Uruguay", "photo": null, "rating": 85, "age": 26 },
        "lb": { "name": "Alejandroh Balde", "value": 60000000, "nationality": "İspanya", "photo": null, "rating": 83, "age": 22 },
        "dm1": { "name": "Pedry", "value": 100000000, "nationality": "İspanya", "photo": null, "rating": 89, "age": 22 },
        "dm2": { "name": "Frenkey de Jong", "value": 50000000, "nationality": "Hollanda", "photo": null, "rating": 85, "age": 28 },
        "rw": { "name": "Lammine Yamall", "value": 180000000, "nationality": "İspanya", "photo": null, "rating": 90, "age": 18 },
        "cam": { "name": "Fermin Lopez", "value": 60000000, "nationality": "İspanya", "photo": null, "rating": 83, "age": 22 },
        "lw": { "name": "Rafinha", "value": 80000000, "nationality": "Brezilya", "photo": null, "rating": 88, "age": 28 },
        "st": { "name": "Robbert Lewandowsci", "value": 15000000, "nationality": "Polonya", "photo": null, "rating": 85, "age": 37 }
      }
    },
    {
      "id": "celta-vigo",
      "name": "Celta Vygo",
      "logo": null,
      "xi": {
        "gk": { "name": "Viccente Guaitah", "value": 1000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 38 },
        "rb": { "name": "Oscar Minguezah", "value": 12000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 26 },
        "cb1": { "name": "Carl Starfeltt", "value": 6000000, "nationality": "İsveç", "photo": null, "rating": 74, "age": 30 },
        "cb2": { "name": "Yoel Lagoh", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 22 },
        "lb": { "name": "Manuh Fernandez", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 20 },
        "dm1": { "name": "Illaix Moribah", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 22 },
        "dm2": { "name": "Hugoh Soteloh", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 22 },
        "rw": { "name": "Fer Lopez", "value": 20000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 21 },
        "cam": { "name": "Bryann Zaragozah", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 24 },
        "lw": { "name": "Williott Swedberg", "value": 10000000, "nationality": "İsveç", "photo": null, "rating": 74, "age": 21 },
        "st": { "name": "Iaggo Aspass", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 38 }
      }
    },
    {
      "id": "elche",
      "name": "Elchey",
      "logo": null,
      "xi": {
        "gk": { "name": "Matias Ditturo", "value": 1500000, "nationality": "Arjantin", "photo": null, "rating": 71, "age": 35 },
        "rb": { "name": "Alvaro Nunez", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 25 },
        "cb1": { "name": "Dieggo Gonzalez", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 24 },
        "cb2": { "name": "Rodrigoh Mendozza", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 26 },
        "lb": { "name": "Adria Pedrosah", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 26 },
        "dm1": { "name": "Pol Lozanoh", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 26 },
        "dm2": { "name": "Josann Gomez", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 29 },
        "rw": { "name": "German Vallera", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 21 },
        "cam": { "name": "Alex Colado", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 27 },
        "lw": { "name": "Alejandroh Chuky", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 21 },
        "st": { "name": "Rafah Mir", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 28 }
      }
    },
    {
      "id": "espanyol",
      "name": "Espanyoll",
      "logo": null,
      "xi": {
        "gk": { "name": "Markoh Dmitrovic", "value": 2000000, "nationality": "Sırbistan", "photo": null, "rating": 74, "age": 33 },
        "rb": { "name": "Ommar El Hilaly", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 21 },
        "cb1": { "name": "Leandroh Cabrerah", "value": 1500000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 35 },
        "cb2": { "name": "Cesar Montez", "value": 3000000, "nationality": "Meksika", "photo": null, "rating": 74, "age": 28 },
        "lb": { "name": "Briann Olivan", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 31 },
        "dm1": { "name": "Edu Exposito", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 27 },
        "dm2": { "name": "Urkoh Gonzalez de Zarate", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 25 },
        "rw": { "name": "Javy Puadoh", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 27 },
        "cam": { "name": "Allex Kral", "value": 3000000, "nationality": "Çekya", "photo": null, "rating": 73, "age": 27 },
        "lw": { "name": "Irvinn Cardonah", "value": 4000000, "nationality": "Fransa", "photo": null, "rating": 74, "age": 27 },
        "st": { "name": "Robertoh Fernandez", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 22 }
      }
    },
    {
      "id": "getafe",
      "name": "Gettafe",
      "logo": null,
      "xi": {
        "gk": { "name": "Davvid Sorria", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 33 },
        "rb": { "name": "Juan Iglesiass", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 26 },
        "cb1": { "name": "Dommingos Duarte", "value": 7000000, "nationality": "Portekiz", "photo": null, "rating": 76, "age": 30 },
        "cb2": { "name": "Djene Dakkonam", "value": 4000000, "nationality": "Togo", "photo": null, "rating": 75, "age": 33 },
        "lb": { "name": "Dieggo Riko", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 32 },
        "dm1": { "name": "Mauroh Arambari", "value": 10000000, "nationality": "Uruguay", "photo": null, "rating": 77, "age": 29 },
        "dm2": { "name": "Luis Mila", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 29 },
        "rw": { "name": "Yelu Santiagoh", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 26 },
        "cam": { "name": "Marrio Martin", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 22 },
        "lw": { "name": "Adrian Lisso", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 20 },
        "st": { "name": "Borjah Mayorall", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 28 }
      }
    },
    {
      "id": "girona",
      "name": "Gironna",
      "logo": null,
      "xi": {
        "gk": { "name": "Pauloh Gazzanniga", "value": 4000000, "nationality": "Arjantin", "photo": null, "rating": 75, "age": 33 },
        "rb": { "name": "Arnau Martinez", "value": 20000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 22 },
        "cb1": { "name": "Davvid Lopez", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 34 },
        "cb2": { "name": "Laddislav Krejci", "value": 15000000, "nationality": "Çekya", "photo": null, "rating": 77, "age": 27 },
        "lb": { "name": "Miguell Gutierrez", "value": 20000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 23 },
        "dm1": { "name": "Yangell Herera", "value": 20000000, "nationality": "Venezuela", "photo": null, "rating": 78, "age": 27 },
        "dm2": { "name": "Pabloh Tore", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 22 },
        "rw": { "name": "Bryann Gil", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 24 },
        "cam": { "name": "Ivan Martin", "value": 20000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 26 },
        "lw": { "name": "Yaserr Asprila", "value": 12000000, "nationality": "Kolombiya", "photo": null, "rating": 76, "age": 21 },
        "st": { "name": "Bojann Miovsci", "value": 10000000, "nationality": "Kuzey Makedonya", "photo": null, "rating": 76, "age": 25 }
      }
    },
    {
      "id": "levante",
      "name": "Levantte",
      "logo": null,
      "xi": {
        "gk": { "name": "Andres Fernandez", "value": 1000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 35 },
        "rb": { "name": "Julian Chust", "value": 1000000, "nationality": "İspanya", "photo": null, "rating": 68, "age": 24 },
        "cb1": { "name": "Sergio Postigoh", "value": 1500000, "nationality": "İspanya", "photo": null, "rating": 69, "age": 30 },
        "cb2": { "name": "Dimitrioss Nikkolaou", "value": 2000000, "nationality": "Yunanistan", "photo": null, "rating": 70, "age": 27 },
        "lb": { "name": "Alex Munoz", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 25 },
        "dm1": { "name": "Pabloh Martinez", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 25 },
        "dm2": { "name": "Alvaro Bustoss", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 23 },
        "rw": { "name": "Jorge de Frutoss", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 27 },
        "cam": { "name": "Eta Eyong", "value": 4000000, "nationality": "Kamerun", "photo": null, "rating": 71, "age": 20 },
        "lw": { "name": "Ivan Romeroh", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 22 },
        "st": { "name": "Carloss Jose Alvarez", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 25 }
      }
    },
    {
      "id": "mallorca",
      "name": "Mallorka",
      "logo": null,
      "xi": {
        "gk": { "name": "Leo Roman", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 24 },
        "rb": { "name": "Pabloh Mafeo", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 27 },
        "cb1": { "name": "Martinn Valjent", "value": 8000000, "nationality": "Slovakya", "photo": null, "rating": 76, "age": 29 },
        "cb2": { "name": "Antonnio Raillo", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 33 },
        "lb": { "name": "Johann Mojicah", "value": 3000000, "nationality": "Kolombiya", "photo": null, "rating": 74, "age": 33 },
        "dm1": { "name": "Sergy Darderr", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 32 },
        "dm2": { "name": "Antonnio Sanchez", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 24 },
        "rw": { "name": "Pabloh Tore", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 22 },
        "cam": { "name": "Dany Rodriguez", "value": 1000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 36 },
        "lw": { "name": "Abdon Prats", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 32 },
        "st": { "name": "Vedatt Murriqi", "value": 12000000, "nationality": "Kosova", "photo": null, "rating": 79, "age": 31 }
      }
    },
    {
      "id": "osasuna",
      "name": "Osassuna",
      "logo": null,
      "xi": {
        "gk": { "name": "Sergio Herera", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 31 },
        "rb": { "name": "Jesus Aresoh", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 25 },
        "cb1": { "name": "Davvid Garcia", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 30 },
        "cb2": { "name": "Alejandroh Catenah", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 29 },
        "lb": { "name": "Juan Cruzz", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 26 },
        "dm1": { "name": "Lukas Torro", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 31 },
        "dm2": { "name": "Jon Moncayolah", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 27 },
        "rw": { "name": "Ruben Garcia", "value": 5000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 32 },
        "cam": { "name": "Aimarr Orroz", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 23 },
        "lw": { "name": "Bryann Zaragozah", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 23 },
        "st": { "name": "Ante Budimirr", "value": 8000000, "nationality": "Hırvatistan", "photo": null, "rating": 79, "age": 34 }
      }
    },
    {
      "id": "real-oviedo",
      "name": "Real Ovyedo",
      "logo": null,
      "xi": {
        "gk": { "name": "Aaron Escandel", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 28 },
        "rb": { "name": "Albertoh Reinah", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 25 },
        "cb1": { "name": "Dany Calvoh", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 28 },
        "cb2": { "name": "Sergio Barciah", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 24 },
        "lb": { "name": "Rahim Alhasane", "value": 2000000, "nationality": "Gana", "photo": null, "rating": 70, "age": 24 },
        "dm1": { "name": "Gonzaloh Meleroh", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 72, "age": 29 },
        "dm2": { "name": "Nachoh Vidall", "value": 2000000, "nationality": "İspanya", "photo": null, "rating": 70, "age": 26 },
        "rw": { "name": "Ilyass Chairra", "value": 3000000, "nationality": "Fas", "photo": null, "rating": 71, "age": 22 },
        "cam": { "name": "Borjah Sanchez", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 73, "age": 28 },
        "lw": { "name": "Vity Rodriguez", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 71, "age": 23 },
        "st": { "name": "Allemao", "value": 5000000, "nationality": "Brezilya", "photo": null, "rating": 74, "age": 26 }
      }
    },
    {
      "id": "rayo-vallecano",
      "name": "Rayo Valecano",
      "logo": null,
      "xi": {
        "gk": { "name": "Augustoh Batala", "value": 4000000, "nationality": "Arjantin", "photo": null, "rating": 76, "age": 28 },
        "rb": { "name": "Andrey Rattiu", "value": 8000000, "nationality": "Romanya", "photo": null, "rating": 77, "age": 27 },
        "cb1": { "name": "Abdull Muminn", "value": 8000000, "nationality": "Gana", "photo": null, "rating": 76, "age": 26 },
        "cb2": { "name": "Floriann Lejeunne", "value": 3000000, "nationality": "Fransa", "photo": null, "rating": 75, "age": 34 },
        "lb": { "name": "Pep Chavarria", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 74, "age": 24 },
        "dm1": { "name": "Oscar Valentin", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 27 },
        "dm2": { "name": "Unnai Lopez", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 29 },
        "rw": { "name": "Isi Palazon", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 28 },
        "cam": { "name": "Oscar Trejoh", "value": 2000000, "nationality": "Arjantin", "photo": null, "rating": 76, "age": 36 },
        "lw": { "name": "Alvaro Garcia", "value": 4000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 32 },
        "st": { "name": "Randi Nteca", "value": 8000000, "nationality": "DR Kongo", "photo": null, "rating": 76, "age": 27 }
      }
    },
    {
      "id": "real-betis",
      "name": "Real Bettis",
      "logo": null,
      "xi": {
        "gk": { "name": "Rui Silvah", "value": 8000000, "nationality": "Portekiz", "photo": null, "rating": 80, "age": 31 },
        "rb": { "name": "Hector Bellerin", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 30 },
        "cb1": { "name": "Natann", "value": 15000000, "nationality": "Brezilya", "photo": null, "rating": 76, "age": 24 },
        "cb2": { "name": "Mark Bartrah", "value": 3000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 34 },
        "lb": { "name": "Junnior Firpoh", "value": 10000000, "nationality": "Dominik Cumhuriyeti", "photo": null, "rating": 77, "age": 29 },
        "dm1": { "name": "Johnni Cardosoh", "value": 25000000, "nationality": "ABD", "photo": null, "rating": 79, "age": 24 },
        "dm2": { "name": "Mark Roka", "value": 12000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 28 },
        "rw": { "name": "Ez Abdeh", "value": 20000000, "nationality": "Fas", "photo": null, "rating": 78, "age": 23 },
        "cam": { "name": "Iscoh", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 82, "age": 33 },
        "lw": { "name": "Antoni", "value": 25000000, "nationality": "Brezilya", "photo": null, "rating": 81, "age": 25 },
        "st": { "name": "Vitorr Roque", "value": 25000000, "nationality": "Brezilya", "photo": null, "rating": 79, "age": 21 }
      }
    },
    {
      "id": "real-madrid",
      "name": "Real Madryd",
      "logo": null,
      "xi": {
        "gk": { "name": "Thibautt Courtoiss", "value": 15000000, "nationality": "Belçika", "photo": null, "rating": 89, "age": 33 },
        "rb": { "name": "Trent Allexander-Arnold", "value": 70000000, "nationality": "İngiltere", "photo": null, "rating": 86, "age": 26 },
        "cb1": { "name": "Dean Huijsenn", "value": 55000000, "nationality": "İspanya", "photo": null, "rating": 82, "age": 20 },
        "cb2": { "name": "Antonnio Rudiger", "value": 18000000, "nationality": "Almanya", "photo": null, "rating": 84, "age": 32 },
        "lb": { "name": "Alvaro Carrerass", "value": 40000000, "nationality": "İspanya", "photo": null, "rating": 80, "age": 22 },
        "dm1": { "name": "Aurelien Tchouameni", "value": 90000000, "nationality": "Fransa", "photo": null, "rating": 87, "age": 25 },
        "dm2": { "name": "Federicoh Valverde", "value": 100000000, "nationality": "Uruguay", "photo": null, "rating": 88, "age": 27 },
        "rw": { "name": "Rodrygoh", "value": 80000000, "nationality": "Brezilya", "photo": null, "rating": 85, "age": 24 },
        "cam": { "name": "Judde Belingham", "value": 180000000, "nationality": "İngiltere", "photo": null, "rating": 90, "age": 22 },
        "lw": { "name": "Vinicius Junior", "value": 150000000, "nationality": "Brezilya", "photo": null, "rating": 90, "age": 25 },
        "st": { "name": "Kyliann Mbappe", "value": 180000000, "nationality": "Fransa", "photo": null, "rating": 92, "age": 27 }
      }
    },
    {
      "id": "real-sociedad",
      "name": "Real Socyedad",
      "logo": null,
      "xi": {
        "gk": { "name": "Alex Remiroh", "value": 18000000, "nationality": "İspanya", "photo": null, "rating": 82, "age": 30 },
        "rb": { "name": "Alvaro Odriozolah", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 29 },
        "cb1": { "name": "Iggor Zubbeldia", "value": 22000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 28 },
        "cb2": { "name": "Jon Pachecoh", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 24 },
        "lb": { "name": "Aihenn Munoz", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 28 },
        "dm1": { "name": "Benat Turrientez", "value": 18000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 24 },
        "dm2": { "name": "Arsenn Zakharyann", "value": 12000000, "nationality": "Rusya", "photo": null, "rating": 77, "age": 22 },
        "rw": { "name": "Takke Kuboh", "value": 45000000, "nationality": "Japonya", "photo": null, "rating": 82, "age": 24 },
        "cam": { "name": "Braiss Mendez", "value": 20000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 28 },
        "lw": { "name": "Mikkel Oyarzaball", "value": 40000000, "nationality": "İspanya", "photo": null, "rating": 84, "age": 28 },
        "st": { "name": "Sherraldo Beker", "value": 14000000, "nationality": "Surinam", "photo": null, "rating": 78, "age": 30 }
      }
    },
    {
      "id": "sevilla",
      "name": "Sevillia",
      "logo": null,
      "xi": {
        "gk": { "name": "Alvaro Fernandez", "value": 12000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 25 },
        "rb": { "name": "Jose Angel Carmonah", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 24 },
        "cb1": { "name": "Kice Salass", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 22 },
        "cb2": { "name": "Marcao", "value": 10000000, "nationality": "Brezilya", "photo": null, "rating": 76, "age": 27 },
        "lb": { "name": "Adria Pedrosah", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 26 },
        "dm1": { "name": "Djibrill Sow", "value": 12000000, "nationality": "İsviçre", "photo": null, "rating": 78, "age": 28 },
        "dm2": { "name": "Lucienn Agoume", "value": 10000000, "nationality": "Fransa", "photo": null, "rating": 76, "age": 23 },
        "rw": { "name": "Ruben Vargass", "value": 12000000, "nationality": "İsviçre", "photo": null, "rating": 78, "age": 27 },
        "cam": { "name": "Chiddera Ejukke", "value": 8000000, "nationality": "Nijerya", "photo": null, "rating": 76, "age": 27 },
        "lw": { "name": "Rafaell Perez (Peque)", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 24 },
        "st": { "name": "Issaac Romeroh", "value": 14000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 24 }
      }
    },
    {
      "id": "valencia",
      "name": "Valensia",
      "logo": null,
      "xi": {
        "gk": { "name": "Julenn Agirezabala", "value": 12000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 24 },
        "rb": { "name": "Thiery Coreia", "value": 8000000, "nationality": "Portekiz", "photo": null, "rating": 76, "age": 27 },
        "cb1": { "name": "Erray Comert", "value": 6000000, "nationality": "İsviçre", "photo": null, "rating": 75, "age": 27 },
        "cb2": { "name": "Cesar Tarrega", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 23 },
        "lb": { "name": "Jose Gaya", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 30 },
        "dm1": { "name": "Javy Guera", "value": 25000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 22 },
        "dm2": { "name": "Pepeluh", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 27 },
        "rw": { "name": "Dieggo Lopez", "value": 12000000, "nationality": "İspanya", "photo": null, "rating": 76, "age": 22 },
        "cam": { "name": "Fran Perez", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 22 },
        "lw": { "name": "Sergy Canos", "value": 6000000, "nationality": "İspanya", "photo": null, "rating": 75, "age": 28 },
        "st": { "name": "Hugoh Duroh", "value": 16000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 27 }
      }
    },
    {
      "id": "villarreal",
      "name": "Villareal",
      "logo": null,
      "xi": {
        "gk": { "name": "Dieggo Conde", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 25 },
        "rb": { "name": "Juan Foythh", "value": 20000000, "nationality": "Arjantin", "photo": null, "rating": 79, "age": 27 },
        "cb1": { "name": "Logann Costah", "value": 15000000, "nationality": "Cape Verde", "photo": null, "rating": 77, "age": 24 },
        "cb2": { "name": "Santiagoh Mourino", "value": 10000000, "nationality": "Uruguay", "photo": null, "rating": 75, "age": 22 },
        "lb": { "name": "Alfonsoh Pedrazah", "value": 10000000, "nationality": "İspanya", "photo": null, "rating": 77, "age": 28 },
        "dm1": { "name": "Santy Comesana", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 26 },
        "dm2": { "name": "Pape Gueyeh", "value": 15000000, "nationality": "Senegal", "photo": null, "rating": 78, "age": 26 },
        "rw": { "name": "Iliass Akhommach", "value": 15000000, "nationality": "Fas", "photo": null, "rating": 77, "age": 21 },
        "cam": { "name": "Yerremy Pinno", "value": 22000000, "nationality": "İspanya", "photo": null, "rating": 78, "age": 22 },
        "lw": { "name": "Ayozze Perez", "value": 15000000, "nationality": "İspanya", "photo": null, "rating": 80, "age": 32 },
        "st": { "name": "Gerrard Morenoh", "value": 8000000, "nationality": "İspanya", "photo": null, "rating": 79, "age": 32 }
      }
    }
  ]
};
