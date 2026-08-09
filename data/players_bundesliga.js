// PLACEHOLDER VERİ — gerçek kadrolar sonraki adımda doldurulacak.
// Kulüp listesi 2025-26 sezonu gerçek listesidir; oyuncular otomatik üretilmiştir.
const BUNDESLIGA_DATA = {
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
      "id": "fc-augsburg",
      "name": "FC Augsburg",
      "logo": null,
      "xi": {
        "gk": { "name": "Finn Dahmen", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 78, "age": 26 },
        "rb": { "name": "Marius Wolf", "value": 2500000, "nationality": "Almanya", "photo": null, "rating": 72, "age": 29 },
        "cb1": { "name": "Chrislain Matsima", "value": 22000000, "nationality": "Fransa", "photo": null, "rating": 76, "age": 22 },
        "cb2": { "name": "Noahkai Banks", "value": 20000000, "nationality": "ABD", "photo": null, "rating": 73, "age": 19 },
        "lb": { "name": "Mads Pedersen", "value": 800000, "nationality": "Danimarka", "photo": null, "rating": 70, "age": 29 },
        "dm1": { "name": "Kristijan Jakic", "value": 6000000, "nationality": "Hırvatistan", "photo": null, "rating": 74, "age": 27 },
        "dm2": { "name": "Robin Fellhauer", "value": 3500000, "nationality": "Almanya", "photo": null, "rating": 71, "age": 26 },
        "rw": { "name": "Mert Kömür", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 19 },
        "cam": { "name": "Alexis Claude-Maurice", "value": 15000000, "nationality": "Fransa", "photo": null, "rating": 75, "age": 26 },
        "lw": { "name": "Nathanaël Mbuku", "value": 2000000, "nationality": "Fransa", "photo": null, "rating": 71, "age": 22 },
        "st": { "name": "Rodrigo Ribeiro", "value": 4000000, "nationality": "Portekiz", "photo": null, "rating": 70, "age": 19 }
      }
    },
    {
      "id": "union-berlin",
      "name": "Union Berlin",
      "logo": null,
      "xi": {
        "gk": { "name": "Frederik Rönnow", "value": 2000000, "nationality": "Danimarka", "photo": null, "rating": 74, "age": 34 },
        "rb": { "name": "Josip Juranovic", "value": 2000000, "nationality": "Hırvatistan", "photo": null, "rating": 75, "age": 30 },
        "cb1": { "name": "Leopold Querfeld", "value": 20000000, "nationality": "Avusturya", "photo": null, "rating": 77, "age": 22 },
        "cb2": { "name": "Zeno Van Den Bosch", "value": 6000000, "nationality": "Belçika", "photo": null, "rating": 73, "age": 23 },
        "lb": { "name": "Tom Rothe", "value": 10000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 21 },
        "dm1": { "name": "Aljoscha Kemlein", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 75, "age": 22 },
        "dm2": { "name": "András Schäfer", "value": 4500000, "nationality": "Macaristan", "photo": null, "rating": 74, "age": 27 },
        "rw": { "name": "Robert Skov", "value": 2000000, "nationality": "Danimarka", "photo": null, "rating": 71, "age": 29 },
        "cam": { "name": "Woo-yeong Jeong", "value": 3500000, "nationality": "Güney Kore", "photo": null, "rating": 72, "age": 26 },
        "lw": { "name": "Andrej Ilic", "value": 9000000, "nationality": "Sırbistan", "photo": null, "rating": 72, "age": 26 },
        "st": { "name": "Emmanuel Latte Lath", "value": 10000000, "nationality": "Fildişi Sahili", "photo": null, "rating": 75, "age": 27 }
      }
    },
    {
      "id": "werder-bremen",
      "name": "Werder Bremen",
      "logo": null,
      "xi": {
        "gk": { "name": "Karl Hein", "value": 3000000, "nationality": "Estonya", "photo": null, "rating": 73, "age": 24 },
        "rb": { "name": "Mitchell Weiser", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 32 },
        "cb1": { "name": "Karim Coulibaly", "value": 28000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 19 },
        "cb2": { "name": "Marco Friedl", "value": 10000000, "nationality": "Avusturya", "photo": null, "rating": 76, "age": 28 },
        "lb": { "name": "Felix Agu", "value": 4500000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 26 },
        "dm1": { "name": "Jens Stage", "value": 14000000, "nationality": "Danimarka", "photo": null, "rating": 76, "age": 29 },
        "dm2": { "name": "Senne Lynen", "value": 8000000, "nationality": "Belçika", "photo": null, "rating": 73, "age": 27 },
        "rw": { "name": "Justin Njinmah", "value": 5000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 25 },
        "cam": { "name": "Romano Schmid", "value": 15000000, "nationality": "Avusturya", "photo": null, "rating": 77, "age": 26 },
        "lw": { "name": "Samuel Mbangula", "value": 8000000, "nationality": "Belçika", "photo": null, "rating": 74, "age": 22 },
        "st": { "name": "Keke Topp", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 71, "age": 22 }
      }
    },
    {
      "id": "borussia-dortmund",
      "name": "Borussia Dortmund",
      "logo": null,
      "xi": {
        "gk": { "name": "Gregor Kobel", "value": 40000000, "nationality": "İsviçre", "photo": null, "rating": 87, "age": 28 },
        "rb": { "name": "Julian Ryerson", "value": 25000000, "nationality": "Norveç", "photo": null, "rating": 82, "age": 28 },
        "cb1": { "name": "Nico Schlotterbeck", "value": 55000000, "nationality": "Almanya", "photo": null, "rating": 85, "age": 26 },
        "cb2": { "name": "Waldemar Anton", "value": 18000000, "nationality": "Almanya", "photo": null, "rating": 80, "age": 30 },
        "lb": { "name": "Daniel Svensson", "value": 22000000, "nationality": "İsveç", "photo": null, "rating": 79, "age": 24 },
        "dm1": { "name": "Felix Nmecha", "value": 55000000, "nationality": "Almanya", "photo": null, "rating": 85, "age": 25 },
        "dm2": { "name": "Jobe Bellingham", "value": 40000000, "nationality": "İngiltere", "photo": null, "rating": 82, "age": 20 },
        "rw": { "name": "Maximilian Beier", "value": 40000000, "nationality": "Almanya", "photo": null, "rating": 83, "age": 23 },
        "cam": { "name": "Konstantinos Karetsas", "value": 35000000, "nationality": "Yunanistan", "photo": null, "rating": 81, "age": 18 },
        "lw": { "name": "Fábio Silva", "value": 22000000, "nationality": "Portekiz", "photo": null, "rating": 80, "age": 24 },
        "st": { "name": "Serhou Guirassy", "value": 32000000, "nationality": "Gine", "photo": null, "rating": 86, "age": 30 }
      }
    },
    {
      "id": "eintracht-frankfurt",
      "name": "Eintracht Frankfurt",
      "logo": null,
      "xi": {
        "gk": { "name": "Kauã Santos", "value": 7000000, "nationality": "Brezilya", "photo": null, "rating": 76, "age": 23 },
        "rb": { "name": "Elias Baum", "value": 4000000, "nationality": "Almanya", "photo": null, "rating": 71, "age": 20 },
        "cb1": { "name": "Nnamdi Collins", "value": 20000000, "nationality": "Almanya", "photo": null, "rating": 78, "age": 22 },
        "cb2": { "name": "Arthur Theate", "value": 17000000, "nationality": "Belçika", "photo": null, "rating": 77, "age": 26 },
        "lb": { "name": "Keita Kosugi", "value": 5000000, "nationality": "Japonya", "photo": null, "rating": 72, "age": 20 },
        "dm1": { "name": "Raphael Onyedika", "value": 23000000, "nationality": "Nijerya", "photo": null, "rating": 79, "age": 25 },
        "dm2": { "name": "Ellyes Skhiri", "value": 5000000, "nationality": "Tunus", "photo": null, "rating": 78, "age": 31 },
        "rw": { "name": "Ritsu Doan", "value": 17000000, "nationality": "Japonya", "photo": null, "rating": 81, "age": 28 },
        "cam": { "name": "Can Uzun", "value": 45000000, "nationality": "Türkiye", "photo": null, "rating": 82, "age": 20 },
        "lw": { "name": "Jean-Mattéo Bahoya", "value": 25000000, "nationality": "Fransa", "photo": null, "rating": 78, "age": 21 },
        "st": { "name": "Jonathan Burkardt", "value": 30000000, "nationality": "Almanya", "photo": null, "rating": 81, "age": 26 }
      }
    },
    {
      "id": "sc-freiburg",
      "name": "SC Freiburg",
      "logo": null,
      "xi": {
        "gk": { "name": "Noah Atubolu", "value": 25000000, "nationality": "Almanya", "photo": null, "rating": 79, "age": 24 },
        "rb": { "name": "Philipp Treu", "value": 15000000, "nationality": "Almanya", "photo": null, "rating": 76, "age": 25 },
        "cb1": { "name": "Philipp Lienhart", "value": 10000000, "nationality": "Avusturya", "photo": null, "rating": 76, "age": 30 },
        "cb2": { "name": "Max Rosenfelder", "value": 6000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 23 },
        "lb": { "name": "Berkay Yılmaz", "value": 7000000, "nationality": "Türkiye", "photo": null, "rating": 73, "age": 21 },
        "dm1": { "name": "Patrick Osterhage", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 77, "age": 26 },
        "dm2": { "name": "Rihito Yamamoto", "value": 7000000, "nationality": "Japonya", "photo": null, "rating": 73, "age": 24 },
        "rw": { "name": "Niklas Beste", "value": 10000000, "nationality": "Almanya", "photo": null, "rating": 76, "age": 27 },
        "cam": { "name": "Yuito Suzuki", "value": 24000000, "nationality": "Japonya", "photo": null, "rating": 79, "age": 24 },
        "lw": { "name": "Derry Scherhant", "value": 7500000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 23 },
        "st": { "name": "Igor Matanovic", "value": 22000000, "nationality": "Hırvatistan", "photo": null, "rating": 78, "age": 23 }
      }
    },
    {
      "id": "hamburger-sv",
      "name": "Hamburger SV",
      "logo": null,
      "xi": {
        "gk": { "name": "Daniel Heuer Fernandes", "value": 1200000, "nationality": "Portekiz", "photo": null, "rating": 71, "age": 33 },
        "rb": { "name": "Daniel Elfadli", "value": 3000000, "nationality": "Libya", "photo": null, "rating": 70, "age": 29 },
        "cb1": { "name": "Nicolás Capaldo", "value": 8000000, "nationality": "Arjantin", "photo": null, "rating": 73, "age": 27 },
        "cb2": { "name": "Warmed Omari", "value": 4000000, "nationality": "Fransa", "photo": null, "rating": 71, "age": 26 },
        "lb": { "name": "Miro Muheim", "value": 5000000, "nationality": "İsviçre", "photo": null, "rating": 72, "age": 28 },
        "dm1": { "name": "Nicolai Remberg", "value": 9000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 26 },
        "dm2": { "name": "Albert Sambi Lokonga", "value": 12000000, "nationality": "Belçika", "photo": null, "rating": 74, "age": 26 },
        "rw": { "name": "Rayan Philippe", "value": 4000000, "nationality": "Fransa", "photo": null, "rating": 70, "age": 25 },
        "cam": { "name": "Martin Adeline", "value": 10000000, "nationality": "Fransa", "photo": null, "rating": 72, "age": 22 },
        "lw": { "name": "Fábio Baldé", "value": 5000000, "nationality": "Portekiz", "photo": null, "rating": 70, "age": 21 },
        "st": { "name": "Patson Daka", "value": 3000000, "nationality": "Zambiya", "photo": null, "rating": 73, "age": 27 }
      }
    },
    {
      "id": "1-fc-heidenheim",
      "name": "1. FC Heidenheim",
      "logo": null,
      "xi": {
        "gk": { "name": "Frank Feller", "value": 800000, "nationality": "Almanya", "photo": null, "rating": 68, "age": 22 },
        "rb": { "name": "Oualid Mhamdi", "value": 900000, "nationality": "Fas", "photo": null, "rating": 67, "age": 23 },
        "cb1": { "name": "Patrick Mainka", "value": 2500000, "nationality": "Almanya", "photo": null, "rating": 69, "age": 31 },
        "cb2": { "name": "Tim Siersleben", "value": 1800000, "nationality": "Almanya", "photo": null, "rating": 68, "age": 26 },
        "lb": { "name": "Jonas Föhrenbach", "value": 1000000, "nationality": "Almanya", "photo": null, "rating": 67, "age": 30 },
        "dm1": { "name": "Julian Niehues", "value": 1500000, "nationality": "Almanya", "photo": null, "rating": 68, "age": 25 },
        "dm2": { "name": "Jan Schöppner", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 70, "age": 27 },
        "rw": { "name": "Paul Hennrich", "value": 1200000, "nationality": "Almanya", "photo": null, "rating": 66, "age": 21 },
        "cam": { "name": "Luca Kerber", "value": 2000000, "nationality": "Almanya", "photo": null, "rating": 69, "age": 24 },
        "lw": { "name": "Mathias Honsak", "value": 1700000, "nationality": "Avusturya", "photo": null, "rating": 70, "age": 29 },
        "st": { "name": "Marvin Pieringer", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 71, "age": 26 }
      }
    },
    {
      "id": "tsg-hoffenheim",
      "name": "TSG Hoffenheim",
      "logo": null,
      "xi": {
        "gk": { "name": "Oliver Baumann", "value": 2500000, "nationality": "Almanya", "photo": null, "rating": 78, "age": 36 },
        "rb": { "name": "Vladimír Coufal", "value": 2500000, "nationality": "Çekya", "photo": null, "rating": 74, "age": 33 },
        "cb1": { "name": "Albian Hajdari", "value": 25000000, "nationality": "İsviçre", "photo": null, "rating": 78, "age": 23 },
        "cb2": { "name": "Ozan Kabak", "value": 15000000, "nationality": "Türkiye", "photo": null, "rating": 76, "age": 26 },
        "lb": { "name": "Mats Rots", "value": 12000000, "nationality": "Hollanda", "photo": null, "rating": 74, "age": 20 },
        "dm1": { "name": "Leon Avdullahu", "value": 30000000, "nationality": "İsviçre", "photo": null, "rating": 79, "age": 22 },
        "dm2": { "name": "Wouter Burger", "value": 20000000, "nationality": "Hollanda", "photo": null, "rating": 77, "age": 25 },
        "rw": { "name": "Patrick Wimmer", "value": 12000000, "nationality": "Avusturya", "photo": null, "rating": 76, "age": 25 },
        "cam": { "name": "Nathan De Cat", "value": 27000000, "nationality": "Belçika", "photo": null, "rating": 78, "age": 18 },
        "lw": { "name": "Alexander Prass", "value": 9000000, "nationality": "Avusturya", "photo": null, "rating": 75, "age": 25 },
        "st": { "name": "Fisnik Asllani", "value": 35000000, "nationality": "Almanya", "photo": null, "rating": 80, "age": 24 }
      }
    },
    {
      "id": "1-fc-koln",
      "name": "1. FC Köln",
      "logo": null,
      "xi": {
        "gk": { "name": "Marvin Schwäbe", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 75, "age": 30 },
        "rb": { "name": "Max Finkgräfe", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 72, "age": 21 },
        "cb1": { "name": "Timo Hübers", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 28 },
        "cb2": { "name": "Jeff Chabot", "value": 2500000, "nationality": "Almanya", "photo": null, "rating": 72, "age": 26 },
        "lb": { "name": "Joel Kaboré", "value": 2000000, "nationality": "Fildişi Sahili", "photo": null, "rating": 70, "age": 20 },
        "dm1": { "name": "Eric Martel", "value": 3000000, "nationality": "İsviçre", "photo": null, "rating": 72, "age": 24 },
        "dm2": { "name": "Denis Huseinbašić", "value": 3500000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 25 },
        "rw": { "name": "Said El Mala", "value": 6000000, "nationality": "Almanya", "photo": null, "rating": 75, "age": 20 },
        "cam": { "name": "Florian Kainz", "value": 2000000, "nationality": "Avusturya", "photo": null, "rating": 73, "age": 32 },
        "lw": { "name": "Luca Waldschmidt", "value": 4000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 29 },
        "st": { "name": "Damion Downs", "value": 5000000, "nationality": "ABD", "photo": null, "rating": 73, "age": 21 }
      }
    },
    {
      "id": "rb-leipzig",
      "name": "RB Leipzig",
      "logo": null,
      "xi": {
        "gk": { "name": "Maarten Vandevoordt", "value": 12000000, "nationality": "Belçika", "photo": null, "rating": 79, "age": 23 },
        "rb": { "name": "Lutsharel Geertruida", "value": 20000000, "nationality": "Hollanda", "photo": null, "rating": 79, "age": 25 },
        "cb1": { "name": "Willi Orbán", "value": 3000000, "nationality": "Macaristan", "photo": null, "rating": 76, "age": 32 },
        "cb2": { "name": "Castello Lukeba", "value": 30000000, "nationality": "Fransa", "photo": null, "rating": 80, "age": 22 },
        "lb": { "name": "David Raum", "value": 28000000, "nationality": "Almanya", "photo": null, "rating": 81, "age": 27 },
        "dm1": { "name": "Xaver Schlager", "value": 20000000, "nationality": "Avusturya", "photo": null, "rating": 79, "age": 27 },
        "dm2": { "name": "Kevin Kampl", "value": 2000000, "nationality": "Slovenya", "photo": null, "rating": 74, "age": 35 },
        "rw": { "name": "Antonio Nusa", "value": 25000000, "nationality": "Norveç", "photo": null, "rating": 79, "age": 20 },
        "cam": { "name": "Johan Bakayoko", "value": 22000000, "nationality": "Belçika", "photo": null, "rating": 78, "age": 22 },
        "lw": { "name": "Yan Diomande", "value": 8000000, "nationality": "Fildişi Sahili", "photo": null, "rating": 74, "age": 19 },
        "st": { "name": "Lois Openda", "value": 40000000, "nationality": "Belçika", "photo": null, "rating": 82, "age": 25 }
      }
    },
    {
      "id": "bayer-leverkusen",
      "name": "Bayer Leverkusen",
      "logo": null,
      "xi": {
        "gk": { "name": "Mark Flekken", "value": 12000000, "nationality": "Hollanda", "photo": null, "rating": 79, "age": 32 },
        "rb": { "name": "Arthur", "value": 15000000, "nationality": "Brezilya", "photo": null, "rating": 76, "age": 25 },
        "cb1": { "name": "Edmond Tapsoba", "value": 30000000, "nationality": "Burkina Faso", "photo": null, "rating": 81, "age": 26 },
        "cb2": { "name": "Piero Hincapié", "value": 40000000, "nationality": "Ekvador", "photo": null, "rating": 81, "age": 23 },
        "lb": { "name": "Alejandro Grimaldo", "value": 30000000, "nationality": "İspanya", "photo": null, "rating": 83, "age": 30 },
        "dm1": { "name": "Granit Xhaka", "value": 15000000, "nationality": "İsviçre", "photo": null, "rating": 82, "age": 33 },
        "dm2": { "name": "Robert Andrich", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 79, "age": 31 },
        "rw": { "name": "Nathan Tella", "value": 15000000, "nationality": "İngiltere", "photo": null, "rating": 76, "age": 26 },
        "cam": { "name": "Aleix García", "value": 30000000, "nationality": "İspanya", "photo": null, "rating": 82, "age": 28 },
        "lw": { "name": "Amine Adli", "value": 20000000, "nationality": "Fas", "photo": null, "rating": 78, "age": 25 },
        "st": { "name": "Patrik Schick", "value": 25000000, "nationality": "Çekya", "photo": null, "rating": 82, "age": 30 }
      }
    },
    {
      "id": "mainz-05",
      "name": "Mainz 05",
      "logo": null,
      "xi": {
        "gk": { "name": "Robin Zentner", "value": 4000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 30 },
        "rb": { "name": "Silvan Widmer", "value": 2500000, "nationality": "İsviçre", "photo": null, "rating": 73, "age": 32 },
        "cb1": { "name": "Andreas Hanche-Olsen", "value": 4000000, "nationality": "Norveç", "photo": null, "rating": 74, "age": 27 },
        "cb2": { "name": "Stefan Bell", "value": 500000, "nationality": "Almanya", "photo": null, "rating": 70, "age": 34 },
        "lb": { "name": "Anthony Caci", "value": 3000000, "nationality": "Fransa", "photo": null, "rating": 74, "age": 27 },
        "dm1": { "name": "Dominik Kohr", "value": 2000000, "nationality": "Almanya", "photo": null, "rating": 72, "age": 30 },
        "dm2": { "name": "Nadiem Amiri", "value": 4000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 28 },
        "rw": { "name": "Lee Jae-sung", "value": 3000000, "nationality": "Güney Kore", "photo": null, "rating": 73, "age": 32 },
        "cam": { "name": "Paul Nebel", "value": 6000000, "nationality": "Almanya", "photo": null, "rating": 75, "age": 22 },
        "lw": { "name": "Nelson Weiper", "value": 5000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 21 },
        "st": { "name": "Jonathan Burkardt", "value": 15000000, "nationality": "Almanya", "photo": null, "rating": 77, "age": 25 }
      }
    },
    {
      "id": "borussia-monchengladbach",
      "name": "Borussia Mönchengladbach",
      "logo": null,
      "xi": {
        "gk": { "name": "Moritz Nicolas", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 27 },
        "rb": { "name": "Joe Scally", "value": 8000000, "nationality": "ABD", "photo": null, "rating": 74, "age": 22 },
        "cb1": { "name": "Ko Itakura", "value": 12000000, "nationality": "Japonya", "photo": null, "rating": 76, "age": 28 },
        "cb2": { "name": "Marvin Friedrich", "value": 4000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 29 },
        "lb": { "name": "Luca Netz", "value": 6000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 22 },
        "dm1": { "name": "Rocco Reitz", "value": 15000000, "nationality": "Almanya", "photo": null, "rating": 77, "age": 23 },
        "dm2": { "name": "Kevin Stöger", "value": 4000000, "nationality": "Avusturya", "photo": null, "rating": 74, "age": 30 },
        "rw": { "name": "Franck Honorat", "value": 8000000, "nationality": "Fransa", "photo": null, "rating": 76, "age": 27 },
        "cam": { "name": "Alassane Pléa", "value": 6000000, "nationality": "Fransa", "photo": null, "rating": 75, "age": 32 },
        "lw": { "name": "Nathan Ngoumou", "value": 8000000, "nationality": "Kamerun", "photo": null, "rating": 74, "age": 24 },
        "st": { "name": "Haris Tabaković", "value": 4000000, "nationality": "İsviçre", "photo": null, "rating": 73, "age": 32 }
      }
    },
    {
      "id": "bayern-munih",
      "name": "Bayern Münih",
      "logo": null,
      "xi": {
        "gk": { "name": "Manuel Neuer", "value": 4000000, "nationality": "Almanya", "photo": null, "rating": 85, "age": 39 },
        "rb": { "name": "Sacha Boey", "value": 25000000, "nationality": "Fransa", "photo": null, "rating": 79, "age": 25 },
        "cb1": { "name": "Dayot Upamecano", "value": 40000000, "nationality": "Fransa", "photo": null, "rating": 84, "age": 27 },
        "cb2": { "name": "Jonathan Tah", "value": 25000000, "nationality": "Almanya", "photo": null, "rating": 83, "age": 30 },
        "lb": { "name": "Alphonso Davies", "value": 45000000, "nationality": "Kanada", "photo": null, "rating": 85, "age": 25 },
        "dm1": { "name": "Joshua Kimmich", "value": 40000000, "nationality": "Almanya", "photo": null, "rating": 87, "age": 31 },
        "dm2": { "name": "Aleksandar Pavlović", "value": 40000000, "nationality": "Almanya", "photo": null, "rating": 82, "age": 22 },
        "rw": { "name": "Michael Olise", "value": 70000000, "nationality": "Fransa", "photo": null, "rating": 87, "age": 24 },
        "cam": { "name": "Jamal Musiala", "value": 100000000, "nationality": "Almanya", "photo": null, "rating": 89, "age": 23 },
        "lw": { "name": "Luis Díaz", "value": 65000000, "nationality": "Kolombiya", "photo": null, "rating": 86, "age": 29 },
        "st": { "name": "Harry Kane", "value": 65000000, "nationality": "İngiltere", "photo": null, "rating": 90, "age": 32 }
      }
    },
    {
      "id": "fc-st-pauli",
      "name": "FC St. Pauli",
      "logo": null,
      "xi": {
        "gk": { "name": "Nikola Vasilj", "value": 2000000, "nationality": "Bosna Hersek", "photo": null, "rating": 72, "age": 30 },
        "rb": { "name": "Manolis Saliakas", "value": 2500000, "nationality": "Yunanistan", "photo": null, "rating": 71, "age": 27 },
        "cb1": { "name": "Eric Smith", "value": 3000000, "nationality": "İsveç", "photo": null, "rating": 71, "age": 27 },
        "cb2": { "name": "Hauke Wahl", "value": 2500000, "nationality": "Almanya", "photo": null, "rating": 71, "age": 31 },
        "lb": { "name": "David Nemeth", "value": 1500000, "nationality": "Avusturya", "photo": null, "rating": 68, "age": 24 },
        "dm1": { "name": "Jackson Irvine", "value": 3000000, "nationality": "Avustralya", "photo": null, "rating": 72, "age": 32 },
        "dm2": { "name": "Connor Metcalfe", "value": 2000000, "nationality": "Avustralya", "photo": null, "rating": 70, "age": 26 },
        "rw": { "name": "Elias Saad", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 71, "age": 25 },
        "cam": { "name": "Marcel Hartel", "value": 3500000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 28 },
        "lw": { "name": "Oladapo Afolayan", "value": 3000000, "nationality": "İngiltere", "photo": null, "rating": 71, "age": 27 },
        "st": { "name": "Danel Sinani", "value": 2500000, "nationality": "Lüksemburg", "photo": null, "rating": 71, "age": 27 }
      }
    },
    {
      "id": "vfb-stuttgart",
      "name": "VfB Stuttgart",
      "logo": null,
      "xi": {
        "gk": { "name": "Alexander Nübel", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 79, "age": 29 },
        "rb": { "name": "Josha Vagnoman", "value": 8000000, "nationality": "Almanya", "photo": null, "rating": 76, "age": 25 },
        "cb1": { "name": "Ramon Hendriks", "value": 8000000, "nationality": "Hollanda", "photo": null, "rating": 75, "age": 24 },
        "cb2": { "name": "Dan-Axel Zagadou", "value": 6000000, "nationality": "Fransa", "photo": null, "rating": 75, "age": 27 },
        "lb": { "name": "Maximilian Mittelstädt", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 79, "age": 28 },
        "dm1": { "name": "Angelo Stiller", "value": 22000000, "nationality": "Almanya", "photo": null, "rating": 80, "age": 24 },
        "dm2": { "name": "Atakan Karazor", "value": 8000000, "nationality": "Almanya", "photo": null, "rating": 76, "age": 28 },
        "rw": { "name": "Chris Führich", "value": 15000000, "nationality": "Almanya", "photo": null, "rating": 78, "age": 27 },
        "cam": { "name": "Jamie Leweling", "value": 15000000, "nationality": "Almanya", "photo": null, "rating": 78, "age": 24 },
        "lw": { "name": "Enzo Millot", "value": 12000000, "nationality": "Fransa", "photo": null, "rating": 76, "age": 23 },
        "st": { "name": "Deniz Undav", "value": 18000000, "nationality": "Almanya", "photo": null, "rating": 79, "age": 29 }
      }
    },
    {
      "id": "vfl-wolfsburg",
      "name": "VfL Wolfsburg",
      "logo": null,
      "xi": {
        "gk": { "name": "Kamil Grabara", "value": 8000000, "nationality": "Polonya", "photo": null, "rating": 76, "age": 26 },
        "rb": { "name": "Ridle Baku", "value": 8000000, "nationality": "Almanya", "photo": null, "rating": 76, "age": 27 },
        "cb1": { "name": "Sebastiaan Bornauw", "value": 4000000, "nationality": "Belçika", "photo": null, "rating": 73, "age": 26 },
        "cb2": { "name": "Cédric Zesiger", "value": 4000000, "nationality": "İsviçre", "photo": null, "rating": 73, "age": 27 },
        "lb": { "name": "Kilian Fischer", "value": 5000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 25 },
        "dm1": { "name": "Maximilian Arnold", "value": 8000000, "nationality": "Almanya", "photo": null, "rating": 78, "age": 31 },
        "dm2": { "name": "Mattias Svanberg", "value": 6000000, "nationality": "İsveç", "photo": null, "rating": 75, "age": 26 },
        "rw": { "name": "Jakub Kamiński", "value": 6000000, "nationality": "Polonya", "photo": null, "rating": 74, "age": 23 },
        "cam": { "name": "Mohammed Amoura", "value": 15000000, "nationality": "Cezayir", "photo": null, "rating": 77, "age": 24 },
        "lw": { "name": "Patrick Wimmer", "value": 6000000, "nationality": "Avusturya", "photo": null, "rating": 74, "age": 24 },
        "st": { "name": "Jonas Wind", "value": 15000000, "nationality": "Danimarka", "photo": null, "rating": 78, "age": 26 }
      }
    }
  ]
};
