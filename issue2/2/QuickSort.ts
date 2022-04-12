// An array is divided into subarrays by selecting a pivot element (element selected from the array).
// While dividing the array, the pivot element should be positioned in such a way that elements less than
//      pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.
// The left and right subarrays are also divided using the same approach. This process continues
//      until each subarray contains a single element.
// At this point, elements are already sorted. Finally, elements are combined to form a sorted array.
//  1. Select the Pivot Element
//  2. Rearrange the Array
//  3. Divide Subarrays

export default class QuickSort {
  /**
   * Sorts an array
   * @param {Array<number>} assortedInp - An assorted array of natural numbers
   * @returns {Array<number>} - Result of sorting the assorted array
   */
  public static sort(assortedInp: Array<number>): Array<number> {
    // Clone array to avoid side effects to original one
    let assorted = [...assortedInp];

    interface Pivot {
      index: number | null;
      value: number | null;
    }

    /**
     * Recursively splits array into virtual subarrays, sorting them around pivot point until all elements are sorted
     * @param arr - An array of natural numbers
     * @param first - Index of the first element
     * @param last - Index of the last element
     */
    function quickSort(arr: Array<number>, first: number, last: number) {
      // Recursion until we are left with no numbers
      if (first >= last) {
        return;
      }
      // Find pivot
      let pivot = divide(arr, first, last);
      // Non-destructively split array into left and right parts using pivot point and call sort recursively
      quickSort(arr, first, pivot.index - 1);
      quickSort(arr, pivot.index + 1, last);
    }

    /**
     * Finds pivot point and sorts array such way, than elements less than pivot
     * are placed to it's left side, and the ones greater - to the right side
     * @param arr - An array of natural numbers
     * @param first - Index of the first element
     * @param last - Index of the last element
     * @returns {Pivot} - split point
     */
    function divide(arr: Array<number>, first: number, last: number): Pivot {
      // Initialize pivot as last element of the array
      let pivot: Pivot = { index: last, value: arr[last] };
      // Initialize pointer(second pivot), which will be used for comparison
      let pointer: Pivot = null;

      // Iterate all except pivot(last element)
      outer: for (let i = first; i < last; i++) {
        // If element's value is greater than pivot's, create pointer in it's place
        if (arr[i] > pivot.value) {
          pointer = { index: i, value: arr[i] };
          // Iterate through elements, from pointer to pivot
          for (let j = i; j < last; j++) {
            // If one of element's value is less than pivot's swap it with pointer
            // Continue iteration of the first loop
            if (arr[j] < pivot.value) {
              let buffer = arr[i];

              arr[i] = arr[j];
              arr[j] = buffer;
              break;
            }
            // If an element with less than pivot's value wasn't found, stop all iterations
            if (j == last - 1) {
              break outer;
            }
          }
        }
      }
      // If iteration was escaped, use remaining pointer to swap pivot with
      // As at this point to the left of the pointer will be elements less than pivot
      // And to the right - greater than pivot
      if (pointer) {
        let buffer = arr[pointer.index];

        arr[pointer.index] = arr[pivot.index];
        arr[pivot.index] = buffer;

        pivot.index = pointer.index;
      }

      // Return pivot
      return pivot;
    }

    // Get first and last indexes and calls sort
    let first = 0;
    let last = assorted.length - 1;

    quickSort(assorted, first, last);

    return assorted;
  }
}
