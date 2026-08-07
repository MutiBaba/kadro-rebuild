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
      "name": "Emiliano Martínez",
      "club": "Aston Villa",
      "nationality": "Arjantin",
      "value": 25000000,
      "rating": 87,
      "age": 33
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
      "name": "Mike Maignan",
      "club": "Milan",
      "nationality": "Fransa",
      "value": 30000000,
      "rating": 87,
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
      "name": "Kepa Arrizabalaga",
      "club": "Bournemouth",
      "nationality": "İspanya",
      "value": 12000000,
      "rating": 81,
      "age": 31
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
      "name": "Marco Bizot",
      "club": "Aston Villa",
      "nationality": "Hollanda",
      "value": 6000000,
      "rating": 76,
      "age": 34
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
      "name": "Ivo Grbić",
      "club": "Lille",
      "nationality": "Hırvatistan",
      "value": 4000000,
      "rating": 74,
      "age": 30
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
      "name": "Andriy Lunin",
      "club": "Real Madrid",
      "nationality": "Ukrayna",
      "value": 20000000,
      "rating": 82,
      "age": 27
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
      "name": "Bart Verbruggen",
      "club": "Brighton",
      "nationality": "Hollanda",
      "value": 22000000,
      "rating": 81,
      "age": 23
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
      "name": "Gregor Kobel",
      "club": "Borussia Dortmund",
      "nationality": "İsviçre",
      "value": 40000000,
      "rating": 86,
      "age": 28
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
      "name": "Unai Simón",
      "club": "Athletic Bilbao",
      "nationality": "İspanya",
      "value": 22000000,
      "rating": 82,
      "age": 29
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
      "name": "Filip Jörgensen",
      "club": "Chelsea",
      "nationality": "Danimarka",
      "value": 18000000,
      "rating": 78,
      "age": 24
    },
    {
      "name": "Émile Bergström",
      "club": "Fulham",
      "nationality": "İsveç",
      "value": 5000000,
      "rating": 74,
      "age": 23
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
      "name": "Denzel Dumfries",
      "club": "Inter",
      "nationality": "Hollanda",
      "value": 35000000,
      "rating": 84,
      "age": 29
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
      "name": "Rick Karsdorp",
      "club": "Bologna",
      "nationality": "Hollanda",
      "value": 5000000,
      "rating": 76,
      "age": 30
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
      "name": "Emerson Royal",
      "club": "Milan",
      "nationality": "Brezilya",
      "value": 12000000,
      "rating": 78,
      "age": 27
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
      "name": "Nordi Mukiele",
      "club": "Paris Saint-Germain",
      "nationality": "Fransa",
      "value": 10000000,
      "rating": 77,
      "age": 27
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
      "name": "Trent Alexander-Arnold",
      "club": "Real Madrid",
      "nationality": "İngiltere",
      "value": 50000000,
      "rating": 86,
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
      "name": "Timothy Castagne",
      "club": "Fulham",
      "nationality": "Belçika",
      "value": 8000000,
      "rating": 76,
      "age": 30
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
      "name": "Daniel Muñoz",
      "club": "Crystal Palace",
      "nationality": "Kolombiya",
      "value": 25000000,
      "rating": 80,
      "age": 29
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
      "name": "Wesley",
      "club": "Roma",
      "nationality": "Brezilya",
      "value": 15000000,
      "rating": 78,
      "age": 25
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
      "name": "Devyne Rensch",
      "club": "Ajax",
      "nationality": "Hollanda",
      "value": 10000000,
      "rating": 75,
      "age": 23
    }
  ],
  "lb": [
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
      "name": "Ferland Mendy",
      "club": "Real Madrid",
      "nationality": "Fransa",
      "value": 15000000,
      "rating": 83,
      "age": 30
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
      "name": "Ben Chilwell",
      "club": "Chelsea",
      "nationality": "İngiltere",
      "value": 12000000,
      "rating": 79,
      "age": 29
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
      "name": "Ángeliño",
      "club": "Beşiktaş",
      "nationality": "İspanya",
      "value": 8000000,
      "rating": 78,
      "age": 29
    },
    {
      "name": "Jonjoe Kenny",
      "club": "Everton",
      "nationality": "İngiltere",
      "value": 3000000,
      "rating": 73,
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
      "name": "Alejandro Grimaldo",
      "club": "Bayer Leverkusen",
      "nationality": "İspanya",
      "value": 35000000,
      "rating": 85,
      "age": 30
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
      "name": "Destiny Udogie",
      "club": "Tottenham",
      "nationality": "İtalya",
      "value": 35000000,
      "rating": 82,
      "age": 23
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
      "name": "Wendell",
      "club": "Porto",
      "nationality": "Brezilya",
      "value": 8000000,
      "rating": 77,
      "age": 32
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
      "name": "Fabiano Parisi",
      "club": "Fiorentina",
      "nationality": "İtalya",
      "value": 12000000,
      "rating": 76,
      "age": 24
    },
    {
      "name": "Marc Cucurella",
      "club": "Chelsea",
      "nationality": "İspanya",
      "value": 45000000,
      "rating": 82,
      "age": 27
    }
  ],
  "cb": [
    {
      "name": "William Saliba",
      "club": "Arsenal",
      "nationality": "Fransa",
      "value": 75000000,
      "rating": 88,
      "age": 24
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
      "name": "Antonio Rüdiger",
      "club": "Real Madrid",
      "nationality": "Almanya",
      "value": 20000000,
      "rating": 85,
      "age": 32
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
      "name": "Kim Min-jae",
      "club": "Bayern Münih",
      "nationality": "Güney Kore",
      "value": 35000000,
      "rating": 85,
      "age": 29
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
      "name": "Jan Bednarek",
      "club": "Southampton",
      "nationality": "Polonya",
      "value": 7000000,
      "rating": 75,
      "age": 29
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
      "name": "Willi Orbán",
      "club": "RB Leipzig",
      "nationality": "Macaristan",
      "value": 8000000,
      "rating": 78,
      "age": 32
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
      "name": "Kevin Danso",
      "club": "Tottenham",
      "nationality": "Avusturya",
      "value": 25000000,
      "rating": 81,
      "age": 26
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
      "name": "Virgil van Dijk",
      "club": "Liverpool",
      "nationality": "Hollanda",
      "value": 25000000,
      "rating": 88,
      "age": 34
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
      "name": "Dayot Upamecano",
      "club": "Bayern Münih",
      "nationality": "Fransa",
      "value": 45000000,
      "rating": 85,
      "age": 26
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
      "name": "Marc Guéhi",
      "club": "Crystal Palace",
      "nationality": "İngiltere",
      "value": 45000000,
      "rating": 82,
      "age": 24
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
      "name": "Cristian Romero",
      "club": "Tottenham",
      "nationality": "Arjantin",
      "value": 50000000,
      "rating": 84,
      "age": 27
    }
  ],
  "dm": [
    {
      "name": "Declan Rice",
      "club": "Arsenal",
      "nationality": "İngiltere",
      "value": 120000000,
      "rating": 89,
      "age": 27
    },
    {
      "name": "Rodri",
      "club": "Manchester City",
      "nationality": "İspanya",
      "value": 110000000,
      "rating": 91,
      "age": 29
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
      "name": "Manuel Ugarte",
      "club": "Manchester United",
      "nationality": "Uruguay",
      "value": 35000000,
      "rating": 82,
      "age": 24
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
      "name": "Youssouf Fofana",
      "club": "Milan",
      "nationality": "Fransa",
      "value": 25000000,
      "rating": 81,
      "age": 26
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
      "name": "Wilfred Ndidi",
      "club": "Beşiktaş",
      "nationality": "Nijerya",
      "value": 12000000,
      "rating": 80,
      "age": 28
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
      "name": "Moisés Caicedo",
      "club": "Chelsea",
      "nationality": "Ekvador",
      "value": 90000000,
      "rating": 85,
      "age": 24
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
      "name": "Warren Zaïre-Emery",
      "club": "Paris Saint-Germain",
      "nationality": "Fransa",
      "value": 60000000,
      "rating": 82,
      "age": 20
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
      "name": "Nicolò Barella",
      "club": "Inter",
      "nationality": "İtalya",
      "value": 60000000,
      "rating": 85,
      "age": 28
    },
    {
      "name": "Sandro Tonali",
      "club": "Newcastle United",
      "nationality": "İtalya",
      "value": 55000000,
      "rating": 83,
      "age": 25
    }
  ],
  "rw": [
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
      "name": "Rafael Leão",
      "club": "Milan",
      "nationality": "Portekiz",
      "value": 75000000,
      "rating": 86,
      "age": 26
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
      "name": "Iñaki Williams",
      "club": "Athletic Bilbao",
      "nationality": "Gana",
      "value": 25000000,
      "rating": 80,
      "age": 31
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
      "name": "Noni Madueke",
      "club": "Arsenal",
      "nationality": "İngiltere",
      "value": 45000000,
      "rating": 82,
      "age": 23
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
      "name": "Raphinha",
      "club": "Barcelona",
      "nationality": "Brezilya",
      "value": 90000000,
      "rating": 89,
      "age": 28
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
      "name": "Jarrod Bowen",
      "club": "West Ham",
      "nationality": "İngiltere",
      "value": 35000000,
      "rating": 82,
      "age": 28
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
      "name": "James Maddison",
      "club": "Tottenham",
      "nationality": "İngiltere",
      "value": 35000000,
      "rating": 83,
      "age": 29
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
      "name": "Nicolò Zaniolo",
      "club": "Fiorentina",
      "nationality": "İtalya",
      "value": 8000000,
      "rating": 76,
      "age": 26
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
      "name": "Giovanni Reyna",
      "club": "Borussia Dortmund",
      "nationality": "ABD",
      "value": 12000000,
      "rating": 76,
      "age": 24
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
      "name": "Nico Paz",
      "club": "Como",
      "nationality": "Arjantin",
      "value": 35000000,
      "rating": 80,
      "age": 21
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
      "name": "Arda Güler",
      "club": "Real Madrid",
      "nationality": "Türkiye",
      "value": 45000000,
      "rating": 82,
      "age": 20
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
      "name": "Eberechi Eze",
      "club": "Arsenal",
      "nationality": "İngiltere",
      "value": 55000000,
      "rating": 82,
      "age": 27
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
      "name": "Reiss Nelson",
      "club": "Fulham",
      "nationality": "İngiltere",
      "value": 10000000,
      "rating": 74,
      "age": 25
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
      "name": "Michael Olise",
      "club": "Bayern Münih",
      "nationality": "Fransa",
      "value": 65000000,
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
      "name": "Rayan Chérki",
      "club": "Manchester City",
      "nationality": "Fransa",
      "value": 35000000,
      "rating": 81,
      "age": 22
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
      "name": "Kaoru Mitoma",
      "club": "Brighton",
      "nationality": "Japonya",
      "value": 30000000,
      "rating": 80,
      "age": 28
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
      "name": "Ansu Fati",
      "club": "Monaco",
      "nationality": "İspanya",
      "value": 15000000,
      "rating": 76,
      "age": 22
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
      "name": "Savinho",
      "club": "Manchester City",
      "nationality": "Brezilya",
      "value": 55000000,
      "rating": 81,
      "age": 21
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
      "name": "Luis Díaz",
      "club": "Bayern Münih",
      "nationality": "Kolombiya",
      "value": 55000000,
      "rating": 83,
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
      "name": "Antoine Semenyo",
      "club": "Bournemouth",
      "nationality": "Gana",
      "value": 30000000,
      "rating": 79,
      "age": 25
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
      "name": "Harry Kane",
      "club": "Bayern Münih",
      "nationality": "İngiltere",
      "value": 75000000,
      "rating": 90,
      "age": 32
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
      "name": "Victor Boniface",
      "club": "Bayer Leverkusen",
      "nationality": "Nijerya",
      "value": 30000000,
      "rating": 82,
      "age": 24
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
      "name": "Randal Kolo Muani",
      "club": "Juventus",
      "nationality": "Fransa",
      "value": 30000000,
      "rating": 82,
      "age": 27
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
      "name": "Mateo Retegui",
      "club": "Al-Qadsiah",
      "nationality": "İtalya",
      "value": 25000000,
      "rating": 80,
      "age": 26
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
      "name": "Julián Álvarez",
      "club": "Atlético Madrid",
      "nationality": "Arjantin",
      "value": 80000000,
      "rating": 87,
      "age": 25
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
      "name": "Loïs Openda",
      "club": "RB Leipzig",
      "nationality": "Belçika",
      "value": 45000000,
      "rating": 81,
      "age": 25
    },
    {
      "name": "Omar Marmoush",
      "club": "Manchester City",
      "nationality": "Mısır",
      "value": 55000000,
      "rating": 82,
      "age": 26
    }
  ]
};
