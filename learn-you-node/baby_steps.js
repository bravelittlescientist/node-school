// learnyounode
//
// Baby Steps
// Sum command line arguments

// process.argv[2] starts the arguments, so slice off array before that.
var numbers = process.argv.slice(2);

// sum with reducer
var sum = numbers.reduce(function(previous, current) {
    // Strings -> Integers
    return +previous + +current;
});

// report result
console.log(sum);
