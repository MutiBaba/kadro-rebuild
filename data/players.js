const PLAYERS_DATA = {
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
      "id": "galatasaray",
      "name": "Galatasarey",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Ugurcan Cakir",
          "value": 15000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 82,
          "age": 30
        },
        "rb": {
          "name": "Wilfried Singoh",
          "value": 23000000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 79,
          "age": 25
        },
        "cb1": {
          "name": "Davvinson Sanchez",
          "value": 16000000,
          "nationality": "Kolombiya",
          "photo": null,
          "rating": 80,
          "age": 30
        },
        "cb2": {
          "name": "Abdulkerim Bardakci",
          "value": 6500000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 76,
          "age": 31
        },
        "lb": {
          "name": "Ismaill Jakkobs",
          "value": 8000000,
          "nationality": "Senegal",
          "photo": null,
          "rating": 78,
          "age": 26
        },
        "dm1": {
          "name": "Lukas Torreirra",
          "value": 10000000,
          "nationality": "Uruguay",
          "photo": null,
          "rating": 82,
          "age": 30
        },
        "dm2": {
          "name": "Leslie Ugochukwuh",
          "value": 22000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 80,
          "age": 22
        },
        "rw": {
          "name": "Lerroy Sane",
          "value": 20000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 83,
          "age": 30
        },
        "cam": {
          "name": "Ilkay Gundogan",
          "value": 2000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 83,
          "age": 35
        },
        "lw": {
          "name": "Baris Alper Yilmaz",
          "value": 30000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 81,
          "age": 26
        },
        "st": {
          "name": "Viktor Osimhenn",
          "value": 75000000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 88,
          "age": 27
        }
      }
    },
    {
      "id": "fenerbahce",
      "name": "Fennerbahce",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Edersonn Moraess",
          "value": 10000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 84,
          "age": 32
        },
        "rb": {
          "name": "Nelson Semedoh",
          "value": 6000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 78,
          "age": 32
        },
        "cb1": {
          "name": "Milann Skriniar",
          "value": 10000000,
          "nationality": "Slovakya",
          "photo": null,
          "rating": 82,
          "age": 31
        },
        "cb2": {
          "name": "Nathann Ake",
          "value": 12000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 80,
          "age": 31
        },
        "lb": {
          "name": "Archey Brown",
          "value": 12000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 77,
          "age": 24
        },
        "dm1": {
          "name": "N'Goloh Kante",
          "value": 4000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 83,
          "age": 35
        },
        "dm2": {
          "name": "Sofyann Amrabatt",
          "value": 10000000,
          "nationality": "Fas",
          "photo": null,
          "rating": 79,
          "age": 29
        },
        "rw": {
          "name": "Masonn Greenwood",
          "value": 55000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 85,
          "age": 24
        },
        "cam": {
          "name": "Marko Assensio",
          "value": 15000000,
          "nationality": "İspanya",
          "photo": null,
          "rating": 82,
          "age": 30
        },
        "lw": {
          "name": "Kerrem Akturkoglu",
          "value": 20000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 81,
          "age": 27
        },
        "st": {
          "name": "Vedatt Murriqi",
          "value": 4500000,
          "nationality": "Kosova",
          "photo": null,
          "rating": 78,
          "age": 32
        }
      }
    },
    {
      "id": "besiktas",
      "name": "Besiktash",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Alexanderr Nubel",
          "value": 12000000,
          "nationality": "Almanya",
          "photo": null,
          "rating": 80,
          "age": 29
        },
        "rb": {
          "name": "Ammir Murilo",
          "value": 7000000,
          "nationality": "Panama",
          "photo": null,
          "rating": 78,
          "age": 30
        },
        "cb1": {
          "name": "Emmanuell Agbaddou",
          "value": 16000000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 80,
          "age": 29
        },
        "cb2": {
          "name": "Tiagoh Djalo",
          "value": 7000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 78,
          "age": 26
        },
        "lb": {
          "name": "Ridvan Yilmaz",
          "value": 5000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 78,
          "age": 25
        },
        "dm1": {
          "name": "Wilfred Ndidy",
          "value": 8000000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 79,
          "age": 29
        },
        "dm2": {
          "name": "Moattasem Al-Musratti",
          "value": 4500000,
          "nationality": "Libya",
          "photo": null,
          "rating": 76,
          "age": 30
        },
        "rw": {
          "name": "Vaclav Cerny",
          "value": 7000000,
          "nationality": "Çekya",
          "photo": null,
          "rating": 78,
          "age": 28
        },
        "cam": {
          "name": "Orcun Kokcu",
          "value": 25000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 83,
          "age": 25
        },
        "lw": {
          "name": "Leandroh Trosard",
          "value": 18000000,
          "nationality": "Belçika",
          "photo": null,
          "rating": 82,
          "age": 31
        },
        "st": {
          "name": "Hyeon-gyuh Oh",
          "value": 15000000,
          "nationality": "Güney Kore",
          "photo": null,
          "rating": 78,
          "age": 25
        }
      }
    },
    {
      "id": "trabzonspor",
      "name": "Trabzonspur",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Andre Onanah",
          "value": 10000000,
          "nationality": "Kamerun",
          "photo": null,
          "rating": 83,
          "age": 30
        },
        "rb": {
          "name": "Wagnerr Pinah",
          "value": 11000000,
          "nationality": "Yeşil Burun Adaları",
          "photo": null,
          "rating": 76,
          "age": 23
        },
        "cb1": {
          "name": "Arsenniy Battagov",
          "value": 11000000,
          "nationality": "Ukrayna",
          "photo": null,
          "rating": 76,
          "age": 24
        },
        "cb2": {
          "name": "Chibbuike Nwaiwuh",
          "value": 10000000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 75,
          "age": 23
        },
        "lb": {
          "name": "Sidni Lopes Cabrall",
          "value": 10000000,
          "nationality": "Yeşil Burun Adaları",
          "photo": null,
          "rating": 75,
          "age": 23
        },
        "dm1": {
          "name": "Batistah Mendi",
          "value": 7500000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 76,
          "age": 26
        },
        "dm2": {
          "name": "Ocay Yokuslu",
          "value": 1200000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 75,
          "age": 32
        },
        "rw": {
          "name": "Mohammed Sallah",
          "value": 22000000,
          "nationality": "Mısır",
          "photo": null,
          "rating": 80,
          "age": 34
        },
        "cam": {
          "name": "Ruslann Mallinovskyi",
          "value": 2500000,
          "nationality": "Ukrayna",
          "photo": null,
          "rating": 79,
          "age": 33
        },
        "lw": {
          "name": "Arral Simsir",
          "value": 10000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 75,
          "age": 24
        },
        "st": {
          "name": "Paul Onuachuh",
          "value": 6000000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 78,
          "age": 32
        }
      }
    },
    {
      "id": "istanbul-basaksehir",
      "name": "Istanbul Basaksehyr",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Muhamed Sengezer",
          "value": 3500000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 74,
          "age": 29
        },
        "rb": {
          "name": "Onnur Bullut",
          "value": 600000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 70,
          "age": 32
        },
        "cb1": {
          "name": "Jerrome Opokuh",
          "value": 7000000,
          "nationality": "Gana",
          "photo": null,
          "rating": 75,
          "age": 27
        },
        "cb2": {
          "name": "Emmin Bayram",
          "value": 4000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 71,
          "age": 23
        },
        "lb": {
          "name": "Christofer Opperi",
          "value": 4000000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 73,
          "age": 29
        },
        "dm1": {
          "name": "Jakkub Kaluzinski",
          "value": 2500000,
          "nationality": "Polonya",
          "photo": null,
          "rating": 71,
          "age": 23
        },
        "dm2": {
          "name": "Beratt Ozdemir",
          "value": 1500000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 24
        },
        "rw": {
          "name": "Abosbek Fayzulaev",
          "value": 7000000,
          "nationality": "Özbekistan",
          "photo": null,
          "rating": 76,
          "age": 22
        },
        "cam": {
          "name": "Matchoy Djalo",
          "value": 500000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 70,
          "age": 23
        },
        "lw": {
          "name": "Ivvan Brnic",
          "value": 2000000,
          "nationality": "Hırvatistan",
          "photo": null,
          "rating": 71,
          "age": 24
        },
        "st": {
          "name": "Eldorr Shommurodov",
          "value": 7000000,
          "nationality": "Özbekistan",
          "photo": null,
          "rating": 76,
          "age": 31
        }
      }
    },
    {
      "id": "samsunspor",
      "name": "Samsunspur",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Ocan Koccuk",
          "value": 2000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 74,
          "age": 31
        },
        "rb": {
          "name": "Joe Mendez",
          "value": 2500000,
          "nationality": "İsveç",
          "photo": null,
          "rating": 71,
          "age": 23
        },
        "cb1": {
          "name": "Tony Borevkovic",
          "value": 2000000,
          "nationality": "Hırvatistan",
          "photo": null,
          "rating": 72,
          "age": 29
        },
        "cb2": {
          "name": "Iggor Drapinski",
          "value": 1500000,
          "nationality": "Polonya",
          "photo": null,
          "rating": 70,
          "age": 22
        },
        "lb": {
          "name": "Loggi Tomasson",
          "value": 3000000,
          "nationality": "İzlanda",
          "photo": null,
          "rating": 73,
          "age": 25
        },
        "dm1": {
          "name": "Antoinne Makkoumbou",
          "value": 4000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 75,
          "age": 28
        },
        "dm2": {
          "name": "Antoinne Sekongoh",
          "value": 4000000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 74,
          "age": 22
        },
        "rw": {
          "name": "Arbnorr Mujah",
          "value": 2500000,
          "nationality": "Arnavutluk",
          "photo": null,
          "rating": 72,
          "age": 27
        },
        "cam": {
          "name": "Afonsoh Soussa",
          "value": 2500000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 74,
          "age": 26
        },
        "lw": {
          "name": "Jaures Assoummou",
          "value": 2000000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 71,
          "age": 23
        },
        "st": {
          "name": "Mariuss Mouandilmadjy",
          "value": 7000000,
          "nationality": "Çad",
          "photo": null,
          "rating": 77,
          "age": 28
        }
      }
    },
    {
      "id": "konyaspor",
      "name": "Konyaspur",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Bahadir Gungordu",
          "value": 700000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 71,
          "age": 30
        },
        "rb": {
          "name": "Yhoann Andzouanna",
          "value": 800000,
          "nationality": "Kongo",
          "photo": null,
          "rating": 70,
          "age": 29
        },
        "cb1": {
          "name": "Addil Demirbag",
          "value": 3000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 71,
          "age": 28
        },
        "cb2": {
          "name": "Addamo Nagaloh",
          "value": 2800000,
          "nationality": "Burkina Faso",
          "photo": null,
          "rating": 70,
          "age": 23
        },
        "lb": {
          "name": "Arrif Bosluk",
          "value": 800000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 23
        },
        "dm1": {
          "name": "Markoh Jevtovic",
          "value": 400000,
          "nationality": "Sırbistan",
          "photo": null,
          "rating": 70,
          "age": 32
        },
        "dm2": {
          "name": "Mellih Ibrahimoglu",
          "value": 2500000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 69,
          "age": 25
        },
        "rw": {
          "name": "Denniz Turuc",
          "value": 500000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 33
        },
        "cam": {
          "name": "Ennis Bardhy",
          "value": 2500000,
          "nationality": "Kuzey Makedonya",
          "photo": null,
          "rating": 74,
          "age": 30
        },
        "lw": {
          "name": "Diogoh Goncalves",
          "value": 2500000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 72,
          "age": 29
        },
        "st": {
          "name": "Jakkson Mulekah",
          "value": 2800000,
          "nationality": "Kongo DC",
          "photo": null,
          "rating": 73,
          "age": 26
        }
      }
    },
    {
      "id": "kayserispor",
      "name": "Kayserispur",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Gokhan Degirmenci",
          "value": 500000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 67,
          "age": 37
        },
        "rb": {
          "name": "Joshua Brenett",
          "value": 1000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 71,
          "age": 32
        },
        "cb1": {
          "name": "Jemall Tabbidze",
          "value": 1000000,
          "nationality": "Gürcistan",
          "photo": null,
          "rating": 70,
          "age": 30
        },
        "cb2": {
          "name": "Majid Hoseini",
          "value": 700000,
          "nationality": "İran",
          "photo": null,
          "rating": 69,
          "age": 30
        },
        "lb": {
          "name": "Cenc Sen",
          "value": 800000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 25
        },
        "dm1": {
          "name": "Yousef Ait Bennasserr",
          "value": 800000,
          "nationality": "Fas",
          "photo": null,
          "rating": 70,
          "age": 30
        },
        "dm2": {
          "name": "Marko Dulcah",
          "value": 400000,
          "nationality": "Romanya",
          "photo": null,
          "rating": 66,
          "age": 27
        },
        "rw": {
          "name": "Benhurr Keserr",
          "value": 700000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 67,
          "age": 29
        },
        "cam": {
          "name": "Gorkem Saglam",
          "value": 800000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 28
        },
        "lw": {
          "name": "Miguell Cardosoh",
          "value": 1500000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 70,
          "age": 32
        },
        "st": {
          "name": "Germann Onugkhah",
          "value": 1800000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 71,
          "age": 30
        }
      }
    },
    {
      "id": "kocaelispor",
      "name": "Kocaelispur",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Serhatt Oztasdelen",
          "value": 600000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 67,
          "age": 21
        },
        "rb": {
          "name": "Ugur Kaan Yildiz",
          "value": 600000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 67,
          "age": 24
        },
        "cb1": {
          "name": "Anfernee Dijksteell",
          "value": 1200000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 71,
          "age": 29
        },
        "cb2": {
          "name": "Tanguy Zoucrou",
          "value": 1200000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 70,
          "age": 23
        },
        "lb": {
          "name": "Massaddio Haidara",
          "value": 600000,
          "nationality": "Mali",
          "photo": null,
          "rating": 69,
          "age": 33
        },
        "dm1": {
          "name": "Showw",
          "value": 1500000,
          "nationality": "Angola",
          "photo": null,
          "rating": 71,
          "age": 27
        },
        "dm2": {
          "name": "Mahammadou Susohoh",
          "value": 1000000,
          "nationality": "İngiltere",
          "photo": null,
          "rating": 68,
          "age": 21
        },
        "rw": {
          "name": "Dan Agyey",
          "value": 1200000,
          "nationality": "Gana",
          "photo": null,
          "rating": 70,
          "age": 29
        },
        "cam": {
          "name": "Habbib Keita",
          "value": 2500000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 73,
          "age": 24
        },
        "lw": {
          "name": "Rigobertoh Rivass",
          "value": 1200000,
          "nationality": "Honduras",
          "photo": null,
          "rating": 70,
          "age": 28
        },
        "st": {
          "name": "Brunno Petkovic",
          "value": 1500000,
          "nationality": "Hırvatistan",
          "photo": null,
          "rating": 76,
          "age": 31
        }
      }
    },
    {
      "id": "goztepe",
      "name": "Gozteppe",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Luca Gugeshashvilli",
          "value": 700000,
          "nationality": "Gürcistan",
          "photo": null,
          "rating": 71,
          "age": 27
        },
        "rb": {
          "name": "Furkann Bayir",
          "value": 1000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 69,
          "age": 26
        },
        "cb1": {
          "name": "Malkom Bocele",
          "value": 5000000,
          "nationality": "Kamerun",
          "photo": null,
          "rating": 75,
          "age": 26
        },
        "cb2": {
          "name": "Tahah Altikardes",
          "value": 4000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 74,
          "age": 22
        },
        "lb": {
          "name": "Noah Sonkoh Sundberg",
          "value": 900000,
          "nationality": "İsveç",
          "photo": null,
          "rating": 69,
          "age": 30
        },
        "dm1": {
          "name": "Anthoni Denniss",
          "value": 8000000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 77,
          "age": 22
        },
        "dm2": {
          "name": "Novatuss Mirroshi",
          "value": 5000000,
          "nationality": "Tanzanya",
          "photo": null,
          "rating": 75,
          "age": 23
        },
        "rw": {
          "name": "Ogun Bayrac",
          "value": 700000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 27
        },
        "cam": {
          "name": "Ardah Okan Kurtulann",
          "value": 7000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 76,
          "age": 23
        },
        "lw": {
          "name": "Ammin Cherny",
          "value": 3500000,
          "nationality": "Tunus",
          "photo": null,
          "rating": 74,
          "age": 25
        },
        "st": {
          "name": "Juann",
          "value": 12000000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 79,
          "age": 24
        }
      }
    },
    {
      "id": "genclerbirligi",
      "name": "Genclerbirlik",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Gokhan Ackan",
          "value": 350000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 66,
          "age": 31
        },
        "rb": {
          "name": "Pedroh Pereirah",
          "value": 1200000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 71,
          "age": 28
        },
        "cb1": {
          "name": "Dimitrioss Gouttas",
          "value": 800000,
          "nationality": "Yunanistan",
          "photo": null,
          "rating": 69,
          "age": 32
        },
        "cb2": {
          "name": "Thalissonn",
          "value": 700000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 68,
          "age": 28
        },
        "lb": {
          "name": "Kevin Rodriguez",
          "value": 800000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 69,
          "age": 32
        },
        "dm1": {
          "name": "Peterr Eteboh",
          "value": 200000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 68,
          "age": 30
        },
        "dm2": {
          "name": "Mousa Kyabbou",
          "value": 400000,
          "nationality": "Mali",
          "photo": null,
          "rating": 66,
          "age": 28
        },
        "rw": {
          "name": "Addama Traore",
          "value": 1500000,
          "nationality": "Mali",
          "photo": null,
          "rating": 71,
          "age": 31
        },
        "cam": {
          "name": "Franko Tongyah",
          "value": 2000000,
          "nationality": "Kamerun",
          "photo": null,
          "rating": 71,
          "age": 24
        },
        "lw": {
          "name": "Dilhann Demirr",
          "value": 100000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 64,
          "age": 23
        },
        "st": {
          "name": "Sekou Koita",
          "value": 2500000,
          "nationality": "Mali",
          "photo": null,
          "rating": 73,
          "age": 26
        }
      }
    },
    {
      "id": "kasimpasa",
      "name": "Kasimpasha",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Andreass Gianniotiss",
          "value": 300000,
          "nationality": "Yunanistan",
          "photo": null,
          "rating": 72,
          "age": 33
        },
        "rb": {
          "name": "Claudio Winkk",
          "value": 800000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 71,
          "age": 32
        },
        "cb1": {
          "name": "Addem Arouss",
          "value": 4000000,
          "nationality": "Tunus",
          "photo": null,
          "rating": 70,
          "age": 21
        },
        "cb2": {
          "name": "Atila Szallai",
          "value": 2000000,
          "nationality": "Macaristan",
          "photo": null,
          "rating": 75,
          "age": 28
        },
        "lb": {
          "name": "Godfried Frimpongg",
          "value": 2000000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 70,
          "age": 27
        },
        "dm1": {
          "name": "Andry Fannar Baldurssonn",
          "value": 2000000,
          "nationality": "İzlanda",
          "photo": null,
          "rating": 69,
          "age": 24
        },
        "dm2": {
          "name": "Mamaddou Fal",
          "value": 1500000,
          "nationality": "Senegal",
          "photo": null,
          "rating": 68,
          "age": 26
        },
        "rw": {
          "name": "Omer Ali Sahiner",
          "value": 1000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 24
        },
        "cam": {
          "name": "Hariss Hajradinovic",
          "value": 1200000,
          "nationality": "Bosna Hersek",
          "photo": null,
          "rating": 70,
          "age": 32
        },
        "lw": {
          "name": "Mortadhah Ben Ouanez",
          "value": 1500000,
          "nationality": "Tunus",
          "photo": null,
          "rating": 71,
          "age": 31
        },
        "st": {
          "name": "Adriann Bennedyczak",
          "value": 5000000,
          "nationality": "Polonya",
          "photo": null,
          "rating": 74,
          "age": 25
        }
      }
    },
    {
      "id": "gaziantep-fk",
      "name": "Gazyantep FK",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Kacperr Tobbiasz",
          "value": 700000,
          "nationality": "Polonya",
          "photo": null,
          "rating": 69,
          "age": 23
        },
        "rb": {
          "name": "Deiann Sorescuh",
          "value": 1500000,
          "nationality": "Romanya",
          "photo": null,
          "rating": 71,
          "age": 28
        },
        "cb1": {
          "name": "Ardah Kizildag",
          "value": 800000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 27
        },
        "cb2": {
          "name": "Myenti Abenah",
          "value": 600000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 67,
          "age": 31
        },
        "lb": {
          "name": "Florinn Ștefann",
          "value": 700000,
          "nationality": "Romanya",
          "photo": null,
          "rating": 67,
          "age": 30
        },
        "dm1": {
          "name": "Ulrich Melece",
          "value": 1500000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 71,
          "age": 27
        },
        "dm2": {
          "name": "Drisa Camarah",
          "value": 3500000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 74,
          "age": 24
        },
        "rw": {
          "name": "Enverr Kullasin",
          "value": 700000,
          "nationality": "Bosna Hersek",
          "photo": null,
          "rating": 67,
          "age": 22
        },
        "cam": {
          "name": "Kacperr Kozlowski",
          "value": 6000000,
          "nationality": "Polonya",
          "photo": null,
          "rating": 76,
          "age": 22
        },
        "lw": {
          "name": "Juninhoh Bacunah",
          "value": 1700000,
          "nationality": "Hollanda",
          "photo": null,
          "rating": 71,
          "age": 29
        },
        "st": {
          "name": "Trivvante Stewart",
          "value": 1500000,
          "nationality": "Jamaika",
          "photo": null,
          "rating": 70,
          "age": 26
        }
      }
    },
    {
      "id": "eyupspor",
      "name": "Eyupspur",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Horatiu Moldovann",
          "value": 1800000,
          "nationality": "Romanya",
          "photo": null,
          "rating": 72,
          "age": 28
        },
        "rb": {
          "name": "Callegari",
          "value": 2500000,
          "nationality": "Brezilya",
          "photo": null,
          "rating": 72,
          "age": 24
        },
        "cb1": {
          "name": "Anil Yasar",
          "value": 300000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 66,
          "age": 24
        },
        "cb2": {
          "name": "Jawad El Yammiq",
          "value": 300000,
          "nationality": "Fas",
          "photo": null,
          "rating": 68,
          "age": 34
        },
        "lb": {
          "name": "Ardah Yavvuz",
          "value": 50000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 63,
          "age": 20
        },
        "dm1": {
          "name": "Chandrell Masanga",
          "value": 500000,
          "nationality": "Kongo DC",
          "photo": null,
          "rating": 67,
          "age": 26
        },
        "dm2": {
          "name": "Taskin Ilter",
          "value": 150000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 65,
          "age": 32
        },
        "rw": {
          "name": "Bilall Bouttobba",
          "value": 1200000,
          "nationality": "Cezayir",
          "photo": null,
          "rating": 71,
          "age": 27
        },
        "cam": {
          "name": "Abdelhammid Sabiry",
          "value": 850000,
          "nationality": "Fas",
          "photo": null,
          "rating": 74,
          "age": 29
        },
        "lw": {
          "name": "Konrad Michallak",
          "value": 500000,
          "nationality": "Polonya",
          "photo": null,
          "rating": 68,
          "age": 28
        },
        "st": {
          "name": "Ahmed Abdulahi",
          "value": 800000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 68,
          "age": 22
        }
      }
    },
    {
      "id": "fatih-karagumruk",
      "name": "Fatih Karagumruck",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Marko Silvestry",
          "value": 500000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 71,
          "age": 35
        },
        "rb": {
          "name": "Ramazann Civvelek",
          "value": 700000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 30
        },
        "cb1": {
          "name": "Robinn Yalcin",
          "value": 450000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 67,
          "age": 32
        },
        "cb2": {
          "name": "Davvide Birraschi",
          "value": 400000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 68,
          "age": 32
        },
        "lb": {
          "name": "Cagtay Kurukalip",
          "value": 600000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 24
        },
        "dm1": {
          "name": "Manoliss Siopiss",
          "value": 1200000,
          "nationality": "Yunanistan",
          "photo": null,
          "rating": 70,
          "age": 32
        },
        "dm2": {
          "name": "Dorrukhan Tokoz",
          "value": 700000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 30
        },
        "rw": {
          "name": "Danniele Verde",
          "value": 700000,
          "nationality": "İtalya",
          "photo": null,
          "rating": 70,
          "age": 30
        },
        "cam": {
          "name": "Emre Acbaba",
          "value": 400000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 71,
          "age": 33
        },
        "lw": {
          "name": "Baris Kalayci",
          "value": 1800000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 69,
          "age": 20
        },
        "st": {
          "name": "Cenc Tosunn",
          "value": 300000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 72,
          "age": 35
        }
      }
    },
    {
      "id": "caykur-rizespor",
      "name": "Caykur Rizespur",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Yahia Fofanah",
          "value": 6000000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 75,
          "age": 25
        },
        "rb": {
          "name": "Tahah Sahin",
          "value": 3000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 72,
          "age": 25
        },
        "cb1": {
          "name": "Siakka Bakayokoh",
          "value": 2500000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 71,
          "age": 21
        },
        "cb2": {
          "name": "Moddibo Sagnann",
          "value": 2000000,
          "nationality": "Mali",
          "photo": null,
          "rating": 70,
          "age": 27
        },
        "lb": {
          "name": "Zakkaria Aris",
          "value": 2000000,
          "nationality": "Fas",
          "photo": null,
          "rating": 70,
          "age": 22
        },
        "dm1": {
          "name": "Taylann Antalyali",
          "value": 700000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 31
        },
        "dm2": {
          "name": "Ibrahim Olawoyinn",
          "value": 2200000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 71,
          "age": 28
        },
        "rw": {
          "name": "Addedire Mebbude",
          "value": 1500000,
          "nationality": "Nijerya",
          "photo": null,
          "rating": 69,
          "age": 22
        },
        "cam": {
          "name": "Qazzim Lacy",
          "value": 2800000,
          "nationality": "Arnavutluk",
          "photo": null,
          "rating": 73,
          "age": 30
        },
        "lw": {
          "name": "Valentinn Mihaila",
          "value": 3500000,
          "nationality": "Romanya",
          "photo": null,
          "rating": 74,
          "age": 26
        },
        "st": {
          "name": "Ali Soweh",
          "value": 1500000,
          "nationality": "Gambiya",
          "photo": null,
          "rating": 71,
          "age": 32
        }
      }
    },
    {
      "id": "antalyaspor",
      "name": "Antalyaspur",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Abdulah Yigiter",
          "value": 250000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 67,
          "age": 26
        },
        "rb": {
          "name": "Bunyamin Balci",
          "value": 2000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 69,
          "age": 26
        },
        "cb1": {
          "name": "Veysell Sari",
          "value": 100000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 68,
          "age": 38
        },
        "cb2": {
          "name": "Sabbit Abdullai",
          "value": 1500000,
          "nationality": "Gana",
          "photo": null,
          "rating": 68,
          "age": 24
        },
        "lb": {
          "name": "Keneth Paal",
          "value": 2000000,
          "nationality": "Surinam",
          "photo": null,
          "rating": 71,
          "age": 29
        },
        "dm1": {
          "name": "Jesperr Ceessay",
          "value": 1500000,
          "nationality": "Gambiya",
          "photo": null,
          "rating": 68,
          "age": 24
        },
        "dm2": {
          "name": "Efekan Karaka",
          "value": 1000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 65,
          "age": 24
        },
        "rw": {
          "name": "Sammuel Ballett",
          "value": 2000000,
          "nationality": "İsviçre",
          "photo": null,
          "rating": 71,
          "age": 25
        },
        "cam": {
          "name": "Ramzy Saffuri",
          "value": 900000,
          "nationality": "İsrail",
          "photo": null,
          "rating": 70,
          "age": 30
        },
        "lw": {
          "name": "Nikkola Storm",
          "value": 1200000,
          "nationality": "Belçika",
          "photo": null,
          "rating": 71,
          "age": 31
        },
        "st": {
          "name": "Yohann Bolli",
          "value": 800000,
          "nationality": "Fildişi Sahili",
          "photo": null,
          "rating": 70,
          "age": 32
        }
      }
    },
    {
      "id": "alanyaspor",
      "name": "Alanyaspur",
      "logo": null,
      "xi": {
        "gk": {
          "name": "Mert Bayramm",
          "value": 300000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 66,
          "age": 21
        },
        "rb": {
          "name": "Florrent Haddergjonaj",
          "value": 1800000,
          "nationality": "Kosova",
          "photo": null,
          "rating": 71,
          "age": 32
        },
        "cb1": {
          "name": "Umit Akdag",
          "value": 6000000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 74,
          "age": 22
        },
        "cb2": {
          "name": "Fidann Ality",
          "value": 900000,
          "nationality": "Kosova",
          "photo": null,
          "rating": 69,
          "age": 32
        },
        "lb": {
          "name": "Nunoh Limma",
          "value": 2000000,
          "nationality": "Portekiz",
          "photo": null,
          "rating": 71,
          "age": 25
        },
        "dm1": {
          "name": "Gaiuss Makoutah",
          "value": 2000000,
          "nationality": "Fransa",
          "photo": null,
          "rating": 70,
          "age": 29
        },
        "dm2": {
          "name": "Ibrahim Kayah",
          "value": 1500000,
          "nationality": "Türkiye",
          "photo": null,
          "rating": 69,
          "age": 25
        },
        "rw": {
          "name": "Maestroh",
          "value": 7000000,
          "nationality": "Angola",
          "photo": null,
          "rating": 75,
          "age": 23
        },
        "cam": {
          "name": "Ianiss Haggi",
          "value": 1800000,
          "nationality": "Romanya",
          "photo": null,
          "rating": 75,
          "age": 27
        },
        "lw": {
          "name": "Ommar Ben Ali",
          "value": 750000,
          "nationality": "Tunus",
          "photo": null,
          "rating": 67,
          "age": 21
        },
        "st": {
          "name": "Meschak Ellia",
          "value": 1500000,
          "nationality": "Kongo DC",
          "photo": null,
          "rating": 70,
          "age": 29
        }
      }
    }
  ]
};
