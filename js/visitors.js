if (localStorage.visitors) {localStorage.visitors=Number(localStorage.visitors)+1; }
else {localStorage.visitors=1;}
visitors=localStorage.visitors;
const uTime = (date = new Date()) => {
  const hours = date.getHours().toString().length>1? date.getHours() : "0"+date.getHours()
  const minutes = date.getMinutes().toString().length>1? date.getMinutes() : "0"+date.getMinutes();
  const seconds = date.getSeconds().toString().length>1? date.getSeconds() : "0"+date.getSeconds();
// secondes in time script
 const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  timeNow =hours+":"+minutes+"."+seconds+" - "+day+"/"+month+"/"+year;
}
uTime();

var addItem = function (visitor, uuId, ip, uTime, cookieEnabled, appName, appCodeName, product, appVersion, userAgent, platform, language, onLine, javaEnabled ) {
   var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
   var newItem = {
    'visitor':visitor,
    'user-Id':uuId,
    'user-info':ip,

    'uTime':timeNow,

'cookiesEnabled':navigator.cookieEnabled,
'navigator-appName':navigator.appName,
'navigator-appCodeName':navigator.appCodeName,
'navigator-product':navigator.product,
'navigator-appVersion':navigator.appVersion,
'navigator-userAgent':navigator.userAgent,
'navigator-platform':navigator.platform,
'navigator-language':navigator.language,
'navigator-onLine':navigator.onLine,
'navigator-javaEnabled()':navigator.javaEnabled()

}; 
   oldItems.push(newItem);
   localStorage.setItem('visitors-info', JSON.stringify(oldItems));
};

function getvals(){
    return fetch('https://ipinfo.io/json?callback',
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
     /* console.log(responseData); */
      return responseData;
    })
    .catch(error => console.warn(error));
  }
getvals().then(response => addItem('visitor'+visitors, uuId, response, uTime, navigator.cookieEnabled, navigator.appName, navigator.appCodeName, navigator.product, navigator.appVersion, navigator.userAgent, navigator.platform, navigator.language, navigator.onLine, navigator.javaEnabled() ));

//console.log(JSON.parse(localStorage.getItem('itemsArray')));
//console.log(localStorage.getItem('visitors-info'));