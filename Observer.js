/*
Definicja:
Wzorzec Obserwatora umożliwia jednym obiektom śledzenie i reagowanie 
na zmiany zachodzące w innym obiekcie, nazywanym podmiotem.

Użycie:
Załóżmy, że mamy klasę DeliveryService, która jest podmiotem obserwowanym. 
Inne obiekty, takie jak EmailNotification i SMSNotification, chciałyby otrzymywać 
powiadomienia o aktualnym statusie dostawy. Możemy zaimplementować wzorzec Obserwatora, 
aby te obiekty mogły zarejestrować się jako obserwatorzy DeliveryService i otrzymywać aktualizacje 
na podstawie zmian statusu dostawy.

ES5 syntax

Run:
node .\observer.js
*/


function DeliveryService() {
    this.observers = [];
    this.status = 'In progress';
}

DeliveryService.prototype.addObserver = function (observer) {
    this.observers.push(observer);
};

DeliveryService.prototype.removeObserver = function (observer) {
    var index = this.observers.indexOf(observer);
    if (index !== -1) {
        this.observers.splice(index, 1);
    }
};

DeliveryService.prototype.updateStatus = function (newStatus) {
    this.status = newStatus;
    this.notifyObservers();
};

DeliveryService.prototype.notifyObservers = function () {
    for (var i = 0; i < this.observers.length; i++) {
        var observer = this.observers[i];
        observer.update(this.status);
    }
};

function EmailNotification() { }

EmailNotification.prototype.update = function (status) {
    console.log('Email notification: Package status is now "' + status + '".');
};

function SMSNotification() { }

SMSNotification.prototype.update = function (status) {
    console.log('SMS notification: Package status is now "' + status + '".');
};

// Usage

var deliveryService = new DeliveryService();

var emailNotification = new EmailNotification();
var smsNotification = new SMSNotification();

deliveryService.addObserver(emailNotification);
deliveryService.addObserver(smsNotification);

deliveryService.updateStatus('Delivered');

deliveryService.removeObserver(smsNotification);

deliveryService.updateStatus('Returned');

/*
node .\observer.js
Email notification: Package status is now "Delivered".
SMS notification: Package status is now "Delivered".
Email notification: Package status is now "Returned".
*/