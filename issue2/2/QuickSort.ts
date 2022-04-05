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
   *
   * @param {array} assortedInp - An assorted array of natural numbers
   * @returns {array} - Result of sorting the assorted array
   */
  public static sort(assortedInp: Array<number>): Array<number> {
    // Clone array to avoid side effects to original one
    let assorted = [...assortedInp];

    interface Pivot {
      index: number | null;
      value: number | null;
    }

    function quickSort(arr: Array<number>, first: number, last: number) {
      if (first >= last) {
        return;
      }
      let pivot = divide(arr, first, last);
      quickSort(arr, first, pivot.index - 1);
      quickSort(arr, pivot.index + 1, last);
    }

    function divide(arr: Array<number>, first: number, last: number): Pivot {
      let pivot: Pivot = { index: last, value: arr[last] };
      let pointer: Pivot = null;

      outer: for (let i = first; i < last; i++) {
        if (arr[i] > pivot.value) {
          pointer = { index: i, value: arr[i] };

          for (let j = i; j < last; j++) {
            if (arr[j] < pivot.value) {
              let buffer = arr[i];

              arr[i] = arr[j];
              arr[j] = buffer;
              break;
            }
            if (j == last - 1) {
              break outer;
            }
          }
        }
      }
      if (pointer) {
        let buffer = arr[pointer.index];

        arr[pointer.index] = arr[pivot.index];
        arr[pivot.index] = buffer;

        pivot.index = pointer.index;
      }

      return pivot;
    }

    let first = 0;
    let last = assorted.length - 1;

    quickSort(assorted, first, last);

    return assorted;
  }
}
