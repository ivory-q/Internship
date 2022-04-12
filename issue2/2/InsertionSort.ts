// To sort an array of size n in ascending order:
// 1: Iterate from arr[1] to arr[n] over the array.
// 2: Compare the current element (key) to its predecessor.
// 3: If the key element is smaller than its predecessor,
//      compare it to the elements before.
//  Move the greater elements one position up to make space for the swapped element.

export default class InsertionSort {
  /**
   * Sorts an array
   * @param {Array<number>} assortedInp - An assorted array of natural numbers
   * @returns {Array<number>} - Result of sorting the assorted array
   */
  public static sort(assortedInp: Array<number>): Array<number> {
    // Clone array to avoid side effects to original one
    let assorted = [...assortedInp];

    for (let i = 1; i < assorted.length; i++) {
      let current = assorted[i];
      let prev = assorted[i - 1];

      // If current is less than previous, then compare it to all preceding
      if (current < prev) {
        for (let j = i - 1; j >= 0; j--) {
          // If current is less than preceding element, then shift it forward to 1
          if (current < assorted[j]) {
            assorted[j + 1] = assorted[j];
          } else {
            assorted[j + 1] = current;
            break;
          }
          // Swap previous position of preceding element with current
          assorted[j] = current;
        }
      }
    }

    return assorted;
  }
}
