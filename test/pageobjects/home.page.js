const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchCarType () { return $('//*[@id="ae-main-content"]/section[2]/div/form/div/div[1]/div/select ')}
    get searchCarMaker() { return $('//*[@id="ae-main-content"]/section[2]/div/form/div/div[2]/div/select')}
    get searchCarModel() { return $('//*[@id="ae-main-content"]/section[2]/div/form/div/div[3]/div/select')}
    get carPrice() { return $('//*[@id="ae-main-content"]/section[2]/div/form/div/div[4]/div/select')}
    get millage() { return $('//*[@id="ae-main-content"]/section[2]/div/form/div/div[5]/div[1]/div/select')}
    get inputZipCode() { return $('//*[@id="ae-main-content"]/section[2]/div/form/div/div[5]/div[2]/div/input')}
    get btnSearch() { return $('//*[@id="ae-main-content"]/section[2]/div/form/div/div[6]/input')}

       /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
