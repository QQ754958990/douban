/**
 * 这里可以考虑使用一下ES7的async/await来书写异步的代码，消灭回调函数，代码看起来整洁容易理解
 * @type {((url: RequestInfo, options?: fetchJsonp.Options) => Promise<Response>) | any | fetchJsonp | ((url: string, options?: fetchJsonp.Options) => Promise<fetchJsonp.Response>)}
 */
const fetchJsonp = require('fetch-jsonp');
const getData = (url:string)=> {
    let myPromis = new Promise(function (resolve, reject) {
        fetchJsonp(url, {
                method: 'get'
            }
        ).then(function (response: any) {
            return response.json();
        }).then(function (json: any) {
            resolve(json);
        }).catch(function (ex: any) {
            console.log('parsing failed', ex)
        })
    });

    return myPromis;
}

export default getData;
