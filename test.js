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
});
