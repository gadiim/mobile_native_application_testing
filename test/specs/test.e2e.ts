import { expect } from '@wdio/globals';
import Calculator from '../pageobjects/calculator.ts';


describe('Calculator Test', () => {
    beforeEach(async () => {
        await Calculator.isMainLayoutDisplayed();
        // await browser.launchApp('com.sec.android.app.popupcalculator');

    });
    it('should add 1 to 2 and get 3', async () => {
        await Calculator.clickButtonClear();
        await Calculator.clickButtonOne();
        await Calculator.clickButtonAdd();
        await Calculator.clickButtonTwo();
        await Calculator.clickButtonEqual();
        await Calculator.verifyResult('3');
    });
    it('should subtract 3 from 4 and get 1', async () => {
        await Calculator.clickButtonClear();
        await Calculator.clickButtonFour();
        await Calculator.clickButtonSubtract();
        await Calculator.clickButtonThree();
        await Calculator.clickButtonEqual();
        await Calculator.verifyResult('1');
    });
    it('should multiply 5 by 6 and get 30', async () => {
        await Calculator.clickButtonClear();
        await Calculator.clickButtonFive();
        await Calculator.clickButtonMultiply();
        await Calculator.clickButtonSix();
        await Calculator.clickButtonEqual();
        await Calculator.verifyResult('30');
    });
    it('should divide 8 by 2 and get 4', async () => {
        await Calculator.clickButtonClear();
        await Calculator.clickButtonEight();
        await Calculator.clickButtonDivide();
        await Calculator.clickButtonTwo();
        await Calculator.clickButtonEqual();
        await Calculator.verifyResult('4');
    });
    it('should calculate 10% of 90 and get 9', async () => {
        await Calculator.clickButtonClear();
        await Calculator.clickButtonOne();
        await Calculator.clickButtonZero();
        await Calculator.clickButtonPercentage();
        await Calculator.clickButtonNine();
        await Calculator.clickButtonZero();
        await Calculator.clickButtonEqual();
        await Calculator.verifyResult('9');
    });
    it('should change sign of number and verify result', async () => {
        await Calculator.clickButtonClear();
        await Calculator.clickButtonFive();
        await Calculator.clickButtonPlusminus();
        Calculator.verifyResult('-5');
    });
});
