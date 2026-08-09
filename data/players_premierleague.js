// PLACEHOLDER VERİ — gerçek kadrolar sonraki adımda doldurulacak.
// Kulüp listesi 2025-26 sezonu gerçek listesidir; oyuncular otomatik üretilmiştir.
const PREMIER_LEAGUE_DATA = {
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
      "id": "arsenal",
      "name": "Arsenal",
      "logo": null,
      "xi": {
        "gk": {
          "name": "David Raya",
          "value": 40000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 84,
          "age": 30
        },
        "rb": {
          "name": "Ben White",
          "value": 45000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 84,
          "age": 28
        },
        "cb1": {
          "name": "William Saliba",
          "value": 80000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 87,
          "age": 25
        },
        "cb2": {
          "name": "Gabriel Magalhaes",
          "value": 65000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 86,
          "age": 28
        },
        "lb": {
          "name": "Riccardo Calafiori",
          "value": 45000000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 82,
          "age": 24
        },
        "dm1": {
          "name": "Declan Rice",
          "value": 110000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 88,
          "age": 27
        },
        "dm2": {
          "name": "Martin Zubimendi",
          "value": 60000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 84,
          "age": 26
        },
        "rw": {
          "name": "Bukayo Saka",
          "value": 140000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 88,
          "age": 24
        },
        "cam": {
          "name": "Martin Odegaard",
          "value": 90000000,
          "nationality": "Norveç",
          "photo": null,
          "rating": 87,
          "age": 27
        },
        "lw": {
          "name": "Gabriel Martinelli",
          "value": 55000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 82,
          "age": 25
        },
        "st": {
          "name": "Viktor Gyokeres",
          "value": 75000000,
          "nationality": "İsveç",
          "photo": null,
          "rating": 85,
          "age": 28
        }
      }
    },
    {
      "id": "aston-villa",
      "name": "Aston Villa",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Emiliano Martinez",
          "value": 20000000,
          "nationality": "Arjantin",
          "photo": null,
          "rating": 84,
          "age": 33
        },
        "rb": {
          "name": "Matty Cash",
          "value": 30000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 80,
          "age": 28
        },
        "cb1": {
          "name": "Ezri Konsa",
          "value": 25000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 79,
          "age": 28
        },
        "cb2": {
          "name": "Pau Torres",
          "value": 25000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 80,
          "age": 28
        },
        "lb": {
          "name": "Lucas Digne",
          "value": 8000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 78,
          "age": 32
        },
        "dm1": {
          "name": "Boubacar Kamara",
          "value": 35000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 80,
          "age": 26
        },
        "dm2": {
          "name": "Amadou Onana",
          "value": 40000000,
          "nationality": "Belçika",
          "photo": null,
          "rating": 79,
          "age": 24
        },
        "rw": {
          "name": "Leon Bailey",
          "value": 20000000,
          "nationality": "Jamaika",
          "photo": null,
          "rating": 79,
          "age": 28
        },
        "cam": {
          "name": "Morgan Rogers",
          "value": 55000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 82,
          "age": 23
        },
        "lw": {
          "name": "Donyell Malen",
          "value": 30000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 79,
          "age": 26
        },
        "st": {
          "name": "Ollie Watkins",
          "value": 50000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 83,
          "age": 29
        }
      }
    },
    {
      "id": "bournemouth",
      "name": "Bournemouth",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Djordje Petrovic",
          "value": 15000000,
          "nationality": "Sırbistan",
          "photo": null,
          "rating": 76,
          "age": 25
        },
        "rb": {
          "name": "Max Aarons",
          "value": 8000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 72,
          "age": 25
        },
        "cb1": {
          "name": "Marcos Senesi",
          "value": 25000000,
          "nationality": "Arjantin",
          "photo": null,
          "rating": 78,
          "age": 27
        },
        "cb2": {
          "name": "James Hill",
          "value": 15000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 23
        },
        "lb": {
          "name": "Adrien Truffert",
          "value": 15000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 74,
          "age": 23
        },
        "dm1": {
          "name": "Ryan Christie",
          "value": 10000000,
          "nationality": "İskoçya",
          "photo": null,
          "rating": 73,
          "age": 30
        },
        "dm2": {
          "name": "Alex Scott",
          "value": 25000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 75,
          "age": 21
        },
        "rw": {
          "name": "David Brooks",
          "value": 10000000,
          "nationality": "Galler",
          "photo": null,
          "rating": 73,
          "age": 28
        },
        "cam": {
          "name": "Marcus Tavernier",
          "value": 20000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 75,
          "age": 26
        },
        "lw": {
          "name": "Antoine Semenyo",
          "value": 45000000,
          "nationality": "Gana",
          "photo": null,
          "rating": 79,
          "age": 25
        },
        "st": {
          "name": "Evanilson",
          "value": 35000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 78,
          "age": 25
        }
      }
    },
    {
      "id": "brentford",
      "name": "Brentford",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Caoimhin Kelleher",
          "value": 20000000,
          "nationality": "İrlanda",
          "photo": null,
          "rating": 77,
          "age": 26
        },
        "rb": {
          "name": "Mads Roerslev",
          "value": 10000000,
          "nationality": "Danimarka",
          "photo": null,
          "rating": 73,
          "age": 25
        },
        "cb1": {
          "name": "Nathan Collins",
          "value": 30000000,
          "nationality": "İrlanda",
          "photo": null,
          "rating": 79,
          "age": 24
        },
        "cb2": {
          "name": "Sepp van den Berg",
          "value": 20000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 76,
          "age": 23
        },
        "lb": {
          "name": "Rico Henry",
          "value": 8000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 27
        },
        "dm1": {
          "name": "Vitaly Janelt",
          "value": 15000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 74,
          "age": 27
        },
        "dm2": {
          "name": "Christian Norgaard",
          "value": 10000000,
          "nationality": "Danimarka",
          "photo": null,
          "rating": 76,
          "age": 31
        },
        "rw": {
          "name": "Kevin Schade",
          "value": 35000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 78,
          "age": 23
        },
        "cam": {
          "name": "Mikkel Damsgaard",
          "value": 20000000,
          "nationality": "Danimarka",
          "photo": null,
          "rating": 77,
          "age": 25
        },
        "lw": {
          "name": "Keane Lewis-Potter",
          "value": 20000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 75,
          "age": 24
        },
        "st": {
          "name": "Igor Thiago",
          "value": 30000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 77,
          "age": 24
        }
      }
    },
    {
      "id": "brighton-and-hove-albion",
      "name": "Brighton & Hove Albion",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Bart Verbruggen",
          "value": 25000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 78,
          "age": 23
        },
        "rb": {
          "name": "Joel Veltman",
          "value": 5000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 74,
          "age": 34
        },
        "cb1": {
          "name": "Jan Paul van Hecke",
          "value": 25000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 78,
          "age": 25
        },
        "cb2": {
          "name": "Adam Webster",
          "value": 8000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 74,
          "age": 30
        },
        "lb": {
          "name": "Pervis Estupinan",
          "value": 25000000,
          "nationality": "Ekvador",
          "photo": null,
          "rating": 79,
          "age": 27
        },
        "dm1": {
          "name": "Carlos Baleba",
          "value": 50000000,
          "nationality": "Kamerun",
          "photo": null,
          "rating": 80,
          "age": 21
        },
        "dm2": {
          "name": "Mats Wieffer",
          "value": 25000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 77,
          "age": 25
        },
        "rw": {
          "name": "Yankuba Minteh",
          "value": 35000000,
          "nationality": "Gambiya",
          "photo": null,
          "rating": 78,
          "age": 21
        },
        "cam": {
          "name": "Georginio Rutter",
          "value": 35000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 78,
          "age": 23
        },
        "lw": {
          "name": "Kaoru Mitoma",
          "value": 40000000,
          "nationality": "Japonya",
          "photo": null,
          "rating": 81,
          "age": 28
        },
        "st": {
          "name": "Danny Welbeck",
          "value": 4000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 75,
          "age": 35
        }
      }
    },
    {
      "id": "burnley",
      "name": "Burnley",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Vitezslav Jaros",
          "value": 8000000,
          "nationality": "Çekya",
          "photo": null,
          "rating": 72,
          "age": 24
        },
        "rb": {
          "name": "Connor Roberts",
          "value": 4000000,
          "nationality": "Galler",
          "photo": null,
          "rating": 71,
          "age": 30
        },
        "cb1": {
          "name": "Maxime Esteve",
          "value": 10000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 72,
          "age": 23
        },
        "cb2": {
          "name": "Bashir Humphreys",
          "value": 6000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 70,
          "age": 21
        },
        "lb": {
          "name": "Hjalmar Ekdal",
          "value": 5000000,
          "nationality": "İsveç",
          "photo": null,
          "rating": 70,
          "age": 26
        },
        "dm1": {
          "name": "Josh Cullen",
          "value": 8000000,
          "nationality": "İrlanda",
          "photo": null,
          "rating": 73,
          "age": 29
        },
        "dm2": {
          "name": "Florentino Luis",
          "value": 10000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 73,
          "age": 25
        },
        "rw": {
          "name": "Jaidon Anthony",
          "value": 10000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 25
        },
        "cam": {
          "name": "Zian Flemming",
          "value": 10000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 73,
          "age": 27
        },
        "lw": {
          "name": "Loum Tchaouna",
          "value": 12000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 73,
          "age": 22
        },
        "st": {
          "name": "Lyle Foster",
          "value": 15000000,
          "nationality": "Güney Afrika",
          "photo": null,
          "rating": 74,
          "age": 25
        }
      }
    },
    {
      "id": "chelsea",
      "name": "Chelsea",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Robert Sanchez",
          "value": 25000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 79,
          "age": 27
        },
        "rb": {
          "name": "Malo Gusto",
          "value": 35000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 79,
          "age": 22
        },
        "cb1": {
          "name": "Levi Colwill",
          "value": 50000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 81,
          "age": 22
        },
        "cb2": {
          "name": "Wesley Fofana",
          "value": 30000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 78,
          "age": 24
        },
        "lb": {
          "name": "Marc Cucurella",
          "value": 45000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 82,
          "age": 27
        },
        "dm1": {
          "name": "Moises Caicedo",
          "value": 80000000,
          "nationality": "Ekvador",
          "photo": null,
          "rating": 85,
          "age": 23
        },
        "dm2": {
          "name": "Enzo Fernandez",
          "value": 70000000,
          "nationality": "Arjantin",
          "photo": null,
          "rating": 84,
          "age": 24
        },
        "rw": {
          "name": "Pedro Neto",
          "value": 55000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 82,
          "age": 25
        },
        "cam": {
          "name": "Cole Palmer",
          "value": 120000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 87,
          "age": 23
        },
        "lw": {
          "name": "Estevao Willian",
          "value": 55000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 80,
          "age": 19
        },
        "st": {
          "name": "Liam Delap",
          "value": 35000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 77,
          "age": 22
        }
      }
    },
    {
      "id": "crystal-palace",
      "name": "Crystal Palace",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Dean Henderson",
          "value": 15000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 78,
          "age": 28
        },
        "rb": {
          "name": "Daniel Munoz",
          "value": 30000000,
          "nationality": "Kolombiya",
          "photo": null,
          "rating": 79,
          "age": 29
        },
        "cb1": {
          "name": "Marc Guehi",
          "value": 45000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 81,
          "age": 25
        },
        "cb2": {
          "name": "Chris Richards",
          "value": 20000000,
          "nationality": "ABD",
          "photo": null,
          "rating": 77,
          "age": 25
        },
        "lb": {
          "name": "Tyrick Mitchell",
          "value": 25000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 78,
          "age": 26
        },
        "dm1": {
          "name": "Adam Wharton",
          "value": 45000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 80,
          "age": 21
        },
        "dm2": {
          "name": "Cheick Doucoure",
          "value": 15000000,
          "nationality": "Mali",
          "photo": null,
          "rating": 77,
          "age": 26
        },
        "rw": {
          "name": "Ismaila Sarr",
          "value": 35000000,
          "nationality": "Senegal",
          "photo": null,
          "rating": 79,
          "age": 27
        },
        "cam": {
          "name": "Justin Devenny",
          "value": 8000000,
          "nationality": "Kuzey İrlanda",
          "photo": null,
          "rating": 71,
          "age": 21
        },
        "lw": {
          "name": "Yeremy Pino",
          "value": 20000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 75,
          "age": 23
        },
        "st": {
          "name": "Jean-Philippe Mateta",
          "value": 30000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 79,
          "age": 28
        }
      }
    },
    {
      "id": "everton",
      "name": "Everton",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Jordan Pickford",
          "value": 25000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 83,
          "age": 32
        },
        "rb": {
          "name": "Nathan Patterson",
          "value": 10000000,
          "nationality": "İskoçya",
          "photo": null,
          "rating": 73,
          "age": 24
        },
        "cb1": {
          "name": "James Tarkowski",
          "value": 12000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 78,
          "age": 33
        },
        "cb2": {
          "name": "Jarrad Branthwaite",
          "value": 45000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 80,
          "age": 23
        },
        "lb": {
          "name": "Vitaliy Mykolenko",
          "value": 20000000,
          "nationality": "Ukrayna",
          "photo": null,
          "rating": 76,
          "age": 26
        },
        "dm1": {
          "name": "Idrissa Gueye",
          "value": 3000000,
          "nationality": "Senegal",
          "photo": null,
          "rating": 74,
          "age": 36
        },
        "dm2": {
          "name": "Abdoulaye Doucoure",
          "value": 8000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 75,
          "age": 32
        },
        "rw": {
          "name": "Iliman Ndiaye",
          "value": 35000000,
          "nationality": "Senegal",
          "photo": null,
          "rating": 78,
          "age": 25
        },
        "cam": {
          "name": "Jack Grealish",
          "value": 40000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 80,
          "age": 30
        },
        "lw": {
          "name": "Dwight McNeil",
          "value": 20000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 76,
          "age": 26
        },
        "st": {
          "name": "Thierno Barry",
          "value": 25000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 74,
          "age": 23
        }
      }
    },
    {
      "id": "fulham",
      "name": "Fulham",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Bernd Leno",
          "value": 6000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 79,
          "age": 34
        },
        "rb": {
          "name": "Kenny Tete",
          "value": 8000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 75,
          "age": 30
        },
        "cb1": {
          "name": "Calvin Bassey",
          "value": 25000000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 77,
          "age": 25
        },
        "cb2": {
          "name": "Joachim Andersen",
          "value": 25000000,
          "nationality": "Danimarka",
          "photo": null,
          "rating": 79,
          "age": 29
        },
        "lb": {
          "name": "Antonee Robinson",
          "value": 25000000,
          "nationality": "ABD",
          "photo": null,
          "rating": 79,
          "age": 28
        },
        "dm1": {
          "name": "Sasa Lukic",
          "value": 10000000,
          "nationality": "Sırbistan",
          "photo": null,
          "rating": 75,
          "age": 29
        },
        "dm2": {
          "name": "Harrison Reed",
          "value": 6000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 30
        },
        "rw": {
          "name": "Alex Iwobi",
          "value": 30000000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 79,
          "age": 29
        },
        "cam": {
          "name": "Emile Smith Rowe",
          "value": 15000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 75,
          "age": 25
        },
        "lw": {
          "name": "Adama Traore",
          "value": 8000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 76,
          "age": 29
        },
        "st": {
          "name": "Rodrigo Muniz",
          "value": 25000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 77,
          "age": 24
        }
      }
    },
    {
      "id": "leeds-united",
      "name": "Leeds United",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Lucas Perri",
          "value": 15000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 76,
          "age": 27
        },
        "rb": {
          "name": "Jayden Bogle",
          "value": 15000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 75,
          "age": 25
        },
        "cb1": {
          "name": "Pascal Struijk",
          "value": 20000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 77,
          "age": 26
        },
        "cb2": {
          "name": "Joe Rodon",
          "value": 14000000,
          "nationality": "Galler",
          "photo": null,
          "rating": 75,
          "age": 27
        },
        "lb": {
          "name": "Gabriel Gudmundsson",
          "value": 8000000,
          "nationality": "İsveç",
          "photo": null,
          "rating": 73,
          "age": 26
        },
        "dm1": {
          "name": "Ethan Ampadu",
          "value": 18000000,
          "nationality": "Galler",
          "photo": null,
          "rating": 77,
          "age": 25
        },
        "dm2": {
          "name": "Anton Stach",
          "value": 22000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 77,
          "age": 27
        },
        "rw": {
          "name": "Daniel James",
          "value": 12000000,
          "nationality": "Galler",
          "photo": null,
          "rating": 75,
          "age": 27
        },
        "cam": {
          "name": "Brenden Aaronson",
          "value": 14000000,
          "nationality": "ABD",
          "photo": null,
          "rating": 75,
          "age": 25
        },
        "lw": {
          "name": "Largie Ramazani",
          "value": 12000000,
          "nationality": "Belçika",
          "photo": null,
          "rating": 73,
          "age": 24
        },
        "st": {
          "name": "Joel Piroe",
          "value": 18000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 76,
          "age": 26
        }
      }
    },
    {
      "id": "liverpool",
      "name": "Liverpool",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Alisson Becker",
          "value": 22000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 86,
          "age": 33
        },
        "rb": {
          "name": "Jeremie Frimpong",
          "value": 40000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 82,
          "age": 24
        },
        "cb1": {
          "name": "Virgil van Dijk",
          "value": 30000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 87,
          "age": 34
        },
        "cb2": {
          "name": "Ibrahima Konate",
          "value": 45000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 84,
          "age": 26
        },
        "lb": {
          "name": "Milos Kerkez",
          "value": 45000000,
          "nationality": "Macaristan",
          "photo": null,
          "rating": 81,
          "age": 21
        },
        "dm1": {
          "name": "Ryan Gravenberch",
          "value": 65000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 84,
          "age": 23
        },
        "dm2": {
          "name": "Alexis Mac Allister",
          "value": 65000000,
          "nationality": "Arjantin",
          "photo": null,
          "rating": 85,
          "age": 26
        },
        "rw": {
          "name": "Mohamed Salah",
          "value": 40000000,
          "nationality": "Mısır",
          "photo": null,
          "rating": 88,
          "age": 33
        },
        "cam": {
          "name": "Florian Wirtz",
          "value": 130000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 86,
          "age": 22
        },
        "lw": {
          "name": "Cody Gakpo",
          "value": 55000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 83,
          "age": 26
        },
        "st": {
          "name": "Alexander Isak",
          "value": 120000000,
          "nationality": "İsveç",
          "photo": null,
          "rating": 86,
          "age": 25
        }
      }
    },
    {
      "id": "manchester-city",
      "name": "Manchester City",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Gianluigi Donnarumma",
          "value": 30000000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 88,
          "age": 26
        },
        "rb": {
          "name": "Rico Lewis",
          "value": 35000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 79,
          "age": 21
        },
        "cb1": {
          "name": "Ruben Dias",
          "value": 60000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 86,
          "age": 28
        },
        "cb2": {
          "name": "Josko Gvardiol",
          "value": 75000000,
          "nationality": "Hırvatistan",
          "photo": null,
          "rating": 85,
          "age": 24
        },
        "lb": {
          "name": "Nico O'Reilly",
          "value": 30000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 76,
          "age": 20
        },
        "dm1": {
          "name": "Rodri",
          "value": 110000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 89,
          "age": 29
        },
        "dm2": {
          "name": "Nico Gonzalez",
          "value": 45000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 80,
          "age": 23
        },
        "rw": {
          "name": "Jeremy Doku",
          "value": 70000000,
          "nationality": "Belçika",
          "photo": null,
          "rating": 84,
          "age": 23
        },
        "cam": {
          "name": "Phil Foden",
          "value": 90000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 86,
          "age": 25
        },
        "lw": {
          "name": "Rayan Cherki",
          "value": 40000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 80,
          "age": 22
        },
        "st": {
          "name": "Erling Haaland",
          "value": 180000000,
          "nationality": "Norveç",
          "photo": null,
          "rating": 91,
          "age": 25
        }
      }
    },
    {
      "id": "manchester-united",
      "name": "Manchester United",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Andre Onana",
          "value": 20000000,
          "nationality": "Kamerun",
          "photo": null,
          "rating": 79,
          "age": 29
        },
        "rb": {
          "name": "Diogo Dalot",
          "value": 30000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 79,
          "age": 26
        },
        "cb1": {
          "name": "Leny Yoro",
          "value": 45000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 79,
          "age": 20
        },
        "cb2": {
          "name": "Matthijs de Ligt",
          "value": 35000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 80,
          "age": 26
        },
        "lb": {
          "name": "Patrick Dorgu",
          "value": 25000000,
          "nationality": "Danimarka",
          "photo": null,
          "rating": 75,
          "age": 20
        },
        "dm1": {
          "name": "Manuel Ugarte",
          "value": 35000000,
          "nationality": "Uruguay",
          "photo": null,
          "rating": 79,
          "age": 24
        },
        "dm2": {
          "name": "Casemiro",
          "value": 15000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 80,
          "age": 33
        },
        "rw": {
          "name": "Bryan Mbeumo",
          "value": 65000000,
          "nationality": "Kamerun",
          "photo": null,
          "rating": 82,
          "age": 26
        },
        "cam": {
          "name": "Bruno Fernandes",
          "value": 55000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 86,
          "age": 31
        },
        "lw": {
          "name": "Matheus Cunha",
          "value": 60000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 81,
          "age": 26
        },
        "st": {
          "name": "Benjamin Sesko",
          "value": 70000000,
          "nationality": "Slovenya",
          "photo": null,
          "rating": 79,
          "age": 22
        }
      }
    },
    {
      "id": "newcastle-united",
      "name": "Newcastle United",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Nick Pope",
          "value": 15000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 82,
          "age": 33
        },
        "rb": {
          "name": "Kieran Trippier",
          "value": 8000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 79,
          "age": 35
        },
        "cb1": {
          "name": "Fabian Schar",
          "value": 12000000,
          "nationality": "İsviçre",
          "photo": null,
          "rating": 79,
          "age": 33
        },
        "cb2": {
          "name": "Sven Botman",
          "value": 35000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 81,
          "age": 25
        },
        "lb": {
          "name": "Dan Burn",
          "value": 12000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 77,
          "age": 33
        },
        "dm1": {
          "name": "Bruno Guimaraes",
          "value": 80000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 85,
          "age": 27
        },
        "dm2": {
          "name": "Sandro Tonali",
          "value": 55000000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 82,
          "age": 25
        },
        "rw": {
          "name": "Jacob Murphy",
          "value": 20000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 78,
          "age": 30
        },
        "cam": {
          "name": "Harvey Barnes",
          "value": 22000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 78,
          "age": 27
        },
        "lw": {
          "name": "Anthony Gordon",
          "value": 65000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 82,
          "age": 24
        },
        "st": {
          "name": "Nick Woltemade",
          "value": 70000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 79,
          "age": 23
        }
      }
    },
    {
      "id": "nottingham-forest",
      "name": "Nottingham Forest",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Matz Sels",
          "value": 20000000,
          "nationality": "Belçika",
          "photo": null,
          "rating": 80,
          "age": 33
        },
        "rb": {
          "name": "Neco Williams",
          "value": 20000000,
          "nationality": "Galler",
          "photo": null,
          "rating": 76,
          "age": 24
        },
        "cb1": {
          "name": "Murillo",
          "value": 45000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 80,
          "age": 23
        },
        "cb2": {
          "name": "Willy Boly",
          "value": 5000000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 74,
          "age": 34
        },
        "lb": {
          "name": "Ola Aina",
          "value": 18000000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 77,
          "age": 28
        },
        "dm1": {
          "name": "Douglas Luiz",
          "value": 25000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 78,
          "age": 27
        },
        "dm2": {
          "name": "Ibrahim Sangare",
          "value": 20000000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 76,
          "age": 27
        },
        "rw": {
          "name": "Callum Hudson-Odoi",
          "value": 15000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 76,
          "age": 24
        },
        "cam": {
          "name": "Morgan Gibbs-White",
          "value": 60000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 81,
          "age": 25
        },
        "lw": {
          "name": "Dan Ndoye",
          "value": 30000000,
          "nationality": "İsviçre",
          "photo": null,
          "rating": 77,
          "age": 24
        },
        "st": {
          "name": "Chris Wood",
          "value": 12000000,
          "nationality": "Yeni Zelanda",
          "photo": null,
          "rating": 76,
          "age": 33
        }
      }
    },
    {
      "id": "sunderland",
      "name": "Sunderland",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Anthony Patterson",
          "value": 8000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 25
        },
        "rb": {
          "name": "Trai Hume",
          "value": 12000000,
          "nationality": "Kuzey İrlanda",
          "photo": null,
          "rating": 73,
          "age": 23
        },
        "cb1": {
          "name": "Dan Ballard",
          "value": 12000000,
          "nationality": "Kuzey İrlanda",
          "photo": null,
          "rating": 74,
          "age": 26
        },
        "cb2": {
          "name": "Luke O'Nien",
          "value": 5000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 71,
          "age": 30
        },
        "lb": {
          "name": "Dennis Cirkin",
          "value": 8000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 71,
          "age": 23
        },
        "dm1": {
          "name": "Dan Neil",
          "value": 12000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 24
        },
        "dm2": {
          "name": "Chris Rigg",
          "value": 20000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 18
        },
        "rw": {
          "name": "Patrick Roberts",
          "value": 6000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 72,
          "age": 29
        },
        "cam": {
          "name": "Enzo Le Fee",
          "value": 15000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 74,
          "age": 25
        },
        "lw": {
          "name": "Eliezer Mayenda",
          "value": 15000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 72,
          "age": 21
        },
        "st": {
          "name": "Wilson Isidor",
          "value": 15000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 73,
          "age": 25
        }
      }
    },
    {
      "id": "tottenham-hotspur",
      "name": "Tottenham Hotspur",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Guglielmo Vicario",
          "value": 30000000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 81,
          "age": 29
        },
        "rb": {
          "name": "Pedro Porro",
          "value": 45000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 81,
          "age": 26
        },
        "cb1": {
          "name": "Cristian Romero",
          "value": 50000000,
          "nationality": "Arjantin",
          "photo": null,
          "rating": 83,
          "age": 27
        },
        "cb2": {
          "name": "Micky van de Ven",
          "value": 55000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 81,
          "age": 24
        },
        "lb": {
          "name": "Destiny Udogie",
          "value": 40000000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 79,
          "age": 23
        },
        "dm1": {
          "name": "Rodrigo Bentancur",
          "value": 30000000,
          "nationality": "Uruguay",
          "photo": null,
          "rating": 79,
          "age": 28
        },
        "dm2": {
          "name": "Yves Bissouma",
          "value": 25000000,
          "nationality": "Mali",
          "photo": null,
          "rating": 78,
          "age": 29
        },
        "rw": {
          "name": "Mohammed Kudus",
          "value": 55000000,
          "nationality": "Gana",
          "photo": null,
          "rating": 80,
          "age": 25
        },
        "cam": {
          "name": "James Maddison",
          "value": 40000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 81,
          "age": 29
        },
        "lw": {
          "name": "Xavi Simons",
          "value": 60000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 81,
          "age": 22
        },
        "st": {
          "name": "Dominic Solanke",
          "value": 35000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 77,
          "age": 28
        }
      }
    },
    {
      "id": "west-ham-united",
      "name": "West Ham United",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Alphonse Areola",
          "value": 8000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 76,
          "age": 33
        },
        "rb": {
          "name": "Vladimir Coufal",
          "value": 5000000,
          "nationality": "Çekya",
          "photo": null,
          "rating": 73,
          "age": 33
        },
        "cb1": {
          "name": "Konstantinos Mavropanos",
          "value": 20000000,
          "nationality": "Yunanistan",
          "photo": null,
          "rating": 76,
          "age": 28
        },
        "cb2": {
          "name": "Jean-Clair Todibo",
          "value": 35000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 79,
          "age": 26
        },
        "lb": {
          "name": "Emerson Palmieri",
          "value": 7000000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 75,
          "age": 31
        },
        "dm1": {
          "name": "Guido Rodriguez",
          "value": 8000000,
          "nationality": "Arjantin",
          "photo": null,
          "rating": 76,
          "age": 32
        },
        "dm2": {
          "name": "Tomas Soucek",
          "value": 18000000,
          "nationality": "Çekya",
          "photo": null,
          "rating": 77,
          "age": 30
        },
        "rw": {
          "name": "Crysencio Summerville",
          "value": 25000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 76,
          "age": 24
        },
        "cam": {
          "name": "Lucas Paqueta",
          "value": 55000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 81,
          "age": 28
        },
        "lw": {
          "name": "El Hadji Malick Diouf",
          "value": 20000000,
          "nationality": "Senegal",
          "photo": null,
          "rating": 74,
          "age": 20
        },
        "st": {
          "name": "Niclas Fullkrug",
          "value": 15000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 78,
          "age": 33
        }
      }
    },
    {
      "id": "wolverhampton-wanderers",
      "name": "Wolverhampton Wanderers",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Jose Sa",
          "value": 8000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 77,
          "age": 32
        },
        "rb": {
          "name": "Matt Doherty",
          "value": 3000000,
          "nationality": "İrlanda",
          "photo": null,
          "rating": 73,
          "age": 33
        },
        "cb1": {
          "name": "Emmanuel Agbadou",
          "value": 12000000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 75,
          "age": 26
        },
        "cb2": {
          "name": "Yerson Mosquera",
          "value": 15000000,
          "nationality": "Kolombiya",
          "photo": null,
          "rating": 74,
          "age": 24
        },
        "lb": {
          "name": "Ki-Jana Hoever",
          "value": 6000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 71,
          "age": 26
        },
        "dm1": {
          "name": "Joao Gomes",
          "value": 35000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 78,
          "age": 24
        },
        "dm2": {
          "name": "Andre",
          "value": 25000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 75,
          "age": 24
        },
        "rw": {
          "name": "Jean-Ricner Bellegarde",
          "value": 10000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 73,
          "age": 27
        },
        "cam": {
          "name": "Fer Lopez",
          "value": 18000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 74,
          "age": 20
        },
        "lw": {
          "name": "Hwang Hee-chan",
          "value": 25000000,
          "nationality": "Güney Kore",
          "photo": null,
          "rating": 78,
          "age": 29
        },
        "st": {
          "name": "Jorgen Strand Larsen",
          "value": 30000000,
          "nationality": "Norveç",
          "photo": null,
          "rating": 76,
          "age": 25
        }
      }
    }
  ]
};
