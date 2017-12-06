
//описание API
const BASE = "https://api.punkapi.com/v2"; // базовй урл
const BEERS = "/beers"; // получить стандартные 25 объектов
const ONE = "/beers/1"; // получить один пиво, один объект
const RANDOM = "/beers/random"; //получить случайное пиво одно
const BEFORE_DATA = "/beers?brewed_before=11-2010"; // получить всё пиво сваренное до даты
const BEFORE_DATA_ABV_GT = "/beers?brewed_before=11-2007&abv_gt=2"; // до даты и с abv больше чем указанный номер
const ABV_LT = "/beers?abv_lt=2"; // получить все пиво с ABV меньше указанного номера
const PAG = "/beers?page=2&per_page=20"; // сколько объектов и на какой странице получить
const BEER_NAME = "/beers?beer_name";

let API = BASE + BEERS;
// console.log(API);

let data = null;

function getOneItem(items) {
 // метод получает один объект
  console.log(items);
 //  data = items;
  return new Promise(resolve => {
    setTimeout(() => resolve(items), 1000);
  });
}


function getRandomItems(items) {
  // метод получает один объект с случайными полями
}

function getAllItems(items) {
  // метод получает все объекты, 25 штук
}

function getOneBeforeData(items) {
  // получить объекты до даты
}


responseData(`${BASE}${ONE}`)
  .then(getOneItem)
  // .catch(error => console.error(error));



export { data };
