import { Question } from '@serenity-js/core';
import { Text } from '@serenity-js/protractor';
import { ShoppingCard } from '../ui';

export const PurchaseMessage = () =>
    Question.about(`displays the purchase notificatios`, actor => {
        return Text.of(ShoppingCard.confirmation_message_label).answeredBy(actor);
        }
    );










