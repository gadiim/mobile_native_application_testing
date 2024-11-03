class Calculator {
    async isMainLayoutDisplayed(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_layout_main_group');
        const isDisplayed = await elem.isDisplayed();
        if (!isDisplayed) {
            throw new Error('Calculator is not displayed');
        }
    }

    async clickButtonClear(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_clear');
        await elem.click();
    }

    async clickButtonOne(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_01');
        await elem.click();
    }

    async clickButtonTwo(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_02');
        await elem.click();
    }

    async clickButtonThree(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_03');
        await elem.click();
    }

    async clickButtonFour(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_04');
        await elem.click();
    }

    async clickButtonFive(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_05');
        await elem.click();
    }

    async clickButtonSix(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_06');
        await elem.click();
    }

    async clickButtonSeven(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_07');
        await elem.click();
    }

    async clickButtonEight(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_08');
        await elem.click();
    }

    async clickButtonNine(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_09');
        await elem.click();
    }

    async clickButtonZero(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_00');
        await elem.click();
    }

    async clickButtonAdd(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_add');
        await elem.click();
    }

    async clickButtonSubtract(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_sub');
        await elem.click();
    }

    async clickButtonMultiply(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_mul');
        await elem.click();
    }

    async clickButtonDivide(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_div');
        await elem.click();
    }

    async clickButtonPercentage(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_percentage');
        await elem.click();
    }

    async clickButtonPlusminus(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_plusminus');
        await elem.click();
    }

    async clickButtonEqual(): Promise<void> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_keypad_btn_equal');
        await elem.click();
    }

    async getResultText(): Promise<string> {
        const elem = await $('id:com.sec.android.app.popupcalculator:id/calc_edt_formula');
        return elem.getText();
    }

    async verifyResult(expectedResult: string): Promise<void> {
        const resultText = await this.getResultText();
        console.log('Test result:', resultText);
        expect(resultText).toBe(expectedResult);
    }
}

export default new Calculator();
