// It divides the input array into two halves, calls itself for the two halves,
//      and then merges the two sorted halves.

export default class MergeSort {
  /**
   * Sorts an array
   * @param {Array<number>} assortedInp - An assorted array of natural numbers
   * @returns {Array<number>} - Result of sorting the assorted array
   */
  public static sort(assortedInp: Array<number>): Array<number> {
    // Clone array to avoid side effects to original one
    let assorted = [...assortedInp];
    // Another clone with original values for copying from
    let assorted2 = [...assortedInp];

    // Took me MUCH longer than anticipated, kinda messy solution
    function mergeSort(arr: Array<number>, first: number, last: number) {
      if (first >= last) {
        return arr;
      }

      // Mid point of array
      const mid = first + Math.floor((last - first) / 2);

      // Subarrays from original, separated by Mid point
      let left: Array<number> = new Array(mid - first + 1);
      let right: Array<number> = new Array(last - mid);

      // Cloning values from original array to subarrays
      for (let i = 0; i < left.length; i++) {
        left[i] = assorted2[first + i];
      }
      for (let j = 0; j < right.length; j++) {
        right[j] = assorted2[mid + j + 1];
      }

      // Sorting subarrays
      mergeSort(left, first, mid);
      mergeSort(right, mid + 1, last);

      // Index variables for tracking pointer in arrays
      let i: number = 0,
        j: number = 0,
        k: number = 0;

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

      // Inserting lefovers, assuming they're already sorted, hence previous recursive call
      while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
      }

      // Inserting lefovers from right array as well
      while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
      }

      return arr;
    }

    const first = 0;
    const last = assorted.length - 1;

    const sorted = mergeSort(assorted, first, last);

    return sorted;
  }
}
