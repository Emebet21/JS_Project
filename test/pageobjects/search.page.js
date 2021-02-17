const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get filterPrice() { return $('//header/div[1]/ul[1]/li[2]/label[1] ')}
    get filterMaker() { return $('//header/div[1]/ul[1]/li[3]/label[1] ')}
    get filterModel() { return $('//header/div[1]/ul[1]/li[4]/label[1]')}
    get filterUsed() { return $('//header/div[1]/ul[1]/li[5]/label[1] ')}
    get filterNew() { return $('.breadcrumb.facet[data-dimension-id="stkTypId"] label')}
    get filterTouring8_Passanger() { return $('.breadcrumb.facet[data-dtm*="Trim"] label')} 

    //radio button
    get radioBtnNew() { return $('#stkTypId > ul > li:nth-of-type(2)')}

    //select cars
    get selectCar() { return $('#srp-listing-rows-container > div:nth-of-type(2) a')}
    get btnCheckAvailability() { return $('//*[@id="vdpe-leadform"]/div[2]/cars-vdp-serverside-lead-form/div/native-lead-form/form/div[8]/button')}


    //Trim
    get chkBox_touring_8Passenger() { return $("//label[contains(text(),'Touring 8-Passenger')]")}
    get txtTitle() { return $('.vehicle-info__title.cui-heading-2--secondary')}
   
    //dialog
    get contactSellerDialog() { return $('cars-lead-form-dialog') }

    get inputFirstName() { return $('cars-vdp-serverside-lead-form input[name="fname"]') } 
    get inputLastName() { return $('cars-vdp-serverside-lead-form input[name="lname"]') }
    get inputEmail() { return $('cars-vdp-serverside-lead-form input[name="email"]') }

    //payment calc
    get paymentCalc() { return $('//*[@id="calculator-top"]/div/div[1]/div') }
   
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open("/for-sale/searchresults.action/?mdId=21729&mkId=20017&prMx=50000&rd=100&searchSource=QUICK_FORM&stkTypId=28881&zc=60008");
    }
}

module.exports = new SearchPage();
