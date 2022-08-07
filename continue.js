// continue
console.log('new')
var num = [34, 55, 22, 5, 6, 88, 99, 100, 130, 45, 99];
for (i = 1; i < num.length; i++) {
    var number = num[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}