import { UsesAbilities, AnswersQuestions, Interaction } from '@serenity-js/core';
import { TargetElements } from '@serenity-js/protractor/lib/screenplay/questions/targets';



let higherValue = -10000;
let lowerValue = 10000;
let productValue;


export const Filter = {
    theProduct: (target: TargetElements, priceRange) =>
        Interaction.where(`#actor looks for the cheapest product ${priceRange}`, (actor: UsesAbilities & AnswersQuestions) => {
            return target.answeredBy(actor).filter(function (element) {
                getValue(actor, target, priceRange);
                return element.$('h5').getText().then(text => {
                    productValue = Number(text.replace('$', ''));

                    if (priceRange === 'cheapest') {
                        return lowerValue === productValue;
                    } else {
                        return higherValue === productValue;
                    }

                });

            }).first().$('.card-title').click();

        })

};




const getValue = (actor: UsesAbilities & AnswersQuestions, target: TargetElements, priceRange: string) => {

    target.answeredBy(actor).each(function (element) {
        element.$('h5').getText().then(text => {
            productValue = Number(text.replace('$', ''));
            switch (priceRange) {

                case 'cheapest': {
                    if (productValue < lowerValue) {
                        lowerValue = productValue;
                    }
                    break;
                }

                case 'expensive': {
                    if (productValue < lowerValue) {
                        higherValue = productValue;
                    }

                    break;
                }

                default: {
                    throw new Error('the value sent is not correct, please valite that is in the range');
                }


            }

        })

    })
}

