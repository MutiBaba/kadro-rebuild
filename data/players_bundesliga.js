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
      "name": "FC Augsburgh",
      "logo": null,
      "xi": {
        "gk": { "name": "Fin Dahmenn", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 78, "age": 26 },
        "rb": { "name": "Mariuss Wolf", "value": 2500000, "nationality": "Almanya", "photo": null, "rating": 72, "age": 29 },
        "cb1": { "name": "Chrislainn Matsimah", "value": 22000000, "nationality": "Fransa", "photo": null, "rating": 76, "age": 22 },
        "cb2": { "name": "Noahcai Bancs", "value": 20000000, "nationality": "ABD", "photo": null, "rating": 73, "age": 19 },
        "lb": { "name": "Mads Peddersen", "value": 800000, "nationality": "Danimarka", "photo": null, "rating": 70, "age": 29 },
        "dm1": { "name": "Kristijann Jakkic", "value": 6000000, "nationality": "Hırvatistan", "photo": null, "rating": 74, "age": 27 },
        "dm2": { "name": "Robinn Fellhauerr", "value": 3500000, "nationality": "Almanya", "photo": null, "rating": 71, "age": 26 },
        "rw": { "name": "Mert Komur", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 19 },
        "cam": { "name": "Alexiss Claudde-Maurice", "value": 15000000, "nationality": "Fransa", "photo": null, "rating": 75, "age": 26 },
        "lw": { "name": "Nathanael Mbucu", "value": 2000000, "nationality": "Fransa", "photo": null, "rating": 71, "age": 22 },
        "st": { "name": "Rodrigoh Ribeiroh", "value": 4000000, "nationality": "Portekiz", "photo": null, "rating": 70, "age": 19 }
      }
    },
    {
      "id": "union-berlin",
      "name": "Union Berlyn",
      "logo": null,
      "xi": {
        "gk": { "name": "Fredderik Ronnow", "value": 2000000, "nationality": "Danimarka", "photo": null, "rating": 74, "age": 34 },
        "rb": { "name": "Jossip Jurranovic", "value": 2000000, "nationality": "Hırvatistan", "photo": null, "rating": 75, "age": 30 },
        "cb1": { "name": "Leoppold Querfeld", "value": 20000000, "nationality": "Avusturya", "photo": null, "rating": 77, "age": 22 },
        "cb2": { "name": "Zenoh Van Den Bosch", "value": 6000000, "nationality": "Belçika", "photo": null, "rating": 73, "age": 23 },
        "lb": { "name": "Tom Rotheh", "value": 10000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 21 },
        "dm1": { "name": "Aljoschah Kemleinn", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 75, "age": 22 },
        "dm2": { "name": "Andras Schafer", "value": 4500000, "nationality": "Macaristan", "photo": null, "rating": 74, "age": 27 },
        "rw": { "name": "Robbert Scov", "value": 2000000, "nationality": "Danimarka", "photo": null, "rating": 71, "age": 29 },
        "cam": { "name": "Woo-yeong Jeongg", "value": 3500000, "nationality": "Güney Kore", "photo": null, "rating": 72, "age": 26 },
        "lw": { "name": "Andrej Ilik", "value": 9000000, "nationality": "Sırbistan", "photo": null, "rating": 72, "age": 26 },
        "st": { "name": "Emmanuell Latte Lath", "value": 10000000, "nationality": "Fildişi Sahili", "photo": null, "rating": 75, "age": 27 }
      }
    },
    {
      "id": "werder-bremen",
      "name": "Werder Bremmen",
      "logo": null,
      "xi": {
        "gk": { "name": "Karl Heinn", "value": 3000000, "nationality": "Estonya", "photo": null, "rating": 73, "age": 24 },
        "rb": { "name": "Mitchel Weiserr", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 32 },
        "cb1": { "name": "Karrim Coullibaly", "value": 28000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 19 },
        "cb2": { "name": "Marko Friedl", "value": 10000000, "nationality": "Avusturya", "photo": null, "rating": 76, "age": 28 },
        "lb": { "name": "Fellix Agu", "value": 4500000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 26 },
        "dm1": { "name": "Jens Stagge", "value": 14000000, "nationality": "Danimarka", "photo": null, "rating": 76, "age": 29 },
        "dm2": { "name": "Sene Lynenn", "value": 8000000, "nationality": "Belçika", "photo": null, "rating": 73, "age": 27 },
        "rw": { "name": "Justinn Njinmah", "value": 5000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 25 },
        "cam": { "name": "Romanoh Schmid", "value": 15000000, "nationality": "Avusturya", "photo": null, "rating": 77, "age": 26 },
        "lw": { "name": "Sammuel Mbangulah", "value": 8000000, "nationality": "Belçika", "photo": null, "rating": 74, "age": 22 },
        "st": { "name": "Kece Top", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 71, "age": 22 }
      }
    },
    {
      "id": "borussia-dortmund",
      "name": "Borussia Dortmond",
      "logo": null,
      "xi": {
        "gk": { "name": "Gregorr Kobell", "value": 40000000, "nationality": "İsviçre", "photo": null, "rating": 87, "age": 28 },
        "rb": { "name": "Juliann Ryersonn", "value": 25000000, "nationality": "Norveç", "photo": null, "rating": 82, "age": 28 },
        "cb1": { "name": "Nicoh Schlotterbek", "value": 55000000, "nationality": "Almanya", "photo": null, "rating": 85, "age": 26 },
        "cb2": { "name": "Waldemmar Antonn", "value": 18000000, "nationality": "Almanya", "photo": null, "rating": 80, "age": 30 },
        "lb": { "name": "Daniell Svenssonn", "value": 22000000, "nationality": "İsveç", "photo": null, "rating": 79, "age": 24 },
        "dm1": { "name": "Fellix Nmechah", "value": 55000000, "nationality": "Almanya", "photo": null, "rating": 85, "age": 25 },
        "dm2": { "name": "Jobbe Belingham", "value": 40000000, "nationality": "İngiltere", "photo": null, "rating": 82, "age": 20 },
        "rw": { "name": "Maximiliann Beierr", "value": 40000000, "nationality": "Almanya", "photo": null, "rating": 83, "age": 23 },
        "cam": { "name": "Konstantinoss Karretsas", "value": 35000000, "nationality": "Yunanistan", "photo": null, "rating": 81, "age": 18 },
        "lw": { "name": "Fabio Silvah", "value": 22000000, "nationality": "Portekiz", "photo": null, "rating": 80, "age": 24 },
        "st": { "name": "Serhou Guirasy", "value": 32000000, "nationality": "Gine", "photo": null, "rating": 86, "age": 30 }
      }
    },
    {
      "id": "eintracht-frankfurt",
      "name": "Eintracht Frankfort",
      "logo": null,
      "xi": {
        "gk": { "name": "Kaua Santoss", "value": 7000000, "nationality": "Brezilya", "photo": null, "rating": 76, "age": 23 },
        "rb": { "name": "Eliass Baum", "value": 4000000, "nationality": "Almanya", "photo": null, "rating": 71, "age": 20 },
        "cb1": { "name": "Nnamdy Colins", "value": 20000000, "nationality": "Almanya", "photo": null, "rating": 78, "age": 22 },
        "cb2": { "name": "Arthurr Theatte", "value": 17000000, "nationality": "Belçika", "photo": null, "rating": 77, "age": 26 },
        "lb": { "name": "Keitta Kosugy", "value": 5000000, "nationality": "Japonya", "photo": null, "rating": 72, "age": 20 },
        "dm1": { "name": "Rafael Onyeddika", "value": 23000000, "nationality": "Nijerya", "photo": null, "rating": 79, "age": 25 },
        "dm2": { "name": "Ellyez Skhiry", "value": 5000000, "nationality": "Tunus", "photo": null, "rating": 78, "age": 31 },
        "rw": { "name": "Ritsuh Doan", "value": 17000000, "nationality": "Japonya", "photo": null, "rating": 81, "age": 28 },
        "cam": { "name": "Can Uzzun", "value": 45000000, "nationality": "Türkiye", "photo": null, "rating": 82, "age": 20 },
        "lw": { "name": "Jean-Matteo Bahoyah", "value": 25000000, "nationality": "Fransa", "photo": null, "rating": 78, "age": 21 },
        "st": { "name": "Jonathann Burcardt", "value": 30000000, "nationality": "Almanya", "photo": null, "rating": 81, "age": 26 }
      }
    },
    {
      "id": "sc-freiburg",
      "name": "SC Freiburgh",
      "logo": null,
      "xi": {
        "gk": { "name": "Noah Atuboluh", "value": 25000000, "nationality": "Almanya", "photo": null, "rating": 79, "age": 24 },
        "rb": { "name": "Philip Treu", "value": 15000000, "nationality": "Almanya", "photo": null, "rating": 76, "age": 25 },
        "cb1": { "name": "Philip Lienhart", "value": 10000000, "nationality": "Avusturya", "photo": null, "rating": 76, "age": 30 },
        "cb2": { "name": "Max Rosenfelderr", "value": 6000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 23 },
        "lb": { "name": "Bercay Yilmaz", "value": 7000000, "nationality": "Türkiye", "photo": null, "rating": 73, "age": 21 },
        "dm1": { "name": "Patrik Osterhagge", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 77, "age": 26 },
        "dm2": { "name": "Rihitoh Yamamotoh", "value": 7000000, "nationality": "Japonya", "photo": null, "rating": 73, "age": 24 },
        "rw": { "name": "Niclas Beste", "value": 10000000, "nationality": "Almanya", "photo": null, "rating": 76, "age": 27 },
        "cam": { "name": "Yuitoh Suzzuki", "value": 24000000, "nationality": "Japonya", "photo": null, "rating": 79, "age": 24 },
        "lw": { "name": "Derri Scherhant", "value": 7500000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 23 },
        "st": { "name": "Iggor Mattanovic", "value": 22000000, "nationality": "Hırvatistan", "photo": null, "rating": 78, "age": 23 }
      }
    },
    {
      "id": "hamburger-sv",
      "name": "Hamburgher SV",
      "logo": null,
      "xi": {
        "gk": { "name": "Daniell Heuer Fernandez", "value": 1200000, "nationality": "Portekiz", "photo": null, "rating": 71, "age": 33 },
        "rb": { "name": "Daniell Elfadly", "value": 3000000, "nationality": "Libya", "photo": null, "rating": 70, "age": 29 },
        "cb1": { "name": "Nicolas Capaldoh", "value": 8000000, "nationality": "Arjantin", "photo": null, "rating": 73, "age": 27 },
        "cb2": { "name": "Warmed Ommari", "value": 4000000, "nationality": "Fransa", "photo": null, "rating": 71, "age": 26 },
        "lb": { "name": "Miroh Muheim", "value": 5000000, "nationality": "İsviçre", "photo": null, "rating": 72, "age": 28 },
        "dm1": { "name": "Niccolai Remberg", "value": 9000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 26 },
        "dm2": { "name": "Albert Sambi Lokongah", "value": 12000000, "nationality": "Belçika", "photo": null, "rating": 74, "age": 26 },
        "rw": { "name": "Rayann Philipe", "value": 4000000, "nationality": "Fransa", "photo": null, "rating": 70, "age": 25 },
        "cam": { "name": "Martinn Addeline", "value": 10000000, "nationality": "Fransa", "photo": null, "rating": 72, "age": 22 },
        "lw": { "name": "Fabio Balde", "value": 5000000, "nationality": "Portekiz", "photo": null, "rating": 70, "age": 21 },
        "st": { "name": "Patsonn Dakka", "value": 3000000, "nationality": "Zambiya", "photo": null, "rating": 73, "age": 27 }
      }
    },
    {
      "id": "1-fc-heidenheim",
      "name": "1. FC Heidenhaim",
      "logo": null,
      "xi": {
        "gk": { "name": "Franc Fellerr", "value": 800000, "nationality": "Almanya", "photo": null, "rating": 68, "age": 22 },
        "rb": { "name": "Ouallid Mhamdy", "value": 900000, "nationality": "Fas", "photo": null, "rating": 67, "age": 23 },
        "cb1": { "name": "Patrik Mainkah", "value": 2500000, "nationality": "Almanya", "photo": null, "rating": 69, "age": 31 },
        "cb2": { "name": "Tim Sierslebben", "value": 1800000, "nationality": "Almanya", "photo": null, "rating": 68, "age": 26 },
        "lb": { "name": "Jonnas Fohrenbach", "value": 1000000, "nationality": "Almanya", "photo": null, "rating": 67, "age": 30 },
        "dm1": { "name": "Juliann Niehuez", "value": 1500000, "nationality": "Almanya", "photo": null, "rating": 68, "age": 25 },
        "dm2": { "name": "Jan Schoppner", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 70, "age": 27 },
        "rw": { "name": "Paul Henrich", "value": 1200000, "nationality": "Almanya", "photo": null, "rating": 66, "age": 21 },
        "cam": { "name": "Lucca Kerberr", "value": 2000000, "nationality": "Almanya", "photo": null, "rating": 69, "age": 24 },
        "lw": { "name": "Mathiass Honsac", "value": 1700000, "nationality": "Avusturya", "photo": null, "rating": 70, "age": 29 },
        "st": { "name": "Marvinn Pieringerr", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 71, "age": 26 }
      }
    },
    {
      "id": "tsg-hoffenheim",
      "name": "TSG Hoffenhaim",
      "logo": null,
      "xi": {
        "gk": { "name": "Olliver Bauman", "value": 2500000, "nationality": "Almanya", "photo": null, "rating": 78, "age": 36 },
        "rb": { "name": "Vladimir Coufall", "value": 2500000, "nationality": "Çekya", "photo": null, "rating": 74, "age": 33 },
        "cb1": { "name": "Albiann Hajdary", "value": 25000000, "nationality": "İsviçre", "photo": null, "rating": 78, "age": 23 },
        "cb2": { "name": "Ozzan Kabbak", "value": 15000000, "nationality": "Türkiye", "photo": null, "rating": 76, "age": 26 },
        "lb": { "name": "Mats Rotss", "value": 12000000, "nationality": "Hollanda", "photo": null, "rating": 74, "age": 20 },
        "dm1": { "name": "Leon Avdulahu", "value": 30000000, "nationality": "İsviçre", "photo": null, "rating": 79, "age": 22 },
        "dm2": { "name": "Wouterr Burgerr", "value": 20000000, "nationality": "Hollanda", "photo": null, "rating": 77, "age": 25 },
        "rw": { "name": "Patrik Wimmerr", "value": 12000000, "nationality": "Avusturya", "photo": null, "rating": 76, "age": 25 },
        "cam": { "name": "Nathann De Cat", "value": 27000000, "nationality": "Belçika", "photo": null, "rating": 78, "age": 18 },
        "lw": { "name": "Alexanderr Pras", "value": 9000000, "nationality": "Avusturya", "photo": null, "rating": 75, "age": 25 },
        "st": { "name": "Fisnic Asllanni", "value": 35000000, "nationality": "Almanya", "photo": null, "rating": 80, "age": 24 }
      }
    },
    {
      "id": "1-fc-koln",
      "name": "1. FC Kolln",
      "logo": null,
      "xi": {
        "gk": { "name": "Marvinn Schwabe", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 75, "age": 30 },
        "rb": { "name": "Max Finkgrafe", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 72, "age": 21 },
        "cb1": { "name": "Timoh Hubers", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 28 },
        "cb2": { "name": "Jef Chabott", "value": 2500000, "nationality": "Almanya", "photo": null, "rating": 72, "age": 26 },
        "lb": { "name": "Joel Kabore", "value": 2000000, "nationality": "Fildişi Sahili", "photo": null, "rating": 70, "age": 20 },
        "dm1": { "name": "Erric Martell", "value": 3000000, "nationality": "İsviçre", "photo": null, "rating": 72, "age": 24 },
        "dm2": { "name": "Deniss Huseinbasic", "value": 3500000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 25 },
        "rw": { "name": "Said El Malah", "value": 6000000, "nationality": "Almanya", "photo": null, "rating": 75, "age": 20 },
        "cam": { "name": "Floriann Kainz", "value": 2000000, "nationality": "Avusturya", "photo": null, "rating": 73, "age": 32 },
        "lw": { "name": "Lucca Waldschmidt", "value": 4000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 29 },
        "st": { "name": "Damionn Downs", "value": 5000000, "nationality": "ABD", "photo": null, "rating": 73, "age": 21 }
      }
    },
    {
      "id": "rb-leipzig",
      "name": "RB Leipsig",
      "logo": null,
      "xi": {
        "gk": { "name": "Maartenn Vandevvoordt", "value": 12000000, "nationality": "Belçika", "photo": null, "rating": 79, "age": 23 },
        "rb": { "name": "Lutsharell Geertruidah", "value": 20000000, "nationality": "Hollanda", "photo": null, "rating": 79, "age": 25 },
        "cb1": { "name": "Willy Orban", "value": 3000000, "nationality": "Macaristan", "photo": null, "rating": 76, "age": 32 },
        "cb2": { "name": "Castelo Lukebah", "value": 30000000, "nationality": "Fransa", "photo": null, "rating": 80, "age": 22 },
        "lb": { "name": "Davvid Raum", "value": 28000000, "nationality": "Almanya", "photo": null, "rating": 81, "age": 27 },
        "dm1": { "name": "Xaverr Schlagerr", "value": 20000000, "nationality": "Avusturya", "photo": null, "rating": 79, "age": 27 },
        "dm2": { "name": "Kevinn Kampl", "value": 2000000, "nationality": "Slovenya", "photo": null, "rating": 74, "age": 35 },
        "rw": { "name": "Antonnio Nusah", "value": 25000000, "nationality": "Norveç", "photo": null, "rating": 79, "age": 20 },
        "cam": { "name": "Johann Bakayokoh", "value": 22000000, "nationality": "Belçika", "photo": null, "rating": 78, "age": 22 },
        "lw": { "name": "Yan Diommande", "value": 8000000, "nationality": "Fildişi Sahili", "photo": null, "rating": 74, "age": 19 },
        "st": { "name": "Lois Oppenda", "value": 40000000, "nationality": "Belçika", "photo": null, "rating": 82, "age": 25 }
      }
    },
    {
      "id": "bayer-leverkusen",
      "name": "Bayer Leverkussen",
      "logo": null,
      "xi": {
        "gk": { "name": "Marc Flecken", "value": 12000000, "nationality": "Hollanda", "photo": null, "rating": 79, "age": 32 },
        "rb": { "name": "Arthurr", "value": 15000000, "nationality": "Brezilya", "photo": null, "rating": 76, "age": 25 },
        "cb1": { "name": "Edmond Tapsobah", "value": 30000000, "nationality": "Burkina Faso", "photo": null, "rating": 81, "age": 26 },
        "cb2": { "name": "Pieroh Hincapie", "value": 40000000, "nationality": "Ekvador", "photo": null, "rating": 81, "age": 23 },
        "lb": { "name": "Alejandroh Grimaldoh", "value": 30000000, "nationality": "İspanya", "photo": null, "rating": 83, "age": 30 },
        "dm1": { "name": "Granitt Xhakah", "value": 15000000, "nationality": "İsviçre", "photo": null, "rating": 82, "age": 33 },
        "dm2": { "name": "Robbert Andrich", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 79, "age": 31 },
        "rw": { "name": "Nathann Tela", "value": 15000000, "nationality": "İngiltere", "photo": null, "rating": 76, "age": 26 },
        "cam": { "name": "Alleix Garcia", "value": 30000000, "nationality": "İspanya", "photo": null, "rating": 82, "age": 28 },
        "lw": { "name": "Ammine Adly", "value": 20000000, "nationality": "Fas", "photo": null, "rating": 78, "age": 25 },
        "st": { "name": "Patric Schik", "value": 25000000, "nationality": "Çekya", "photo": null, "rating": 82, "age": 30 }
      }
    },
    {
      "id": "mainz-05",
      "name": "Maintz 05",
      "logo": null,
      "xi": {
        "gk": { "name": "Robinn Zentnerr", "value": 4000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 30 },
        "rb": { "name": "Silvann Widmerr", "value": 2500000, "nationality": "İsviçre", "photo": null, "rating": 73, "age": 32 },
        "cb1": { "name": "Andreass Hanche-Olsenn", "value": 4000000, "nationality": "Norveç", "photo": null, "rating": 74, "age": 27 },
        "cb2": { "name": "Stefann Bel", "value": 500000, "nationality": "Almanya", "photo": null, "rating": 70, "age": 34 },
        "lb": { "name": "Anthoni Cacy", "value": 3000000, "nationality": "Fransa", "photo": null, "rating": 74, "age": 27 },
        "dm1": { "name": "Domminik Kohr", "value": 2000000, "nationality": "Almanya", "photo": null, "rating": 72, "age": 30 },
        "dm2": { "name": "Naddiem Amiry", "value": 4000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 28 },
        "rw": { "name": "Lee Jae-sungg", "value": 3000000, "nationality": "Güney Kore", "photo": null, "rating": 73, "age": 32 },
        "cam": { "name": "Paul Nebbel", "value": 6000000, "nationality": "Almanya", "photo": null, "rating": 75, "age": 22 },
        "lw": { "name": "Nelsonn Weipper", "value": 5000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 21 },
        "st": { "name": "Jonathann Burcardt", "value": 15000000, "nationality": "Almanya", "photo": null, "rating": 77, "age": 25 }
      }
    },
    {
      "id": "borussia-monchengladbach",
      "name": "Borussia Monchengladbach",
      "logo": null,
      "xi": {
        "gk": { "name": "Morritz Nicolass", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 27 },
        "rb": { "name": "Joe Scaly", "value": 8000000, "nationality": "ABD", "photo": null, "rating": 74, "age": 22 },
        "cb1": { "name": "Ko Itacura", "value": 12000000, "nationality": "Japonya", "photo": null, "rating": 76, "age": 28 },
        "cb2": { "name": "Marvinn Friedrich", "value": 4000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 29 },
        "lb": { "name": "Lucca Netz", "value": 6000000, "nationality": "Almanya", "photo": null, "rating": 74, "age": 22 },
        "dm1": { "name": "Roco Reitz", "value": 15000000, "nationality": "Almanya", "photo": null, "rating": 77, "age": 23 },
        "dm2": { "name": "Kevinn Stoger", "value": 4000000, "nationality": "Avusturya", "photo": null, "rating": 74, "age": 30 },
        "rw": { "name": "Frank Honoratt", "value": 8000000, "nationality": "Fransa", "photo": null, "rating": 76, "age": 27 },
        "cam": { "name": "Alasane Plea", "value": 6000000, "nationality": "Fransa", "photo": null, "rating": 75, "age": 32 },
        "lw": { "name": "Nathann Ngoummou", "value": 8000000, "nationality": "Kamerun", "photo": null, "rating": 74, "age": 24 },
        "st": { "name": "Hariss Tabakovic", "value": 4000000, "nationality": "İsviçre", "photo": null, "rating": 73, "age": 32 }
      }
    },
    {
      "id": "bayern-munih",
      "name": "Bayern Munnih",
      "logo": null,
      "xi": {
        "gk": { "name": "Mannuel Neuerr", "value": 4000000, "nationality": "Almanya", "photo": null, "rating": 85, "age": 39 },
        "rb": { "name": "Sachah Boey", "value": 25000000, "nationality": "Fransa", "photo": null, "rating": 79, "age": 25 },
        "cb1": { "name": "Dayott Upamekano", "value": 40000000, "nationality": "Fransa", "photo": null, "rating": 84, "age": 27 },
        "cb2": { "name": "Jonathann Tah", "value": 25000000, "nationality": "Almanya", "photo": null, "rating": 83, "age": 30 },
        "lb": { "name": "Alfonso Daviess", "value": 45000000, "nationality": "Kanada", "photo": null, "rating": 85, "age": 25 },
        "dm1": { "name": "Joshua Kimich", "value": 40000000, "nationality": "Almanya", "photo": null, "rating": 87, "age": 31 },
        "dm2": { "name": "Aleksandarr Pavlovic", "value": 40000000, "nationality": "Almanya", "photo": null, "rating": 82, "age": 22 },
        "rw": { "name": "Michaell Ollise", "value": 70000000, "nationality": "Fransa", "photo": null, "rating": 87, "age": 24 },
        "cam": { "name": "Jammal Mussiala", "value": 100000000, "nationality": "Almanya", "photo": null, "rating": 89, "age": 23 },
        "lw": { "name": "Luis Diaz", "value": 65000000, "nationality": "Kolombiya", "photo": null, "rating": 86, "age": 29 },
        "st": { "name": "Harri Kanne", "value": 65000000, "nationality": "İngiltere", "photo": null, "rating": 90, "age": 32 }
      }
    },
    {
      "id": "fc-st-pauli",
      "name": "FC St. Pauly",
      "logo": null,
      "xi": {
        "gk": { "name": "Nikkola Vassilj", "value": 2000000, "nationality": "Bosna Hersek", "photo": null, "rating": 72, "age": 30 },
        "rb": { "name": "Manoliss Salliakas", "value": 2500000, "nationality": "Yunanistan", "photo": null, "rating": 71, "age": 27 },
        "cb1": { "name": "Erric Smith", "value": 3000000, "nationality": "İsveç", "photo": null, "rating": 71, "age": 27 },
        "cb2": { "name": "Haukke Wahl", "value": 2500000, "nationality": "Almanya", "photo": null, "rating": 71, "age": 31 },
        "lb": { "name": "Davvid Nemmeth", "value": 1500000, "nationality": "Avusturya", "photo": null, "rating": 68, "age": 24 },
        "dm1": { "name": "Jakkson Irvinne", "value": 3000000, "nationality": "Avustralya", "photo": null, "rating": 72, "age": 32 },
        "dm2": { "name": "Connorr Metkalfe", "value": 2000000, "nationality": "Avustralya", "photo": null, "rating": 70, "age": 26 },
        "rw": { "name": "Eliass Saad", "value": 3000000, "nationality": "Almanya", "photo": null, "rating": 71, "age": 25 },
        "cam": { "name": "Marcell Hartell", "value": 3500000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 28 },
        "lw": { "name": "Oladapoh Affolayan", "value": 3000000, "nationality": "İngiltere", "photo": null, "rating": 71, "age": 27 },
        "st": { "name": "Danell Sinnani", "value": 2500000, "nationality": "Lüksemburg", "photo": null, "rating": 71, "age": 27 }
      }
    },
    {
      "id": "vfb-stuttgart",
      "name": "VfB Stutgart",
      "logo": null,
      "xi": {
        "gk": { "name": "Alexanderr Nubel", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 79, "age": 29 },
        "rb": { "name": "Joshah Vagnomann", "value": 8000000, "nationality": "Almanya", "photo": null, "rating": 76, "age": 25 },
        "cb1": { "name": "Ramonn Hendrics", "value": 8000000, "nationality": "Hollanda", "photo": null, "rating": 75, "age": 24 },
        "cb2": { "name": "Dan-Axell Zaggadou", "value": 6000000, "nationality": "Fransa", "photo": null, "rating": 75, "age": 27 },
        "lb": { "name": "Maximiliann Mittelstadt", "value": 12000000, "nationality": "Almanya", "photo": null, "rating": 79, "age": 28 },
        "dm1": { "name": "Angeloh Stillerr", "value": 22000000, "nationality": "Almanya", "photo": null, "rating": 80, "age": 24 },
        "dm2": { "name": "Attakan Karazorr", "value": 8000000, "nationality": "Almanya", "photo": null, "rating": 76, "age": 28 },
        "rw": { "name": "Chriss Fuhrich", "value": 15000000, "nationality": "Almanya", "photo": null, "rating": 78, "age": 27 },
        "cam": { "name": "Jamey Lewelling", "value": 15000000, "nationality": "Almanya", "photo": null, "rating": 78, "age": 24 },
        "lw": { "name": "Enzoh Millott", "value": 12000000, "nationality": "Fransa", "photo": null, "rating": 76, "age": 23 },
        "st": { "name": "Denniz Undav", "value": 18000000, "nationality": "Almanya", "photo": null, "rating": 79, "age": 29 }
      }
    },
    {
      "id": "vfl-wolfsburg",
      "name": "VfL Wolfsburgh",
      "logo": null,
      "xi": {
        "gk": { "name": "Kamill Grabarah", "value": 8000000, "nationality": "Polonya", "photo": null, "rating": 76, "age": 26 },
        "rb": { "name": "Ridle Bakuh", "value": 8000000, "nationality": "Almanya", "photo": null, "rating": 76, "age": 27 },
        "cb1": { "name": "Sebastiaann Bornauw", "value": 4000000, "nationality": "Belçika", "photo": null, "rating": 73, "age": 26 },
        "cb2": { "name": "Cedric Zessiger", "value": 4000000, "nationality": "İsviçre", "photo": null, "rating": 73, "age": 27 },
        "lb": { "name": "Killian Fischerr", "value": 5000000, "nationality": "Almanya", "photo": null, "rating": 73, "age": 25 },
        "dm1": { "name": "Maximiliann Arnold", "value": 8000000, "nationality": "Almanya", "photo": null, "rating": 78, "age": 31 },
        "dm2": { "name": "Mattiass Svanberg", "value": 6000000, "nationality": "İsveç", "photo": null, "rating": 75, "age": 26 },
        "rw": { "name": "Jakkub Kaminski", "value": 6000000, "nationality": "Polonya", "photo": null, "rating": 74, "age": 23 },
        "cam": { "name": "Mohamed Amourah", "value": 15000000, "nationality": "Cezayir", "photo": null, "rating": 77, "age": 24 },
        "lw": { "name": "Patrik Wimmerr", "value": 6000000, "nationality": "Avusturya", "photo": null, "rating": 74, "age": 24 },
        "st": { "name": "Jonnas Wind", "value": 15000000, "nationality": "Danimarka", "photo": null, "rating": 78, "age": 26 }
      }
    }
  ]
};
