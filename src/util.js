export function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

export function randomEntry(array) {
    return array[randomIndex(array)];
}