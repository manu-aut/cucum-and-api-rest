import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';



export class Home {
    static categories = Target.the('button phones').located(by.cssContainingText('#itemc', 'Phones'));
    static phonesCard = Target.all('Card phones in the home').located(by.css('.card-block'));
    static buttonPlaceOrder = Target.the('add to car select product').located(by.cssContainingText('btn-success', 'Add to cart'));
    static listProduct = Target.the('information products ').located(by.className('.hvcbn > #dkkdj'))

}