# Ski length calculator
A calculator for ski lengths.

## Assignment
Din uppgift är att konstruera en webbapplikation (server och klient) som hjälper användaren att välja rätt längd på längdskidor.
Välj att lägga tyngd på den del du föredrar att arbeta med, föredrar du klientsideutveckling lägger du ett extra fokus där eller tvärtom.
Kravspecifikation
* Applikationen skall ha ett användargränssnitt (enkelt eller utförligt)
* Applikationen skall kommunicera mellan klient och server
* Användaren skall ange
* Längd
* Ålder
* Klassisk eller fristil


## Rekommendationer vid beräkning av skidlängd
* Barn 0-4 år: kroppslängd + 0 cm.
* Barn 5-8 år: kroppslängd + 10 till 20 cm.
* Klassisk: kroppslängd + 20cm. Klassiska skidor tillverkas bara till längder upp till 207cm.
* Fristil: kroppslängd + 10 till 15 cm. Enligt tävlingsreglerna får inte skidan understiga kroppslängden med mer än 10cm.


## Initial setup
`cd` into the project directory (where the gulp file is).
Run `npm install` to install the front end requirements, and then run gulp. `gulp` will output all the CSS & JS files into the `assets/dist` folder.

## File structure
All the functionality is in `assets/js/ski-length-calculator.js`. I've tried to add as many comments as possible to explain what I've built.

All the styling is in `css/sass` & this is pretty straight forward. There are a few mixin's in `mixin.scss` but other than that it's pretty basic.
