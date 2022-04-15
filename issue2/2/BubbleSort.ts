// Bubble Sort is the simplest sorting algorithm that
//      works by repeatedly swapping the adjacent elements if they are in wrong order.

/**
 * Sorts an array
 * @param {Array<number>} assortedInp - An assorted array of natural numbers
 * @returns {Array<number>} - Result of sorting the assorted array
 */
export default function bubbleSort(assortedInp: Array<number>): Array<number> {
  // Clone array to avoid side effects to original one
  let assorted = [...assortedInp];
  // If elements hadn't change places, the array is sorted
  let swapped: boolean = false;

  for (let i = 0; i < assorted.length; i++) {
    // Reset swapped trigger
    swapped = false;

    for (let j = 0; j < assorted.length; j++) {
      let current = assorted[j];
      let next = assorted[j + 1];

      // If next element is greater, swap them
      if (current > next) {
        assorted[j + 1] = current;
        assorted[j] = next;
        swapped = true;
      }
    }

    // If all element are on their sorted places, we stop to not waste cycles
    if (!swapped) {
      break;
    }
  }
  return assorted;
}
