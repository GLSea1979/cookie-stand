var alkiStore = {
  minCustHour:  2,
  maxCustHour:  16,
  avgCookiesCust: 4.6,
  hoursOpen: [6, 20],   //written in military time for future maths
  cookiesSoldPerHour : [],
  randomCustHour: function() {
    for (var i = 0; i < (alkiStore.hoursOpen[1] - alkiStore.hoursOpen[0]); i++) {
      var hourlyCustomers = Math.floor(Math.random() * alkiStore.maxCustHour + alkiStore.minCustHour);
      var cookieRandomizer = Math.round((hourlyCustomers * alkiStore.avgCookiesCust) * 100 / 100);
      // console.log(hourlyCustomers + 'customers per hour.');
      // console.log(cookieRandomizer + 'cookies per hour.');
      this.cookiesSoldPerHour.push(i, cookieRandomizer);
    }
  }
}
alkiStore.randomCustHour();
  // cookiesSoldPerHour: [],
  // calcCookieSoldEachHour: function2() {
    // for (){
      // this.randomCustHour

    // }
  // }
// }
