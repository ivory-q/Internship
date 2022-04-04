import { Heap } from "./structures/Heap";

// Since the tree satisfies Max-Heap property, then the largest item is stored at the root node.
// Swap: Remove the root element and put at the end of the array (nth position) 
//      Put the last item of the tree (heap) at the vacant place.
// Remove: Reduce the size of the heap by 1.
// Heapify: Heapify the root element again so that we have the highest element at root.
// The process is repeated until all the items of the list are sorted.

export default class HeapSort {
  /**
   *
   * @param {array} assortedInp - An assorted array of natural numbers
   * @returns {array} - Result of sorting the assorted array
   */
  public static sort(assortedInp: Array<number>): Array<number> {
    // Clone array to avoid side effects to original one
    let assorted = [...assortedInp];

    Heap.heapSort(assorted);

    return assorted;
  }
}
