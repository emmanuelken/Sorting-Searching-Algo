function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Assign the current element to be added
        let current = arr[i];
        // Start checking with elements before it
        let j = i - 1;
        
        // Move elements of arr[0..i-1], that are greater than current,to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the current element at its correct position
        arr[j + 1] = current;
    }
    
    return arr;
}

// Checking:
let array = [15, 10, 7, 2, 8, 4, 9, 6, 5, 3];
console.log("array:", array);
console.log("Sorted array:", insertionSort(array.slice()));
