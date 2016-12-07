var alkiStore = {
  name: 'Alki Store',
  minCustHour:  2,
  maxCustHour:  16,
  avgCookiesCust: 4.6,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],   //written in military time for future maths
  cookiesSoldPerHour : [],
  randomCustHour: function() {
    // var totalCookies = 0;
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
var listList = document.getElementById('list');
for (var i= 0; i < 15; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = alkiStore.hoursOpen[i] + ': ' +  alkiStore.cookiesSoldPerHour[i] + ' cookies';
  listList.appendChild(liEl);
}
// var alkiTotal = document.createElement('li');
// alkiTotal.textContent =
//   1st and Pike Store
var pikeStore = {
  name: '1st and Pike Store',
  minCustHour:  2,
  maxCustHour:  16,
  avgCookiesCust: 4.6,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],   //written in military time for future maths
  cookiesSoldPerHour : [],
  randomCustHour: function() {
    totalCookies = 0;
    for (var i = 0; i < pikeStore.hoursOpen.length; i++) {
      var hourlyCustomers = Math.floor(Math.random() * pikeStore.maxCustHour + pikeStore.minCustHour);
      var cookieRandomizer = Math.round((hourlyCustomers * pikeStore.avgCookiesCust) * 100 / 100);
      // console.log(hourlyCustomers + 'customers per hour.');
      // console.log(cookieRandomizer + 'cookies per hour.');
      this.cookiesSoldPerHour.push(cookieRandomizer);
      var totalCookies =  totalCookies + cookieRandomizer;
      if (i === pikeStore.hoursOpen.length) {
        return totalCookies;
      }

    }
  }
}
// console.log(pikeStore.randomCustHour(totalCookies));
pikeStore.randomCustHour();
var listList = document.getElementById('list2');
for (var i= 0; i < 15; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = pikeStore.hoursOpen[i] + ': ' +  pikeStore.cookiesSoldPerHour[i] + ' cookies';
  listList.appendChild(liEl);
}
// var pikeTotal = document.createElement('li');
// pikeTotal.textContent = totalCookies;
//  Seatac Airport
var seatacStore = {
  name: 'SeaTac Store',
  minCustHour:  3,
  maxCustHour:  24,
  avgCookiesCust: 1.2,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],   //written in military time for future maths
  cookiesSoldPerHour : [],
  randomCustHour: function() {
    for (var i = 0; i < 15; i++) {
      var hourlyCustomers = Math.floor(Math.random() * seatacStore.maxCustHour + seatacStore.minCustHour);
      var cookieRandomizer = Math.round((hourlyCustomers * seatacStore.avgCookiesCust) * 100 / 100);
      // console.log(hourlyCustomers + 'customers per hour.');
      // console.log(cookieRandomizer + 'cookies per hour.');
      this.cookiesSoldPerHour.push(cookieRandomizer);
    }
  }
}
seatacStore.randomCustHour();
var listList = document.getElementById('list3');
for (var i= 0; i < 15; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = seatacStore.hoursOpen[i] + ': ' +  seatacStore.cookiesSoldPerHour[i] + ' cookies';
  listList.appendChild(liEl);
}
// Seattle Center Store
var seaCenterStore = {
  name: 'Seattle Center Store',
  minCustHour:  11,
  maxCustHour:  38,
  avgCookiesCust: 3.7,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],   //written in military time for future maths
  cookiesSoldPerHour : [],
  randomCustHour: function() {
    for (var i = 0; i < 15; i++) {
      var hourlyCustomers = Math.floor(Math.random() * seaCenterStore.maxCustHour + seaCenterStore.minCustHour);
      var cookieRandomizer = Math.round((hourlyCustomers * seaCenterStore.avgCookiesCust) * 100 / 100);
      // console.log(hourlyCustomers + 'customers per hour.');
      // console.log(cookieRandomizer + 'cookies per hour.');
      this.cookiesSoldPerHour.push(cookieRandomizer);
    }
  }
}
seaCenterStore.randomCustHour();
var listList = document.getElementById('list4');
for (var i= 0; i < 15; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = seaCenterStore.hoursOpen[i] + ': ' +  seaCenterStore.cookiesSoldPerHour[i] + ' cookies';
  listList.appendChild(liEl);
}
// Capitol Hill Store
var capHillStore = {
  name: 'Capitol Hill Store',
  minCustHour:  20,
  maxCustHour:  38,
  avgCookiesCust: 2.3,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', 'noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],   //written in military time for future maths
  cookiesSoldPerHour : [],
  randomCustHour: function() {
    for (var i = 0; i < 15; i++) {
      var hourlyCustomers = Math.floor(Math.random() * capHillStore.maxCustHour + capHillStore.minCustHour);
      var cookieRandomizer = Math.round((hourlyCustomers * capHillStore.avgCookiesCust) * 100 / 100);
      // console.log(hourlyCustomers + 'customers per hour.');
      // console.log(cookieRandomizer + 'cookies per hour.');
      this.cookiesSoldPerHour.push(cookieRandomizer);
    }
  }
}
capHillStore.randomCustHour();
var listList = document.getElementById('list5');
for (var i= 0; i < 15; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = capHillStore.hoursOpen[i] + ': ' +  capHillStore.cookiesSoldPerHour[i] + ' cookies';
  listList.appendChild(liEl);
}
