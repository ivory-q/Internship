// The selection sort algorithm sorts an array by repeatedly finding
//      the minimum element (considering ascending order) from unsorted part and putting it
//      at the beginning. The algorithm maintains two subarrays in a given array.
// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.
// In every iteration of selection sort, the minimum element (considering ascending order)
//      from the unsorted subarray is picked and moved to the sorted subarray.

export default class SelectionSort {
  /**
   *
   * @param {array} assorted - An assorted array of natural numbers
   * @returns {array} - Result of sorting the assorted array
   */
  public static sort(assorted: Array<number>): Array<number> {
    let sorted: Array<number> = [];

    let assortedLength: number = assorted.length;

    for (let i = 0; i < assortedLength; i++) {
      let low = { index: 0, value: assorted[0] };

      for (let j = 0; j < assortedLength; j++) {
        const num = assorted[j];

        if (low.value > num) {
          low.value = num;
          low.index = j;
        }
      }
      sorted.push(low.value);
      assorted.splice(low.index, 1);
    }

    return sorted;
  }
}
