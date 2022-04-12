// The selection sort algorithm sorts an array by repeatedly finding
//      the minimum element (considering ascending order) from unsorted part and putting it
//      at the beginning. The algorithm maintains two subarrays in a given array.
// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.
// In every iteration of selection sort, the minimum element (considering ascending order)
//      from the unsorted subarray is picked and moved to the sorted subarray.

export default class SelectionSort {
  /**
   * Sorts an array
   * @param {Array<number>} assortedInp - An assorted array of natural numbers
   * @returns {Array<number>} - Result of sorting the assorted array
   */
  public static sort(assortedInp: Array<number>): Array<number> {
    // Clone array to avoid side effects to original one
    let assorted = [...assortedInp];
    // Output array
    let sorted: Array<number> = [];

    let assortedLength: number = assorted.length;

    for (let i = 0; i < assortedLength; i++) {
      // Define fist element as the smallest
      let low = { index: 0, value: assorted[0] };

      for (let j = 0; j < assortedLength; j++) {
        const num = assorted[j];
        // If element is smaller, set it as the smallest
        if (low.value > num) {
          low.value = num;
          low.index = j;
        }
      }
      // Add smallest element to the sorted array and remove it from the original one
      sorted.push(low.value);
      assorted.splice(low.index, 1);
    }

    return sorted;
  }
}
