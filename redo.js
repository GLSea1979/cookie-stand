var hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],


var alkiStore = {
  name: 'Alki Store',
  minCustHour:  2,
  maxCustHour:  16,
  avgCookiesCust: 4.6,
  randomCustHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
  RandomCustHour: function() {
    for (var i = 0; i < hoursOpen.length; i++){
      this.randomCustHour.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour);
    }
  },
  TotalCookiesSoldEachHour: function() {
    this.RandomCustHour();
    for (var i = 0; i < hoursOpen.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustHour[i] * this.avgCookiesCust));
      this.totalDailyCookieSales += this.totalCookiesSoldEachHour[i];
    }
  },
  render: function() {
    this.TotalCookiesSoldEachHour();
    var firstAndPikeUL = document.getElementById('firstandpikeUL');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[i] + ': ' + this.totalCookiesSoldEachHour[i] + ' cookies';
      firstAndPikeUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    firstAndPikeUL.appendChild(liEl);
  }
};

firstAndPike.render();
