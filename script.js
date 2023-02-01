    import LoginPage from './LoginPage.js'
    
    var URL = 'https://app-dev.dokka.biz/login';
    var COMPANY_1111 = "//*[@href='/company/standard/3865469160']";
    var FIRST_DOC_1111 = "//*[@href='/company/3865469160/document/55be64a0e7c6d17804c75626f79343d1.pdf']";
    var NEXT_BUTTON = "//*[@data-element='content.documents.navigation.next']";
    

module.exports = async function(context, commands) {
   
    LoginPage.login();

    await commands.navigate(URL);
      
    try {
      login(EMAIL, PASSWORD);
      await commands.wait.byPageToComplete();
      await commands.click.byXpathAndWait(COMPANY_1111);
      await commands.wait.byPageToComplete();
      await commands.measure.start();
      await commands.click.byXpathAndWait(FIRST_DOC_1111);
      await commands.wait.byPageToComplete();
      for (let i = 0; i < 23; i++){
        await commands.click.byXpathAndWait(NEXT_BUTTON);
        await commands.wait.byPageToComplete();
      }
      
      await commands.measure.stop();

    } catch(e) {
      context.log.error('ERROR');
    }
  };