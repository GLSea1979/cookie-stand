'strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total Per Day'];

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
}
// make objects
var alki = new Store('Alki', 2, 16, 4.6);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
var pike = new Store('1st and Pike', 23, 65, 6.3);
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
seaTac.render();
alki.render();
capHill.render();
seaCenter.render();
pike.render();
var wonder = pike['cookiesSoldPerHour'][4];
console.log(pike.cookiesSoldPerHour[2]);
