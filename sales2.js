'strict';
var universal =[];
var testingTotal = [];
var finalTotal = [];
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
// make objects
new Store('Alki', 2, 16, 4.6);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Seattle Center', 11, 38, 3.7);
new Store('1st and Pike', 23, 65, 6.3);
// Store constuctor +++++++++++++++++++++++++++++++++++++
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
    }
  };
  this.cookieRandomizer = function() {
    this.randomCustHour();
    for (var i = 0; i < hoursOpen.length; i++){
      this.cookiesSoldPerHour.push(Math.ceil(this.hourlyCustomers[i]*this.avgCookiesCust));
      this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
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

    for (var i = 0; i < (hoursOpen.length - 1); i++) {
      var teEl = document.createElement('td');
      teEl.textContent = this.cookiesSoldPerHour[i];
      alkiUL.appendChild(teEl);
    }
    var totalEl = document.createElement('td');
    totalEl.textContent = this.totalCookiesPerDay;
    finalTotal.push(this.totalCookiesPerDay);
    alkiUL.appendChild(totalEl);
  };
  testingTotal.push(this.cookiesSoldPerHour);
  universal.push(this);
}
//make table header +++++++++++++++++++++++++++++
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
//  Stores in an Array  are rendered+++++++++++++++++++++++++++++++++
function putObjectsIntoArray() {
  for (var i = 0; i < universal.length; i++) {
    universal[i].render();
  }
}
// Build the er Footer with totals+++++++++++++++++++++++++++++++++++
function buildsTableTotalsRow(){
  var totalTotal = 0;
  var totalEl = document.getElementById('storeTable');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('th');
  tdEl.textContent = 'Total';
  totalEl.appendChild(trEl);
  totalEl.appendChild(tdEl);
  for (var i = 0; i < (hoursOpen.length - 1); i++) {
    for (var j = 0; j < testingTotal.length; j++) {
      totalTotal += testingTotal[j][i];
    }
    var tdEl = document.createElement('th');
    tdEl.textContent = totalTotal;
    totalEl.appendChild(tdEl);
    totalTotal = 0;
  }
  var lastTotal = 0;
  for (var i = 0; i < finalTotal.length; i++){
    lastTotal += finalTotal[i];
  }
  var tdEl1 = document.createElement('th')
  tdEl1.textContent = lastTotal;
  totalEl.appendChild(tdEl1);
}
tablebuilder();
putObjectsIntoArray();
buildsTableTotalsRow();
