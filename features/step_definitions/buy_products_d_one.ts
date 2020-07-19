import { Given, When, TableDefinition, Then } from 'cucumber';
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core';
import { Select, Buy, PurchaseMessage } from '../support/screenplay';
import { UseAngular } from '@serenity-js/protractor';
import { Ensure, equals } from '@serenity-js/assertions';


Given(/(?:he|she|they) (?:adds?) the cheapest cell phone to the car most (.*)/, (actorName: string, priceRange: string) =>
    actorCalled(actorName).attemptsTo(
        UseAngular.disableSynchronisation(),
        Select.theProduct(priceRange))
);


When(/enter personal data/, (personalInformation: TableDefinition) =>
    actorInTheSpotlight().attemptsTo(Buy.theProduct(personalInformation.hashes()))
);


Then(/he would visualize a modal that has the message: (.*)/, (message: string) =>
    actorInTheSpotlight().attemptsTo(Ensure.that(PurchaseMessage(), equals(message))
    )

);



