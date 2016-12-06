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
        console.log(this.hourlyCustomers + ' customer hour');
        console.log(this.avgCookiesCust + 'avCC');
        this.cookiesSoldPerHour.push(Math.ceil(this.hourlyCustomers[i]*this.avgCookiesCust));
        this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
        // console.log(this.cookiesSoldPerHour + 'cookies per hour');
        // console.log(this.totalCookiesPerDay + 'total cookies');
      }
  };
  this.render = function() {
    this.cookieRandomizer();
    var alkiUL = document.getElementById('storeTable');
    for (i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiUL.appendChild(liEl);
    }
  };
}

var test = new Store('Alki', 2, 16, 4.6).render();
