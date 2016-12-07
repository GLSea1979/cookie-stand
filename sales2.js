'strict';
var universal =[];

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

function Store(storeName, minCustHour, maxCustHour, avgCookiesCust) {
  this.storeName = storeName;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesCust = avgCookiesCust;
  this.cookiesSoldPerHour = [];
  this.hourlyCustomers = [];
  this.totalCookiesPerDay = 0;
  this.randomCustHour = function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.hourlyCustomers.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour);
      // console.log(this.hourlyCustomers + 'customers per hour');
    }
  };
  this.cookieRandomizer = function() {
    this.randomCustHour();
    for (var i = 0; i < hoursOpen.length; i++){
      // console.log(this.hourlyCustomers + ' customer hour');
      // console.log(this.avgCookiesCust + 'avCC');
      this.cookiesSoldPerHour.push(Math.ceil(this.hourlyCustomers[i]*this.avgCookiesCust));
      this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
      // console.log(this.cookiesSoldPerHour + 'cookies per hour');
      // console.log(this.totalCookiesPerDay + 'total cookies');
    }
  };
  this.render = function() {
    this.cookieRandomizer();
    var alkiUL = document.getElementById('storeTable');
    var trEl= document.createElement('tr');
    var nameEl = document.createElement('th');
    nameEl.textContent = this.storeName;
    alkiUL.appendChild(trEl);
    alkiUL.appendChild(nameEl)

    for (var i = 0; i < hoursOpen.length; i++) {
      var teEl = document.createElement('td');
      teEl.textContent = this.cookiesSoldPerHour[i];
      alkiUL.appendChild(teEl);
    }
    var totalEl = document.createElement('td');
    totalEl.textContent = this.totalCookiesPerDay;
    alkiUL.appendChild(totalEl);
  };
  universal.push(this);
}
// make objects
new Store('Alki', 2, 16, 4.6);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Seattle Center', 11, 38, 3.7);
new Store('1st and Pike', 23, 65, 6.3);
//make table header




function tablebuilder() {
  var storeTable = document.getElementById('storeTable');
  var trEl= document.createElement('tr');
  var blankEL = document.createElement('th');
  storeTable.appendChild(blankEL);
  for (var i = 0; i < hoursOpen.length; i++) {
    var thEl= document.createElement('th');
    thEl.textContent = hoursOpen[i];
    trEl.appendChild(thEl);
    storeTable.appendChild(thEl);
  }
}
tablebuilder();
for (var i = 0; i < universal.length; i++) {
  universal[i].render();
}
var totalTotal = 0;
var bigTotal = 0;
var blankSpace = document.getElementById('storeTable');
var trEl= document.createElement('tr');
blankSpace.appendChild(trEl);
for (var i = 0; i < hoursOpen.length; i++) {

  for (var j = 0; j < universal.length; j++) {
    var test = universal[j]['cookiesSoldPerHour'][0];
    // console.log(test);
    bigTotal += test;
    console.log(bigTotal);
    totalTotal += test;
    console.log(totalTotal);
  }
  // console.log(bigTotal);
  var totalEl = document.getElementById('storeTable');
  var nameEl = document.createElement('th');
  nameEl.textContent = bigTotal;
  totalEl.appendChild(trEl);
  totalEl.appendChild(nameEl);
  bigTotal = 0;
}
// var wonder = pike['cookiesSoldPerHour'][4];
// console.log(pike.cookiesSoldPerHour[2]);
