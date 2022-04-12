export class Node {
  public value: number;
  public left: Node;
  public right: Node;

  constructor(value: number, left: Node = null, right: Node = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class Heap {
  public root: Node;

  constructor() {
    this.root = new Node(0);
  }

  /**
   * Generate max complete binary tree from an array
   * @param arr - Any array of numbers
   * @param n - Length of the array
   */
  public static generateHeap(arr: Array<number>, n: number) {
    // Since we don't need to check leaf nodes, we start at first index of non-leaf node
    const startIndex = Math.floor(n / 2) - 1;

    // For each non-leaf node we check if it's leaves are greater than parent
    // If they're greater, we swap them (heapify)
    for (let i = startIndex; i >= 0; i--) {
      this.formatHeap(arr, n, i);
    }
  }

  /**
   * Heapify complete binary tree (turn to max heap)
   * @param arr - Any array of numbers
   * @param n - Length of the array
   * @param index - Non-leaf Node
   */
  public static formatHeap(arr: Array<number>, n: number, index: number) {
    // Indexes in heap correlate to indexes in array
    // index + 1 - index of left leaf
    // index + 2 - index of right leaf
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    // Set current Node as largest
    let largest = index;

    // If index in length of the array and it's value is greater than largest
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    // If our current Node isn't largest, swap it with largest
    if (largest != index) {
      let buffer = arr[index];
      arr[index] = arr[largest];
      arr[largest] = buffer;

      // After swapping parent with leaf, do the same check for that leaf
      this.formatHeap(arr, n, largest);
    }
  }

  /**
   * Perform Heap sort on array
   * @param arr - Any array of numbers
   */
  public static heapSort(arr: Array<number>) {
    const n = arr.length;

    // Generate max heap from an array
    this.generateHeap(arr, n);

    // Since in max heap the root element is the largest, swap it with the last element
    // And rebuild max heap (heapify complete binary tree) 
    // This way we always get the largest in the end, in next iteration we shrink heap by 1, leaving it locked in place
    for (let i = n - 1; i >= 0; i--) {
      let buffer = arr[i];
      arr[i] = arr[0];
      arr[0] = buffer;

      this.formatHeap(arr, i, 0);
    }
  }

  /**
   * Just prints all elements of the array into terminal
   * @param heap - Heapified array
   */
  public static printHeap(heap: Array<number>) {
    for (let i = 0; i < heap.length; i++) {
      console.log(heap[i] + " ");
    }
  }
}