export class PaymentSystem {
    pay(amount, paymentProviderFunction) {
        console.log('...');
        return paymentProviderFunction(amount);
    }

    subscribe(amount, paymentProviderFunction, numMonths) {
        let sum = 0;
        for(let i = 0; i < numMonths; i++) {
            sum += paymentProviderFunction(amount);
        }
        return sum;
    }
}