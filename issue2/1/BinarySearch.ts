// Binary Search Algorithm:

// Begin with an interval covering the whole array.
// If the value of the search key is less than the item in the middle of the interval,
//    narrow the interval to the lower half.
// Otherwise, narrow it to the upper half.
// Repeatedly check until the value is found or the interval is empty.

/**
 *
 * @param {Array<number>} needles - An elements, which we search in given array(haystack)
 * @param {Array<number>} haystack - An assorted array of natural numbers
 * @returns {Array<string>} - Results of search as an array of strings, where
 *          "Да" means presence of needle in haystack and
 *          "Нет" means it's absence
 */
export default function binarySearch(
  needles: Array<number>,
  haystack: Array<number>
): Array<string> {
  // Sorting input array for binary search to work
  const sortedHaystack = haystack.sort(function (a: number, b: number) {
    return a - b;
  });

  const results = needles.map((needle) => {
    // Defining the first and the last indexes of the haystack
    let first = 0;
    let last = sortedHaystack.length - 1;

    // Iterate haystack until we are left with no numbers
    while (first <= last) {
      // Finding a middle of the haystack
      let mid = Math.floor(first + (last - first) / 2);

      // Presumptive result of the search
      let candidate = sortedHaystack[mid];

      // Check if our candidate is the element we are searching for
      if (candidate == needle) {
        return needle + " Да";
      }

      // Check on which side of the haystack the element lays
      if (candidate > needle) {
        // If it's in the left side, then we shrink our search area to the left side
        last = mid - 1;
      } else if (candidate < needle) {
        // If it's in the right, we select the right one
        first = mid + 1;
      }
    }
    // If none of the elements is the needle, return failure
    return needle + " Нет";
  });

  // Return the array of search results
  return results;
}
