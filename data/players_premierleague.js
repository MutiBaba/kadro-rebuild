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
      "name": "Arsenol",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Davvid Rayah",
          "value": 40000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 84,
          "age": 30
        },
        "rb": {
          "name": "Ben Whitte",
          "value": 45000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 84,
          "age": 28
        },
        "cb1": {
          "name": "Wiliam Salliba",
          "value": 80000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 87,
          "age": 25
        },
        "cb2": {
          "name": "Gabriell Magalhaess",
          "value": 65000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 86,
          "age": 28
        },
        "lb": {
          "name": "Rikcardo Callafiori",
          "value": 45000000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 82,
          "age": 24
        },
        "dm1": {
          "name": "Deklan Ricce",
          "value": 110000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 88,
          "age": 27
        },
        "dm2": {
          "name": "Martinn Zubbimendi",
          "value": 60000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 84,
          "age": 26
        },
        "rw": {
          "name": "Bucayo Sakah",
          "value": 140000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 88,
          "age": 24
        },
        "cam": {
          "name": "Martinn Oddegaard",
          "value": 90000000,
          "nationality": "Norveç",
          "photo": null,
          "rating": 87,
          "age": 27
        },
        "lw": {
          "name": "Gabriell Martineli",
          "value": 55000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 82,
          "age": 25
        },
        "st": {
          "name": "Victor Gyokeress",
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
      "name": "Aston Vylla",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Emilianoh Martines",
          "value": 20000000,
          "nationality": "Arjantin",
          "photo": null,
          "rating": 84,
          "age": 33
        },
        "rb": {
          "name": "Maty Cash",
          "value": 30000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 80,
          "age": 28
        },
        "cb1": {
          "name": "Ezry Konsah",
          "value": 25000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 79,
          "age": 28
        },
        "cb2": {
          "name": "Pau Torrez",
          "value": 25000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 80,
          "age": 28
        },
        "lb": {
          "name": "Lukas Digne",
          "value": 8000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 78,
          "age": 32
        },
        "dm1": {
          "name": "Boubacarr Kamarah",
          "value": 35000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 80,
          "age": 26
        },
        "dm2": {
          "name": "Ammadou Onanah",
          "value": 40000000,
          "nationality": "Belçika",
          "photo": null,
          "rating": 79,
          "age": 24
        },
        "rw": {
          "name": "Leon Bailie",
          "value": 20000000,
          "nationality": "Jamaika",
          "photo": null,
          "rating": 79,
          "age": 28
        },
        "cam": {
          "name": "Morgann Roggers",
          "value": 55000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 82,
          "age": 23
        },
        "lw": {
          "name": "Donyel Mallen",
          "value": 30000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 79,
          "age": 26
        },
        "st": {
          "name": "Olley Watcins",
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
      "name": "Bornemouth",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Djordje Petrovvic",
          "value": 15000000,
          "nationality": "Sırbistan",
          "photo": null,
          "rating": 76,
          "age": 25
        },
        "rb": {
          "name": "Max Aarrons",
          "value": 8000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 72,
          "age": 25
        },
        "cb1": {
          "name": "Marcoss Sennesi",
          "value": 25000000,
          "nationality": "Arjantin",
          "photo": null,
          "rating": 78,
          "age": 27
        },
        "cb2": {
          "name": "Jammes Hil",
          "value": 15000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 23
        },
        "lb": {
          "name": "Adrienn Trufert",
          "value": 15000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 74,
          "age": 23
        },
        "dm1": {
          "name": "Ryan Christey",
          "value": 10000000,
          "nationality": "İskoçya",
          "photo": null,
          "rating": 73,
          "age": 30
        },
        "dm2": {
          "name": "Allex Skott",
          "value": 25000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 75,
          "age": 21
        },
        "rw": {
          "name": "Davvid Broocs",
          "value": 10000000,
          "nationality": "Galler",
          "photo": null,
          "rating": 73,
          "age": 28
        },
        "cam": {
          "name": "Marcuss Tavernierr",
          "value": 20000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 75,
          "age": 26
        },
        "lw": {
          "name": "Antoinne Semenyoh",
          "value": 45000000,
          "nationality": "Gana",
          "photo": null,
          "rating": 79,
          "age": 25
        },
        "st": {
          "name": "Evanilsonn",
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
      "name": "Brentforde",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Caoimhinn Kelleherr",
          "value": 20000000,
          "nationality": "İrlanda",
          "photo": null,
          "rating": 77,
          "age": 26
        },
        "rb": {
          "name": "Mads Roerslevv",
          "value": 10000000,
          "nationality": "Danimarka",
          "photo": null,
          "rating": 73,
          "age": 25
        },
        "cb1": {
          "name": "Nathann Colins",
          "value": 30000000,
          "nationality": "İrlanda",
          "photo": null,
          "rating": 79,
          "age": 24
        },
        "cb2": {
          "name": "Sep van den Berg",
          "value": 20000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 76,
          "age": 23
        },
        "lb": {
          "name": "Riko Henri",
          "value": 8000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 27
        },
        "dm1": {
          "name": "Vitali Jannelt",
          "value": 15000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 74,
          "age": 27
        },
        "dm2": {
          "name": "Christiann Norgaard",
          "value": 10000000,
          "nationality": "Danimarka",
          "photo": null,
          "rating": 76,
          "age": 31
        },
        "rw": {
          "name": "Kevinn Schadde",
          "value": 35000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 78,
          "age": 23
        },
        "cam": {
          "name": "Mikkell Damsgaard",
          "value": 20000000,
          "nationality": "Danimarka",
          "photo": null,
          "rating": 77,
          "age": 25
        },
        "lw": {
          "name": "Keanne Lewis-Potterr",
          "value": 20000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 75,
          "age": 24
        },
        "st": {
          "name": "Iggor Thiagoh",
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
      "name": "Brighton & Hove Albeon",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Bart Verbruggenn",
          "value": 25000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 78,
          "age": 23
        },
        "rb": {
          "name": "Joel Veltmann",
          "value": 5000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 74,
          "age": 34
        },
        "cb1": {
          "name": "Jan Paul van Hekke",
          "value": 25000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 78,
          "age": 25
        },
        "cb2": {
          "name": "Addam Websterr",
          "value": 8000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 74,
          "age": 30
        },
        "lb": {
          "name": "Perviss Estupinann",
          "value": 25000000,
          "nationality": "Ekvador",
          "photo": null,
          "rating": 79,
          "age": 27
        },
        "dm1": {
          "name": "Carloss Balebah",
          "value": 50000000,
          "nationality": "Kamerun",
          "photo": null,
          "rating": 80,
          "age": 21
        },
        "dm2": {
          "name": "Mats Wiefferr",
          "value": 25000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 77,
          "age": 25
        },
        "rw": {
          "name": "Yankubba Minteh",
          "value": 35000000,
          "nationality": "Gambiya",
          "photo": null,
          "rating": 78,
          "age": 21
        },
        "cam": {
          "name": "Georginnio Rutterr",
          "value": 35000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 78,
          "age": 23
        },
        "lw": {
          "name": "Kaoruh Mitomah",
          "value": 40000000,
          "nationality": "Japonya",
          "photo": null,
          "rating": 81,
          "age": 28
        },
        "st": {
          "name": "Dany Welbek",
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
      "name": "Burnly",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Vittezslav Jaross",
          "value": 8000000,
          "nationality": "Çekya",
          "photo": null,
          "rating": 72,
          "age": 24
        },
        "rb": {
          "name": "Connorr Robberts",
          "value": 4000000,
          "nationality": "Galler",
          "photo": null,
          "rating": 71,
          "age": 30
        },
        "cb1": {
          "name": "Maximme Estevve",
          "value": 10000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 72,
          "age": 23
        },
        "cb2": {
          "name": "Bashirr Humfreys",
          "value": 6000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 70,
          "age": 21
        },
        "lb": {
          "name": "Hjalmarr Ekdall",
          "value": 5000000,
          "nationality": "İsveç",
          "photo": null,
          "rating": 70,
          "age": 26
        },
        "dm1": {
          "name": "Josh Cullenn",
          "value": 8000000,
          "nationality": "İrlanda",
          "photo": null,
          "rating": 73,
          "age": 29
        },
        "dm2": {
          "name": "Florrentino Luis",
          "value": 10000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 73,
          "age": 25
        },
        "rw": {
          "name": "Jaidonn Anthoni",
          "value": 10000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 25
        },
        "cam": {
          "name": "Zian Fleming",
          "value": 10000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 73,
          "age": 27
        },
        "lw": {
          "name": "Loum Tchaounah",
          "value": 12000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 73,
          "age": 22
        },
        "st": {
          "name": "Lyle Fosterr",
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
      "name": "Chelseah",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Robbert Sanchezz",
          "value": 25000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 79,
          "age": 27
        },
        "rb": {
          "name": "Maloh Gustoh",
          "value": 35000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 79,
          "age": 22
        },
        "cb1": {
          "name": "Levvi Colwil",
          "value": 50000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 81,
          "age": 22
        },
        "cb2": {
          "name": "Weslie Fofanah",
          "value": 30000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 78,
          "age": 24
        },
        "lb": {
          "name": "Mark Cucurela",
          "value": 45000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 82,
          "age": 27
        },
        "dm1": {
          "name": "Moisess Caicedoh",
          "value": 80000000,
          "nationality": "Ekvador",
          "photo": null,
          "rating": 85,
          "age": 23
        },
        "dm2": {
          "name": "Enzoh Fernandes",
          "value": 70000000,
          "nationality": "Arjantin",
          "photo": null,
          "rating": 84,
          "age": 24
        },
        "rw": {
          "name": "Pedroh Netto",
          "value": 55000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 82,
          "age": 25
        },
        "cam": {
          "name": "Colle Palmerr",
          "value": 120000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 87,
          "age": 23
        },
        "lw": {
          "name": "Estevvao Williann",
          "value": 55000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 80,
          "age": 19
        },
        "st": {
          "name": "Liam Dellap",
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
      "name": "Crystal Palase",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Dean Hendersonn",
          "value": 15000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 78,
          "age": 28
        },
        "rb": {
          "name": "Daniell Munozz",
          "value": 30000000,
          "nationality": "Kolombiya",
          "photo": null,
          "rating": 79,
          "age": 29
        },
        "cb1": {
          "name": "Mark Guehy",
          "value": 45000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 81,
          "age": 25
        },
        "cb2": {
          "name": "Chriss Richards",
          "value": 20000000,
          "nationality": "ABD",
          "photo": null,
          "rating": 77,
          "age": 25
        },
        "lb": {
          "name": "Tyrik Mitchel",
          "value": 25000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 78,
          "age": 26
        },
        "dm1": {
          "name": "Addam Whartonn",
          "value": 45000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 80,
          "age": 21
        },
        "dm2": {
          "name": "Cheik Douccoure",
          "value": 15000000,
          "nationality": "Mali",
          "photo": null,
          "rating": 77,
          "age": 26
        },
        "rw": {
          "name": "Ismailla Sar",
          "value": 35000000,
          "nationality": "Senegal",
          "photo": null,
          "rating": 79,
          "age": 27
        },
        "cam": {
          "name": "Justinn Devenni",
          "value": 8000000,
          "nationality": "Kuzey İrlanda",
          "photo": null,
          "rating": 71,
          "age": 21
        },
        "lw": {
          "name": "Yerremy Pinno",
          "value": 20000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 75,
          "age": 23
        },
        "st": {
          "name": "Jean-Filippe Matetah",
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
      "name": "Evertone",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Jordann Pikkford",
          "value": 25000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 83,
          "age": 32
        },
        "rb": {
          "name": "Nathann Pattersonn",
          "value": 10000000,
          "nationality": "İskoçya",
          "photo": null,
          "rating": 73,
          "age": 24
        },
        "cb1": {
          "name": "Jammes Tarcowski",
          "value": 12000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 78,
          "age": 33
        },
        "cb2": {
          "name": "Jarad Branthwaitte",
          "value": 45000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 80,
          "age": 23
        },
        "lb": {
          "name": "Vittaliy Mycolenko",
          "value": 20000000,
          "nationality": "Ukrayna",
          "photo": null,
          "rating": 76,
          "age": 26
        },
        "dm1": {
          "name": "Idrisa Gueye",
          "value": 3000000,
          "nationality": "Senegal",
          "photo": null,
          "rating": 74,
          "age": 36
        },
        "dm2": {
          "name": "Abdoullaye Douccoure",
          "value": 8000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 75,
          "age": 32
        },
        "rw": {
          "name": "Ilimann Ndiaye",
          "value": 35000000,
          "nationality": "Senegal",
          "photo": null,
          "rating": 78,
          "age": 25
        },
        "cam": {
          "name": "Jakk Greallish",
          "value": 40000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 80,
          "age": 30
        },
        "lw": {
          "name": "Dwight McNeill",
          "value": 20000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 76,
          "age": 26
        },
        "st": {
          "name": "Thiernoh Barri",
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
      "name": "Fullham",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Bernd Lenoh",
          "value": 6000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 79,
          "age": 34
        },
        "rb": {
          "name": "Kenni Tete",
          "value": 8000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 75,
          "age": 30
        },
        "cb1": {
          "name": "Calvinn Bassie",
          "value": 25000000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 77,
          "age": 25
        },
        "cb2": {
          "name": "Joachim Andersenn",
          "value": 25000000,
          "nationality": "Danimarka",
          "photo": null,
          "rating": 79,
          "age": 29
        },
        "lb": {
          "name": "Antonnee Robinsonn",
          "value": 25000000,
          "nationality": "ABD",
          "photo": null,
          "rating": 79,
          "age": 28
        },
        "dm1": {
          "name": "Sasah Lucic",
          "value": 10000000,
          "nationality": "Sırbistan",
          "photo": null,
          "rating": 75,
          "age": 29
        },
        "dm2": {
          "name": "Harrisonn Reed",
          "value": 6000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 30
        },
        "rw": {
          "name": "Allex Iwoby",
          "value": 30000000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 79,
          "age": 29
        },
        "cam": {
          "name": "Emmile Smith Rowe",
          "value": 15000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 75,
          "age": 25
        },
        "lw": {
          "name": "Addama Traorre",
          "value": 8000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 76,
          "age": 29
        },
        "st": {
          "name": "Rodrigoh Munizz",
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
      "name": "Leedz United",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Lukas Peri",
          "value": 15000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 76,
          "age": 27
        },
        "rb": {
          "name": "Jaydenn Bogle",
          "value": 15000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 75,
          "age": 25
        },
        "cb1": {
          "name": "Paskal Struijc",
          "value": 20000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 77,
          "age": 26
        },
        "cb2": {
          "name": "Joe Rodonn",
          "value": 14000000,
          "nationality": "Galler",
          "photo": null,
          "rating": 75,
          "age": 27
        },
        "lb": {
          "name": "Gabriell Gudmundssonn",
          "value": 8000000,
          "nationality": "İsveç",
          "photo": null,
          "rating": 73,
          "age": 26
        },
        "dm1": {
          "name": "Ethann Ampaduh",
          "value": 18000000,
          "nationality": "Galler",
          "photo": null,
          "rating": 77,
          "age": 25
        },
        "dm2": {
          "name": "Antonn Stach",
          "value": 22000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 77,
          "age": 27
        },
        "rw": {
          "name": "Daniell Jammes",
          "value": 12000000,
          "nationality": "Galler",
          "photo": null,
          "rating": 75,
          "age": 27
        },
        "cam": {
          "name": "Brendenn Aaronsonn",
          "value": 14000000,
          "nationality": "ABD",
          "photo": null,
          "rating": 75,
          "age": 25
        },
        "lw": {
          "name": "Largey Rammazani",
          "value": 12000000,
          "nationality": "Belçika",
          "photo": null,
          "rating": 73,
          "age": 24
        },
        "st": {
          "name": "Joel Pirroe",
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
      "name": "Liverpul",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Alissonn Beker",
          "value": 22000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 86,
          "age": 33
        },
        "rb": {
          "name": "Jeremey Frimpong",
          "value": 40000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 82,
          "age": 24
        },
        "cb1": {
          "name": "Virgill van Dijc",
          "value": 30000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 87,
          "age": 34
        },
        "cb2": {
          "name": "Ibrahimah Konnate",
          "value": 45000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 84,
          "age": 26
        },
        "lb": {
          "name": "Miloss Kerkes",
          "value": 45000000,
          "nationality": "Macaristan",
          "photo": null,
          "rating": 81,
          "age": 21
        },
        "dm1": {
          "name": "Ryan Gravvenberch",
          "value": 65000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 84,
          "age": 23
        },
        "dm2": {
          "name": "Alexiss Mac Allisterr",
          "value": 65000000,
          "nationality": "Arjantin",
          "photo": null,
          "rating": 85,
          "age": 26
        },
        "rw": {
          "name": "Mohammed Sallah",
          "value": 40000000,
          "nationality": "Mısır",
          "photo": null,
          "rating": 88,
          "age": 33
        },
        "cam": {
          "name": "Floriann Wirtz",
          "value": 130000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 86,
          "age": 22
        },
        "lw": {
          "name": "Codi Gacpo",
          "value": 55000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 83,
          "age": 26
        },
        "st": {
          "name": "Alexanderr Issak",
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
      "name": "Manchestor City",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Gianluigy Donarumma",
          "value": 30000000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 88,
          "age": 26
        },
        "rb": {
          "name": "Riko Lewiss",
          "value": 35000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 79,
          "age": 21
        },
        "cb1": {
          "name": "Rubenn Dias",
          "value": 60000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 86,
          "age": 28
        },
        "cb2": {
          "name": "Josco Gvardioll",
          "value": 75000000,
          "nationality": "Hırvatistan",
          "photo": null,
          "rating": 85,
          "age": 24
        },
        "lb": {
          "name": "Nicoh O'Reilli",
          "value": 30000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 76,
          "age": 20
        },
        "dm1": {
          "name": "Rodry",
          "value": 110000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 89,
          "age": 29
        },
        "dm2": {
          "name": "Nicoh Gonzallez",
          "value": 45000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 80,
          "age": 23
        },
        "rw": {
          "name": "Jerremy Dokku",
          "value": 70000000,
          "nationality": "Belçika",
          "photo": null,
          "rating": 84,
          "age": 23
        },
        "cam": {
          "name": "Phil Fodenn",
          "value": 90000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 86,
          "age": 25
        },
        "lw": {
          "name": "Rayann Cherky",
          "value": 40000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 80,
          "age": 22
        },
        "st": {
          "name": "Erling Haalland",
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
      "name": "Manchestor United",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Andre Onanah-13",
          "value": 20000000,
          "nationality": "Kamerun",
          "photo": null,
          "rating": 79,
          "age": 29
        },
        "rb": {
          "name": "Diogoh Dalott",
          "value": 30000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 79,
          "age": 26
        },
        "cb1": {
          "name": "Leni Yorro",
          "value": 45000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 79,
          "age": 20
        },
        "cb2": {
          "name": "Mathijs de Ligt",
          "value": 35000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 80,
          "age": 26
        },
        "lb": {
          "name": "Patrik Dorguh",
          "value": 25000000,
          "nationality": "Danimarka",
          "photo": null,
          "rating": 75,
          "age": 20
        },
        "dm1": {
          "name": "Mannuel Uggarte",
          "value": 35000000,
          "nationality": "Uruguay",
          "photo": null,
          "rating": 79,
          "age": 24
        },
        "dm2": {
          "name": "Casemiroh",
          "value": 15000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 80,
          "age": 33
        },
        "rw": {
          "name": "Bryann Mbeummo",
          "value": 65000000,
          "nationality": "Kamerun",
          "photo": null,
          "rating": 82,
          "age": 26
        },
        "cam": {
          "name": "Brunno Fernandez",
          "value": 55000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 86,
          "age": 31
        },
        "lw": {
          "name": "Matheuss Cunhah",
          "value": 60000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 81,
          "age": 26
        },
        "st": {
          "name": "Benjaminn Seskoh",
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
      "name": "Newcastel United",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Nik Pope",
          "value": 15000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 82,
          "age": 33
        },
        "rb": {
          "name": "Kierann Trippierr",
          "value": 8000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 79,
          "age": 35
        },
        "cb1": {
          "name": "Fabbian Scharr",
          "value": 12000000,
          "nationality": "İsviçre",
          "photo": null,
          "rating": 79,
          "age": 33
        },
        "cb2": {
          "name": "Sven Botmann",
          "value": 35000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 81,
          "age": 25
        },
        "lb": {
          "name": "Dan Burnn",
          "value": 12000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 77,
          "age": 33
        },
        "dm1": {
          "name": "Brunno Guimaraess",
          "value": 80000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 85,
          "age": 27
        },
        "dm2": {
          "name": "Sandroh Tonaly",
          "value": 55000000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 82,
          "age": 25
        },
        "rw": {
          "name": "Jaccob Murphi",
          "value": 20000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 78,
          "age": 30
        },
        "cam": {
          "name": "Harvie Barnez",
          "value": 22000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 78,
          "age": 27
        },
        "lw": {
          "name": "Anthoni Gordonn",
          "value": 65000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 82,
          "age": 24
        },
        "st": {
          "name": "Nik Woltemmade",
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
      "name": "Nottingham Forrest",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Matz Selss",
          "value": 20000000,
          "nationality": "Belçika",
          "photo": null,
          "rating": 80,
          "age": 33
        },
        "rb": {
          "name": "Neko Wiliams",
          "value": 20000000,
          "nationality": "Galler",
          "photo": null,
          "rating": 76,
          "age": 24
        },
        "cb1": {
          "name": "Murilo",
          "value": 45000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 80,
          "age": 23
        },
        "cb2": {
          "name": "Wily Boli",
          "value": 5000000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 74,
          "age": 34
        },
        "lb": {
          "name": "Ola Ainah",
          "value": 18000000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 77,
          "age": 28
        },
        "dm1": {
          "name": "Douglass Luiz",
          "value": 25000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 78,
          "age": 27
        },
        "dm2": {
          "name": "Ibrahim Sangarre",
          "value": 20000000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 76,
          "age": 27
        },
        "rw": {
          "name": "Calum Hudson-Oddoi",
          "value": 15000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 76,
          "age": 24
        },
        "cam": {
          "name": "Morgann Gibs-White",
          "value": 60000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 81,
          "age": 25
        },
        "lw": {
          "name": "Dan Ndoyeh",
          "value": 30000000,
          "nationality": "İsviçre",
          "photo": null,
          "rating": 77,
          "age": 24
        },
        "st": {
          "name": "Chriss Wood",
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
      "name": "Sunderlend",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Anthoni Pattersonn",
          "value": 8000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 25
        },
        "rb": {
          "name": "Tray Humme",
          "value": 12000000,
          "nationality": "Kuzey İrlanda",
          "photo": null,
          "rating": 73,
          "age": 23
        },
        "cb1": {
          "name": "Dan Balard",
          "value": 12000000,
          "nationality": "Kuzey İrlanda",
          "photo": null,
          "rating": 74,
          "age": 26
        },
        "cb2": {
          "name": "Lukke O'Nienn",
          "value": 5000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 71,
          "age": 30
        },
        "lb": {
          "name": "Denniss Circin",
          "value": 8000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 71,
          "age": 23
        },
        "dm1": {
          "name": "Dan Neill",
          "value": 12000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 24
        },
        "dm2": {
          "name": "Chriss Rig",
          "value": 20000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 73,
          "age": 18
        },
        "rw": {
          "name": "Patrik Robberts",
          "value": 6000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 72,
          "age": 29
        },
        "cam": {
          "name": "Enzoh Le Fee",
          "value": 15000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 74,
          "age": 25
        },
        "lw": {
          "name": "Eliezerr Mayendah",
          "value": 15000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 72,
          "age": 21
        },
        "st": {
          "name": "Wilsonn Isidorr",
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
      "name": "Tottenham Hotspurs",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Guglielmoh Viccario",
          "value": 30000000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 81,
          "age": 29
        },
        "rb": {
          "name": "Pedroh Poro",
          "value": 45000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 81,
          "age": 26
        },
        "cb1": {
          "name": "Cristiann Romeroh",
          "value": 50000000,
          "nationality": "Arjantin",
          "photo": null,
          "rating": 83,
          "age": 27
        },
        "cb2": {
          "name": "Miky van de Ven",
          "value": 55000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 81,
          "age": 24
        },
        "lb": {
          "name": "Destini Uddogie",
          "value": 40000000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 79,
          "age": 23
        },
        "dm1": {
          "name": "Rodrigoh Bentancurr",
          "value": 30000000,
          "nationality": "Uruguay",
          "photo": null,
          "rating": 79,
          "age": 28
        },
        "dm2": {
          "name": "Yves Bisouma",
          "value": 25000000,
          "nationality": "Mali",
          "photo": null,
          "rating": 78,
          "age": 29
        },
        "rw": {
          "name": "Mohamed Kuduss",
          "value": 55000000,
          "nationality": "Gana",
          "photo": null,
          "rating": 80,
          "age": 25
        },
        "cam": {
          "name": "Jammes Maddisonn",
          "value": 40000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 81,
          "age": 29
        },
        "lw": {
          "name": "Xavvi Simmons",
          "value": 60000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 81,
          "age": 22
        },
        "st": {
          "name": "Domminic Sollanke",
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
      "name": "West Hamm United",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Alfonse Areolah",
          "value": 8000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 76,
          "age": 33
        },
        "rb": {
          "name": "Vladimirr Coufall",
          "value": 5000000,
          "nationality": "Çekya",
          "photo": null,
          "rating": 73,
          "age": 33
        },
        "cb1": {
          "name": "Konstantinoss Mavropanoss",
          "value": 20000000,
          "nationality": "Yunanistan",
          "photo": null,
          "rating": 76,
          "age": 28
        },
        "cb2": {
          "name": "Jean-Clairr Todiboh",
          "value": 35000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 79,
          "age": 26
        },
        "lb": {
          "name": "Emersonn Palmierri",
          "value": 7000000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 75,
          "age": 31
        },
        "dm1": {
          "name": "Guidoh Rodrigues",
          "value": 8000000,
          "nationality": "Arjantin",
          "photo": null,
          "rating": 76,
          "age": 32
        },
        "dm2": {
          "name": "Tommas Souccek",
          "value": 18000000,
          "nationality": "Çekya",
          "photo": null,
          "rating": 77,
          "age": 30
        },
        "rw": {
          "name": "Crysencio Sumerville",
          "value": 25000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 76,
          "age": 24
        },
        "cam": {
          "name": "Lukas Paquetta",
          "value": 55000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 81,
          "age": 28
        },
        "lw": {
          "name": "El Hadji Malik Diouf",
          "value": 20000000,
          "nationality": "Senegal",
          "photo": null,
          "rating": 74,
          "age": 20
        },
        "st": {
          "name": "Niclass Fullcrug",
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
      "name": "Wolverhamton Wanderers",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Josse Sa",
          "value": 8000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 77,
          "age": 32
        },
        "rb": {
          "name": "Mat Doherti",
          "value": 3000000,
          "nationality": "İrlanda",
          "photo": null,
          "rating": 73,
          "age": 33
        },
        "cb1": {
          "name": "Emmanuell Agbaddou",
          "value": 12000000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 75,
          "age": 26
        },
        "cb2": {
          "name": "Yersonn Mosquerah",
          "value": 15000000,
          "nationality": "Kolombiya",
          "photo": null,
          "rating": 74,
          "age": 24
        },
        "lb": {
          "name": "Ki-Janah Hoeverr",
          "value": 6000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 71,
          "age": 26
        },
        "dm1": {
          "name": "Joao Gomez",
          "value": 35000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 78,
          "age": 24
        },
        "dm2": {
          "name": "Andreh",
          "value": 25000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 75,
          "age": 24
        },
        "rw": {
          "name": "Jean-Ricnerr Belleggarde",
          "value": 10000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 73,
          "age": 27
        },
        "cam": {
          "name": "Fer Loppez",
          "value": 18000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 74,
          "age": 20
        },
        "lw": {
          "name": "Hwang Hee-chann",
          "value": 25000000,
          "nationality": "Güney Kore",
          "photo": null,
          "rating": 78,
          "age": 29
        },
        "st": {
          "name": "Jorgenn Strand Larsenn",
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
