// Counting sort is a sorting algorithm that sorts the elements of an array by
//      counting the number of occurrences of each unique element in the array.
// The count is stored in an auxiliary array and the sorting is done by
//      mapping the count as an index of the auxiliary array.

export default class CountingSort {
  /**
   * Sorts an array
   * @param {Array<number>} assortedInp - An assorted array of positive natural numbers
   * @returns {Array<number>} - Result of sorting the assorted array
   */
  public static sort(assortedInp: Array<number>): Array<number> {
    // Clone array to avoid side effects to original one
    let assorted = [...assortedInp];

    // Check if no negative numbers
    if (
      !assorted.every((num) => {
        return num >= 0;
      })
    ) {
      throw new Error("error(negative numbers in array)");
    }

    // Find max number
    let max: number = assorted[0];
    assorted.forEach((elem) => {
      if (elem > max) {
        max = elem;
      }
    });

    // Count array and final array
    let aux = new Array(max + 1);
    let sorted: Array<number> = new Array(assorted.length);

    // Init count array
    for (let i = 0; i < aux.length; i++) {
      aux[i] = 0;
    }

    // Store number of occurrences of each element
    for (let i = 0; i < assorted.length; i++) {
      aux[assorted[i]] += 1;
    }

    // Turn count array into cumulative sum of elements
    for (let i = 1; i < aux.length; i++) {
      aux[i] += aux[i - 1];
    }

    // Place items according to count array into new one
    for (let i = 0; i < assorted.length; i++) {
      const element = assorted[i];
      sorted[aux[element] - 1] = element;
      // Subtract count to place duplicate items adjacent to each other
      aux[element] -= 1;
    }

    return sorted;
  }
}
