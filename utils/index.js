export const $ = el => document.querySelector(el);
export const $$ = el => document.querySelectorAll(el);
const sleep = ms => new Promise(resolve  => setTimeout(resolve, ms));


export const PRODUCT_URL='http://localhost:3000/product'
export const USER_URL='http://localhost:3000/wallet' 

const KEYUP = 38;
const KEYDOWN = 40;
const ENTER = 13;
const SCROLLUPNUM = 18
const SCROLLDOWNNUM = 17

// classList li용도... 
Array.prototype.selectClassList = function ({targetClass, method, addClassName, index}) {
  if(method === add) {
    $(`${targetClass} li:nth-child(${index})`).classList.add(`${addClassName}`)
  } else if(method === remove) {
    $(`${targetClass} li:nth-child(${index})`).classList.remove(`${addClassName}`)
  } else {
    return
  }
}

const COIN_10 = 10
const COIN_50 = 50
const COIN_100 = 100
const COIN_500 = 500
const COIN_1000 = 1000
const COIN_5000 = 5000
const COIN_10000 = 10000

function sumPrice({coin_10, coin_50, coin_100, coin_500, coin_1000, coin_5000, coin_10000}) {
  return coin_10*COIN_10 + coin_50*COIN_50 + coin_100*COIN_100 + coin_500*COIN_500 + coin_1000*COIN_1000 + coin_5000*COIN_5000 + coin_10000*COIN_10000
}