var us = require('underscore');
var $ = require('jquery');

var myState = {
 name: "Washington",
 capital: "Olympia",
 population: 7062000,
 nickname: "The Evergreen State"
};

var businesses = [
 {
  name: "Coding Dojo",
  city:  "Bellevue"
 },
 {
  name: "Facebook",
  city: "Mountain View"
 },
 {
  name: "Microsoft",
  city: "Redmond"
 },
 {
  name: "Expedia",
  city: "Bellevue"
 }
];

var myStateKeys = us.keys(myState);
var myStateValues = us.values(myState);
console.log(myStateKeys);
console.log(myStateValues);

var newMyState = us.object(myStateKeys, myStateValues);
console.log(newMyState);

us.each(myState, function(key, value){
    console.log('key:', key, ' value:', value);
});
console.log(us.pluck(businesses, 'name'));
console.log(us.findWhere(businesses,{ name: 'Microsoft' }));
console.log(us.where(businesses,{ city: 'Bellevue' }));
console.log(us.sortBy(businesses, 'city'));
console.log(us.map(businesses, function (business) {
    business.name = 'Coding Dojo';
    return business;
}));
