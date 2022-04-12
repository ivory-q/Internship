// Cut down version of max heap. No deletion/insertion,
// only heapification

export class Heap {
  public value: Array<number>;

  constructor(arr: Array<number>) {
    this.value = arr;
    this.generateHeap(this.value, arr.length);
  }

  /**
   * Generate max complete binary tree from an array
   * @param arr - Any array of numbers
   * @param n - Length of the array
   */
  public generateHeap(arr: Array<number>, n: number) {
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
  public formatHeap(arr: Array<number>, n: number, index: number = 0) {
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
      [arr[index], arr[largest]] = [arr[largest], arr[index]];

      // After swapping parent with leaf, do the same check for that leaf
      this.formatHeap(arr, n, largest);
    }
  }
}
