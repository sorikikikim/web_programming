let url = require('url');

let curURL = url.parse('https://www.google.com/search?q=web+programming&rlz=1C5CHFA_enKR940KR940&oq=web+pro&aqs=chrome.2.0i512j69i57j0i512l8.4438j0j7&sourceid=chrome&ie=UTF-8');
let curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.log(curURL);

let qs = require('querystring');
let param = qs.parse(curURL.query);
console.dir(param);
console.log('요청 파라미터의 query : %s', param.query);
console.log('원본 요청 파라미터 : %s', qs.stringify(param));