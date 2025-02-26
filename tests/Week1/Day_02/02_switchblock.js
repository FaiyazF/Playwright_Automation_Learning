
function getVersion(browser)
{
    switch(browser)
    {
     case'chrome':
     console.log("chrome version is 1.1");
     break;

     case'firefox':
     console.log("firefox version is 1.2");
     break;

     case'safari':
     console.log("safari version is 1.3");
     break;

     default:
     console.log("No browser is supported");

    }
}

getVersion("no")