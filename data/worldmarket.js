// Dünya piyasasından, mevki bazlı alternatif transfer havuzu.
// Değerler, EA FC 26 tarzı ratingler ve yaşlar yaklaşıktır (2025-26 sezonu civarı), resmi EA/Transfermarkt verisi değildir.
const WORLD_MARKET = {
  "gk": [
    {
      "name": "Milo Claes",
      "club": "Southampton",
      "nationality": "Belçika",
      "value": 212250000,
      "rating": 90,
      "age": 19
    },
    {
      "name": "Gianluigi Donnarumma",
      "club": "Manchester City",
      "nationality": "İtalya",
      "value": 134000000,
      "rating": 89,
      "age": 26
    },
    {
      "name": "Gabriele Costa",
      "club": "Aston Villa",
      "nationality": "İtalya",
      "value": 134000000,
      "rating": 89,
      "age": 24
    },
    {
      "name": "Hugo Moreau",
      "club": "Vitória Guimarães",
      "nationality": "Fransa",
      "value": 147250000,
      "rating": 89,
      "age": 23
    },
    {
      "name": "Abdoulaye Ba",
      "club": "Auxerre",
      "nationality": "Senegal",
      "value": 134000000,
      "rating": 89,
      "age": 28
    },
    {
      "name": "Emiliano Martínez",
      "club": "Aston Villa",
      "nationality": "Arjantin",
      "value": 33250000,
      "rating": 87,
      "age": 33
    },
    {
      "name": "Mike Maignan",
      "club": "Milan",
      "nationality": "Fransa",
      "value": 54250000,
      "rating": 87,
      "age": 30
    },
    {
      "name": "Leon Böhm",
      "club": "Fulham",
      "nationality": "Almanya",
      "value": 54250000,
      "rating": 87,
      "age": 30
    },
    {
      "name": "Gregor Kobel",
      "club": "Borussia Dortmund",
      "nationality": "İsviçre",
      "value": 65750000,
      "rating": 86,
      "age": 28
    },
    {
      "name": "Maximilian Wagner",
      "club": "Werder Bremen",
      "nationality": "Almanya",
      "value": 42750000,
      "rating": 86,
      "age": 30
    },
    {
      "name": "Lukas Brandt",
      "club": "Leicester City",
      "nationality": "Almanya",
      "value": 82250000,
      "rating": 86,
      "age": 20
    },
    {
      "name": "Mikkel Vestergaard",
      "club": "Girona",
      "nationality": "Danimarka",
      "value": 26250000,
      "rating": 86,
      "age": 33
    },
    {
      "name": "Adam Lewandowski",
      "club": "AZ Alkmaar",
      "nationality": "Polonya",
      "value": 65750000,
      "rating": 86,
      "age": 29
    },
    {
      "name": "Diogo Costa",
      "club": "Porto",
      "nationality": "Portekiz",
      "value": 51750000,
      "rating": 85,
      "age": 27
    },
    {
      "name": "David Raya",
      "club": "Arsenal",
      "nationality": "İspanya",
      "value": 33750000,
      "rating": 85,
      "age": 30
    },
    {
      "name": "Bilal Idrissi",
      "club": "Werder Bremen",
      "nationality": "Fas",
      "value": 51750000,
      "rating": 85,
      "age": 25
    },
    {
      "name": "Marcelo Pereira",
      "club": "Leicester City",
      "nationality": "Brezilya",
      "value": 20750000,
      "rating": 85,
      "age": 34
    },
    {
      "name": "Yann Sommer",
      "club": "Inter",
      "nationality": "İsviçre",
      "value": 10250000,
      "rating": 84,
      "age": 37
    },
    {
      "name": "Marc-André ter Stegen",
      "club": "Barcelona",
      "nationality": "Almanya",
      "value": 16250000,
      "rating": 84,
      "age": 33
    },
    {
      "name": "Lucas Chevalier",
      "club": "Paris Saint-Germain",
      "nationality": "Fransa",
      "value": 40750000,
      "rating": 84,
      "age": 24
    },
    {
      "name": "Matz Sels",
      "club": "Nottingham Forest",
      "nationality": "Belçika",
      "value": 13000000,
      "rating": 83,
      "age": 33
    },
    {
      "name": "Andriy Lunin",
      "club": "Real Madrid",
      "nationality": "Ukrayna",
      "value": 25500000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Unai Simón",
      "club": "Athletic Bilbao",
      "nationality": "İspanya",
      "value": 25500000,
      "rating": 82,
      "age": 29
    },
    {
      "name": "Dario Babić",
      "club": "Mainz",
      "nationality": "Hırvatistan",
      "value": 10250000,
      "rating": 82,
      "age": 34
    },
    {
      "name": "Adam Chakir",
      "club": "Betis",
      "nationality": "Fas",
      "value": 25500000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Kepa Arrizabalaga",
      "club": "Bournemouth",
      "nationality": "İspanya",
      "value": 13000000,
      "rating": 81,
      "age": 31
    },
    {
      "name": "Bart Verbruggen",
      "club": "Brighton",
      "nationality": "Hollanda",
      "value": 22000000,
      "rating": 81,
      "age": 23
    },
    {
      "name": "Leon Fuchs",
      "club": "Ajax",
      "nationality": "Almanya",
      "value": 20000000,
      "rating": 81,
      "age": 26
    },
    {
      "name": "Bogdan Todorović",
      "club": "Sevilla",
      "nationality": "Sırbistan",
      "value": 8000000,
      "rating": 81,
      "age": 33
    },
    {
      "name": "Bright Adjei",
      "club": "West Ham",
      "nationality": "Gana",
      "value": 8000000,
      "rating": 81,
      "age": 34
    },
    {
      "name": "Dario Kovačić",
      "club": "Rennes",
      "nationality": "Hırvatistan",
      "value": 13000000,
      "rating": 81,
      "age": 30
    },
    {
      "name": "Mikel Fernández",
      "club": "Wolfsburg",
      "nationality": "İspanya",
      "value": 25000000,
      "rating": 81,
      "age": 19
    },
    {
      "name": "Raúl Duarte",
      "club": "Sevilla",
      "nationality": "İspanya",
      "value": 13000000,
      "rating": 81,
      "age": 30
    },
    {
      "name": "Alexander Nübel",
      "club": "Beşiktaş",
      "nationality": "Almanya",
      "value": 15750000,
      "rating": 80,
      "age": 28
    },
    {
      "name": "Nikolaj Jensen",
      "club": "Osasuna",
      "nationality": "Danimarka",
      "value": 19750000,
      "rating": 80,
      "age": 19
    },
    {
      "name": "Marcus Marsh",
      "club": "Monaco",
      "nationality": "İngiltere",
      "value": 10250000,
      "rating": 80,
      "age": 32
    },
    {
      "name": "Illan Meslier",
      "club": "Leeds United",
      "nationality": "Fransa",
      "value": 12500000,
      "rating": 79,
      "age": 25
    },
    {
      "name": "Wojciech Szczęsny",
      "club": "Barcelona",
      "nationality": "Polonya",
      "value": 3000000,
      "rating": 79,
      "age": 36
    },
    {
      "name": "Bento",
      "club": "Al-Ittihad",
      "nationality": "Brezilya",
      "value": 12500000,
      "rating": 79,
      "age": 26
    },
    {
      "name": "Yusuf Kara",
      "club": "Brentford",
      "nationality": "Türkiye",
      "value": 13750000,
      "rating": 79,
      "age": 23
    },
    {
      "name": "Julian Fuchs",
      "club": "Freiburg",
      "nationality": "Almanya",
      "value": 5000000,
      "rating": 79,
      "age": 33
    },
    {
      "name": "Filip Jörgensen",
      "club": "Chelsea",
      "nationality": "Danimarka",
      "value": 9750000,
      "rating": 78,
      "age": 24
    },
    {
      "name": "Magnus Berg",
      "club": "PSV Eindhoven",
      "nationality": "Norveç",
      "value": 9750000,
      "rating": 78,
      "age": 29
    },
    {
      "name": "Vitor Costa",
      "club": "Cagliari",
      "nationality": "Brezilya",
      "value": 4000000,
      "rating": 78,
      "age": 33
    },
    {
      "name": "Erik Johansen",
      "club": "Crystal Palace",
      "nationality": "Norveç",
      "value": 9750000,
      "rating": 78,
      "age": 27
    },
    {
      "name": "Frederik Kristensen",
      "club": "Lyon",
      "nationality": "Danimarka",
      "value": 8500000,
      "rating": 77,
      "age": 21
    },
    {
      "name": "Enzo Moreau",
      "club": "Nottingham Forest",
      "nationality": "Fransa",
      "value": 7750000,
      "rating": 77,
      "age": 27
    },
    {
      "name": "Rafael Cardoso",
      "club": "Aston Villa",
      "nationality": "Portekiz",
      "value": 7750000,
      "rating": 77,
      "age": 27
    },
    {
      "name": "Niklas Böhm",
      "club": "Napoli",
      "nationality": "Almanya",
      "value": 7750000,
      "rating": 77,
      "age": 28
    },
    {
      "name": "Marco Bizot",
      "club": "Aston Villa",
      "nationality": "Hollanda",
      "value": 2500000,
      "rating": 76,
      "age": 34
    },
    {
      "name": "Kaique Pereira",
      "club": "Brentford",
      "nationality": "Brezilya",
      "value": 6750000,
      "rating": 76,
      "age": 22
    },
    {
      "name": "Storm Jensen",
      "club": "Rennes",
      "nationality": "Danimarka",
      "value": 6000000,
      "rating": 76,
      "age": 24
    },
    {
      "name": "Krystian Nowak",
      "club": "Bologna",
      "nationality": "Polonya",
      "value": 6000000,
      "rating": 76,
      "age": 27
    },
    {
      "name": "Mamadou Thiam",
      "club": "Monaco",
      "nationality": "Senegal",
      "value": 6000000,
      "rating": 76,
      "age": 26
    },
    {
      "name": "Noud Smit",
      "club": "Brentford",
      "nationality": "Hollanda",
      "value": 6000000,
      "rating": 76,
      "age": 28
    },
    {
      "name": "Santiago Cardona",
      "club": "Nice",
      "nationality": "Kolombiya",
      "value": 6000000,
      "rating": 75,
      "age": 20
    },
    {
      "name": "Ivo Grbić",
      "club": "Lille",
      "nationality": "Hırvatistan",
      "value": 2500000,
      "rating": 74,
      "age": 30
    },
    {
      "name": "Émile Bergström",
      "club": "Fulham",
      "nationality": "İsveç",
      "value": 4250000,
      "rating": 74,
      "age": 23
    },
    {
      "name": "Emil Nilsen",
      "club": "West Ham",
      "nationality": "Norveç",
      "value": 2500000,
      "rating": 74,
      "age": 31
    },
    {
      "name": "Andrés Prieto",
      "club": "Everton",
      "nationality": "İspanya",
      "value": 2500000,
      "rating": 74,
      "age": 32
    }
  ],
  "rb": [
    {
      "name": "Niklas Schulz",
      "club": "Angers",
      "nationality": "Almanya",
      "value": 134000000,
      "rating": 89,
      "age": 29
    },
    {
      "name": "Loïc Wouters",
      "club": "Leicester City",
      "nationality": "Belçika",
      "value": 147250000,
      "rating": 89,
      "age": 21
    },
    {
      "name": "Louis Vermeulen",
      "club": "Mainz",
      "nationality": "Belçika",
      "value": 105750000,
      "rating": 88,
      "age": 27
    },
    {
      "name": "Achraf Hakimi",
      "club": "Paris Saint-Germain",
      "nationality": "Fas",
      "value": 83250000,
      "rating": 87,
      "age": 27
    },
    {
      "name": "Trent Alexander-Arnold",
      "club": "Real Madrid",
      "nationality": "İngiltere",
      "value": 65750000,
      "rating": 86,
      "age": 27
    },
    {
      "name": "Marcus Baker",
      "club": "Strasbourg",
      "nationality": "İngiltere",
      "value": 42750000,
      "rating": 86,
      "age": 30
    },
    {
      "name": "Jarne Peeters",
      "club": "Genoa",
      "nationality": "Belçika",
      "value": 65750000,
      "rating": 86,
      "age": 27
    },
    {
      "name": "Aleksander Berg",
      "club": "Lille",
      "nationality": "Norveç",
      "value": 51750000,
      "rating": 85,
      "age": 27
    },
    {
      "name": "Bright Mensah",
      "club": "Ajax",
      "nationality": "Gana",
      "value": 57000000,
      "rating": 85,
      "age": 23
    },
    {
      "name": "Denzel Dumfries",
      "club": "Inter",
      "nationality": "Hollanda",
      "value": 40750000,
      "rating": 84,
      "age": 29
    },
    {
      "name": "Sadio Gueye",
      "club": "Freiburg",
      "nationality": "Senegal",
      "value": 45000000,
      "rating": 84,
      "age": 22
    },
    {
      "name": "Daniel Gil",
      "club": "Bayer Leverkusen",
      "nationality": "Kolombiya",
      "value": 45000000,
      "rating": 84,
      "age": 23
    },
    {
      "name": "Jeremie Frimpong",
      "club": "Bayer Leverkusen",
      "nationality": "Hollanda",
      "value": 32250000,
      "rating": 83,
      "age": 25
    },
    {
      "name": "Pedro Porro",
      "club": "Tottenham",
      "nationality": "İspanya",
      "value": 32250000,
      "rating": 83,
      "age": 26
    },
    {
      "name": "Victor De Smet",
      "club": "Newcastle United",
      "nationality": "Belçika",
      "value": 35500000,
      "rating": 83,
      "age": 21
    },
    {
      "name": "Alexander Björk",
      "club": "Fulham",
      "nationality": "İsveç",
      "value": 13000000,
      "rating": 83,
      "age": 33
    },
    {
      "name": "Sadio Fall",
      "club": "Strasbourg",
      "nationality": "Senegal",
      "value": 16500000,
      "rating": 82,
      "age": 31
    },
    {
      "name": "Amine Benali",
      "club": "Fiorentina",
      "nationality": "Fas",
      "value": 10250000,
      "rating": 82,
      "age": 33
    },
    {
      "name": "João Cancelo",
      "club": "Al-Hilal",
      "nationality": "Portekiz",
      "value": 13000000,
      "rating": 81,
      "age": 31
    },
    {
      "name": "Berkay Aktaş",
      "club": "Osasuna",
      "nationality": "Türkiye",
      "value": 20000000,
      "rating": 81,
      "age": 27
    },
    {
      "name": "Enzo Girard",
      "club": "Betis",
      "nationality": "Fransa",
      "value": 20000000,
      "rating": 81,
      "age": 28
    },
    {
      "name": "Mert Polat",
      "club": "Parma",
      "nationality": "Türkiye",
      "value": 8000000,
      "rating": 81,
      "age": 34
    },
    {
      "name": "Vanderson",
      "club": "Monaco",
      "nationality": "Brezilya",
      "value": 15750000,
      "rating": 80,
      "age": 24
    },
    {
      "name": "Daniel Muñoz",
      "club": "Crystal Palace",
      "nationality": "Kolombiya",
      "value": 15750000,
      "rating": 80,
      "age": 29
    },
    {
      "name": "Sander Andersen",
      "club": "Lille",
      "nationality": "Norveç",
      "value": 10250000,
      "rating": 80,
      "age": 32
    },
    {
      "name": "August Jensen",
      "club": "Napoli",
      "nationality": "Danimarka",
      "value": 15750000,
      "rating": 80,
      "age": 27
    },
    {
      "name": "Bram Smit",
      "club": "Real Sociedad",
      "nationality": "Hollanda",
      "value": 15750000,
      "rating": 80,
      "age": 28
    },
    {
      "name": "Boubacar Faye",
      "club": "PSV Eindhoven",
      "nationality": "Senegal",
      "value": 15750000,
      "rating": 80,
      "age": 26
    },
    {
      "name": "Đorđe Radovanović",
      "club": "Brentford",
      "nationality": "Sırbistan",
      "value": 6250000,
      "rating": 80,
      "age": 33
    },
    {
      "name": "Riccardo Costa",
      "club": "Nottingham Forest",
      "nationality": "İtalya",
      "value": 10250000,
      "rating": 80,
      "age": 30
    },
    {
      "name": "Kerem Ateş",
      "club": "Twente",
      "nationality": "Türkiye",
      "value": 17500000,
      "rating": 80,
      "age": 22
    },
    {
      "name": "Jack Reid",
      "club": "Fiorentina",
      "nationality": "İngiltere",
      "value": 15750000,
      "rating": 80,
      "age": 28
    },
    {
      "name": "Ibrahima Diop",
      "club": "Bayer Leverkusen",
      "nationality": "Senegal",
      "value": 15750000,
      "rating": 80,
      "age": 27
    },
    {
      "name": "Yan Couto",
      "club": "Borussia Dortmund",
      "nationality": "Brezilya",
      "value": 13750000,
      "rating": 79,
      "age": 23
    },
    {
      "name": "Rico Lewis",
      "club": "Manchester City",
      "nationality": "İngiltere",
      "value": 13750000,
      "rating": 79,
      "age": 21
    },
    {
      "name": "Odilon Kossounou",
      "club": "Atalanta",
      "nationality": "Fildişi Sahili",
      "value": 12500000,
      "rating": 79,
      "age": 24
    },
    {
      "name": "Ben Doyle",
      "club": "Lazio",
      "nationality": "İngiltere",
      "value": 5000000,
      "rating": 79,
      "age": 33
    },
    {
      "name": "Emerson Royal",
      "club": "Milan",
      "nationality": "Brezilya",
      "value": 9750000,
      "rating": 78,
      "age": 27
    },
    {
      "name": "Kyle Walker-Peters",
      "club": "West Ham",
      "nationality": "İngiltere",
      "value": 9750000,
      "rating": 78,
      "age": 28
    },
    {
      "name": "Wesley",
      "club": "Roma",
      "nationality": "Brezilya",
      "value": 9750000,
      "rating": 78,
      "age": 25
    },
    {
      "name": "André Alves",
      "club": "Betis",
      "nationality": "Portekiz",
      "value": 10750000,
      "rating": 78,
      "age": 22
    },
    {
      "name": "Lucas Herrera",
      "club": "Bournemouth",
      "nationality": "Arjantin",
      "value": 4000000,
      "rating": 78,
      "age": 33
    },
    {
      "name": "Emil Hansen",
      "club": "Osasuna",
      "nationality": "Norveç",
      "value": 9750000,
      "rating": 78,
      "age": 25
    },
    {
      "name": "Nordi Mukiele",
      "club": "Paris Saint-Germain",
      "nationality": "Fransa",
      "value": 7750000,
      "rating": 77,
      "age": 27
    },
    {
      "name": "Ola Aina",
      "club": "Nottingham Forest",
      "nationality": "Nijerya",
      "value": 7750000,
      "rating": 77,
      "age": 29
    },
    {
      "name": "Santiago Herrera",
      "club": "Getafe",
      "nationality": "Arjantin",
      "value": 7750000,
      "rating": 77,
      "age": 27
    },
    {
      "name": "Rick Karsdorp",
      "club": "Bologna",
      "nationality": "Hollanda",
      "value": 4000000,
      "rating": 76,
      "age": 30
    },
    {
      "name": "Timothy Castagne",
      "club": "Fulham",
      "nationality": "Belçika",
      "value": 4000000,
      "rating": 76,
      "age": 30
    },
    {
      "name": "Magnus Nielsen",
      "club": "Osasuna",
      "nationality": "Danimarka",
      "value": 6750000,
      "rating": 76,
      "age": 22
    },
    {
      "name": "Joaquín Álvarez",
      "club": "Mainz",
      "nationality": "Arjantin",
      "value": 6000000,
      "rating": 76,
      "age": 27
    },
    {
      "name": "Bruno Grgić",
      "club": "Everton",
      "nationality": "Hırvatistan",
      "value": 7750000,
      "rating": 76,
      "age": 20
    },
    {
      "name": "Devyne Rensch",
      "club": "Ajax",
      "nationality": "Hollanda",
      "value": 5250000,
      "rating": 75,
      "age": 23
    },
    {
      "name": "Luuk Smit",
      "club": "Brighton",
      "nationality": "Hollanda",
      "value": 5250000,
      "rating": 75,
      "age": 22
    },
    {
      "name": "Luka Horvat",
      "club": "Aston Villa",
      "nationality": "Hırvatistan",
      "value": 5250000,
      "rating": 75,
      "age": 21
    },
    {
      "name": "Thibault Michiels",
      "club": "Southampton",
      "nationality": "Belçika",
      "value": 3250000,
      "rating": 75,
      "age": 32
    },
    {
      "name": "Giacomo Testa",
      "club": "Feyenoord",
      "nationality": "İtalya",
      "value": 2000000,
      "rating": 75,
      "age": 34
    },
    {
      "name": "Vitor Ramos",
      "club": "Espanyol",
      "nationality": "Brezilya",
      "value": 5250000,
      "rating": 75,
      "age": 22
    },
    {
      "name": "Anders Holm",
      "club": "Nice",
      "nationality": "Danimarka",
      "value": 6000000,
      "rating": 75,
      "age": 20
    },
    {
      "name": "Alioune Diop",
      "club": "Real Sociedad",
      "nationality": "Senegal",
      "value": 4750000,
      "rating": 75,
      "age": 25
    },
    {
      "name": "Nemanja Nikolić",
      "club": "Nottingham Forest",
      "nationality": "Sırbistan",
      "value": 1500000,
      "rating": 74,
      "age": 33
    }
  ],
  "lb": [
    {
      "name": "Ayoub Sabri",
      "club": "Benfica",
      "nationality": "Fas",
      "value": 215500000,
      "rating": 91,
      "age": 29
    },
    {
      "name": "Lucas Marty",
      "club": "Celta Vigo",
      "nationality": "Fransa",
      "value": 220000000,
      "rating": 91,
      "age": 20
    },
    {
      "name": "Mateo Novak",
      "club": "Augsburg",
      "nationality": "Hırvatistan",
      "value": 68750000,
      "rating": 88,
      "age": 31
    },
    {
      "name": "Achraf Chakir",
      "club": "Benfica",
      "nationality": "Fas",
      "value": 91750000,
      "rating": 87,
      "age": 22
    },
    {
      "name": "Cem Aydın",
      "club": "Ajax",
      "nationality": "Türkiye",
      "value": 91750000,
      "rating": 87,
      "age": 23
    },
    {
      "name": "Alphonso Davies",
      "club": "Bayern Münih",
      "nationality": "Kanada",
      "value": 65750000,
      "rating": 86,
      "age": 25
    },
    {
      "name": "Theo Hernández",
      "club": "Milan",
      "nationality": "Fransa",
      "value": 65750000,
      "rating": 86,
      "age": 28
    },
    {
      "name": "Nuno Mendes",
      "club": "Paris Saint-Germain",
      "nationality": "Portekiz",
      "value": 72250000,
      "rating": 86,
      "age": 23
    },
    {
      "name": "Alejandro Grimaldo",
      "club": "Bayer Leverkusen",
      "nationality": "İspanya",
      "value": 33750000,
      "rating": 85,
      "age": 30
    },
    {
      "name": "Joaquín Aguirre",
      "club": "Brighton",
      "nationality": "Arjantin",
      "value": 20750000,
      "rating": 85,
      "age": 33
    },
    {
      "name": "Caio Costa",
      "club": "Bayer Leverkusen",
      "nationality": "Brezilya",
      "value": 64750000,
      "rating": 85,
      "age": 19
    },
    {
      "name": "Vladimir Đorđević",
      "club": "Twente",
      "nationality": "Sırbistan",
      "value": 51750000,
      "rating": 85,
      "age": 24
    },
    {
      "name": "Emil Holm",
      "club": "Club Brugge",
      "nationality": "Danimarka",
      "value": 40750000,
      "rating": 84,
      "age": 27
    },
    {
      "name": "Ferland Mendy",
      "club": "Real Madrid",
      "nationality": "Fransa",
      "value": 21000000,
      "rating": 83,
      "age": 30
    },
    {
      "name": "Arthur Willems",
      "club": "Villarreal",
      "nationality": "Belçika",
      "value": 21000000,
      "rating": 83,
      "age": 30
    },
    {
      "name": "Iver Lund",
      "club": "Southampton",
      "nationality": "Norveç",
      "value": 21000000,
      "rating": 83,
      "age": 32
    },
    {
      "name": "Destiny Udogie",
      "club": "Tottenham",
      "nationality": "İtalya",
      "value": 28000000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Marc Cucurella",
      "club": "Chelsea",
      "nationality": "İspanya",
      "value": 25500000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Cheikh Camara",
      "club": "Torino",
      "nationality": "Senegal",
      "value": 25500000,
      "rating": 82,
      "age": 29
    },
    {
      "name": "Baran Bulut",
      "club": "Atalanta",
      "nationality": "Türkiye",
      "value": 25500000,
      "rating": 82,
      "age": 28
    },
    {
      "name": "Petar Grgić",
      "club": "Braga",
      "nationality": "Hırvatistan",
      "value": 28000000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Alessandro Conti",
      "club": "Vitória Guimarães",
      "nationality": "İtalya",
      "value": 25500000,
      "rating": 82,
      "age": 26
    },
    {
      "name": "Younes Aubert",
      "club": "Eintracht Frankfurt",
      "nationality": "Fransa",
      "value": 25500000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Riccardo Ferraro",
      "club": "Bournemouth",
      "nationality": "İtalya",
      "value": 8000000,
      "rating": 81,
      "age": 34
    },
    {
      "name": "Nicola Gentile",
      "club": "Napoli",
      "nationality": "İtalya",
      "value": 22000000,
      "rating": 81,
      "age": 22
    },
    {
      "name": "Sander Dahl",
      "club": "Benfica",
      "nationality": "Norveç",
      "value": 22000000,
      "rating": 81,
      "age": 23
    },
    {
      "name": "Martin Hansen",
      "club": "Wolverhampton",
      "nationality": "Norveç",
      "value": 19750000,
      "rating": 80,
      "age": 19
    },
    {
      "name": "Emil Dahl",
      "club": "Newcastle United",
      "nationality": "Norveç",
      "value": 17500000,
      "rating": 80,
      "age": 23
    },
    {
      "name": "Uğur Yalçın",
      "club": "Angers",
      "nationality": "Türkiye",
      "value": 10250000,
      "rating": 80,
      "age": 30
    },
    {
      "name": "Ben Chilwell",
      "club": "Chelsea",
      "nationality": "İngiltere",
      "value": 12500000,
      "rating": 79,
      "age": 29
    },
    {
      "name": "Julian Ryerson",
      "club": "Borussia Dortmund",
      "nationality": "Norveç",
      "value": 12500000,
      "rating": 79,
      "age": 27
    },
    {
      "name": "Andrew Robertson",
      "club": "Liverpool",
      "nationality": "İskoçya",
      "value": 8000000,
      "rating": 79,
      "age": 31
    },
    {
      "name": "Raphaël Guerreiro",
      "club": "LA Galaxy",
      "nationality": "Portekiz",
      "value": 8000000,
      "rating": 79,
      "age": 32
    },
    {
      "name": "Rayan Lefevre",
      "club": "Lille",
      "nationality": "Fransa",
      "value": 15500000,
      "rating": 79,
      "age": 20
    },
    {
      "name": "Jelle Smit",
      "club": "Twente",
      "nationality": "Hollanda",
      "value": 13750000,
      "rating": 79,
      "age": 22
    },
    {
      "name": "Karim Kabbaj",
      "club": "PSV Eindhoven",
      "nationality": "Fas",
      "value": 13750000,
      "rating": 79,
      "age": 23
    },
    {
      "name": "Ángeliño",
      "club": "Beşiktaş",
      "nationality": "İspanya",
      "value": 9750000,
      "rating": 78,
      "age": 29
    },
    {
      "name": "Miguel Gutiérrez",
      "club": "Girona",
      "nationality": "İspanya",
      "value": 9750000,
      "rating": 78,
      "age": 24
    },
    {
      "name": "Simone Rossi",
      "club": "Nice",
      "nationality": "İtalya",
      "value": 6500000,
      "rating": 78,
      "age": 31
    },
    {
      "name": "Pablo García",
      "club": "Bournemouth",
      "nationality": "İspanya",
      "value": 6500000,
      "rating": 78,
      "age": 30
    },
    {
      "name": "Younes Moreau",
      "club": "Getafe",
      "nationality": "Fransa",
      "value": 4000000,
      "rating": 78,
      "age": 34
    },
    {
      "name": "Victor Lindgren",
      "club": "Cagliari",
      "nationality": "Danimarka",
      "value": 9750000,
      "rating": 78,
      "age": 27
    },
    {
      "name": "Tom Foster",
      "club": "Real Sociedad",
      "nationality": "İngiltere",
      "value": 6500000,
      "rating": 78,
      "age": 32
    },
    {
      "name": "Wendell",
      "club": "Porto",
      "nationality": "Brezilya",
      "value": 5000000,
      "rating": 77,
      "age": 32
    },
    {
      "name": "Iker Vidal",
      "club": "Strasbourg",
      "nationality": "İspanya",
      "value": 8500000,
      "rating": 77,
      "age": 21
    },
    {
      "name": "Yassine Chakir",
      "club": "Nice",
      "nationality": "Fas",
      "value": 7750000,
      "rating": 77,
      "age": 24
    },
    {
      "name": "Mitchel Bakker",
      "club": "Bayer Leverkusen",
      "nationality": "Hollanda",
      "value": 6000000,
      "rating": 76,
      "age": 26
    },
    {
      "name": "Sergio Gómez",
      "club": "Manchester City",
      "nationality": "İspanya",
      "value": 6000000,
      "rating": 76,
      "age": 25
    },
    {
      "name": "Fabiano Parisi",
      "club": "Fiorentina",
      "nationality": "İtalya",
      "value": 6000000,
      "rating": 76,
      "age": 24
    },
    {
      "name": "Kofi Yeboah",
      "club": "Udinese",
      "nationality": "Gana",
      "value": 7750000,
      "rating": 76,
      "age": 20
    },
    {
      "name": "Baran Erdoğan",
      "club": "West Ham",
      "nationality": "Türkiye",
      "value": 7750000,
      "rating": 76,
      "age": 20
    },
    {
      "name": "Roko Babić",
      "club": "Vitória Guimarães",
      "nationality": "Hırvatistan",
      "value": 6750000,
      "rating": 76,
      "age": 21
    },
    {
      "name": "William Olsson",
      "club": "Girona",
      "nationality": "İsveç",
      "value": 2500000,
      "rating": 76,
      "age": 34
    },
    {
      "name": "Mateo Rodríguez",
      "club": "Ipswich Town",
      "nationality": "Kolombiya",
      "value": 6750000,
      "rating": 76,
      "age": 22
    },
    {
      "name": "Bruno Aguirre",
      "club": "Leicester City",
      "nationality": "Arjantin",
      "value": 6750000,
      "rating": 76,
      "age": 23
    },
    {
      "name": "Cristiano Biraghi",
      "club": "Fiorentina",
      "nationality": "İtalya",
      "value": 2000000,
      "rating": 75,
      "age": 33
    },
    {
      "name": "Josip Horvat",
      "club": "Strasbourg",
      "nationality": "Hırvatistan",
      "value": 4750000,
      "rating": 75,
      "age": 25
    },
    {
      "name": "Louis Michiels",
      "club": "Sevilla",
      "nationality": "Belçika",
      "value": 4250000,
      "rating": 74,
      "age": 23
    },
    {
      "name": "Marcelo Rocha",
      "club": "Parma",
      "nationality": "Brezilya",
      "value": 3750000,
      "rating": 74,
      "age": 28
    },
    {
      "name": "Jonjoe Kenny",
      "club": "Everton",
      "nationality": "İngiltere",
      "value": 3000000,
      "rating": 73,
      "age": 29
    }
  ],
  "cb": [
    {
      "name": "Frank Asante",
      "club": "Vitória Guimarães",
      "nationality": "Gana",
      "value": 215500000,
      "rating": 91,
      "age": 25
    },
    {
      "name": "Paul Fiedler",
      "club": "Bologna",
      "nationality": "Almanya",
      "value": 220000000,
      "rating": 91,
      "age": 22
    },
    {
      "name": "Julian Werner",
      "club": "Newcastle United",
      "nationality": "Almanya",
      "value": 215500000,
      "rating": 91,
      "age": 25
    },
    {
      "name": "Ignacio Aguirre",
      "club": "Nice",
      "nationality": "Arjantin",
      "value": 186750000,
      "rating": 90,
      "age": 23
    },
    {
      "name": "Szymon Kowalski",
      "club": "Leicester City",
      "nationality": "Polonya",
      "value": 186750000,
      "rating": 90,
      "age": 21
    },
    {
      "name": "Stan de Jong",
      "club": "Lille",
      "nationality": "Hollanda",
      "value": 170000000,
      "rating": 90,
      "age": 26
    },
    {
      "name": "William Saliba",
      "club": "Arsenal",
      "nationality": "Fransa",
      "value": 105750000,
      "rating": 88,
      "age": 24
    },
    {
      "name": "Virgil van Dijk",
      "club": "Liverpool",
      "nationality": "Hollanda",
      "value": 42250000,
      "rating": 88,
      "age": 34
    },
    {
      "name": "Josko Gvardiol",
      "club": "Manchester City",
      "nationality": "Hırvatistan",
      "value": 91750000,
      "rating": 87,
      "age": 23
    },
    {
      "name": "Gabriel Magalhães",
      "club": "Arsenal",
      "nationality": "Brezilya",
      "value": 83250000,
      "rating": 87,
      "age": 28
    },
    {
      "name": "Álvaro Vidal",
      "club": "Brentford",
      "nationality": "İspanya",
      "value": 54250000,
      "rating": 87,
      "age": 32
    },
    {
      "name": "Dawid Baran",
      "club": "Parma",
      "nationality": "Polonya",
      "value": 83250000,
      "rating": 87,
      "age": 28
    },
    {
      "name": "Hakan Yalçın",
      "club": "Brentford",
      "nationality": "Türkiye",
      "value": 33250000,
      "rating": 87,
      "age": 34
    },
    {
      "name": "Ronald Araújo",
      "club": "Barcelona",
      "nationality": "Uruguay",
      "value": 65750000,
      "rating": 86,
      "age": 26
    },
    {
      "name": "Nicolás Suárez",
      "club": "Benfica",
      "nationality": "Arjantin",
      "value": 42750000,
      "rating": 86,
      "age": 32
    },
    {
      "name": "Serkan Aydın",
      "club": "Fiorentina",
      "nationality": "Türkiye",
      "value": 42750000,
      "rating": 86,
      "age": 30
    },
    {
      "name": "Antonio Rüdiger",
      "club": "Real Madrid",
      "nationality": "Almanya",
      "value": 33750000,
      "rating": 85,
      "age": 32
    },
    {
      "name": "Kim Min-jae",
      "club": "Bayern Münih",
      "nationality": "Güney Kore",
      "value": 51750000,
      "rating": 85,
      "age": 29
    },
    {
      "name": "Éder Militão",
      "club": "Real Madrid",
      "nationality": "Brezilya",
      "value": 51750000,
      "rating": 85,
      "age": 27
    },
    {
      "name": "Dayot Upamecano",
      "club": "Bayern Münih",
      "nationality": "Fransa",
      "value": 51750000,
      "rating": 85,
      "age": 26
    },
    {
      "name": "Pau Cubarsí",
      "club": "Barcelona",
      "nationality": "İspanya",
      "value": 64750000,
      "rating": 85,
      "age": 18
    },
    {
      "name": "Harry Turner",
      "club": "Real Sociedad",
      "nationality": "İngiltere",
      "value": 57000000,
      "rating": 85,
      "age": 23
    },
    {
      "name": "Santiago Molina",
      "club": "Mainz",
      "nationality": "Arjantin",
      "value": 51750000,
      "rating": 85,
      "age": 25
    },
    {
      "name": "Warrick Willems",
      "club": "Villarreal",
      "nationality": "Belçika",
      "value": 64750000,
      "rating": 85,
      "age": 19
    },
    {
      "name": "Micky van de Ven",
      "club": "Tottenham",
      "nationality": "Hollanda",
      "value": 40750000,
      "rating": 84,
      "age": 24
    },
    {
      "name": "Cristian Romero",
      "club": "Tottenham",
      "nationality": "Arjantin",
      "value": 40750000,
      "rating": 84,
      "age": 27
    },
    {
      "name": "Marko Vuković",
      "club": "Bologna",
      "nationality": "Hırvatistan",
      "value": 51000000,
      "rating": 84,
      "age": 20
    },
    {
      "name": "Robbe Dubois",
      "club": "Fiorentina",
      "nationality": "Belçika",
      "value": 26500000,
      "rating": 84,
      "age": 30
    },
    {
      "name": "Jonathan Tah",
      "club": "Bayer Leverkusen",
      "nationality": "Almanya",
      "value": 32250000,
      "rating": 83,
      "age": 29
    },
    {
      "name": "Yanis Lefevre",
      "club": "Ajax",
      "nationality": "Fransa",
      "value": 32250000,
      "rating": 83,
      "age": 25
    },
    {
      "name": "Alejandro Serrano",
      "club": "Toulouse",
      "nationality": "İspanya",
      "value": 35500000,
      "rating": 83,
      "age": 22
    },
    {
      "name": "Piero Hincapié",
      "club": "Arsenal",
      "nationality": "Ekvador",
      "value": 28000000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Nathan Aké",
      "club": "Manchester City",
      "nationality": "Hollanda",
      "value": 16500000,
      "rating": 82,
      "age": 30
    },
    {
      "name": "Marc Guéhi",
      "club": "Crystal Palace",
      "nationality": "İngiltere",
      "value": 25500000,
      "rating": 82,
      "age": 24
    },
    {
      "name": "Franco Gómez",
      "club": "Ipswich Town",
      "nationality": "Arjantin",
      "value": 10250000,
      "rating": 82,
      "age": 34
    },
    {
      "name": "Kevin Danso",
      "club": "Tottenham",
      "nationality": "Avusturya",
      "value": 20000000,
      "rating": 81,
      "age": 26
    },
    {
      "name": "Jean-Clair Todibo",
      "club": "Nice",
      "nationality": "Fransa",
      "value": 15750000,
      "rating": 80,
      "age": 25
    },
    {
      "name": "Mario Hermoso",
      "club": "RB Leipzig",
      "nationality": "İspanya",
      "value": 12500000,
      "rating": 79,
      "age": 29
    },
    {
      "name": "Fikayo Tomori",
      "club": "Milan",
      "nationality": "İngiltere",
      "value": 12500000,
      "rating": 79,
      "age": 27
    },
    {
      "name": "Tim Vogel",
      "club": "Getafe",
      "nationality": "Almanya",
      "value": 5000000,
      "rating": 79,
      "age": 33
    },
    {
      "name": "Willi Orbán",
      "club": "RB Leipzig",
      "nationality": "Macaristan",
      "value": 6500000,
      "rating": 78,
      "age": 32
    },
    {
      "name": "David Hoffmann",
      "club": "Lyon",
      "nationality": "Almanya",
      "value": 5000000,
      "rating": 77,
      "age": 30
    },
    {
      "name": "Raúl Serrano",
      "club": "Real Sociedad",
      "nationality": "İspanya",
      "value": 8500000,
      "rating": 77,
      "age": 21
    },
    {
      "name": "Ethan Grant",
      "club": "Napoli",
      "nationality": "İngiltere",
      "value": 8500000,
      "rating": 77,
      "age": 23
    },
    {
      "name": "Julian Wagner",
      "club": "Utrecht",
      "nationality": "Almanya",
      "value": 8500000,
      "rating": 77,
      "age": 23
    },
    {
      "name": "Alejandro Vidal",
      "club": "Villarreal",
      "nationality": "İspanya",
      "value": 4000000,
      "rating": 76,
      "age": 31
    },
    {
      "name": "Gustav Gustafsson",
      "club": "Toulouse",
      "nationality": "İsveç",
      "value": 7750000,
      "rating": 76,
      "age": 20
    },
    {
      "name": "Óscar Muñoz",
      "club": "Everton",
      "nationality": "İspanya",
      "value": 7750000,
      "rating": 76,
      "age": 19
    },
    {
      "name": "Håkon Larsen",
      "club": "Boavista",
      "nationality": "Norveç",
      "value": 7750000,
      "rating": 76,
      "age": 19
    },
    {
      "name": "Maximiliano Ríos",
      "club": "Southampton",
      "nationality": "Arjantin",
      "value": 6000000,
      "rating": 76,
      "age": 27
    },
    {
      "name": "Jan Bednarek",
      "club": "Southampton",
      "nationality": "Polonya",
      "value": 4750000,
      "rating": 75,
      "age": 29
    },
    {
      "name": "Filip Milošević",
      "club": "Fiorentina",
      "nationality": "Sırbistan",
      "value": 3250000,
      "rating": 75,
      "age": 30
    },
    {
      "name": "Esteban Ortiz",
      "club": "Crystal Palace",
      "nationality": "Kolombiya",
      "value": 6000000,
      "rating": 75,
      "age": 20
    },
    {
      "name": "Efe Doğan",
      "club": "Leicester City",
      "nationality": "Türkiye",
      "value": 5250000,
      "rating": 75,
      "age": 21
    },
    {
      "name": "Villads Vestergaard",
      "club": "PSV Eindhoven",
      "nationality": "Danimarka",
      "value": 5250000,
      "rating": 75,
      "age": 21
    },
    {
      "name": "Emil Poulsen",
      "club": "Strasbourg",
      "nationality": "Danimarka",
      "value": 4750000,
      "rating": 75,
      "age": 29
    },
    {
      "name": "André Ribeiro",
      "club": "Nice",
      "nationality": "Portekiz",
      "value": 3750000,
      "rating": 74,
      "age": 29
    },
    {
      "name": "Rayan Moreau",
      "club": "Sevilla",
      "nationality": "Fransa",
      "value": 4750000,
      "rating": 74,
      "age": 19
    },
    {
      "name": "Uroš Radovanović",
      "club": "Torino",
      "nationality": "Sırbistan",
      "value": 2500000,
      "rating": 74,
      "age": 31
    },
    {
      "name": "Adam Krawczyk",
      "club": "Reims",
      "nationality": "Polonya",
      "value": 3750000,
      "rating": 74,
      "age": 26
    }
  ],
  "dm": [
    {
      "name": "Rodri",
      "club": "Manchester City",
      "nationality": "İspanya",
      "value": 215500000,
      "rating": 91,
      "age": 29
    },
    {
      "name": "Declan Rice",
      "club": "Arsenal",
      "nationality": "İngiltere",
      "value": 134000000,
      "rating": 89,
      "age": 27
    },
    {
      "name": "Curtis Turner",
      "club": "West Ham",
      "nationality": "İngiltere",
      "value": 134000000,
      "rating": 89,
      "age": 27
    },
    {
      "name": "Finn Mulder",
      "club": "Nottingham Forest",
      "nationality": "Hollanda",
      "value": 42250000,
      "rating": 88,
      "age": 33
    },
    {
      "name": "Matías Fernández",
      "club": "Bayer Leverkusen",
      "nationality": "Arjantin",
      "value": 132000000,
      "rating": 88,
      "age": 19
    },
    {
      "name": "Dario Barišić",
      "club": "Sevilla",
      "nationality": "Hırvatistan",
      "value": 105750000,
      "rating": 88,
      "age": 24
    },
    {
      "name": "Aurélien Tchouaméni",
      "club": "Real Madrid",
      "nationality": "Fransa",
      "value": 83250000,
      "rating": 87,
      "age": 25
    },
    {
      "name": "Lukas Lang",
      "club": "Lille",
      "nationality": "Almanya",
      "value": 83250000,
      "rating": 87,
      "age": 25
    },
    {
      "name": "Igor Barbosa",
      "club": "Nice",
      "nationality": "Brezilya",
      "value": 65750000,
      "rating": 86,
      "age": 25
    },
    {
      "name": "Moisés Caicedo",
      "club": "Chelsea",
      "nationality": "Ekvador",
      "value": 51750000,
      "rating": 85,
      "age": 24
    },
    {
      "name": "Nicolò Barella",
      "club": "Inter",
      "nationality": "İtalya",
      "value": 51750000,
      "rating": 85,
      "age": 28
    },
    {
      "name": "Martín Zubimendi",
      "club": "Arsenal",
      "nationality": "İspanya",
      "value": 40750000,
      "rating": 84,
      "age": 26
    },
    {
      "name": "João Neves",
      "club": "Paris Saint-Germain",
      "nationality": "Portekiz",
      "value": 45000000,
      "rating": 84,
      "age": 21
    },
    {
      "name": "Enzo Fernández",
      "club": "Chelsea",
      "nationality": "Arjantin",
      "value": 40750000,
      "rating": 84,
      "age": 24
    },
    {
      "name": "Sandro Tonali",
      "club": "Newcastle United",
      "nationality": "İtalya",
      "value": 32250000,
      "rating": 83,
      "age": 25
    },
    {
      "name": "Ryan Turner",
      "club": "Brighton",
      "nationality": "İngiltere",
      "value": 40250000,
      "rating": 83,
      "age": 20
    },
    {
      "name": "Adrián Delgado",
      "club": "Nottingham Forest",
      "nationality": "İspanya",
      "value": 32250000,
      "rating": 83,
      "age": 28
    },
    {
      "name": "Manuel Ugarte",
      "club": "Manchester United",
      "nationality": "Uruguay",
      "value": 25500000,
      "rating": 82,
      "age": 24
    },
    {
      "name": "Marcelo Brozović",
      "club": "Al-Nassr",
      "nationality": "Hırvatistan",
      "value": 10250000,
      "rating": 82,
      "age": 33
    },
    {
      "name": "Amadou Onana",
      "club": "Aston Villa",
      "nationality": "Belçika",
      "value": 25500000,
      "rating": 82,
      "age": 24
    },
    {
      "name": "Warren Zaïre-Emery",
      "club": "Paris Saint-Germain",
      "nationality": "Fransa",
      "value": 31750000,
      "rating": 82,
      "age": 20
    },
    {
      "name": "Hugo Navas",
      "club": "Brentford",
      "nationality": "İspanya",
      "value": 10250000,
      "rating": 82,
      "age": 33
    },
    {
      "name": "Youssouf Fofana",
      "club": "Milan",
      "nationality": "Fransa",
      "value": 20000000,
      "rating": 81,
      "age": 26
    },
    {
      "name": "Idrissa Diallo",
      "club": "Real Sociedad",
      "nationality": "Senegal",
      "value": 20000000,
      "rating": 81,
      "age": 25
    },
    {
      "name": "Milo Maes",
      "club": "Newcastle United",
      "nationality": "Belçika",
      "value": 22000000,
      "rating": 81,
      "age": 21
    },
    {
      "name": "Kristian Berg",
      "club": "Wolfsburg",
      "nationality": "Norveç",
      "value": 20000000,
      "rating": 81,
      "age": 28
    },
    {
      "name": "Mathis Lefevre",
      "club": "Ajax",
      "nationality": "Fransa",
      "value": 20000000,
      "rating": 81,
      "age": 28
    },
    {
      "name": "Aaron Clarke",
      "club": "Lille",
      "nationality": "İngiltere",
      "value": 25000000,
      "rating": 81,
      "age": 20
    },
    {
      "name": "Younes Marchand",
      "club": "Nottingham Forest",
      "nationality": "Fransa",
      "value": 25000000,
      "rating": 81,
      "age": 20
    },
    {
      "name": "Mateusz Zieliński",
      "club": "Sporting CP",
      "nationality": "Polonya",
      "value": 20000000,
      "rating": 81,
      "age": 26
    },
    {
      "name": "Wojciech Zieliński",
      "club": "Feyenoord",
      "nationality": "Polonya",
      "value": 8000000,
      "rating": 81,
      "age": 33
    },
    {
      "name": "Wilfred Ndidi",
      "club": "Beşiktaş",
      "nationality": "Nijerya",
      "value": 15750000,
      "rating": 80,
      "age": 28
    },
    {
      "name": "Adrien Rabiot",
      "club": "Marsilya",
      "nationality": "Fransa",
      "value": 10250000,
      "rating": 80,
      "age": 30
    },
    {
      "name": "Miloš Petrović",
      "club": "Betis",
      "nationality": "Sırbistan",
      "value": 10250000,
      "rating": 80,
      "age": 32
    },
    {
      "name": "Bruno Barišić",
      "club": "Sporting CP",
      "nationality": "Hırvatistan",
      "value": 10250000,
      "rating": 80,
      "age": 32
    },
    {
      "name": "Tobias Lund",
      "club": "Toulouse",
      "nationality": "Norveç",
      "value": 15750000,
      "rating": 80,
      "age": 29
    },
    {
      "name": "Sofyan Amrabat",
      "club": "Fenerbahçe",
      "nationality": "Fas",
      "value": 12500000,
      "rating": 79,
      "age": 29
    },
    {
      "name": "Matteo Gentile",
      "club": "Hoffenheim",
      "nationality": "İtalya",
      "value": 15500000,
      "rating": 79,
      "age": 20
    },
    {
      "name": "Stefano Bruno",
      "club": "Aston Villa",
      "nationality": "İtalya",
      "value": 12500000,
      "rating": 79,
      "age": 25
    },
    {
      "name": "Daniel Asante",
      "club": "Betis",
      "nationality": "Gana",
      "value": 15500000,
      "rating": 79,
      "age": 19
    },
    {
      "name": "Renato Veiga",
      "club": "Chelsea",
      "nationality": "Portekiz",
      "value": 10750000,
      "rating": 78,
      "age": 22
    },
    {
      "name": "Konstantinos Tsimikas",
      "club": "Liverpool",
      "nationality": "Yunanistan",
      "value": 9750000,
      "rating": 78,
      "age": 29
    },
    {
      "name": "İsmaël Bennacer",
      "club": "Milan",
      "nationality": "Cezayir",
      "value": 9750000,
      "rating": 78,
      "age": 27
    },
    {
      "name": "Boubacar Ba",
      "club": "Fulham",
      "nationality": "Senegal",
      "value": 9750000,
      "rating": 78,
      "age": 28
    },
    {
      "name": "Kaique Nascimento",
      "club": "AZ Alkmaar",
      "nationality": "Brezilya",
      "value": 10750000,
      "rating": 78,
      "age": 21
    },
    {
      "name": "Joe Foster",
      "club": "Leicester City",
      "nationality": "İngiltere",
      "value": 12250000,
      "rating": 78,
      "age": 19
    },
    {
      "name": "Hugo Bonnet",
      "club": "Wolfsburg",
      "nationality": "Fransa",
      "value": 3000000,
      "rating": 77,
      "age": 34
    },
    {
      "name": "Bram Bakker",
      "club": "Mainz",
      "nationality": "Hollanda",
      "value": 9750000,
      "rating": 77,
      "age": 20
    },
    {
      "name": "Rayan Amrani",
      "club": "Wolfsburg",
      "nationality": "Fas",
      "value": 4000000,
      "rating": 76,
      "age": 30
    },
    {
      "name": "Boubacar Mbaye",
      "club": "Wolfsburg",
      "nationality": "Senegal",
      "value": 7750000,
      "rating": 76,
      "age": 19
    },
    {
      "name": "Michael Owusu",
      "club": "Leicester City",
      "nationality": "Gana",
      "value": 4000000,
      "rating": 76,
      "age": 30
    },
    {
      "name": "Samuel Danso",
      "club": "Wolverhampton",
      "nationality": "Gana",
      "value": 6750000,
      "rating": 76,
      "age": 22
    },
    {
      "name": "Emanuele Bruno",
      "club": "West Ham",
      "nationality": "İtalya",
      "value": 6750000,
      "rating": 76,
      "age": 23
    },
    {
      "name": "Amine Kabbaj",
      "club": "Bologna",
      "nationality": "Fas",
      "value": 4750000,
      "rating": 75,
      "age": 25
    },
    {
      "name": "Luka Novak",
      "club": "Strasbourg",
      "nationality": "Hırvatistan",
      "value": 5250000,
      "rating": 75,
      "age": 22
    },
    {
      "name": "Curtis Hughes",
      "club": "Osasuna",
      "nationality": "İngiltere",
      "value": 4750000,
      "rating": 75,
      "age": 29
    },
    {
      "name": "Rasmus Overgaard",
      "club": "Bayer Leverkusen",
      "nationality": "Danimarka",
      "value": 2000000,
      "rating": 75,
      "age": 33
    },
    {
      "name": "Kwame Boateng",
      "club": "Sevilla",
      "nationality": "Gana",
      "value": 6000000,
      "rating": 75,
      "age": 20
    },
    {
      "name": "Modou Diop",
      "club": "Celta Vigo",
      "nationality": "Senegal",
      "value": 4750000,
      "rating": 75,
      "age": 27
    },
    {
      "name": "Sergio Muñoz",
      "club": "Werder Bremen",
      "nationality": "İspanya",
      "value": 4250000,
      "rating": 74,
      "age": 21
    }
  ],
  "rw": [
    {
      "name": "Karlo Kovačić",
      "club": "Club Brugge",
      "nationality": "Hırvatistan",
      "value": 86250000,
      "rating": 91,
      "age": 34
    },
    {
      "name": "Bukayo Saka",
      "club": "Arsenal",
      "nationality": "İngiltere",
      "value": 170000000,
      "rating": 90,
      "age": 24
    },
    {
      "name": "Mohamed Salah",
      "club": "Liverpool",
      "nationality": "Mısır",
      "value": 68000000,
      "rating": 90,
      "age": 33
    },
    {
      "name": "Aleksandar Ristić",
      "club": "Celta Vigo",
      "nationality": "Sırbistan",
      "value": 186750000,
      "rating": 90,
      "age": 23
    },
    {
      "name": "Óscar Cabrera",
      "club": "Auxerre",
      "nationality": "İspanya",
      "value": 170000000,
      "rating": 90,
      "age": 26
    },
    {
      "name": "Ege Aksoy",
      "club": "Aston Villa",
      "nationality": "Türkiye",
      "value": 170000000,
      "rating": 90,
      "age": 26
    },
    {
      "name": "Raphinha",
      "club": "Barcelona",
      "nationality": "Brezilya",
      "value": 134000000,
      "rating": 89,
      "age": 28
    },
    {
      "name": "Ignacio Gómez",
      "club": "Aston Villa",
      "nationality": "Arjantin",
      "value": 147250000,
      "rating": 89,
      "age": 22
    },
    {
      "name": "Oliver Poulsen",
      "club": "Newcastle United",
      "nationality": "Danimarka",
      "value": 105750000,
      "rating": 88,
      "age": 26
    },
    {
      "name": "Renan Nascimento",
      "club": "Atalanta",
      "nationality": "Brezilya",
      "value": 68750000,
      "rating": 88,
      "age": 31
    },
    {
      "name": "Nicolás Gómez",
      "club": "Brentford",
      "nationality": "Arjantin",
      "value": 83250000,
      "rating": 87,
      "age": 29
    },
    {
      "name": "Bruno Baptista",
      "club": "Freiburg",
      "nationality": "Portekiz",
      "value": 54250000,
      "rating": 87,
      "age": 32
    },
    {
      "name": "Duarte Moura",
      "club": "Betis",
      "nationality": "Portekiz",
      "value": 91750000,
      "rating": 87,
      "age": 21
    },
    {
      "name": "Rafael Leão",
      "club": "Milan",
      "nationality": "Portekiz",
      "value": 65750000,
      "rating": 86,
      "age": 26
    },
    {
      "name": "Arda Aksoy",
      "club": "Monaco",
      "nationality": "Türkiye",
      "value": 72250000,
      "rating": 86,
      "age": 23
    },
    {
      "name": "Nico Williams",
      "club": "Athletic Bilbao",
      "nationality": "İspanya",
      "value": 57000000,
      "rating": 85,
      "age": 23
    },
    {
      "name": "Ademola Lookman",
      "club": "Atalanta",
      "nationality": "Nijerya",
      "value": 40750000,
      "rating": 84,
      "age": 27
    },
    {
      "name": "Bradley Barcola",
      "club": "Paris Saint-Germain",
      "nationality": "Fransa",
      "value": 45000000,
      "rating": 84,
      "age": 22
    },
    {
      "name": "Villads Lindgren",
      "club": "Sporting CP",
      "nationality": "Danimarka",
      "value": 40750000,
      "rating": 84,
      "age": 27
    },
    {
      "name": "Bryan Mbeumo",
      "club": "Manchester United",
      "nationality": "Kamerun",
      "value": 32250000,
      "rating": 83,
      "age": 25
    },
    {
      "name": "Krystian Krawczyk",
      "club": "Lille",
      "nationality": "Polonya",
      "value": 13000000,
      "rating": 83,
      "age": 33
    },
    {
      "name": "Oscar Åberg",
      "club": "Angers",
      "nationality": "İsveç",
      "value": 21000000,
      "rating": 83,
      "age": 31
    },
    {
      "name": "Noni Madueke",
      "club": "Arsenal",
      "nationality": "İngiltere",
      "value": 28000000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Jarrod Bowen",
      "club": "West Ham",
      "nationality": "İngiltere",
      "value": 25500000,
      "rating": 82,
      "age": 28
    },
    {
      "name": "Warrick Janssens",
      "club": "Monaco",
      "nationality": "Belçika",
      "value": 16500000,
      "rating": 82,
      "age": 32
    },
    {
      "name": "Mikkel Madsen",
      "club": "Brentford",
      "nationality": "Danimarka",
      "value": 28000000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Vasco Baptista",
      "club": "Hoffenheim",
      "nationality": "Portekiz",
      "value": 25500000,
      "rating": 82,
      "age": 24
    },
    {
      "name": "Karim Adeyemi",
      "club": "Borussia Dortmund",
      "nationality": "Almanya",
      "value": 20000000,
      "rating": 81,
      "age": 24
    },
    {
      "name": "Gabriele Ferraro",
      "club": "Bologna",
      "nationality": "İtalya",
      "value": 13000000,
      "rating": 81,
      "age": 30
    },
    {
      "name": "Callum Bailey",
      "club": "Crystal Palace",
      "nationality": "İngiltere",
      "value": 8000000,
      "rating": 81,
      "age": 33
    },
    {
      "name": "Esteban Cardona",
      "club": "Angers",
      "nationality": "Kolombiya",
      "value": 22000000,
      "rating": 81,
      "age": 22
    },
    {
      "name": "Juan Castro",
      "club": "Everton",
      "nationality": "Kolombiya",
      "value": 25000000,
      "rating": 81,
      "age": 19
    },
    {
      "name": "Ege Bulut",
      "club": "Newcastle United",
      "nationality": "Türkiye",
      "value": 13000000,
      "rating": 81,
      "age": 32
    },
    {
      "name": "Iñaki Williams",
      "club": "Athletic Bilbao",
      "nationality": "Gana",
      "value": 10250000,
      "rating": 80,
      "age": 31
    },
    {
      "name": "Nathan De Smet",
      "club": "Napoli",
      "nationality": "Belçika",
      "value": 6250000,
      "rating": 80,
      "age": 33
    },
    {
      "name": "Felipe Souza",
      "club": "Genoa",
      "nationality": "Brezilya",
      "value": 15750000,
      "rating": 80,
      "age": 27
    },
    {
      "name": "Kristian Kristoffersen",
      "club": "Braga",
      "nationality": "Norveç",
      "value": 15750000,
      "rating": 80,
      "age": 29
    },
    {
      "name": "Malick Fofana",
      "club": "Lyon",
      "nationality": "Belçika",
      "value": 15500000,
      "rating": 79,
      "age": 20
    },
    {
      "name": "Amine Gouiri",
      "club": "Marsilya",
      "nationality": "Fransa",
      "value": 12500000,
      "rating": 79,
      "age": 25
    },
    {
      "name": "Berkay Bulut",
      "club": "Torino",
      "nationality": "Türkiye",
      "value": 15500000,
      "rating": 79,
      "age": 19
    },
    {
      "name": "Đorđe Milošević",
      "club": "Freiburg",
      "nationality": "Sırbistan",
      "value": 5000000,
      "rating": 79,
      "age": 33
    },
    {
      "name": "Antony",
      "club": "Real Betis",
      "nationality": "Brezilya",
      "value": 9750000,
      "rating": 78,
      "age": 25
    },
    {
      "name": "Jadon Sancho",
      "club": "Aston Villa",
      "nationality": "İngiltere",
      "value": 9750000,
      "rating": 78,
      "age": 25
    },
    {
      "name": "Ismaïla Sarr",
      "club": "Crystal Palace",
      "nationality": "Senegal",
      "value": 9750000,
      "rating": 78,
      "age": 27
    },
    {
      "name": "Yankuba Minteh",
      "club": "Brighton",
      "nationality": "Gambiya",
      "value": 12250000,
      "rating": 78,
      "age": 20
    },
    {
      "name": "Duarte Machado",
      "club": "Real Sociedad",
      "nationality": "Portekiz",
      "value": 9750000,
      "rating": 78,
      "age": 26
    },
    {
      "name": "Pedro Teixeira",
      "club": "Angers",
      "nationality": "Portekiz",
      "value": 7750000,
      "rating": 77,
      "age": 28
    },
    {
      "name": "Magnus Olsen",
      "club": "Union Berlin",
      "nationality": "Norveç",
      "value": 7750000,
      "rating": 77,
      "age": 28
    },
    {
      "name": "Oliver Sørensen",
      "club": "Lyon",
      "nationality": "Danimarka",
      "value": 7750000,
      "rating": 77,
      "age": 28
    },
    {
      "name": "Sander Lund",
      "club": "Vitória Guimarães",
      "nationality": "Norveç",
      "value": 8500000,
      "rating": 77,
      "age": 21
    },
    {
      "name": "Facundo Buonanotte",
      "club": "Brighton",
      "nationality": "Arjantin",
      "value": 6750000,
      "rating": 76,
      "age": 21
    },
    {
      "name": "Abdoulaye Sow",
      "club": "Celta Vigo",
      "nationality": "Senegal",
      "value": 6750000,
      "rating": 76,
      "age": 21
    },
    {
      "name": "Joe Smith",
      "club": "Villarreal",
      "nationality": "İngiltere",
      "value": 6000000,
      "rating": 76,
      "age": 25
    },
    {
      "name": "Wesley Rocha",
      "club": "Villarreal",
      "nationality": "Brezilya",
      "value": 6000000,
      "rating": 76,
      "age": 27
    },
    {
      "name": "Miloš Ilić",
      "club": "Napoli",
      "nationality": "Sırbistan",
      "value": 6750000,
      "rating": 76,
      "age": 21
    },
    {
      "name": "Finn Lang",
      "club": "Nottingham Forest",
      "nationality": "Almanya",
      "value": 5250000,
      "rating": 75,
      "age": 21
    },
    {
      "name": "Arthur Jacobs",
      "club": "Freiburg",
      "nationality": "Belçika",
      "value": 5250000,
      "rating": 75,
      "age": 21
    },
    {
      "name": "Federico Barbieri",
      "club": "Club Brugge",
      "nationality": "İtalya",
      "value": 4750000,
      "rating": 74,
      "age": 19
    },
    {
      "name": "Bright Appiah",
      "club": "Union Berlin",
      "nationality": "Gana",
      "value": 4750000,
      "rating": 74,
      "age": 20
    },
    {
      "name": "Mateo Kovačić",
      "club": "Rennes",
      "nationality": "Hırvatistan",
      "value": 2500000,
      "rating": 74,
      "age": 32
    }
  ],
  "cam": [
    {
      "name": "Jude Bellingham",
      "club": "Real Madrid",
      "nationality": "İngiltere",
      "value": 220000000,
      "rating": 91,
      "age": 22
    },
    {
      "name": "Caio Nascimento",
      "club": "Stuttgart",
      "nationality": "Brezilya",
      "value": 140000000,
      "rating": 91,
      "age": 30
    },
    {
      "name": "Noah Marty",
      "club": "Monaco",
      "nationality": "Fransa",
      "value": 220000000,
      "rating": 91,
      "age": 19
    },
    {
      "name": "Douglas Alves",
      "club": "Rennes",
      "nationality": "Brezilya",
      "value": 134000000,
      "rating": 89,
      "age": 25
    },
    {
      "name": "Florian Wirtz",
      "club": "Liverpool",
      "nationality": "Almanya",
      "value": 116250000,
      "rating": 88,
      "age": 22
    },
    {
      "name": "Martin Ødegaard",
      "club": "Arsenal",
      "nationality": "Norveç",
      "value": 105750000,
      "rating": 88,
      "age": 27
    },
    {
      "name": "Pedri",
      "club": "Barcelona",
      "nationality": "İspanya",
      "value": 116250000,
      "rating": 88,
      "age": 22
    },
    {
      "name": "Simone Bruno",
      "club": "Nice",
      "nationality": "İtalya",
      "value": 116250000,
      "rating": 88,
      "age": 21
    },
    {
      "name": "Kevin De Bruyne",
      "club": "Napoli",
      "nationality": "Belçika",
      "value": 33250000,
      "rating": 87,
      "age": 34
    },
    {
      "name": "Cole Palmer",
      "club": "Chelsea",
      "nationality": "İngiltere",
      "value": 91750000,
      "rating": 87,
      "age": 23
    },
    {
      "name": "Sven Willems",
      "club": "Werder Bremen",
      "nationality": "Hollanda",
      "value": 83250000,
      "rating": 87,
      "age": 26
    },
    {
      "name": "Joaquín Peralta",
      "club": "Wolfsburg",
      "nationality": "Arjantin",
      "value": 42750000,
      "rating": 86,
      "age": 30
    },
    {
      "name": "Kai Havertz",
      "club": "Arsenal",
      "nationality": "Almanya",
      "value": 51750000,
      "rating": 85,
      "age": 26
    },
    {
      "name": "Paulo Dybala",
      "club": "Roma",
      "nationality": "Arjantin",
      "value": 33750000,
      "rating": 85,
      "age": 32
    },
    {
      "name": "Dominik Szoboszlai",
      "club": "Liverpool",
      "nationality": "Macaristan",
      "value": 51750000,
      "rating": 85,
      "age": 25
    },
    {
      "name": "Victor Michiels",
      "club": "Ipswich Town",
      "nationality": "Belçika",
      "value": 57000000,
      "rating": 85,
      "age": 22
    },
    {
      "name": "Rodrigo Rocha",
      "club": "Brighton",
      "nationality": "Brezilya",
      "value": 57000000,
      "rating": 85,
      "age": 23
    },
    {
      "name": "Iker Navas",
      "club": "Reims",
      "nationality": "İspanya",
      "value": 16250000,
      "rating": 84,
      "age": 33
    },
    {
      "name": "James Maddison",
      "club": "Tottenham",
      "nationality": "İngiltere",
      "value": 32250000,
      "rating": 83,
      "age": 29
    },
    {
      "name": "Noa Claes",
      "club": "Real Sociedad",
      "nationality": "Belçika",
      "value": 13000000,
      "rating": 83,
      "age": 33
    },
    {
      "name": "Anders Lindgren",
      "club": "Lazio",
      "nationality": "Danimarka",
      "value": 21000000,
      "rating": 83,
      "age": 32
    },
    {
      "name": "Lamine Diop",
      "club": "Crystal Palace",
      "nationality": "Senegal",
      "value": 35500000,
      "rating": 83,
      "age": 22
    },
    {
      "name": "Arda Güler",
      "club": "Real Madrid",
      "nationality": "Türkiye",
      "value": 31750000,
      "rating": 82,
      "age": 20
    },
    {
      "name": "Eberechi Eze",
      "club": "Arsenal",
      "nationality": "İngiltere",
      "value": 25500000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Matheus Pereira",
      "club": "Nottingham Forest",
      "nationality": "Brezilya",
      "value": 10250000,
      "rating": 82,
      "age": 33
    },
    {
      "name": "Amir Dubois",
      "club": "Fulham",
      "nationality": "Belçika",
      "value": 28000000,
      "rating": 82,
      "age": 22
    },
    {
      "name": "Lucas Paquetá",
      "club": "West Ham",
      "nationality": "Brezilya",
      "value": 20000000,
      "rating": 81,
      "age": 27
    },
    {
      "name": "Thibault Claes",
      "club": "Brentford",
      "nationality": "Belçika",
      "value": 8000000,
      "rating": 81,
      "age": 34
    },
    {
      "name": "Nabil Idrissi",
      "club": "Atalanta",
      "nationality": "Fas",
      "value": 8000000,
      "rating": 81,
      "age": 33
    },
    {
      "name": "Achraf Ziani",
      "club": "Twente",
      "nationality": "Fas",
      "value": 20000000,
      "rating": 81,
      "age": 27
    },
    {
      "name": "Michał Krawczyk",
      "club": "Nottingham Forest",
      "nationality": "Polonya",
      "value": 20000000,
      "rating": 81,
      "age": 25
    },
    {
      "name": "Connor Baker",
      "club": "Espanyol",
      "nationality": "İngiltere",
      "value": 13000000,
      "rating": 81,
      "age": 30
    },
    {
      "name": "Christian Eriksen",
      "club": "Manchester United",
      "nationality": "Danimarka",
      "value": 6250000,
      "rating": 80,
      "age": 34
    },
    {
      "name": "Nico Paz",
      "club": "Como",
      "nationality": "Arjantin",
      "value": 17500000,
      "rating": 80,
      "age": 21
    },
    {
      "name": "Morgan Gibbs-White",
      "club": "Nottingham Forest",
      "nationality": "İngiltere",
      "value": 15750000,
      "rating": 80,
      "age": 25
    },
    {
      "name": "Kang-in Lee",
      "club": "Paris Saint-Germain",
      "nationality": "Güney Kore",
      "value": 15750000,
      "rating": 80,
      "age": 24
    },
    {
      "name": "Jesse Visser",
      "club": "Aston Villa",
      "nationality": "Hollanda",
      "value": 10250000,
      "rating": 80,
      "age": 32
    },
    {
      "name": "Soufiane El Amrani",
      "club": "Atalanta",
      "nationality": "Fas",
      "value": 15750000,
      "rating": 80,
      "age": 28
    },
    {
      "name": "Diogo Moura",
      "club": "Villarreal",
      "nationality": "Portekiz",
      "value": 6250000,
      "rating": 80,
      "age": 33
    },
    {
      "name": "Kristian Dahl",
      "club": "Twente",
      "nationality": "Norveç",
      "value": 15750000,
      "rating": 80,
      "age": 25
    },
    {
      "name": "Aaron Smith",
      "club": "Stuttgart",
      "nationality": "İngiltere",
      "value": 15750000,
      "rating": 80,
      "age": 25
    },
    {
      "name": "Damian Kamiński",
      "club": "West Ham",
      "nationality": "Polonya",
      "value": 15750000,
      "rating": 80,
      "age": 29
    },
    {
      "name": "Adam Persson",
      "club": "Toulouse",
      "nationality": "İsveç",
      "value": 10250000,
      "rating": 80,
      "age": 31
    },
    {
      "name": "Ryan Ford",
      "club": "Strasbourg",
      "nationality": "İngiltere",
      "value": 15750000,
      "rating": 80,
      "age": 25
    },
    {
      "name": "Rúben Pereira",
      "club": "Bournemouth",
      "nationality": "Portekiz",
      "value": 8000000,
      "rating": 79,
      "age": 30
    },
    {
      "name": "Lucas Suárez",
      "club": "Betis",
      "nationality": "Arjantin",
      "value": 6500000,
      "rating": 78,
      "age": 30
    },
    {
      "name": "Théo Lefevre",
      "club": "Getafe",
      "nationality": "Fransa",
      "value": 9750000,
      "rating": 78,
      "age": 28
    },
    {
      "name": "Efe Polat",
      "club": "Como",
      "nationality": "Türkiye",
      "value": 7750000,
      "rating": 77,
      "age": 26
    },
    {
      "name": "Amir Maes",
      "club": "Augsburg",
      "nationality": "Belçika",
      "value": 7750000,
      "rating": 77,
      "age": 25
    },
    {
      "name": "Dawid Zieliński",
      "club": "Angers",
      "nationality": "Polonya",
      "value": 8500000,
      "rating": 77,
      "age": 21
    },
    {
      "name": "Nicolò Zaniolo",
      "club": "Fiorentina",
      "nationality": "İtalya",
      "value": 6000000,
      "rating": 76,
      "age": 26
    },
    {
      "name": "Giovanni Reyna",
      "club": "Borussia Dortmund",
      "nationality": "ABD",
      "value": 6000000,
      "rating": 76,
      "age": 24
    },
    {
      "name": "Yusuf Polat",
      "club": "Toulouse",
      "nationality": "Türkiye",
      "value": 2500000,
      "rating": 76,
      "age": 34
    },
    {
      "name": "Jack Turner",
      "club": "Sevilla",
      "nationality": "İngiltere",
      "value": 6750000,
      "rating": 76,
      "age": 23
    },
    {
      "name": "Noud Kramer",
      "club": "Napoli",
      "nationality": "Hollanda",
      "value": 4000000,
      "rating": 76,
      "age": 31
    },
    {
      "name": "Filip Blažević",
      "club": "Villarreal",
      "nationality": "Hırvatistan",
      "value": 6000000,
      "rating": 76,
      "age": 24
    },
    {
      "name": "Fredrik Andersen",
      "club": "Genoa",
      "nationality": "Norveç",
      "value": 4750000,
      "rating": 75,
      "age": 27
    },
    {
      "name": "Nicolás Zapata",
      "club": "Le Havre",
      "nationality": "Kolombiya",
      "value": 4750000,
      "rating": 75,
      "age": 27
    },
    {
      "name": "Reiss Nelson",
      "club": "Fulham",
      "nationality": "İngiltere",
      "value": 3750000,
      "rating": 74,
      "age": 25
    },
    {
      "name": "Vitor Nascimento",
      "club": "Rennes",
      "nationality": "Brezilya",
      "value": 2500000,
      "rating": 74,
      "age": 30
    }
  ],
  "lw": [
    {
      "name": "Vinícius Júnior",
      "club": "Real Madrid",
      "nationality": "Brezilya",
      "value": 215500000,
      "rating": 91,
      "age": 25
    },
    {
      "name": "Finn Krause",
      "club": "Wolfsburg",
      "nationality": "Almanya",
      "value": 215500000,
      "rating": 91,
      "age": 26
    },
    {
      "name": "Bartosz Dąbrowski",
      "club": "Auxerre",
      "nationality": "Polonya",
      "value": 170000000,
      "rating": 90,
      "age": 29
    },
    {
      "name": "Lamine Yamal",
      "club": "Barcelona",
      "nationality": "İspanya",
      "value": 167500000,
      "rating": 89,
      "age": 18
    },
    {
      "name": "Marco Rossi",
      "club": "Club Brugge",
      "nationality": "İtalya",
      "value": 105750000,
      "rating": 88,
      "age": 29
    },
    {
      "name": "Achraf Rachidi",
      "club": "Villarreal",
      "nationality": "Fas",
      "value": 105750000,
      "rating": 88,
      "age": 25
    },
    {
      "name": "Mateo Torres",
      "club": "West Ham",
      "nationality": "Kolombiya",
      "value": 105750000,
      "rating": 88,
      "age": 24
    },
    {
      "name": "Lazar Radovanović",
      "club": "Atalanta",
      "nationality": "Sırbistan",
      "value": 33250000,
      "rating": 87,
      "age": 34
    },
    {
      "name": "Harry Baker",
      "club": "Eintracht Frankfurt",
      "nationality": "İngiltere",
      "value": 91750000,
      "rating": 87,
      "age": 22
    },
    {
      "name": "Idrissa Diagne",
      "club": "Benfica",
      "nationality": "Senegal",
      "value": 83250000,
      "rating": 87,
      "age": 27
    },
    {
      "name": "Michael Olise",
      "club": "Bayern Münih",
      "nationality": "Fransa",
      "value": 65750000,
      "rating": 86,
      "age": 24
    },
    {
      "name": "Rodrygo",
      "club": "Real Madrid",
      "nationality": "Brezilya",
      "value": 65750000,
      "rating": 86,
      "age": 24
    },
    {
      "name": "Julian Krüger",
      "club": "Betis",
      "nationality": "Almanya",
      "value": 72250000,
      "rating": 86,
      "age": 23
    },
    {
      "name": "Ryan Grant",
      "club": "Ajax",
      "nationality": "İngiltere",
      "value": 42750000,
      "rating": 86,
      "age": 31
    },
    {
      "name": "Wesley Nascimento",
      "club": "Ipswich Town",
      "nationality": "Brezilya",
      "value": 57000000,
      "rating": 85,
      "age": 21
    },
    {
      "name": "Jeremy Doku",
      "club": "Manchester City",
      "nationality": "Belçika",
      "value": 45000000,
      "rating": 84,
      "age": 23
    },
    {
      "name": "Anthony Gordon",
      "club": "Newcastle United",
      "nationality": "İngiltere",
      "value": 32250000,
      "rating": 83,
      "age": 25
    },
    {
      "name": "Luis Díaz",
      "club": "Bayern Münih",
      "nationality": "Kolombiya",
      "value": 32250000,
      "rating": 83,
      "age": 28
    },
    {
      "name": "Emil Jensen",
      "club": "Nice",
      "nationality": "Danimarka",
      "value": 40250000,
      "rating": 83,
      "age": 19
    },
    {
      "name": "Kingsley Coman",
      "club": "Al-Nassr",
      "nationality": "Fransa",
      "value": 25500000,
      "rating": 82,
      "age": 29
    },
    {
      "name": "Federico Chiesa",
      "club": "Liverpool",
      "nationality": "İtalya",
      "value": 25500000,
      "rating": 82,
      "age": 28
    },
    {
      "name": "Takefusa Kubo",
      "club": "Real Sociedad",
      "nationality": "Japonya",
      "value": 25500000,
      "rating": 82,
      "age": 24
    },
    {
      "name": "Cody Gakpo",
      "club": "Liverpool",
      "nationality": "Hollanda",
      "value": 25500000,
      "rating": 82,
      "age": 26
    },
    {
      "name": "Mikel Vidal",
      "club": "Freiburg",
      "nationality": "İspanya",
      "value": 25500000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Karlo Barišić",
      "club": "Crystal Palace",
      "nationality": "Hırvatistan",
      "value": 16500000,
      "rating": 82,
      "age": 31
    },
    {
      "name": "Ismail Rachidi",
      "club": "Lille",
      "nationality": "Fas",
      "value": 31750000,
      "rating": 82,
      "age": 20
    },
    {
      "name": "Tomás Pereira",
      "club": "Monaco",
      "nationality": "Portekiz",
      "value": 10250000,
      "rating": 82,
      "age": 34
    },
    {
      "name": "Hugo Renard",
      "club": "Strasbourg",
      "nationality": "Fransa",
      "value": 31750000,
      "rating": 82,
      "age": 20
    },
    {
      "name": "Igor Jankowski",
      "club": "Osasuna",
      "nationality": "Polonya",
      "value": 28000000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Iker Prieto",
      "club": "Ajax",
      "nationality": "İspanya",
      "value": 28000000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Rayan Chérki",
      "club": "Manchester City",
      "nationality": "Fransa",
      "value": 22000000,
      "rating": 81,
      "age": 22
    },
    {
      "name": "Savinho",
      "club": "Manchester City",
      "nationality": "Brezilya",
      "value": 22000000,
      "rating": 81,
      "age": 21
    },
    {
      "name": "Théo Roussel",
      "club": "Napoli",
      "nationality": "Fransa",
      "value": 8000000,
      "rating": 81,
      "age": 33
    },
    {
      "name": "Louis De Smet",
      "club": "Celta Vigo",
      "nationality": "Belçika",
      "value": 20000000,
      "rating": 81,
      "age": 28
    },
    {
      "name": "William Larsson",
      "club": "Como",
      "nationality": "İsveç",
      "value": 20000000,
      "rating": 81,
      "age": 25
    },
    {
      "name": "Kaoru Mitoma",
      "club": "Brighton",
      "nationality": "Japonya",
      "value": 15750000,
      "rating": 80,
      "age": 28
    },
    {
      "name": "Curtis Bailey",
      "club": "Aston Villa",
      "nationality": "İngiltere",
      "value": 15750000,
      "rating": 80,
      "age": 24
    },
    {
      "name": "Tom Palmer",
      "club": "Rennes",
      "nationality": "İngiltere",
      "value": 17500000,
      "rating": 80,
      "age": 21
    },
    {
      "name": "Mikkel Christensen",
      "club": "Braga",
      "nationality": "Danimarka",
      "value": 15750000,
      "rating": 80,
      "age": 28
    },
    {
      "name": "Gonzalo Herrera",
      "club": "Brighton",
      "nationality": "Arjantin",
      "value": 19750000,
      "rating": 80,
      "age": 19
    },
    {
      "name": "Jamie Gittens",
      "club": "Chelsea",
      "nationality": "İngiltere",
      "value": 13750000,
      "rating": 79,
      "age": 21
    },
    {
      "name": "Estêvão",
      "club": "Chelsea",
      "nationality": "Brezilya",
      "value": 15500000,
      "rating": 79,
      "age": 18
    },
    {
      "name": "Antoine Semenyo",
      "club": "Bournemouth",
      "nationality": "Gana",
      "value": 12500000,
      "rating": 79,
      "age": 25
    },
    {
      "name": "Douglas Nascimento",
      "club": "Angers",
      "nationality": "Brezilya",
      "value": 15500000,
      "rating": 79,
      "age": 19
    },
    {
      "name": "Sven de Boer",
      "club": "Angers",
      "nationality": "Hollanda",
      "value": 8000000,
      "rating": 79,
      "age": 32
    },
    {
      "name": "Lucas Moreau",
      "club": "West Ham",
      "nationality": "Fransa",
      "value": 12500000,
      "rating": 79,
      "age": 28
    },
    {
      "name": "Yanis Bonnet",
      "club": "Benfica",
      "nationality": "Fransa",
      "value": 12250000,
      "rating": 78,
      "age": 19
    },
    {
      "name": "Tom Baker",
      "club": "Fulham",
      "nationality": "İngiltere",
      "value": 9750000,
      "rating": 78,
      "age": 28
    },
    {
      "name": "Kaique Silva",
      "club": "Angers",
      "nationality": "Brezilya",
      "value": 4000000,
      "rating": 78,
      "age": 33
    },
    {
      "name": "Facundo Pellistri",
      "club": "Leeds United",
      "nationality": "Uruguay",
      "value": 8500000,
      "rating": 77,
      "age": 23
    },
    {
      "name": "Gabriele Bruno",
      "club": "Aston Villa",
      "nationality": "İtalya",
      "value": 5000000,
      "rating": 77,
      "age": 30
    },
    {
      "name": "Thijs Willems",
      "club": "Werder Bremen",
      "nationality": "Hollanda",
      "value": 8500000,
      "rating": 77,
      "age": 22
    },
    {
      "name": "Solomon Boateng",
      "club": "Celta Vigo",
      "nationality": "Gana",
      "value": 3000000,
      "rating": 77,
      "age": 34
    },
    {
      "name": "Ansu Fati",
      "club": "Monaco",
      "nationality": "İspanya",
      "value": 6750000,
      "rating": 76,
      "age": 22
    },
    {
      "name": "Camilo Ramírez",
      "club": "West Ham",
      "nationality": "Kolombiya",
      "value": 7750000,
      "rating": 76,
      "age": 19
    },
    {
      "name": "Oliver Rasmussen",
      "club": "Brentford",
      "nationality": "Danimarka",
      "value": 4000000,
      "rating": 76,
      "age": 32
    },
    {
      "name": "Gonçalo Baptista",
      "club": "Strasbourg",
      "nationality": "Portekiz",
      "value": 5250000,
      "rating": 75,
      "age": 21
    },
    {
      "name": "Frederik Lindgren",
      "club": "Nice",
      "nationality": "Danimarka",
      "value": 5250000,
      "rating": 75,
      "age": 22
    },
    {
      "name": "Emil Rasmussen",
      "club": "Fiorentina",
      "nationality": "Danimarka",
      "value": 6000000,
      "rating": 75,
      "age": 20
    },
    {
      "name": "Alejandro Campos",
      "club": "Brighton",
      "nationality": "İspanya",
      "value": 2000000,
      "rating": 75,
      "age": 33
    }
  ],
  "st": [
    {
      "name": "Erling Haaland",
      "club": "Manchester City",
      "nationality": "Norveç",
      "value": 220000000,
      "rating": 92,
      "age": 25
    },
    {
      "name": "Kylian Mbappé",
      "club": "Real Madrid",
      "nationality": "Fransa",
      "value": 220000000,
      "rating": 92,
      "age": 27
    },
    {
      "name": "Christian Jensen",
      "club": "Atalanta",
      "nationality": "Danimarka",
      "value": 215500000,
      "rating": 91,
      "age": 24
    },
    {
      "name": "Harry Kane",
      "club": "Bayern Münih",
      "nationality": "İngiltere",
      "value": 110500000,
      "rating": 90,
      "age": 32
    },
    {
      "name": "Ousmane Dembélé",
      "club": "Paris Saint-Germain",
      "nationality": "Fransa",
      "value": 134000000,
      "rating": 89,
      "age": 28
    },
    {
      "name": "Frederik Jensen",
      "club": "Mainz",
      "nationality": "Danimarka",
      "value": 134000000,
      "rating": 89,
      "age": 26
    },
    {
      "name": "Mateo López",
      "club": "Nottingham Forest",
      "nationality": "Kolombiya",
      "value": 134000000,
      "rating": 89,
      "age": 28
    },
    {
      "name": "Robert Lewandowski",
      "club": "Barcelona",
      "nationality": "Polonya",
      "value": 26500000,
      "rating": 88,
      "age": 37
    },
    {
      "name": "Alexander Isak",
      "club": "Liverpool",
      "nationality": "İsveç",
      "value": 105750000,
      "rating": 88,
      "age": 26
    },
    {
      "name": "Vladimir Milošević",
      "club": "Fulham",
      "nationality": "Sırbistan",
      "value": 68750000,
      "rating": 88,
      "age": 32
    },
    {
      "name": "Julián Álvarez",
      "club": "Atlético Madrid",
      "nationality": "Arjantin",
      "value": 83250000,
      "rating": 87,
      "age": 25
    },
    {
      "name": "Hakan Polat",
      "club": "Ajax",
      "nationality": "Türkiye",
      "value": 33250000,
      "rating": 87,
      "age": 33
    },
    {
      "name": "Joaquín Fernández",
      "club": "Benfica",
      "nationality": "Arjantin",
      "value": 33250000,
      "rating": 87,
      "age": 33
    },
    {
      "name": "Maxence Renard",
      "club": "Napoli",
      "nationality": "Fransa",
      "value": 33250000,
      "rating": 87,
      "age": 34
    },
    {
      "name": "Viktor Gyökeres",
      "club": "Arsenal",
      "nationality": "İsveç",
      "value": 65750000,
      "rating": 86,
      "age": 27
    },
    {
      "name": "Agustín Álvarez",
      "club": "Ajax",
      "nationality": "Arjantin",
      "value": 65750000,
      "rating": 86,
      "age": 26
    },
    {
      "name": "Mamadou Fall",
      "club": "Fiorentina",
      "nationality": "Senegal",
      "value": 65750000,
      "rating": 86,
      "age": 28
    },
    {
      "name": "Arthur Pauwels",
      "club": "Crystal Palace",
      "nationality": "Belçika",
      "value": 26250000,
      "rating": 86,
      "age": 33
    },
    {
      "name": "Ismail Benali",
      "club": "Mainz",
      "nationality": "Fas",
      "value": 20750000,
      "rating": 85,
      "age": 33
    },
    {
      "name": "Melker Lindqvist",
      "club": "Lille",
      "nationality": "İsveç",
      "value": 51750000,
      "rating": 85,
      "age": 28
    },
    {
      "name": "Pedro Antunes",
      "club": "Nottingham Forest",
      "nationality": "Portekiz",
      "value": 33750000,
      "rating": 85,
      "age": 32
    },
    {
      "name": "Dušan Vlahović",
      "club": "Juventus",
      "nationality": "Sırbistan",
      "value": 40750000,
      "rating": 84,
      "age": 26
    },
    {
      "name": "Serhou Guirassy",
      "club": "Borussia Dortmund",
      "nationality": "Gine",
      "value": 32250000,
      "rating": 83,
      "age": 29
    },
    {
      "name": "Jonathan David",
      "club": "Juventus",
      "nationality": "Kanada",
      "value": 32250000,
      "rating": 83,
      "age": 25
    },
    {
      "name": "Villads Jensen",
      "club": "Nottingham Forest",
      "nationality": "Danimarka",
      "value": 32250000,
      "rating": 83,
      "age": 24
    },
    {
      "name": "Miloš Pavlović",
      "club": "Udinese",
      "nationality": "Sırbistan",
      "value": 21000000,
      "rating": 83,
      "age": 31
    },
    {
      "name": "Josh Bailey",
      "club": "Genoa",
      "nationality": "İngiltere",
      "value": 13000000,
      "rating": 83,
      "age": 34
    },
    {
      "name": "Victor Boniface",
      "club": "Bayer Leverkusen",
      "nationality": "Nijerya",
      "value": 25500000,
      "rating": 82,
      "age": 24
    },
    {
      "name": "Randal Kolo Muani",
      "club": "Juventus",
      "nationality": "Fransa",
      "value": 25500000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Benjamin Šeško",
      "club": "Manchester United",
      "nationality": "Slovenya",
      "value": 28000000,
      "rating": 82,
      "age": 22
    },
    {
      "name": "Hugo Ekitike",
      "club": "Liverpool",
      "nationality": "Fransa",
      "value": 28000000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Omar Marmoush",
      "club": "Manchester City",
      "nationality": "Mısır",
      "value": 25500000,
      "rating": 82,
      "age": 26
    },
    {
      "name": "Stan Smit",
      "club": "Real Sociedad",
      "nationality": "Hollanda",
      "value": 25500000,
      "rating": 82,
      "age": 28
    },
    {
      "name": "Loïs Openda",
      "club": "RB Leipzig",
      "nationality": "Belçika",
      "value": 20000000,
      "rating": 81,
      "age": 25
    },
    {
      "name": "Sam Doyle",
      "club": "AZ Alkmaar",
      "nationality": "İngiltere",
      "value": 22000000,
      "rating": 81,
      "age": 22
    },
    {
      "name": "Diogo Fonseca",
      "club": "Wolverhampton",
      "nationality": "Portekiz",
      "value": 22000000,
      "rating": 81,
      "age": 23
    },
    {
      "name": "Cem Koç",
      "club": "Aston Villa",
      "nationality": "Türkiye",
      "value": 20000000,
      "rating": 81,
      "age": 27
    },
    {
      "name": "Matteo Bruno",
      "club": "Villarreal",
      "nationality": "İtalya",
      "value": 20000000,
      "rating": 81,
      "age": 29
    },
    {
      "name": "Mateo Retegui",
      "club": "Al-Qadsiah",
      "nationality": "İtalya",
      "value": 15750000,
      "rating": 80,
      "age": 26
    },
    {
      "name": "Nathan Claes",
      "club": "Getafe",
      "nationality": "Belçika",
      "value": 19750000,
      "rating": 80,
      "age": 19
    },
    {
      "name": "Daan Verhoeven",
      "club": "Angers",
      "nationality": "Hollanda",
      "value": 17500000,
      "rating": 80,
      "age": 23
    },
    {
      "name": "Christopher Nkunku",
      "club": "Chelsea",
      "nationality": "Fransa",
      "value": 12500000,
      "rating": 79,
      "age": 27
    },
    {
      "name": "Santiago Giménez",
      "club": "Milan",
      "nationality": "Meksika",
      "value": 12500000,
      "rating": 79,
      "age": 24
    },
    {
      "name": "Efe Ateş",
      "club": "Augsburg",
      "nationality": "Türkiye",
      "value": 15500000,
      "rating": 79,
      "age": 20
    },
    {
      "name": "Lars Willems",
      "club": "Hoffenheim",
      "nationality": "Hollanda",
      "value": 12500000,
      "rating": 79,
      "age": 29
    },
    {
      "name": "Axel Björk",
      "club": "Betis",
      "nationality": "İsveç",
      "value": 10750000,
      "rating": 78,
      "age": 23
    },
    {
      "name": "Domagoj Babić",
      "club": "Bologna",
      "nationality": "Hırvatistan",
      "value": 4000000,
      "rating": 78,
      "age": 34
    },
    {
      "name": "Louis Janssens",
      "club": "Newcastle United",
      "nationality": "Belçika",
      "value": 9750000,
      "rating": 77,
      "age": 19
    },
    {
      "name": "Davide Gentile",
      "club": "Bournemouth",
      "nationality": "İtalya",
      "value": 6000000,
      "rating": 76,
      "age": 25
    },
    {
      "name": "Ruben Mulder",
      "club": "Getafe",
      "nationality": "Hollanda",
      "value": 6750000,
      "rating": 76,
      "age": 21
    },
    {
      "name": "Ivan Šimić",
      "club": "Fulham",
      "nationality": "Hırvatistan",
      "value": 2500000,
      "rating": 76,
      "age": 34
    },
    {
      "name": "Amir De Smet",
      "club": "Aston Villa",
      "nationality": "Belçika",
      "value": 4750000,
      "rating": 75,
      "age": 24
    },
    {
      "name": "Bruno Costa",
      "club": "Angers",
      "nationality": "Brezilya",
      "value": 3250000,
      "rating": 75,
      "age": 31
    },
    {
      "name": "Hugo Gustafsson",
      "club": "Newcastle United",
      "nationality": "İsveç",
      "value": 4750000,
      "rating": 75,
      "age": 25
    },
    {
      "name": "Jonas Becker",
      "club": "Benfica",
      "nationality": "Almanya",
      "value": 4750000,
      "rating": 74,
      "age": 19
    },
    {
      "name": "Karim Sabri",
      "club": "Benfica",
      "nationality": "Fas",
      "value": 3750000,
      "rating": 74,
      "age": 29
    },
    {
      "name": "Marcos Reyes",
      "club": "Club Brugge",
      "nationality": "İspanya",
      "value": 1500000,
      "rating": 74,
      "age": 34
    },
    {
      "name": "August Krogh",
      "club": "Wolverhampton",
      "nationality": "Danimarka",
      "value": 1500000,
      "rating": 74,
      "age": 34
    },
    {
      "name": "André Nunes",
      "club": "Braga",
      "nationality": "Portekiz",
      "value": 4750000,
      "rating": 74,
      "age": 20
    },
    {
      "name": "Ege Doğan",
      "club": "Everton",
      "nationality": "Türkiye",
      "value": 2500000,
      "rating": 74,
      "age": 32
    }
  ]
};
