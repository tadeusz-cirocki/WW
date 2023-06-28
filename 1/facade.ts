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
tsc
node .\facade.js
*/

class TransportManager {
    orderTransport(): void {
        console.log('Transport order placed.');
    }

    trackTransport(): void {
        console.log('Transport tracking information retrieved.');
    }
}

class InventoryManager {
    checkInventory(): void {
        console.log('Inventory checked.');
    }

    updateInventory(): void {
        console.log('Inventory updated.');
    }
}

class BillingManager {
    generateInvoice(): void {
        console.log('Invoice generated.');
    }

    processPayment(): void {
        console.log('Payment processed.');
    }
}

class TransportFacade {
    private transportManager: TransportManager;
    private inventoryManager: InventoryManager;
    private billingManager: BillingManager;

    constructor() {
        this.transportManager = new TransportManager();
        this.inventoryManager = new InventoryManager();
        this.billingManager = new BillingManager();
    }

    orderTransport(): void {
        this.transportManager.orderTransport();
    }

    trackTransport(): void {
        this.transportManager.trackTransport();
    }

    checkInventory(): void {
        this.inventoryManager.checkInventory();
    }

    updateInventory(): void {
        this.inventoryManager.updateInventory();
    }

    generateInvoice(): void {
        this.billingManager.generateInvoice();
    }

    processPayment(): void {
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

/*
node .\facade.js
Transport order placed.
Transport tracking information retrieved.
Inventory checked.
Inventory updated.
Invoice generated.
Payment processed.
*/