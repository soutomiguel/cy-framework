import { homeElements } from "./home.elements";

export class HomeHelpers{
    static clickOnProduct(productName){
        homeElements.productLink(productName).click()
    }
}