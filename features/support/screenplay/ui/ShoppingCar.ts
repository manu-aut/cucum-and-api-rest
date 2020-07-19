import { by } from 'protractor';
import { Target } from '@serenity-js/protractor';


export class ShoppingCard {


    static button_menu_cart = Target.the('button ').located(by.cssContainingText('.nav-link', 'Cart'));
    static button_place_order = Target.the('button').located(by.cssContainingText('.btn-success', 'Place Order'));
    static input_name = Target.the('enter name').located(by.id('name'));
    static input_country = Target.the('enter country').located(by.id('country'));
    static input_city = Target.the('enter city').located(by.id('city'));
    static input_number_credit_cart = Target.the('enter number credit Card').located(by.id('card'));
    static input_month = Target.the('enter month').located(by.id('month'));
    static input_year = Target.the('enter year').located(by.id('year'));
    static button_purchase = Target.the('enter purchase proccess').located(by.cssContainingText('.btn-primary', 'Purchase'));
    static confirmation_message_label = Target.the('view modal message').located(by.xpath('//div[contains(@class,"sweet-alert")]/h2'));
    static list_of_products = Target.the('list of products').located(by.css('.success'));
    static modal_form_place_order = Target.the('modal information').located(by.xpath('//div[@id="orderModal" and containts(text(),"{0}")]'));


}



