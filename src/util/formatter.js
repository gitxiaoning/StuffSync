export function daysPassed(timestamp) {
    // Current date and time
    const now = new Date();
    
    // Convert timestamp to a date object
    const date = new Date(timestamp);

    // Difference in milliseconds
    const difference = now - date;

    // Convert milliseconds to days
    const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

    return daysPassed;
}

export function nameFormat(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}


export function sortBy(array, attribute, isAscending = true) {
    return array.sort((a, b) => {
        if (isAscending) {
            return a[attribute] - b[attribute];
        } else {
            return b[attribute] - a[attribute];
        }
    });
}
