import { Task } from '@serenity-js/core';
import { Click, Enter, isVisible, Wait } from '@serenity-js/protractor';
import { CloseAlert } from '../interactions';
import { ShoppingCard } from '../ui';



let personalInformation: { [Key: string]: string };



export const Buy = {
    theProduct: (dataTablePersonals: Array<{ [p: string]: string }>) => {

        dataTablePersonals.forEach(value => {
            personalInformation = value;
        });



        return Task.where(`#actor makes the purchase`, CloseAlert.ofBrowser('Product added'),
            Click.on(ShoppingCard.button_menu_cart),
            Wait.until(ShoppingCard.list_of_products, isVisible()),
            Click.on(ShoppingCard.button_place_order),
            Wait.until(ShoppingCard.modal_form_place_order, isVisible()),
            Enter.theValue(personalInformation['name']).into(ShoppingCard.input_name),
            Enter.theValue(personalInformation['country']).into(ShoppingCard.input_country),
            Enter.theValue(personalInformation['city']).into(ShoppingCard.input_city),
            Enter.theValue(personalInformation['credit card']).into(ShoppingCard.input_number_credit_cart),
            Enter.theValue(personalInformation['month']).into(ShoppingCard.input_month),
            Enter.theValue(personalInformation['year']).into(ShoppingCard.input_year),
            Click.on(ShoppingCard.button_purchase));
    }
}

