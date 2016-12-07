var pikeStore = {
  name: 'Alki Store',
  minCustHour:  2,
  maxCustHour:  16,
  avgCookiesCust: 4.6,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],   //written in military time for future maths
  cookiesSoldPerHour : [],
  randomCustHour: function() {
    totalCookies = 0;
    for (var i = 0; i < 15; i++) {
      var hourlyCustomers = Math.floor(Math.random() * pikeStore.maxCustHour + pikeStore.minCustHour);
      var cookieRandomizer = Math.round((hourlyCustomers * pikeStore.avgCookiesCust) * 100 / 100);
      // console.log(hourlyCustomers + 'customers per hour.');
      // console.log(cookieRandomizer + 'cookies per hour.');
      this.cookiesSoldPerHour.push(cookieRandomizer);
      var totalCookies =  totalCookies + cookieRandomizer;
      console.log(totalCookies);
    }
  }
}
pikeStore.randomCustHour();
var listList = document.getElementById('list');
for (var i= 0; i < 14; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = pikeStore.hoursOpen[i] + ': ' +  pikeStore.cookiesSoldPerHour[i] + ' cookies';
  listList.appendChild(liEl);
}
