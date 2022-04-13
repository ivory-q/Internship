import selectionSort from "./SelectionSort";
import bubbleSort from "./BubbleSort";
import insertionSort from "./InsertionSort";
import mergeSort from "./MergeSort";
import heapSort from "./HeapSort";
import quickSort from "./QuickSort";
import countingSort from "./CountingSort";

import { testArray } from "./testArray";

type Result = {
  name: string;
  time: number;
};

const results: Result[] = [
  {
    name: "SelectionSort",
    time: testPerformance(selectionSort, testArray),
  },
  {
    name: "BubbleSort",
    time: testPerformance(bubbleSort, testArray),
  },
  {
    name: "InsertionSort",
    time: testPerformance(insertionSort, testArray),
  },
  {
    name: "MergeSort",
    time: testPerformance(mergeSort, testArray),
  },
  {
    name: "HeapSort",
    time: testPerformance(heapSort, testArray),
  },
  {
    name: "QuickSort",
    time: testPerformance(quickSort, testArray),
  },
  {
    name: "CountingSort",
    time: testPerformance(countingSort, testArray),
  },
];

function testPerformance(sortFunc: Function, arr: Array<number>): number {
  const t1 = performance.now();
  sortFunc(arr);
  return performance.now() - t1;
}

let best: Result = { name: null, time: Infinity };

results.forEach((result) => {
  result.time < best.time ? (best = result) : "";
});

console.table(results);
console.log("Best sorting algorithm:");
console.log(best);
