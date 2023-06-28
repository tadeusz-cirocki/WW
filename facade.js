"use strict";
/*
Definicja:
Wzorzec Fasady dostarcza uproszczony interfejs do złożonego systemu lub zestawu klas,
ułatwiając korzystanie z niego.

Użycie:
Załóżmy, że mamy złożony system logistyki, który obejmuje wiele klas, takich jak TransportManager,
InventoryManager i BillingManager. Aby uprościć interakcję z tym systemem, możemy zaimplementować
wzorzec Fasady i stworzyć klasę TransportFacade, która będzie udostępniała prosty interfejs do
funkcji logistycznych, takich jak zamawianie transportu, zarządzanie zapasami i rozliczanie.

TypeScript

Run:
node .\facade.js
*/
class TransportManager {
    orderTransport() {
        console.log('Transport order placed.');
    }
    trackTransport() {
        console.log('Transport tracking information retrieved.');
    }
}
class InventoryManager {
    checkInventory() {
        console.log('Inventory checked.');
    }
    updateInventory() {
        console.log('Inventory updated.');
    }
}
class BillingManager {
    generateInvoice() {
        console.log('Invoice generated.');
    }
    processPayment() {
        console.log('Payment processed.');
    }
}
class TransportFacade {
    constructor() {
        this.transportManager = new TransportManager();
        this.inventoryManager = new InventoryManager();
        this.billingManager = new BillingManager();
    }
    orderTransport() {
        this.transportManager.orderTransport();
    }
    trackTransport() {
        this.transportManager.trackTransport();
    }
    checkInventory() {
        this.inventoryManager.checkInventory();
    }
    updateInventory() {
        this.inventoryManager.updateInventory();
    }
    generateInvoice() {
        this.billingManager.generateInvoice();
    }
    processPayment() {
        this.billingManager.processPayment();
    }
}
// Usage
const transportFacade = new TransportFacade();
transportFacade.orderTransport();
transportFacade.trackTransport();
transportFacade.checkInventory();
transportFacade.updateInventory();
transportFacade.generateInvoice();
transportFacade.processPayment();
