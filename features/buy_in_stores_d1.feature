#Lenguage: EN

Feature:  buy an item in the day without IVA

    In order to see how SJS reports a acceptance testing and api rest
    As a curious developer
    I'd like to see an example implementation

    Scenario Outline: validate de confirmation message after purchasing

        Given theMan add the cheapest product to the car most <price range>
        When enters the data in the form
            | name              | country  | city     | credit card | month  | year |
            | Juancho no se que | Colombia | Medellin | 34567897654 | August | 2020 |

        Then he would visualize a modal that has the message: Thank you for your purchase!


        Examples:
            | rate      |
            | cheapest  |
            | expensive |



