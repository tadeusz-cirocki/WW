/*
Definicja:
Wzorzec Dekoratora umożliwia dynamiczne dodawanie nowych funkcjonalności do istniejących obiektów,
zachowując ich interfejs.

Użycie:
Załóżmy, że mamy klasę Transport, która reprezentuje podstawowy rodzaj transportu. 
Chcemy dodać dodatkowe funkcje do tej klasy, takie jak śledzenie GPS.
Możemy zaimplementować wzorzec Dekoratora, tworząc klasę GPSTrackingDecorator, 
które dodają odpowiednie funkcje do obiektu Transport.

ES6 syntax

Run:
node .\decorator.js
*/


// Podstawowa klasa Transport
class Transport {
    deliver() {
        console.log('Delivering the package.');
    }
}

// Dekorator śledzenia GPS
class GPSTrackingDecorator {
    constructor(transport) {
        this.transport = transport;
    }

    deliver() {
        this.transport.deliver();
        console.log('Tracking the package via GPS.');
    }
}

// Użycie

const basicTransport = new Transport();
basicTransport.deliver();

const transportWithGPS = new GPSTrackingDecorator(basicTransport);
transportWithGPS.deliver();

/*
node .\decorator.js
Delivering the package.
Delivering the package.      
Tracking the package via GPS.
*/