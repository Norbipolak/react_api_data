/*
nagyon fontos a windows location, mert megmutatja nekünk, hogy hol vagyunk jelenleg!!!! 
Vannak ilyenjei property-ei, hogy host, hostname, href, origin, pathname, port, protocol, search
és ilyen metódusai is
-> 
assign()	Loads a new document
reload()	Reloads the current document
replace()	Replaces the current document with a new one
-> 

console.log(window.location.href);      // "https://www.example.com/path/to/page?query=example#section"
console.log(window.location.protocol);  // "https:"
console.log(window.location.host);      // "www.example.com"
console.log(window.location.hostname);  // "www.example.com"
console.log(window.location.port);      // "", Returns the port number of the URL (empty string if not specified).
console.log(window.location.pathname);  // "/path/to/page"
console.log(window.location.search);    // "?query=example"
console.log(window.location.hash);      // "#section"

Modifying the URL
// Redirect to a new URL
// window.location.href = 'https://www.newexample.com';

// Replace the current URL without adding it to the history
// window.location.replace('https://www.newexample.com');

// Reload the current page
// window.location.reload();

// Extracting query parameters from the URL !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const params = new URLSearchParams(window.location.search);
console.log(params.get('query'));       // "example"

// Getting the origin of the URL
console.log(window.location.origin);    // "https://www.example.com"
*/

const l = window.location;
const protocol = l.protocol;
const host = l.hostname;
const port = l.portname;
const path = l.pathname;
const baseUrl = `${protocol}//${host}:${port}`;

export {protocol, host, port, path, baseUrl};
