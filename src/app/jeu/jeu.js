/*
// https://boardgamegeek.com/xmlapi2/id?3
console.log("jsrecu");
const xhr = new XMLHttpRequest();

xhr.onload = () => {
  dump(xhr.responseXML.documentElement.nodeName);
}

xhr.onerror = () => {
  dump("Error while getting XML.");
}

xhr.open("GET", "https://boardgamegeek.com/xmlapi2/id?3");
xhr.responseType = "document";
export function send() { xhr.send();} 

*/