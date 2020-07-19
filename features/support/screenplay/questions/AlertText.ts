import { Question } from '@serenity-js/core';
import { browser } from 'protractor';




export const AlertText = {
    isVisible: () =>
        Question.about(`string text alert browser`, async () => {
            return browser.switchTo().alert().getText();
        })
};