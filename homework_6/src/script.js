function filterBy(arr, type) {
    return arr.filter(function(currentValue) {
        return typeof(currentValue) !== type;
    });
}

let arr = ['hello', 11, 85, 23, '23', true, "125"];
console.log(filterBy(arr, 'string'));

