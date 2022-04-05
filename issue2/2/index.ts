import SelectionSort from "./SelectionSort";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import MergeSort from "./MergeSort";
import HeapSort from "./HeapSort";
import QuickSort from "./QuickSort";
import CountingSort from "./CountingSort";

import { testArray } from "./testArray";

type Result = {
  name: string;
  time: number;
};

const results: Result[] = [
  {
    name: "SelectionSort",
    time: testPerformance(SelectionSort.sort, testArray),
  },
  {
    name: "BubbleSort",
    time: testPerformance(BubbleSort.sort, testArray),
  },
  {
    name: "InsertionSort",
    time: testPerformance(InsertionSort.sort, testArray),
  },
  {
    name: "MergeSort",
    time: testPerformance(MergeSort.sort, testArray),
  },
  {
    name: "HeapSort",
    time: testPerformance(HeapSort.sort, testArray),
  },
  {
    name: "QuickSort",
    time: testPerformance(QuickSort.sort, testArray),
  },
  {
    name: "CountingSort",
    time: testPerformance(CountingSort.sort, testArray),
  },
];

function testPerformance(sortFunc: Function, arr: Array<number>): number {
  const t1 = performance.now();
  sortFunc(arr);
  const t2 = performance.now() - t1;
  return t2;
}

let best: Result = { name: null, time: Infinity };

results.forEach((result) => {
  result.time < best.time ? (best = result) : "";
});

console.table(results);
console.log("Best sorting algorithm:");
console.log(best);
