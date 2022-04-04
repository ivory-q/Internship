// Binary Search Algorithm:

// Begin with an interval covering the whole array.
// If the value of the search key is less than the item in the middle of the interval, 
//    narrow the interval to the lower half.
// Otherwise, narrow it to the upper half.
// Repeatedly check until the value is found or the interval is empty.

export default class BinarySearch {
  /**
   *
   * @param {number} needle - An element, which we search in given array(haystack)
   * @param {array} haystack - An assorted array of natural numbers
   * @returns {string} - Result of search as a string, where
   *          "Да" means presence of needle in haystack and
   *          "Нет" means it's abscence
   */
  public static search(needle: number, haystack: Array<number>): string {
    const sortedHaystack = haystack.sort(function (a: number, b: number) {
      return a - b;
    });

    let first = 0;
    let last = sortedHaystack.length - 1;

    while (first <= last) {
      let mid = Math.floor(first + (last - first) / 2);
      let candidate = sortedHaystack[mid];

      if (candidate == needle) {
        return needle + " Да";
      }

      if (candidate > needle) {
        last = mid - 1;
      } else if (candidate < needle) {
        first = mid + 1;
      }
    }
    return needle + " Нет";
  }
}
