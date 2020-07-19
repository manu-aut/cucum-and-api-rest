import { Task, Duration } from '@serenity-js/core';
import { Click, Wait, isVisible, isClickable } from '@serenity-js/protractor';
import { Home } from '../ui';
import { Filter } from '../interactions';
import { Check } from '@serenity-js/assertions';



export const Select = {

    theProduct: (priceRange: string) =>
        Task.where(`#actor select the cheapeast product`,
            Click.on(Home.categories),
            Wait.for(Duration.ofMilliseconds(3000)),
            Wait.until(Home.listProduct, isVisible()),
            Filter.theProduct(Home.phonesCard, priceRange),
            Check.whether(Home.buttonPlaceOrder, isClickable()).andIfSo(Click.on(Home.buttonPlaceOrder))
        )
};