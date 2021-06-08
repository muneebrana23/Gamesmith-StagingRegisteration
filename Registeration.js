const puppeteer = require("puppeteer");
const expect = require("chai").expect;

(async () => {
    let browser;
    browser = await puppeteer.launch({
        args: ['--start-maximized'],
        headless: false
    })
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto("https://devstagingui.gamesmith.com", {
        waitUntil: 'load',
        timeout: 0
    })


    await page.waitForSelector("._2nvLr0h6R-Bnk8W-3OxoxT");
    await page.click("._2nvLr0h6R-Bnk8W-3OxoxT");


    await page.waitForSelector("[name='firstName']")
    await page.click("[name='firstName']");
    await page.type("[name='firstName']", "Auto");

    await page.waitForSelector("[name='lastName']")
    await page.click("[name='lastName']");
    await page.type("[name='lastName']", "QA");

    var id = Math.floor(Date.now() / 1000)
    console.log(id)
    var mail = "auto_qa" + id + "@mailinator.com";
    console.log(mail);
    await page.waitForSelector("[name='email']")
    await page.click("[name='email']");
    await page.type("[name='email']", mail);

    await page.waitForSelector("[name='password']")
    await page.click("[name='password']");
    await page.type("[name='password']", "mun123,./");

    await page.waitForSelector("[name='currRole']")
    await page.click("[name='currRole']");
    await page.type("[name='currRole']", "Developer");



    await page.waitForSelector("[name='currCompany']")
    await page.click("[name='currCompany']");
    await page.type("[name='currCompany']", "Infinity up");

    /*await page.waitFor(2000)
    const [texts] = await page.$x("//div[contains(text(), 'Country')]");
    await texts.click();

    await texts.type("Pak")
    await page.click("#react-select-2--option-0");

    await page.click(".react-switch-bg")*/
    await page.waitFor(1000)
    const [texts] = await page.$x("//div[contains(text(), 'Country')]");
    await texts.click();
    await page.click("#react-select-2--option-2");
    await page.waitFor(1000)
    const [textss] = await page.$x("//div[contains(text(), 'State')]");
    await textss.click();
    await page.waitForSelector("#react-select-3--option-0",{
        visible:true,
    });
    await page.click("#react-select-3--option-0")


    await page.waitFor(1000)
    const [textsss] = await page.$x("//div[contains(text(), 'City')]");
    await textsss.click();
    await page.waitForSelector("#react-select-4--option-0",{
        visible:true,
    });
    await page.click("#react-select-4--option-0")
    
     // portion for students
    
    //   await page.click(".react-switch-bg") 
    //   await page.waitForSelector("[name ='degree']")
    //   await page.click("[name ='degree']")
    //   await page.type("[name= 'degree']", "Computing")

    //   await page.click("#react-select-5--value")
    //   await page.type("#react-select-5--value", "K")
    //   await page.waitForSelector("#react-select-5--option-0",{
    //       visible:true,
    //   });
    //   await page.click("#react-select-5--option-0")
    
    
         await page.click("[type='submit']")

    //page 2//

    await page.waitFor(1000)

    await page.click("#workCategories-label-1")
    await page.click("#workCategories-label-2")
    await page.click("#workCategories-label-3")
    await page.click("#workCategories-label-4")
    await page.click("#workCategories-label-5")


    await page.click(".flag-dropdown")
    const [flag] = await page.$x("//span[contains(text(), 'United Kingdom')]");
    await flag.click();
    //await page.waitFor(2000)
    await page.click("[type='tel']")
    await page.type("[type='tel']", '45349953493490')


    //Upload CV Flow Start

    const [upload] = await page.$x("//div[contains(text(), 'Upload CV')]");
    await upload.click();

    await page.waitFor(2000)
    const [uploads] = await page.$x("//button[contains(text(), 'Choose a local file')]");
    const [fileChooser] = await Promise.all([
        page.waitForFileChooser(),
        uploads.click(),
    ])
    await fileChooser.accept(['Product_Testing_Proposal.pdf']);

    // Ends of Upload CV Flow

    await page.waitFor(2000)
    await page.click("[title='Continue']")


    //Page 2 Ends// 

    // Page 3 start//

    await page.click(".react-switch-bg")

    //await page.waitFor(1000)
    await page.waitForSelector(".currGame .Select-value")
    await page.click(".currGame .Select-value")
    await page.type(".currGame .Select-value", 'b')
    await page.waitFor(1000)

    await page.click("#react-select-5--option-1")




    //await page.waitForSelector(".gameRole .Select-value")
    await page.click(".gameRole .Select-value")
    await page.type(".gameRole .Select-value", 'b')
    await page.waitFor(1000)
    await page.click("#react-select-6--option-1")



    await page.click("#react-select-8--value")
    await page.click("#react-select-8--option-2")


    await page.click("#react-select-9--value")
    await page.click("#react-select-9--option-0")


    await page.click("[data-tip='Playstation']")
    await page.click("[data-tip='Xbox']")
    await page.click("[data-tip='Switch']")
    await page.click("[data-tip='Browser']")
    await page.click("[data-tip='Android']")
    await page.click("[data-tip='Apple']")
    await page.click("[data-tip='VR']")
    await page.click("[data-tip='AR']")
    await page.click("[data-tip='Google Stadia']")


    await page.click("[name='accomplishments']")
    await page.type("[name='accomplishments']", "Developing and Testing Games")


    await page.click("[name='softwareUsed']")
    await page.type("[name='softwareUsed']", "Developing and Testing Games")

    await page.click("[name='location']")
    await page.type("[name='location']", "Developing and Testing Games")

    await page.click("[title='Done']")
    await page.waitForSelector("[title='Start Exploring']")
    await page.click("[title='Start Exploring']")

    await page.waitForSelector('._2EfDPMufMSarGeGTVq3KAU', {
        visible: true,
    });
    // get text of element
    const heading1 = await page.$eval("._2EfDPMufMSarGeGTVq3KAU", el => el.textContent);
    console.log(heading1)
    expect(heading1).to.equal("Tribe")


    //scenairo for skippng step 2
    /*
    try{
        await page.click("#submitButton")
    await page.waitForSelector("[title='Start Exploring']")
    await page.click("[title='Start Exploring']")
    console.log("clicked")
    
    await page.on('response', response => {
        if (response.url("https://devstagingui.gamesmith.com/").endsWith("signup"))
          console.log("response code: ", response.status());
        
      });
    
    }
    catch(error){
        throw(error)
    }
    */

    //   browser.close()
})();