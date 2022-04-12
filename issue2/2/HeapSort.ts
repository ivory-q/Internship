import { Heap } from "./structures/Heap";

// Since the tree satisfies Max-Heap property, then the largest item is stored at the root node.
// Swap: Remove the root element and put at the end of the array (nth position)
//      Put the last item of the tree (heap) at the vacant place.
// Remove: Reduce the size of the heap by 1.
// Heapify: Heapify the root element again so that we have the highest element at root.
// The process is repeated until all the items of the list are sorted.

export default class HeapSort {
  /**
   * Sorts an array
   * @param {Array<number>} assortedInp - An assorted array of natural numbers
   * @returns {Array<number>} - Result of sorting the assorted array
   */
  public static sort(assortedInp: Array<number>): Array<number> {
    // Clone array to avoid side effects to original one
    let assorted = [...assortedInp];

    // Create max heap from an array
    let heap: Heap = new Heap(assorted);

    const n = heap.value.length;

    // Since in max heap the root element is the largest, swap it with the last element
    // And rebuild max heap (heapify complete binary tree)
    // This way we always get the largest in the end, in next iteration we shrink heap by 1, leaving it locked in place
    for (let i = n - 1; i >= 0; i--) {
      const heapVal = heap.value;
      [heapVal[i], heapVal[0]] = [heapVal[0], heapVal[i]];

      heap.formatHeap(heapVal, i, 0);
    }

    return heap.value;
  }
}
