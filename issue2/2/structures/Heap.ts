export class Heap {
  public root: Node;

  constructor() {
    this.root = new Node(0);
  }

  public static generateHeap(arr: Array<number>, n: number) {
    const startIndex = Math.floor(n / 2) - 1;

    for (let i = startIndex; i >= 0; i--) {
      this.formatHeap(arr, n, i);
    }
  }

  public static formatHeap(arr: Array<number>, n: number, index: number) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    let largest = index;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest != index) {
      let buffer = arr[index];
      arr[index] = arr[largest];
      arr[largest] = buffer;

      this.formatHeap(arr, n, largest);
    }
  }

  public static heapSort(arr: Array<number>) {
    const n = arr.length;

    this.generateHeap(arr, n);

    for (let i = n - 1; i >= 0; i--) {
      let buffer = arr[i];
      arr[i] = arr[0];
      arr[0] = buffer;

      this.formatHeap(arr, i, 0);
    }
  }

  public static printHeap(heap: Array<number>) {
    for (let i = 0; i < heap.length; i++) {
      console.log(heap[i] + " ");
    }
  }
}

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
