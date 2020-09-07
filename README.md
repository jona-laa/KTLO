# Moment 2 - NodeJS & Gulp

### Vad är automatiseringsprocessens syfte?
Syftet med automatisering är att effektivisera utvecklingsprocessen genom att med hjälp av script automatisera bort repetativa moment som tenderar att vara tidskonsumerande, t.ex:
* Sammanslagning och minifiering av filer
* Kvalitetskontroll av kod
* Skapandet av distributionsfiler 
* Kompilering av t.ex SASS och ES6 kod
* m.m

### Vilka paket har jag använd och varför?
* @babel
  * konverterar nyare JS syntax till äldre, för bredare stöd i webbläsare.
* browser-sync
  * Skapar live server för att underlätta utvecklingsprocessen
* del
  * Radera filer eller mappar
* gulp-babel
  * Använd babel med gulp
* gulp-clean-css
  * Minifiera CSS
* gulp-concat
  * Sammamslagning av filer
* gulp-htmlmin
  * Minifiera HTML
* gulp-imagemin
  * Minifiera bilder
* gulp-sourcemaps
  * Skapar sourcemaps
* gulp-uglify
  * Minifierar JS-filer

### Beskriv systemet du skapat, hur man startar upp det och de tasks som ingår.
En simpel koncept-webbplats, skapad med html, css och js.  
  
Med hjälp av gulp tasks automatiserar jag skapandet av en distributionsmapp. Paketen, nämnda i listan ovan, används för att förflytta filer till denna mapp, men även för att minimera storleken av html, css och js filer, samt för att översätta ES6 kod till äldre syntax för att bredda webbläsarstödet.  
  
Utöver detta finns tasks för att hålla reda på förändringar i källkoden, och för att automatiskt ladda om webbläsarfönstret då detta skett, vilket underlättar utvecklingsarbetet avsevärt.  
  
Klona: git clone https://github.com/jona-laa/ktlo-gulp.git  
Installera: npm i  
Skapa dist och kör Live Server: gulp

### Extra
* Editorconfig - Standardiserar inställningar i VSC för bl.a indentering, preferens på " eller ', osv.
