var alkiStore = {
  minCustHour:  2,
  maxCustHour:  16,
  avgCookiesCust: 4.6,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],   //written in military time for future maths
  cookiesSoldPerHour : [],
  randomCustHour: function() {
    for (var i = 0; i < 15; i++) {
      var hourlyCustomers = Math.floor(Math.random() * alkiStore.maxCustHour + alkiStore.minCustHour);
      var cookieRandomizer = Math.round((hourlyCustomers * alkiStore.avgCookiesCust) * 100 / 100);
      // console.log(hourlyCustomers + 'customers per hour.');
      // console.log(cookieRandomizer + 'cookies per hour.');
      this.cookiesSoldPerHour.push(cookieRandomizer);
    }
  }
}
alkiStore.randomCustHour();

// var renderSales = document.getElementById('alkiSales');
// for (var j = 0; j < 14; j++) {
  // var listEl = document.createElement('li');
  // listEl.textContent = alkiStore.cookiesSoldPerHour[j];
  // console.log(listEl);
  // console.log(renderSales);
  // renderSales.appendChild(listEl);
// }
// var listStuff = ['Rachel', 'Eliza', 'Ken', 'Kevia'];
var listList = document.getElementById('list');
for (var i= 0; i < 14; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = alkiStore.cookiesSoldPerHour[i];
  listList.appendChild(liEl);
}


// var someName = document.getElementById('alkiSales');
// for (var i= 0; i < alkiStore.cookiesSoldPerHour.length; i++) {
  // var liEl = document.createElement('li');
  // liEl.textContent = alkiStore.cookiesSoldPerHour[i];
  // someName.appendChild(liEl);
// }
