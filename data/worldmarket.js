// Dünya piyasasından, mevki bazlı alternatif transfer havuzu.
// Değerler, EA FC 26 tarzı ratingler ve yaşlar yaklaşıktır (2025-26 sezonu civarı), resmi EA/Transfermarkt verisi değildir.
const WORLD_MARKET = {
  "gk": [
    {
      "name": "Gianluigi Donnarumma",
      "club": "Manchester City",
      "nationality": "İtalya",
      "value": 45000000,
      "rating": 89,
      "age": 26
    },
    {
      "name": "Gabriele Costa",
      "club": "Aston Villa",
      "nationality": "İtalya",
      "value": 51500000,
      "rating": 89,
      "age": 24
    },
    {
      "name": "Emiliano Martínez",
      "club": "Aston Villa",
      "nationality": "Arjantin",
      "value": 25000000,
      "rating": 87,
      "age": 33
    },
    {
      "name": "Mike Maignan",
      "club": "Milan",
      "nationality": "Fransa",
      "value": 30000000,
      "rating": 87,
      "age": 30
    },
    {
      "name": "Leon Böhm",
      "club": "Fulham",
      "nationality": "Almanya",
      "value": 21500000,
      "rating": 87,
      "age": 30
    },
    {
      "name": "Gregor Kobel",
      "club": "Borussia Dortmund",
      "nationality": "İsviçre",
      "value": 40000000,
      "rating": 86,
      "age": 28
    },
    {
      "name": "Maximilian Wagner",
      "club": "Werder Bremen",
      "nationality": "Almanya",
      "value": 17000000,
      "rating": 86,
      "age": 30
    },
    {
      "name": "Diogo Costa",
      "club": "Porto",
      "nationality": "Portekiz",
      "value": 40000000,
      "rating": 85,
      "age": 27
    },
    {
      "name": "David Raya",
      "club": "Arsenal",
      "nationality": "İspanya",
      "value": 35000000,
      "rating": 85,
      "age": 30
    },
    {
      "name": "Yann Sommer",
      "club": "Inter",
      "nationality": "İsviçre",
      "value": 8000000,
      "rating": 84,
      "age": 37
    },
    {
      "name": "Marc-André ter Stegen",
      "club": "Barcelona",
      "nationality": "Almanya",
      "value": 18000000,
      "rating": 84,
      "age": 33
    },
    {
      "name": "Lucas Chevalier",
      "club": "Paris Saint-Germain",
      "nationality": "Fransa",
      "value": 35000000,
      "rating": 84,
      "age": 24
    },
    {
      "name": "Matz Sels",
      "club": "Nottingham Forest",
      "nationality": "Belçika",
      "value": 20000000,
      "rating": 83,
      "age": 33
    },
    {
      "name": "Andriy Lunin",
      "club": "Real Madrid",
      "nationality": "Ukrayna",
      "value": 20000000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Unai Simón",
      "club": "Athletic Bilbao",
      "nationality": "İspanya",
      "value": 22000000,
      "rating": 82,
      "age": 29
    },
    {
      "name": "Dario Babić",
      "club": "Mainz",
      "nationality": "Hırvatistan",
      "value": 4000000,
      "rating": 82,
      "age": 34
    },
    {
      "name": "Adam Chakir",
      "club": "Betis",
      "nationality": "Fas",
      "value": 10500000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Kepa Arrizabalaga",
      "club": "Bournemouth",
      "nationality": "İspanya",
      "value": 12000000,
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
      "value": 9000000,
      "rating": 81,
      "age": 26
    },
    {
      "name": "Alexander Nübel",
      "club": "Beşiktaş",
      "nationality": "Almanya",
      "value": 12000000,
      "rating": 80,
      "age": 28
    },
    {
      "name": "Illan Meslier",
      "club": "Leeds United",
      "nationality": "Fransa",
      "value": 15000000,
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
      "value": 15000000,
      "rating": 79,
      "age": 26
    },
    {
      "name": "Yusuf Kara",
      "club": "Brentford",
      "nationality": "Türkiye",
      "value": 6000000,
      "rating": 79,
      "age": 23
    },
    {
      "name": "Filip Jörgensen",
      "club": "Chelsea",
      "nationality": "Danimarka",
      "value": 18000000,
      "rating": 78,
      "age": 24
    },
    {
      "name": "Magnus Berg",
      "club": "PSV Eindhoven",
      "nationality": "Norveç",
      "value": 4500000,
      "rating": 78,
      "age": 29
    },
    {
      "name": "Frederik Kristensen",
      "club": "Lyon",
      "nationality": "Danimarka",
      "value": 5000000,
      "rating": 77,
      "age": 21
    },
    {
      "name": "Enzo Moreau",
      "club": "Nottingham Forest",
      "nationality": "Fransa",
      "value": 3500000,
      "rating": 77,
      "age": 27
    },
    {
      "name": "Marco Bizot",
      "club": "Aston Villa",
      "nationality": "Hollanda",
      "value": 6000000,
      "rating": 76,
      "age": 34
    },
    {
      "name": "Kaique Pereira",
      "club": "Brentford",
      "nationality": "Brezilya",
      "value": 4000000,
      "rating": 76,
      "age": 22
    },
    {
      "name": "Ivo Grbić",
      "club": "Lille",
      "nationality": "Hırvatistan",
      "value": 4000000,
      "rating": 74,
      "age": 30
    },
    {
      "name": "Émile Bergström",
      "club": "Fulham",
      "nationality": "İsveç",
      "value": 5000000,
      "rating": 74,
      "age": 23
    },
    {
      "name": "Emil Nilsen",
      "club": "West Ham",
      "nationality": "Norveç",
      "value": 1500000,
      "rating": 74,
      "age": 31
    }
  ],
  "rb": [
    {
      "name": "Achraf Hakimi",
      "club": "Paris Saint-Germain",
      "nationality": "Fas",
      "value": 65000000,
      "rating": 87,
      "age": 27
    },
    {
      "name": "Trent Alexander-Arnold",
      "club": "Real Madrid",
      "nationality": "İngiltere",
      "value": 50000000,
      "rating": 86,
      "age": 27
    },
    {
      "name": "Marcus Baker",
      "club": "Strasbourg",
      "nationality": "İngiltere",
      "value": 17000000,
      "rating": 86,
      "age": 30
    },
    {
      "name": "Aleksander Berg",
      "club": "Lille",
      "nationality": "Norveç",
      "value": 20000000,
      "rating": 85,
      "age": 27
    },
    {
      "name": "Denzel Dumfries",
      "club": "Inter",
      "nationality": "Hollanda",
      "value": 35000000,
      "rating": 84,
      "age": 29
    },
    {
      "name": "Sadio Gueye",
      "club": "Freiburg",
      "nationality": "Senegal",
      "value": 21500000,
      "rating": 84,
      "age": 22
    },
    {
      "name": "Jeremie Frimpong",
      "club": "Bayer Leverkusen",
      "nationality": "Hollanda",
      "value": 40000000,
      "rating": 83,
      "age": 25
    },
    {
      "name": "Pedro Porro",
      "club": "Tottenham",
      "nationality": "İspanya",
      "value": 38000000,
      "rating": 83,
      "age": 26
    },
    {
      "name": "Victor De Smet",
      "club": "Newcastle United",
      "nationality": "Belçika",
      "value": 17500000,
      "rating": 83,
      "age": 21
    },
    {
      "name": "João Cancelo",
      "club": "Al-Hilal",
      "nationality": "Portekiz",
      "value": 15000000,
      "rating": 81,
      "age": 31
    },
    {
      "name": "Vanderson",
      "club": "Monaco",
      "nationality": "Brezilya",
      "value": 22000000,
      "rating": 80,
      "age": 24
    },
    {
      "name": "Daniel Muñoz",
      "club": "Crystal Palace",
      "nationality": "Kolombiya",
      "value": 25000000,
      "rating": 80,
      "age": 29
    },
    {
      "name": "Sander Andersen",
      "club": "Lille",
      "nationality": "Norveç",
      "value": 4500000,
      "rating": 80,
      "age": 32
    },
    {
      "name": "August Jensen",
      "club": "Napoli",
      "nationality": "Danimarka",
      "value": 7000000,
      "rating": 80,
      "age": 27
    },
    {
      "name": "Bram Smit",
      "club": "Real Sociedad",
      "nationality": "Hollanda",
      "value": 7000000,
      "rating": 80,
      "age": 28
    },
    {
      "name": "Boubacar Faye",
      "club": "PSV Eindhoven",
      "nationality": "Senegal",
      "value": 7500000,
      "rating": 80,
      "age": 26
    },
    {
      "name": "Đorđe Radovanović",
      "club": "Brentford",
      "nationality": "Sırbistan",
      "value": 2500000,
      "rating": 80,
      "age": 33
    },
    {
      "name": "Yan Couto",
      "club": "Borussia Dortmund",
      "nationality": "Brezilya",
      "value": 18000000,
      "rating": 79,
      "age": 23
    },
    {
      "name": "Rico Lewis",
      "club": "Manchester City",
      "nationality": "İngiltere",
      "value": 30000000,
      "rating": 79,
      "age": 21
    },
    {
      "name": "Odilon Kossounou",
      "club": "Atalanta",
      "nationality": "Fildişi Sahili",
      "value": 20000000,
      "rating": 79,
      "age": 24
    },
    {
      "name": "Emerson Royal",
      "club": "Milan",
      "nationality": "Brezilya",
      "value": 12000000,
      "rating": 78,
      "age": 27
    },
    {
      "name": "Kyle Walker-Peters",
      "club": "West Ham",
      "nationality": "İngiltere",
      "value": 15000000,
      "rating": 78,
      "age": 28
    },
    {
      "name": "Wesley",
      "club": "Roma",
      "nationality": "Brezilya",
      "value": 15000000,
      "rating": 78,
      "age": 25
    },
    {
      "name": "André Alves",
      "club": "Betis",
      "nationality": "Portekiz",
      "value": 6000000,
      "rating": 78,
      "age": 22
    },
    {
      "name": "Lucas Herrera",
      "club": "Bournemouth",
      "nationality": "Arjantin",
      "value": 2000000,
      "rating": 78,
      "age": 33
    },
    {
      "name": "Nordi Mukiele",
      "club": "Paris Saint-Germain",
      "nationality": "Fransa",
      "value": 10000000,
      "rating": 77,
      "age": 27
    },
    {
      "name": "Ola Aina",
      "club": "Nottingham Forest",
      "nationality": "Nijerya",
      "value": 12000000,
      "rating": 77,
      "age": 29
    },
    {
      "name": "Santiago Herrera",
      "club": "Getafe",
      "nationality": "Arjantin",
      "value": 3500000,
      "rating": 77,
      "age": 27
    },
    {
      "name": "Rick Karsdorp",
      "club": "Bologna",
      "nationality": "Hollanda",
      "value": 5000000,
      "rating": 76,
      "age": 30
    },
    {
      "name": "Timothy Castagne",
      "club": "Fulham",
      "nationality": "Belçika",
      "value": 8000000,
      "rating": 76,
      "age": 30
    },
    {
      "name": "Devyne Rensch",
      "club": "Ajax",
      "nationality": "Hollanda",
      "value": 10000000,
      "rating": 75,
      "age": 23
    },
    {
      "name": "Luuk Smit",
      "club": "Brighton",
      "nationality": "Hollanda",
      "value": 3000000,
      "rating": 75,
      "age": 22
    },
    {
      "name": "Luka Horvat",
      "club": "Aston Villa",
      "nationality": "Hırvatistan",
      "value": 3000000,
      "rating": 75,
      "age": 21
    },
    {
      "name": "Nemanja Nikolić",
      "club": "Nottingham Forest",
      "nationality": "Sırbistan",
      "value": 500000,
      "rating": 74,
      "age": 33
    }
  ],
  "lb": [
    {
      "name": "Ayoub Sabri",
      "club": "Benfica",
      "nationality": "Fas",
      "value": 72000000,
      "rating": 91,
      "age": 29
    },
    {
      "name": "Alphonso Davies",
      "club": "Bayern Münih",
      "nationality": "Kanada",
      "value": 45000000,
      "rating": 86,
      "age": 25
    },
    {
      "name": "Theo Hernández",
      "club": "Milan",
      "nationality": "Fransa",
      "value": 40000000,
      "rating": 86,
      "age": 28
    },
    {
      "name": "Nuno Mendes",
      "club": "Paris Saint-Germain",
      "nationality": "Portekiz",
      "value": 55000000,
      "rating": 86,
      "age": 23
    },
    {
      "name": "Alejandro Grimaldo",
      "club": "Bayer Leverkusen",
      "nationality": "İspanya",
      "value": 35000000,
      "rating": 85,
      "age": 30
    },
    {
      "name": "Joaquín Aguirre",
      "club": "Brighton",
      "nationality": "Arjantin",
      "value": 8000000,
      "rating": 85,
      "age": 33
    },
    {
      "name": "Caio Costa",
      "club": "Bayer Leverkusen",
      "nationality": "Brezilya",
      "value": 27000000,
      "rating": 85,
      "age": 19
    },
    {
      "name": "Emil Holm",
      "club": "Club Brugge",
      "nationality": "Danimarka",
      "value": 16000000,
      "rating": 84,
      "age": 27
    },
    {
      "name": "Ferland Mendy",
      "club": "Real Madrid",
      "nationality": "Fransa",
      "value": 15000000,
      "rating": 83,
      "age": 30
    },
    {
      "name": "Arthur Willems",
      "club": "Villarreal",
      "nationality": "Belçika",
      "value": 9000000,
      "rating": 83,
      "age": 30
    },
    {
      "name": "Destiny Udogie",
      "club": "Tottenham",
      "nationality": "İtalya",
      "value": 35000000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Marc Cucurella",
      "club": "Chelsea",
      "nationality": "İspanya",
      "value": 45000000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Cheikh Camara",
      "club": "Torino",
      "nationality": "Senegal",
      "value": 10500000,
      "rating": 82,
      "age": 29
    },
    {
      "name": "Baran Bulut",
      "club": "Atalanta",
      "nationality": "Türkiye",
      "value": 10500000,
      "rating": 82,
      "age": 28
    },
    {
      "name": "Riccardo Ferraro",
      "club": "Bournemouth",
      "nationality": "İtalya",
      "value": 3500000,
      "rating": 81,
      "age": 34
    },
    {
      "name": "Ben Chilwell",
      "club": "Chelsea",
      "nationality": "İngiltere",
      "value": 12000000,
      "rating": 79,
      "age": 29
    },
    {
      "name": "Julian Ryerson",
      "club": "Borussia Dortmund",
      "nationality": "Norveç",
      "value": 14000000,
      "rating": 79,
      "age": 27
    },
    {
      "name": "Andrew Robertson",
      "club": "Liverpool",
      "nationality": "İskoçya",
      "value": 12000000,
      "rating": 79,
      "age": 31
    },
    {
      "name": "Raphaël Guerreiro",
      "club": "LA Galaxy",
      "nationality": "Portekiz",
      "value": 4000000,
      "rating": 79,
      "age": 32
    },
    {
      "name": "Rayan Lefevre",
      "club": "Lille",
      "nationality": "Fransa",
      "value": 7500000,
      "rating": 79,
      "age": 20
    },
    {
      "name": "Ángeliño",
      "club": "Beşiktaş",
      "nationality": "İspanya",
      "value": 8000000,
      "rating": 78,
      "age": 29
    },
    {
      "name": "Miguel Gutiérrez",
      "club": "Girona",
      "nationality": "İspanya",
      "value": 20000000,
      "rating": 78,
      "age": 24
    },
    {
      "name": "Simone Rossi",
      "club": "Nice",
      "nationality": "İtalya",
      "value": 3000000,
      "rating": 78,
      "age": 31
    },
    {
      "name": "Pablo García",
      "club": "Bournemouth",
      "nationality": "İspanya",
      "value": 3000000,
      "rating": 78,
      "age": 30
    },
    {
      "name": "Wendell",
      "club": "Porto",
      "nationality": "Brezilya",
      "value": 8000000,
      "rating": 77,
      "age": 32
    },
    {
      "name": "Iker Vidal",
      "club": "Strasbourg",
      "nationality": "İspanya",
      "value": 5000000,
      "rating": 77,
      "age": 21
    },
    {
      "name": "Yassine Chakir",
      "club": "Nice",
      "nationality": "Fas",
      "value": 4000000,
      "rating": 77,
      "age": 24
    },
    {
      "name": "Mitchel Bakker",
      "club": "Bayer Leverkusen",
      "nationality": "Hollanda",
      "value": 12000000,
      "rating": 76,
      "age": 26
    },
    {
      "name": "Sergio Gómez",
      "club": "Manchester City",
      "nationality": "İspanya",
      "value": 15000000,
      "rating": 76,
      "age": 25
    },
    {
      "name": "Fabiano Parisi",
      "club": "Fiorentina",
      "nationality": "İtalya",
      "value": 12000000,
      "rating": 76,
      "age": 24
    },
    {
      "name": "Cristiano Biraghi",
      "club": "Fiorentina",
      "nationality": "İtalya",
      "value": 4000000,
      "rating": 75,
      "age": 33
    },
    {
      "name": "Josip Horvat",
      "club": "Strasbourg",
      "nationality": "Hırvatistan",
      "value": 2500000,
      "rating": 75,
      "age": 25
    },
    {
      "name": "Louis Michiels",
      "club": "Sevilla",
      "nationality": "Belçika",
      "value": 2000000,
      "rating": 74,
      "age": 23
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
      "name": "Ignacio Aguirre",
      "club": "Nice",
      "nationality": "Arjantin",
      "value": 64000000,
      "rating": 90,
      "age": 23
    },
    {
      "name": "William Saliba",
      "club": "Arsenal",
      "nationality": "Fransa",
      "value": 75000000,
      "rating": 88,
      "age": 24
    },
    {
      "name": "Virgil van Dijk",
      "club": "Liverpool",
      "nationality": "Hollanda",
      "value": 25000000,
      "rating": 88,
      "age": 34
    },
    {
      "name": "Josko Gvardiol",
      "club": "Manchester City",
      "nationality": "Hırvatistan",
      "value": 75000000,
      "rating": 87,
      "age": 23
    },
    {
      "name": "Gabriel Magalhães",
      "club": "Arsenal",
      "nationality": "Brezilya",
      "value": 65000000,
      "rating": 87,
      "age": 28
    },
    {
      "name": "Álvaro Vidal",
      "club": "Brentford",
      "nationality": "İspanya",
      "value": 21500000,
      "rating": 87,
      "age": 32
    },
    {
      "name": "Ronald Araújo",
      "club": "Barcelona",
      "nationality": "Uruguay",
      "value": 55000000,
      "rating": 86,
      "age": 26
    },
    {
      "name": "Nicolás Suárez",
      "club": "Benfica",
      "nationality": "Arjantin",
      "value": 17000000,
      "rating": 86,
      "age": 32
    },
    {
      "name": "Antonio Rüdiger",
      "club": "Real Madrid",
      "nationality": "Almanya",
      "value": 20000000,
      "rating": 85,
      "age": 32
    },
    {
      "name": "Kim Min-jae",
      "club": "Bayern Münih",
      "nationality": "Güney Kore",
      "value": 35000000,
      "rating": 85,
      "age": 29
    },
    {
      "name": "Éder Militão",
      "club": "Real Madrid",
      "nationality": "Brezilya",
      "value": 40000000,
      "rating": 85,
      "age": 27
    },
    {
      "name": "Dayot Upamecano",
      "club": "Bayern Münih",
      "nationality": "Fransa",
      "value": 45000000,
      "rating": 85,
      "age": 26
    },
    {
      "name": "Pau Cubarsí",
      "club": "Barcelona",
      "nationality": "İspanya",
      "value": 90000000,
      "rating": 85,
      "age": 18
    },
    {
      "name": "Harry Turner",
      "club": "Real Sociedad",
      "nationality": "İngiltere",
      "value": 22000000,
      "rating": 85,
      "age": 23
    },
    {
      "name": "Santiago Molina",
      "club": "Mainz",
      "nationality": "Arjantin",
      "value": 22000000,
      "rating": 85,
      "age": 25
    },
    {
      "name": "Micky van de Ven",
      "club": "Tottenham",
      "nationality": "Hollanda",
      "value": 45000000,
      "rating": 84,
      "age": 24
    },
    {
      "name": "Cristian Romero",
      "club": "Tottenham",
      "nationality": "Arjantin",
      "value": 50000000,
      "rating": 84,
      "age": 27
    },
    {
      "name": "Marko Vuković",
      "club": "Bologna",
      "nationality": "Hırvatistan",
      "value": 21500000,
      "rating": 84,
      "age": 20
    },
    {
      "name": "Jonathan Tah",
      "club": "Bayer Leverkusen",
      "nationality": "Almanya",
      "value": 35000000,
      "rating": 83,
      "age": 29
    },
    {
      "name": "Yanis Lefevre",
      "club": "Ajax",
      "nationality": "Fransa",
      "value": 14000000,
      "rating": 83,
      "age": 25
    },
    {
      "name": "Piero Hincapié",
      "club": "Arsenal",
      "nationality": "Ekvador",
      "value": 40000000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Nathan Aké",
      "club": "Manchester City",
      "nationality": "Hollanda",
      "value": 22000000,
      "rating": 82,
      "age": 30
    },
    {
      "name": "Marc Guéhi",
      "club": "Crystal Palace",
      "nationality": "İngiltere",
      "value": 45000000,
      "rating": 82,
      "age": 24
    },
    {
      "name": "Kevin Danso",
      "club": "Tottenham",
      "nationality": "Avusturya",
      "value": 25000000,
      "rating": 81,
      "age": 26
    },
    {
      "name": "Jean-Clair Todibo",
      "club": "Nice",
      "nationality": "Fransa",
      "value": 30000000,
      "rating": 80,
      "age": 25
    },
    {
      "name": "Mario Hermoso",
      "club": "RB Leipzig",
      "nationality": "İspanya",
      "value": 15000000,
      "rating": 79,
      "age": 29
    },
    {
      "name": "Fikayo Tomori",
      "club": "Milan",
      "nationality": "İngiltere",
      "value": 20000000,
      "rating": 79,
      "age": 27
    },
    {
      "name": "Willi Orbán",
      "club": "RB Leipzig",
      "nationality": "Macaristan",
      "value": 8000000,
      "rating": 78,
      "age": 32
    },
    {
      "name": "Alejandro Vidal",
      "club": "Villarreal",
      "nationality": "İspanya",
      "value": 2000000,
      "rating": 76,
      "age": 31
    },
    {
      "name": "Jan Bednarek",
      "club": "Southampton",
      "nationality": "Polonya",
      "value": 7000000,
      "rating": 75,
      "age": 29
    },
    {
      "name": "Filip Milošević",
      "club": "Fiorentina",
      "nationality": "Sırbistan",
      "value": 1500000,
      "rating": 75,
      "age": 30
    },
    {
      "name": "André Ribeiro",
      "club": "Nice",
      "nationality": "Portekiz",
      "value": 2000000,
      "rating": 74,
      "age": 29
    },
    {
      "name": "Rayan Moreau",
      "club": "Sevilla",
      "nationality": "Fransa",
      "value": 2500000,
      "rating": 74,
      "age": 19
    },
    {
      "name": "Uroš Radovanović",
      "club": "Torino",
      "nationality": "Sırbistan",
      "value": 1500000,
      "rating": 74,
      "age": 31
    }
  ],
  "dm": [
    {
      "name": "Rodri",
      "club": "Manchester City",
      "nationality": "İspanya",
      "value": 110000000,
      "rating": 91,
      "age": 29
    },
    {
      "name": "Declan Rice",
      "club": "Arsenal",
      "nationality": "İngiltere",
      "value": 120000000,
      "rating": 89,
      "age": 27
    },
    {
      "name": "Curtis Turner",
      "club": "West Ham",
      "nationality": "İngiltere",
      "value": 47000000,
      "rating": 89,
      "age": 27
    },
    {
      "name": "Finn Mulder",
      "club": "Nottingham Forest",
      "nationality": "Hollanda",
      "value": 15000000,
      "rating": 88,
      "age": 33
    },
    {
      "name": "Matías Fernández",
      "club": "Bayer Leverkusen",
      "nationality": "Arjantin",
      "value": 51000000,
      "rating": 88,
      "age": 19
    },
    {
      "name": "Dario Barišić",
      "club": "Sevilla",
      "nationality": "Hırvatistan",
      "value": 41500000,
      "rating": 88,
      "age": 24
    },
    {
      "name": "Aurélien Tchouaméni",
      "club": "Real Madrid",
      "nationality": "Fransa",
      "value": 75000000,
      "rating": 87,
      "age": 25
    },
    {
      "name": "Moisés Caicedo",
      "club": "Chelsea",
      "nationality": "Ekvador",
      "value": 90000000,
      "rating": 85,
      "age": 24
    },
    {
      "name": "Nicolò Barella",
      "club": "Inter",
      "nationality": "İtalya",
      "value": 60000000,
      "rating": 85,
      "age": 28
    },
    {
      "name": "Martín Zubimendi",
      "club": "Arsenal",
      "nationality": "İspanya",
      "value": 60000000,
      "rating": 84,
      "age": 26
    },
    {
      "name": "João Neves",
      "club": "Paris Saint-Germain",
      "nationality": "Portekiz",
      "value": 90000000,
      "rating": 84,
      "age": 21
    },
    {
      "name": "Enzo Fernández",
      "club": "Chelsea",
      "nationality": "Arjantin",
      "value": 70000000,
      "rating": 84,
      "age": 24
    },
    {
      "name": "Sandro Tonali",
      "club": "Newcastle United",
      "nationality": "İtalya",
      "value": 55000000,
      "rating": 83,
      "age": 25
    },
    {
      "name": "Ryan Turner",
      "club": "Brighton",
      "nationality": "İngiltere",
      "value": 17500000,
      "rating": 83,
      "age": 20
    },
    {
      "name": "Adrián Delgado",
      "club": "Nottingham Forest",
      "nationality": "İspanya",
      "value": 13000000,
      "rating": 83,
      "age": 28
    },
    {
      "name": "Manuel Ugarte",
      "club": "Manchester United",
      "nationality": "Uruguay",
      "value": 35000000,
      "rating": 82,
      "age": 24
    },
    {
      "name": "Marcelo Brozović",
      "club": "Al-Nassr",
      "nationality": "Hırvatistan",
      "value": 6000000,
      "rating": 82,
      "age": 33
    },
    {
      "name": "Amadou Onana",
      "club": "Aston Villa",
      "nationality": "Belçika",
      "value": 35000000,
      "rating": 82,
      "age": 24
    },
    {
      "name": "Warren Zaïre-Emery",
      "club": "Paris Saint-Germain",
      "nationality": "Fransa",
      "value": 60000000,
      "rating": 82,
      "age": 20
    },
    {
      "name": "Youssouf Fofana",
      "club": "Milan",
      "nationality": "Fransa",
      "value": 25000000,
      "rating": 81,
      "age": 26
    },
    {
      "name": "Idrissa Diallo",
      "club": "Real Sociedad",
      "nationality": "Senegal",
      "value": 9000000,
      "rating": 81,
      "age": 25
    },
    {
      "name": "Wilfred Ndidi",
      "club": "Beşiktaş",
      "nationality": "Nijerya",
      "value": 12000000,
      "rating": 80,
      "age": 28
    },
    {
      "name": "Adrien Rabiot",
      "club": "Marsilya",
      "nationality": "Fransa",
      "value": 15000000,
      "rating": 80,
      "age": 30
    },
    {
      "name": "Miloš Petrović",
      "club": "Betis",
      "nationality": "Sırbistan",
      "value": 4500000,
      "rating": 80,
      "age": 32
    },
    {
      "name": "Bruno Barišić",
      "club": "Sporting CP",
      "nationality": "Hırvatistan",
      "value": 4500000,
      "rating": 80,
      "age": 32
    },
    {
      "name": "Sofyan Amrabat",
      "club": "Fenerbahçe",
      "nationality": "Fas",
      "value": 10000000,
      "rating": 79,
      "age": 29
    },
    {
      "name": "Renato Veiga",
      "club": "Chelsea",
      "nationality": "Portekiz",
      "value": 30000000,
      "rating": 78,
      "age": 22
    },
    {
      "name": "Konstantinos Tsimikas",
      "club": "Liverpool",
      "nationality": "Yunanistan",
      "value": 10000000,
      "rating": 78,
      "age": 29
    },
    {
      "name": "İsmaël Bennacer",
      "club": "Milan",
      "nationality": "Cezayir",
      "value": 10000000,
      "rating": 78,
      "age": 27
    },
    {
      "name": "Boubacar Ba",
      "club": "Fulham",
      "nationality": "Senegal",
      "value": 4500000,
      "rating": 78,
      "age": 28
    },
    {
      "name": "Hugo Bonnet",
      "club": "Wolfsburg",
      "nationality": "Fransa",
      "value": 1500000,
      "rating": 77,
      "age": 34
    },
    {
      "name": "Bram Bakker",
      "club": "Mainz",
      "nationality": "Hollanda",
      "value": 5000000,
      "rating": 77,
      "age": 20
    },
    {
      "name": "Amine Kabbaj",
      "club": "Bologna",
      "nationality": "Fas",
      "value": 2500000,
      "rating": 75,
      "age": 25
    },
    {
      "name": "Sergio Muñoz",
      "club": "Werder Bremen",
      "nationality": "İspanya",
      "value": 2500000,
      "rating": 74,
      "age": 21
    }
  ],
  "rw": [
    {
      "name": "Karlo Kovačić",
      "club": "Club Brugge",
      "nationality": "Hırvatistan",
      "value": 29000000,
      "rating": 91,
      "age": 34
    },
    {
      "name": "Bukayo Saka",
      "club": "Arsenal",
      "nationality": "İngiltere",
      "value": 140000000,
      "rating": 90,
      "age": 24
    },
    {
      "name": "Mohamed Salah",
      "club": "Liverpool",
      "nationality": "Mısır",
      "value": 45000000,
      "rating": 90,
      "age": 33
    },
    {
      "name": "Aleksandar Ristić",
      "club": "Celta Vigo",
      "nationality": "Sırbistan",
      "value": 64000000,
      "rating": 90,
      "age": 23
    },
    {
      "name": "Raphinha",
      "club": "Barcelona",
      "nationality": "Brezilya",
      "value": 90000000,
      "rating": 89,
      "age": 28
    },
    {
      "name": "Ignacio Gómez",
      "club": "Aston Villa",
      "nationality": "Arjantin",
      "value": 63500000,
      "rating": 89,
      "age": 22
    },
    {
      "name": "Oliver Poulsen",
      "club": "Newcastle United",
      "nationality": "Danimarka",
      "value": 41500000,
      "rating": 88,
      "age": 26
    },
    {
      "name": "Nicolás Gómez",
      "club": "Brentford",
      "nationality": "Arjantin",
      "value": 30500000,
      "rating": 87,
      "age": 29
    },
    {
      "name": "Rafael Leão",
      "club": "Milan",
      "nationality": "Portekiz",
      "value": 75000000,
      "rating": 86,
      "age": 26
    },
    {
      "name": "Arda Aksoy",
      "club": "Monaco",
      "nationality": "Türkiye",
      "value": 27000000,
      "rating": 86,
      "age": 23
    },
    {
      "name": "Nico Williams",
      "club": "Athletic Bilbao",
      "nationality": "İspanya",
      "value": 70000000,
      "rating": 85,
      "age": 23
    },
    {
      "name": "Ademola Lookman",
      "club": "Atalanta",
      "nationality": "Nijerya",
      "value": 40000000,
      "rating": 84,
      "age": 27
    },
    {
      "name": "Bradley Barcola",
      "club": "Paris Saint-Germain",
      "nationality": "Fransa",
      "value": 65000000,
      "rating": 84,
      "age": 22
    },
    {
      "name": "Bryan Mbeumo",
      "club": "Manchester United",
      "nationality": "Kamerun",
      "value": 60000000,
      "rating": 83,
      "age": 25
    },
    {
      "name": "Noni Madueke",
      "club": "Arsenal",
      "nationality": "İngiltere",
      "value": 45000000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Jarrod Bowen",
      "club": "West Ham",
      "nationality": "İngiltere",
      "value": 35000000,
      "rating": 82,
      "age": 28
    },
    {
      "name": "Warrick Janssens",
      "club": "Monaco",
      "nationality": "Belçika",
      "value": 7500000,
      "rating": 82,
      "age": 32
    },
    {
      "name": "Mikkel Madsen",
      "club": "Brentford",
      "nationality": "Danimarka",
      "value": 11500000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Karim Adeyemi",
      "club": "Borussia Dortmund",
      "nationality": "Almanya",
      "value": 30000000,
      "rating": 81,
      "age": 24
    },
    {
      "name": "Gabriele Ferraro",
      "club": "Bologna",
      "nationality": "İtalya",
      "value": 6000000,
      "rating": 81,
      "age": 30
    },
    {
      "name": "Callum Bailey",
      "club": "Crystal Palace",
      "nationality": "İngiltere",
      "value": 3500000,
      "rating": 81,
      "age": 33
    },
    {
      "name": "Iñaki Williams",
      "club": "Athletic Bilbao",
      "nationality": "Gana",
      "value": 25000000,
      "rating": 80,
      "age": 31
    },
    {
      "name": "Nathan De Smet",
      "club": "Napoli",
      "nationality": "Belçika",
      "value": 2500000,
      "rating": 80,
      "age": 33
    },
    {
      "name": "Malick Fofana",
      "club": "Lyon",
      "nationality": "Belçika",
      "value": 30000000,
      "rating": 79,
      "age": 20
    },
    {
      "name": "Amine Gouiri",
      "club": "Marsilya",
      "nationality": "Fransa",
      "value": 25000000,
      "rating": 79,
      "age": 25
    },
    {
      "name": "Berkay Bulut",
      "club": "Torino",
      "nationality": "Türkiye",
      "value": 7500000,
      "rating": 79,
      "age": 19
    },
    {
      "name": "Đorđe Milošević",
      "club": "Freiburg",
      "nationality": "Sırbistan",
      "value": 2000000,
      "rating": 79,
      "age": 33
    },
    {
      "name": "Antony",
      "club": "Real Betis",
      "nationality": "Brezilya",
      "value": 25000000,
      "rating": 78,
      "age": 25
    },
    {
      "name": "Jadon Sancho",
      "club": "Aston Villa",
      "nationality": "İngiltere",
      "value": 20000000,
      "rating": 78,
      "age": 25
    },
    {
      "name": "Ismaïla Sarr",
      "club": "Crystal Palace",
      "nationality": "Senegal",
      "value": 20000000,
      "rating": 78,
      "age": 27
    },
    {
      "name": "Yankuba Minteh",
      "club": "Brighton",
      "nationality": "Gambiya",
      "value": 30000000,
      "rating": 78,
      "age": 20
    },
    {
      "name": "Facundo Buonanotte",
      "club": "Brighton",
      "nationality": "Arjantin",
      "value": 20000000,
      "rating": 76,
      "age": 21
    },
    {
      "name": "Abdoulaye Sow",
      "club": "Celta Vigo",
      "nationality": "Senegal",
      "value": 4000000,
      "rating": 76,
      "age": 21
    },
    {
      "name": "Joe Smith",
      "club": "Villarreal",
      "nationality": "İngiltere",
      "value": 3000000,
      "rating": 76,
      "age": 25
    }
  ],
  "cam": [
    {
      "name": "Jude Bellingham",
      "club": "Real Madrid",
      "nationality": "İngiltere",
      "value": 180000000,
      "rating": 91,
      "age": 22
    },
    {
      "name": "Douglas Alves",
      "club": "Rennes",
      "nationality": "Brezilya",
      "value": 51500000,
      "rating": 89,
      "age": 25
    },
    {
      "name": "Florian Wirtz",
      "club": "Liverpool",
      "nationality": "Almanya",
      "value": 130000000,
      "rating": 88,
      "age": 22
    },
    {
      "name": "Martin Ødegaard",
      "club": "Arsenal",
      "nationality": "Norveç",
      "value": 90000000,
      "rating": 88,
      "age": 27
    },
    {
      "name": "Pedri",
      "club": "Barcelona",
      "nationality": "İspanya",
      "value": 100000000,
      "rating": 88,
      "age": 22
    },
    {
      "name": "Simone Bruno",
      "club": "Nice",
      "nationality": "İtalya",
      "value": 51000000,
      "rating": 88,
      "age": 21
    },
    {
      "name": "Kevin De Bruyne",
      "club": "Napoli",
      "nationality": "Belçika",
      "value": 20000000,
      "rating": 87,
      "age": 34
    },
    {
      "name": "Cole Palmer",
      "club": "Chelsea",
      "nationality": "İngiltere",
      "value": 90000000,
      "rating": 87,
      "age": 23
    },
    {
      "name": "Kai Havertz",
      "club": "Arsenal",
      "nationality": "Almanya",
      "value": 65000000,
      "rating": 85,
      "age": 26
    },
    {
      "name": "Paulo Dybala",
      "club": "Roma",
      "nationality": "Arjantin",
      "value": 15000000,
      "rating": 85,
      "age": 32
    },
    {
      "name": "Dominik Szoboszlai",
      "club": "Liverpool",
      "nationality": "Macaristan",
      "value": 65000000,
      "rating": 85,
      "age": 25
    },
    {
      "name": "James Maddison",
      "club": "Tottenham",
      "nationality": "İngiltere",
      "value": 35000000,
      "rating": 83,
      "age": 29
    },
    {
      "name": "Arda Güler",
      "club": "Real Madrid",
      "nationality": "Türkiye",
      "value": 45000000,
      "rating": 82,
      "age": 20
    },
    {
      "name": "Eberechi Eze",
      "club": "Arsenal",
      "nationality": "İngiltere",
      "value": 55000000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Lucas Paquetá",
      "club": "West Ham",
      "nationality": "Brezilya",
      "value": 40000000,
      "rating": 81,
      "age": 27
    },
    {
      "name": "Thibault Claes",
      "club": "Brentford",
      "nationality": "Belçika",
      "value": 3500000,
      "rating": 81,
      "age": 34
    },
    {
      "name": "Nabil Idrissi",
      "club": "Atalanta",
      "nationality": "Fas",
      "value": 3500000,
      "rating": 81,
      "age": 33
    },
    {
      "name": "Christian Eriksen",
      "club": "Manchester United",
      "nationality": "Danimarka",
      "value": 4000000,
      "rating": 80,
      "age": 34
    },
    {
      "name": "Nico Paz",
      "club": "Como",
      "nationality": "Arjantin",
      "value": 35000000,
      "rating": 80,
      "age": 21
    },
    {
      "name": "Morgan Gibbs-White",
      "club": "Nottingham Forest",
      "nationality": "İngiltere",
      "value": 40000000,
      "rating": 80,
      "age": 25
    },
    {
      "name": "Kang-in Lee",
      "club": "Paris Saint-Germain",
      "nationality": "Güney Kore",
      "value": 40000000,
      "rating": 80,
      "age": 24
    },
    {
      "name": "Jesse Visser",
      "club": "Aston Villa",
      "nationality": "Hollanda",
      "value": 4500000,
      "rating": 80,
      "age": 32
    },
    {
      "name": "Soufiane El Amrani",
      "club": "Atalanta",
      "nationality": "Fas",
      "value": 7000000,
      "rating": 80,
      "age": 28
    },
    {
      "name": "Diogo Moura",
      "club": "Villarreal",
      "nationality": "Portekiz",
      "value": 2500000,
      "rating": 80,
      "age": 33
    },
    {
      "name": "Rúben Pereira",
      "club": "Bournemouth",
      "nationality": "Portekiz",
      "value": 4000000,
      "rating": 79,
      "age": 30
    },
    {
      "name": "Lucas Suárez",
      "club": "Betis",
      "nationality": "Arjantin",
      "value": 3000000,
      "rating": 78,
      "age": 30
    },
    {
      "name": "Théo Lefevre",
      "club": "Getafe",
      "nationality": "Fransa",
      "value": 4500000,
      "rating": 78,
      "age": 28
    },
    {
      "name": "Nicolò Zaniolo",
      "club": "Fiorentina",
      "nationality": "İtalya",
      "value": 8000000,
      "rating": 76,
      "age": 26
    },
    {
      "name": "Giovanni Reyna",
      "club": "Borussia Dortmund",
      "nationality": "ABD",
      "value": 12000000,
      "rating": 76,
      "age": 24
    },
    {
      "name": "Yusuf Polat",
      "club": "Toulouse",
      "nationality": "Türkiye",
      "value": 1000000,
      "rating": 76,
      "age": 34
    },
    {
      "name": "Jack Turner",
      "club": "Sevilla",
      "nationality": "İngiltere",
      "value": 3000000,
      "rating": 76,
      "age": 23
    },
    {
      "name": "Fredrik Andersen",
      "club": "Genoa",
      "nationality": "Norveç",
      "value": 2500000,
      "rating": 75,
      "age": 27
    },
    {
      "name": "Reiss Nelson",
      "club": "Fulham",
      "nationality": "İngiltere",
      "value": 10000000,
      "rating": 74,
      "age": 25
    },
    {
      "name": "Vitor Nascimento",
      "club": "Rennes",
      "nationality": "Brezilya",
      "value": 1500000,
      "rating": 74,
      "age": 30
    }
  ],
  "lw": [
    {
      "name": "Vinícius Júnior",
      "club": "Real Madrid",
      "nationality": "Brezilya",
      "value": 180000000,
      "rating": 91,
      "age": 25
    },
    {
      "name": "Lamine Yamal",
      "club": "Barcelona",
      "nationality": "İspanya",
      "value": 200000000,
      "rating": 89,
      "age": 18
    },
    {
      "name": "Marco Rossi",
      "club": "Club Brugge",
      "nationality": "İtalya",
      "value": 38000000,
      "rating": 88,
      "age": 29
    },
    {
      "name": "Lazar Radovanović",
      "club": "Atalanta",
      "nationality": "Sırbistan",
      "value": 12000000,
      "rating": 87,
      "age": 34
    },
    {
      "name": "Michael Olise",
      "club": "Bayern Münih",
      "nationality": "Fransa",
      "value": 65000000,
      "rating": 86,
      "age": 24
    },
    {
      "name": "Rodrygo",
      "club": "Real Madrid",
      "nationality": "Brezilya",
      "value": 80000000,
      "rating": 86,
      "age": 24
    },
    {
      "name": "Jeremy Doku",
      "club": "Manchester City",
      "nationality": "Belçika",
      "value": 65000000,
      "rating": 84,
      "age": 23
    },
    {
      "name": "Anthony Gordon",
      "club": "Newcastle United",
      "nationality": "İngiltere",
      "value": 45000000,
      "rating": 83,
      "age": 25
    },
    {
      "name": "Luis Díaz",
      "club": "Bayern Münih",
      "nationality": "Kolombiya",
      "value": 55000000,
      "rating": 83,
      "age": 28
    },
    {
      "name": "Emil Jensen",
      "club": "Nice",
      "nationality": "Danimarka",
      "value": 17500000,
      "rating": 83,
      "age": 19
    },
    {
      "name": "Kingsley Coman",
      "club": "Al-Nassr",
      "nationality": "Fransa",
      "value": 15000000,
      "rating": 82,
      "age": 29
    },
    {
      "name": "Federico Chiesa",
      "club": "Liverpool",
      "nationality": "İtalya",
      "value": 18000000,
      "rating": 82,
      "age": 28
    },
    {
      "name": "Takefusa Kubo",
      "club": "Real Sociedad",
      "nationality": "Japonya",
      "value": 35000000,
      "rating": 82,
      "age": 24
    },
    {
      "name": "Cody Gakpo",
      "club": "Liverpool",
      "nationality": "Hollanda",
      "value": 45000000,
      "rating": 82,
      "age": 26
    },
    {
      "name": "Mikel Vidal",
      "club": "Freiburg",
      "nationality": "İspanya",
      "value": 10500000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Karlo Barišić",
      "club": "Crystal Palace",
      "nationality": "Hırvatistan",
      "value": 7500000,
      "rating": 82,
      "age": 31
    },
    {
      "name": "Ismail Rachidi",
      "club": "Lille",
      "nationality": "Fas",
      "value": 14000000,
      "rating": 82,
      "age": 20
    },
    {
      "name": "Tomás Pereira",
      "club": "Monaco",
      "nationality": "Portekiz",
      "value": 4000000,
      "rating": 82,
      "age": 34
    },
    {
      "name": "Hugo Renard",
      "club": "Strasbourg",
      "nationality": "Fransa",
      "value": 14000000,
      "rating": 82,
      "age": 20
    },
    {
      "name": "Rayan Chérki",
      "club": "Manchester City",
      "nationality": "Fransa",
      "value": 35000000,
      "rating": 81,
      "age": 22
    },
    {
      "name": "Savinho",
      "club": "Manchester City",
      "nationality": "Brezilya",
      "value": 55000000,
      "rating": 81,
      "age": 21
    },
    {
      "name": "Théo Roussel",
      "club": "Napoli",
      "nationality": "Fransa",
      "value": 3500000,
      "rating": 81,
      "age": 33
    },
    {
      "name": "Kaoru Mitoma",
      "club": "Brighton",
      "nationality": "Japonya",
      "value": 30000000,
      "rating": 80,
      "age": 28
    },
    {
      "name": "Curtis Bailey",
      "club": "Aston Villa",
      "nationality": "İngiltere",
      "value": 7500000,
      "rating": 80,
      "age": 24
    },
    {
      "name": "Tom Palmer",
      "club": "Rennes",
      "nationality": "İngiltere",
      "value": 9000000,
      "rating": 80,
      "age": 21
    },
    {
      "name": "Jamie Gittens",
      "club": "Chelsea",
      "nationality": "İngiltere",
      "value": 40000000,
      "rating": 79,
      "age": 21
    },
    {
      "name": "Estêvão",
      "club": "Chelsea",
      "nationality": "Brezilya",
      "value": 55000000,
      "rating": 79,
      "age": 18
    },
    {
      "name": "Antoine Semenyo",
      "club": "Bournemouth",
      "nationality": "Gana",
      "value": 30000000,
      "rating": 79,
      "age": 25
    },
    {
      "name": "Yanis Bonnet",
      "club": "Benfica",
      "nationality": "Fransa",
      "value": 6000000,
      "rating": 78,
      "age": 19
    },
    {
      "name": "Tom Baker",
      "club": "Fulham",
      "nationality": "İngiltere",
      "value": 4500000,
      "rating": 78,
      "age": 28
    },
    {
      "name": "Facundo Pellistri",
      "club": "Leeds United",
      "nationality": "Uruguay",
      "value": 18000000,
      "rating": 77,
      "age": 23
    },
    {
      "name": "Gabriele Bruno",
      "club": "Aston Villa",
      "nationality": "İtalya",
      "value": 2500000,
      "rating": 77,
      "age": 30
    },
    {
      "name": "Ansu Fati",
      "club": "Monaco",
      "nationality": "İspanya",
      "value": 15000000,
      "rating": 76,
      "age": 22
    },
    {
      "name": "Gonçalo Baptista",
      "club": "Strasbourg",
      "nationality": "Portekiz",
      "value": 3000000,
      "rating": 75,
      "age": 21
    }
  ],
  "st": [
    {
      "name": "Erling Haaland",
      "club": "Manchester City",
      "nationality": "Norveç",
      "value": 200000000,
      "rating": 92,
      "age": 25
    },
    {
      "name": "Kylian Mbappé",
      "club": "Real Madrid",
      "nationality": "Fransa",
      "value": 180000000,
      "rating": 92,
      "age": 27
    },
    {
      "name": "Christian Jensen",
      "club": "Atalanta",
      "nationality": "Danimarka",
      "value": 79500000,
      "rating": 91,
      "age": 24
    },
    {
      "name": "Harry Kane",
      "club": "Bayern Münih",
      "nationality": "İngiltere",
      "value": 75000000,
      "rating": 90,
      "age": 32
    },
    {
      "name": "Ousmane Dembélé",
      "club": "Paris Saint-Germain",
      "nationality": "Fransa",
      "value": 90000000,
      "rating": 89,
      "age": 28
    },
    {
      "name": "Frederik Jensen",
      "club": "Mainz",
      "nationality": "Danimarka",
      "value": 51500000,
      "rating": 89,
      "age": 26
    },
    {
      "name": "Robert Lewandowski",
      "club": "Barcelona",
      "nationality": "Polonya",
      "value": 15000000,
      "rating": 88,
      "age": 37
    },
    {
      "name": "Alexander Isak",
      "club": "Liverpool",
      "nationality": "İsveç",
      "value": 130000000,
      "rating": 88,
      "age": 26
    },
    {
      "name": "Julián Álvarez",
      "club": "Atlético Madrid",
      "nationality": "Arjantin",
      "value": 80000000,
      "rating": 87,
      "age": 25
    },
    {
      "name": "Hakan Polat",
      "club": "Ajax",
      "nationality": "Türkiye",
      "value": 12000000,
      "rating": 87,
      "age": 33
    },
    {
      "name": "Viktor Gyökeres",
      "club": "Arsenal",
      "nationality": "İsveç",
      "value": 80000000,
      "rating": 86,
      "age": 27
    },
    {
      "name": "Agustín Álvarez",
      "club": "Ajax",
      "nationality": "Arjantin",
      "value": 27000000,
      "rating": 86,
      "age": 26
    },
    {
      "name": "Mamadou Fall",
      "club": "Fiorentina",
      "nationality": "Senegal",
      "value": 24500000,
      "rating": 86,
      "age": 28
    },
    {
      "name": "Ismail Benali",
      "club": "Mainz",
      "nationality": "Fas",
      "value": 8000000,
      "rating": 85,
      "age": 33
    },
    {
      "name": "Dušan Vlahović",
      "club": "Juventus",
      "nationality": "Sırbistan",
      "value": 30000000,
      "rating": 84,
      "age": 26
    },
    {
      "name": "Serhou Guirassy",
      "club": "Borussia Dortmund",
      "nationality": "Gine",
      "value": 40000000,
      "rating": 83,
      "age": 29
    },
    {
      "name": "Jonathan David",
      "club": "Juventus",
      "nationality": "Kanada",
      "value": 40000000,
      "rating": 83,
      "age": 25
    },
    {
      "name": "Victor Boniface",
      "club": "Bayer Leverkusen",
      "nationality": "Nijerya",
      "value": 30000000,
      "rating": 82,
      "age": 24
    },
    {
      "name": "Randal Kolo Muani",
      "club": "Juventus",
      "nationality": "Fransa",
      "value": 30000000,
      "rating": 82,
      "age": 27
    },
    {
      "name": "Benjamin Šeško",
      "club": "Manchester United",
      "nationality": "Slovenya",
      "value": 65000000,
      "rating": 82,
      "age": 22
    },
    {
      "name": "Hugo Ekitike",
      "club": "Liverpool",
      "nationality": "Fransa",
      "value": 60000000,
      "rating": 82,
      "age": 23
    },
    {
      "name": "Omar Marmoush",
      "club": "Manchester City",
      "nationality": "Mısır",
      "value": 55000000,
      "rating": 82,
      "age": 26
    },
    {
      "name": "Stan Smit",
      "club": "Real Sociedad",
      "nationality": "Hollanda",
      "value": 10500000,
      "rating": 82,
      "age": 28
    },
    {
      "name": "Loïs Openda",
      "club": "RB Leipzig",
      "nationality": "Belçika",
      "value": 45000000,
      "rating": 81,
      "age": 25
    },
    {
      "name": "Mateo Retegui",
      "club": "Al-Qadsiah",
      "nationality": "İtalya",
      "value": 25000000,
      "rating": 80,
      "age": 26
    },
    {
      "name": "Nathan Claes",
      "club": "Getafe",
      "nationality": "Belçika",
      "value": 9000000,
      "rating": 80,
      "age": 19
    },
    {
      "name": "Christopher Nkunku",
      "club": "Chelsea",
      "nationality": "Fransa",
      "value": 25000000,
      "rating": 79,
      "age": 27
    },
    {
      "name": "Santiago Giménez",
      "club": "Milan",
      "nationality": "Meksika",
      "value": 30000000,
      "rating": 79,
      "age": 24
    },
    {
      "name": "Louis Janssens",
      "club": "Newcastle United",
      "nationality": "Belçika",
      "value": 5000000,
      "rating": 77,
      "age": 19
    },
    {
      "name": "Davide Gentile",
      "club": "Bournemouth",
      "nationality": "İtalya",
      "value": 3000000,
      "rating": 76,
      "age": 25
    },
    {
      "name": "Amir De Smet",
      "club": "Aston Villa",
      "nationality": "Belçika",
      "value": 2500000,
      "rating": 75,
      "age": 24
    },
    {
      "name": "Jonas Becker",
      "club": "Benfica",
      "nationality": "Almanya",
      "value": 2500000,
      "rating": 74,
      "age": 19
    },
    {
      "name": "Karim Sabri",
      "club": "Benfica",
      "nationality": "Fas",
      "value": 2000000,
      "rating": 74,
      "age": 29
    },
    {
      "name": "Marcos Reyes",
      "club": "Club Brugge",
      "nationality": "İspanya",
      "value": 500000,
      "rating": 74,
      "age": 34
    }
  ]
};
