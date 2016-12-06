'strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiUL.appendChild(liEl);
    }
  };
}
var alki = new Store('Alki', 2, 16, 4.6);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
var pike = new Store('1st and Pike', 23, 65, 6.3);
seaTac.render();
alki.render();
capHill.render();
seaCenter.render();
pike.render();


function tablebuilder() {
  var catTable = document.getElementById('catjs')
  console.log('catTable is ' + catTable);

  var trEl= document.createElement('tr');
  var thEl= document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  var thEl= document.createElement('th');
  thEl.textContent = 'Color';
  trEl.appendChild(thEl);

  var thEl= document.createElement('th');
  thEl.textContent = 'Color';
  trEl.appendChild(thEl);



  catTable.appendChild(trEl);
}

tablebuilder();


// objectKen {
  // function bob
// }
