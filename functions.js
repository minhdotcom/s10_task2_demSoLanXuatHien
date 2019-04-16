function count_element (array, element) {
    var count = 0;
    for (let i = 0; i < array.length; i++) {
            if (array [i] == element) {
                count++;
        }
    }
    return(count);
}

function make_random_numbers (array) {
    for (i = 0; i < 10; i++) {
        array [i] = Math.floor(Math.random() * 11);
    }
}