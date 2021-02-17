const { default: isEqual } = require('webdriverio/build/commands/element/isEqual');
const { default: waitForDisplayed } = require('webdriverio/build/commands/element/waitForDisplayed');
const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

xdescribe('Cars application', () => {
    beforeAll('Log into the page', () => {
        browser.maximizeWindow();
        SearchPage.open();
    });

    // it('should validate the filters', () => {

    //     SearchPage.filterPrice.waitForDisplayed(10000);
    //     console.log('Filter price element text:' + SearchPage.filterPrice.getText());
    //     console.log('filter price element: ' + SearchPage.filterPrice);
    //     expect(SearchPage.filterPrice.getText()).toEqual('Maximum Price: $50,000');

    //     SearchPage.filterMaker.waitForDisplayed();
    //     expect(SearchPage.filterMaker.getText()).toEqual('Honda');

    //     SearchPage.filterModel.waitForDisplayed();
    //     expect(SearchPage.filterModel.getText()).toEqual('Pilot');

    //     SearchPage.filterUsed.waitForDisplayed(); 
    //     expect(SearchPage.filterUsed.getText()).toEqual('Used');
    //  });


    // it('should have filters the new cars', () => {
    //     browser.deleteAllCookies();

    //     SearchPage.radioBtnNew.scrollIntoView();
    //     SearchPage.radioBtnNew.waitForDisplayed();

    //     SearchPage.radioBtnNew.click();

    //     SearchPage.filterNew.waitForDisplayed();

    //     SearchPage.filterNew.waitUntil(() => SearchPage.filterNew.getText() === "New");
    //     expect(SearchPage.filterNew.getText()).toEqual('New');

    //     // //select trim
    //     SearchPage.chkBox_touring_8Passenger.click();
    //     expect(SearchPage.chkBox_touring_8Passenger.isSelected());
    //     expect(SearchPage.filterTouring8_Passanger.getText()).toEqual('Touring 8-Passenger'); 

    //     //Select the second available car
    //     SearchPage.selectCar.waitForExist();
    //     SearchPage.selectCar.click();
        
    //     expect(SearchPage.txtTitle.getText()).toContain('2019 Honda Pilot Touring 8-Passenger');
    //     SearchPage.btnCheckAvailability.waitForDisplayed();

    //     //contact seller
    //     SearchPage.inputFirstName.setValue('Car');
    //     SearchPage.inputLastName.setValue('Owner');
    //     SearchPage.inputEmail.setValue('carowner@yahoo.com');

    //     //screenshot
    //     SearchPage.paymentCalc.waitUntil(() => SearchPage.paymentCalc.isExisting());
    //     SearchPage.paymentCalc.scrollIntoView();
    //     browser.saveScreenshot('test.png');
    // });
});


 