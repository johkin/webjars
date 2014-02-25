webjars
=======
Lab-projekt för att utvärdera webjars inom intygsprojektet.

WebCert och Mina Intyg ska fungera som portal-applikationer, där man kan lägga in intygsmoduler.
Intygsmoduler packeteras som webjars, så att de kan bidra med webresurser i portal-applikationen.

Nuvarande lösning använder Require för att starta moduler i Angular, men för tillfället har jag inte fått Angular att läsa in controllers från en modul. De exempel jag har tittat på använder lazy-load, vilket kanske är onödigt avancerat, det bör vara tillräckligt bra att läsa in alla moduler vid uppstart.

Exempel att titta på:
Lazy loading
http://weblogs.asp.net/dwahlin/archive/2013/05/22/dynamically-loading-controllers-and-views-with-angularjs-and-requirejs.aspx
Require-setup
https://github.com/tnajdek/angular-requirejs-seed
