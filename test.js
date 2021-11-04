import { PaymentSystem } from "./paymentSystem";

describe('Test for PaymentSytem class', () => {
    let myPaymentSystem;
    let paymentFn;
    beforeAll(() => {
        myPaymentSystem = new PaymentSystem();
        paymentFn = jest.fn((amount) => amount);
    });

    test('Testing pay() function', () => {
       expect(myPaymentSystem.pay(500, paymentFn)).toBe(500);
    });
});
