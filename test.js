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
       expect(paymentFn).toHaveBeenCalled();
       expect(paymentFn).toHaveBeenCalledWith(500);
       expect(paymentFn.mock.calls.length).toBe(1);
       expect(paymentFn.mock.calls[0][0]).toBe(500);
    });

    test('Paying with different parameters', () => {
        expect(myPaymentSystem.pay(2700, paymentFn)).toBe(2700);
        expect(myPaymentSystem.pay(89, paymentFn)).toBe(89);
        expect(myPaymentSystem.pay(1111, paymentFn)).toBe(1111);
        expect(paymentFn.mock.calls.length).toBe(4);
        expect(paymentFn.mock.calls[2][0]).toBe(89);
    });
});


describe('test for subscription', () => {
    let myPaymentSystem;
    let paymentFn;
    beforeEach(() => {
        myPaymentSystem = new PaymentSystem();
        paymentFn = jest.fn((amount) => amount);
    });

    test('testing a subscribe() function', () => {
        expect(myPaymentSystem.subscribe(250, paymentFn, 3)).toBe(750);
        expect(paymentFn.mock.calls.length).toBe(3);
        expect(paymentFn).toHaveBeenCalledWith(250);
        for(let i = 0; i < 3; i++) {
            expect(paymentFn.mock.calls[i][0]).toBe(250);
        }
    });

    test('subscribe for a longer period', () => {
        expect(myPaymentSystem.subscribe(100, paymentFn, 25)).toBe(2500);
        expect(paymentFn.mock.calls.length).toBe(25);
        expect(paymentFn).toHaveBeenCalledWith(100);
        for(let i = 0; i < 25; i++) {
            expect(paymentFn.mock.calls[i][0]).toBe(100);
        }
    });
})
