// To sort an array of size n in ascending order:
// 1: Iterate from arr[1] to arr[n] over the array.
// 2: Compare the current element (key) to its predecessor.
// 3: If the key element is smaller than its predecessor,
//      compare it to the elements before.
//  Move the greater elements one position up to make space for the swapped element.

export default class InsertionSort {
  /**
   *
   * @param {array} assortedInp - An assorted array of natural numbers
   * @returns {array} - Result of sorting the assorted array
   */
  public static sort(assortedInp: Array<number>): Array<number> {
    // Clone array to avoid side effects to original one
    let assorted = [...assortedInp];

    for (let i = 1; i < assorted.length; i++) {
      let current = assorted[i];
      let prev = assorted[i - 1];

      if (current < prev) {
        for (let j = i - 1; j >= 0; j--) {
          if (current < assorted[j]) {
            assorted[j + 1] = assorted[j];
          } else {
            assorted[j + 1] = current;
            break;
          }

          assorted[j] = current;
        }
      }
    }

    return assorted;
  }
}
