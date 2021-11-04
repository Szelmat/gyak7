export class PaymentSystem {
    pay(amount, paymentProviderFunction) {
        console.log('...');
        return paymentProviderFunction(amount);
    }
}