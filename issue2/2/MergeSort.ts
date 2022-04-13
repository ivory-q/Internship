// It divides the input array into two halves, calls itself for the two halves,
//      and then merges the two sorted halves.

/**
 * Sorts an array
 * @param {Array<number>} assortedInp - An assorted array of natural numbers
 * @returns {Array<number>} - Result of sorting the assorted array
 */
export default function mergeSort(assortedInp: Array<number>): Array<number> {
  // Clone array to avoid side effects to original one
  let assorted = [...assortedInp];

  /**
   * Recursively split array into subarrays on middle points and merge them back, placing by value
   * @param arr - An array of natural numbers
   * @param first - Index of the first element
   * @param last - Index of the last element
   */
  function sort(arr: Array<number>, first: number, last: number) {
    // Recursively sort an array until we are left with no numbers
    if (first >= last) {
      return;
    }
    // Mid point of the array
    const mid = first + Math.floor((last - first) / 2);
    // Split array into virtual subarrays on mid point and sort them recursively
    sort(arr, first, mid);
    sort(arr, mid + 1, last);
    // Merge together subarrays, while sorting their elements by value
    merge(arr, first, mid, last);
  }

  /**
   * Merge two subarrays by placing their elements in correct order
   * @param arr - An array of natural numbers
   * @param first - Index of the first element
   * @param mid - Middle index of the array
   * @param last - Index of the last element
   */
  function merge(arr: Array<number>, first: number, mid: number, last: number) {
    // Subarrays from original, separated by mid point
    let left: Array<number> = new Array(mid - first + 1);
    let right: Array<number> = new Array(last - mid);

    // Cloning values from original array to subarrays
    for (let i = 0; i < left.length; i++) {
      left[i] = arr[first + i];
    }
    for (let j = 0; j < right.length; j++) {
      right[j] = arr[mid + j + 1];
    }

    // Index variables for tracking pointer in arrays
    let i: number = 0,
      j: number = 0,
      k: number = first;

    // Sorting by value and inserting into original array
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }

    // Inserting leftovers, assuming they're already sorted, hence previous recursive call
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }

    // Inserting leftovers from right array as well
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }

  // Get first and last indexes and call sort
  const first = 0;
  const last = assorted.length - 1;

  sort(assorted, first, last);

  return assorted;
}
