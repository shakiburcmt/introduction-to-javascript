var tour = ['sajek', 'bali', 'gulistan'];
tour[1] = 'thailand';
console.log(tour[1]);


// array slice
var tour = ['sajek', 'bali', 'gulistan'];
tour = tour.slice(1);

console.log(tour);

tour = tour.indexOf('gulistan');
console.log(tour);

// if else if condition
var tour = ['sajek', 'paksi', 'rajshahi'];
if (tour[0] == 'paksi') {
    console.log('biriyani');
}
else if (tour[1] == 'sajek') {
    console.log('khichuri');
}
else if (tour.length == 3) {
    console.log('hurry up');
}
else {
    console.log('kothao jawa holona');
}

