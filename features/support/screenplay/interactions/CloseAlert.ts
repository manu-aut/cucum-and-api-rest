import { Ensure, equals } from '@serenity-js/assertions';
import { Actor, Interaction } from '@serenity-js/core';
import { browser, ExpectedConditions } from 'protractor';
import { AlertText } from '../questions';




export const CloseAlert = {

    ofBrowser: (alertText: string) =>
        Interaction.where(`#actor close windows alert browser`, (actor: Actor) =>
            browser.sleep(3000).then(() => {
                browser.wait(ExpectedConditions.alertIsPresent(), 5000).then(() => {
                    actor.attemptsTo(
                        Ensure.that(AlertText.isVisible(), equals(alertText))
                    );

                    browser.switchTo().alert().accept();

                })

            })
        )

};