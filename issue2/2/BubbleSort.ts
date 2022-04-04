// Bubble Sort is the simplest sorting algorithm that
//      works by repeatedly swapping the adjacent elements if they are in wrong order.

export default class BubbleSort {
  /**
   *
   * @param {array} assortedInp - An assorted array of natural numbers
   * @returns {array} - Result of sorting the assorted array
   */
  public static sort(assortedInp: Array<number>): Array<number> {
    // Clone array to avoid side effects to original one
    let assorted = [...assortedInp];
    // If elements hadn't change places, the array is sorted
    let swapped: boolean = false;

    for (let i = 0; i < assorted.length; i++) {
      swapped = false;

      for (let j = 0; j < assorted.length; j++) {
        let current = assorted[j];
        let next = assorted[j + 1];

        if (current > next) {
          assorted[j + 1] = current;
          assorted[j] = next;
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }
    return assorted;
  }
}
