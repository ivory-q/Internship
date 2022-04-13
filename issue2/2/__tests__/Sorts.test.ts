import selectionSort from "../SelectionSort";
import bubbleSort from "../BubbleSort";
import insertionSort from "../InsertionSort";
import mergeSort from "../MergeSort";
import heapSort from "../HeapSort";
import quickSort from "../QuickSort";
import countingSort from "../CountingSort";

describe("sorting algorithms", () => {
  const assorted: Array<number> = [-3, -1, 2, 4, -5, 0, 7, -2];
  const sorted: Array<number> = [-5, -3, -2, -1, 0, 2, 4, 7];

  it("selection sort works", () => {
    expect(selectionSort(assorted)).toEqual(sorted);
  });

  it("bubble sort works", () => {
    expect(bubbleSort(assorted)).toEqual(sorted);
  });

  it("insertion sort works", () => {
    expect(insertionSort(assorted)).toEqual(sorted);
  });

  it("merge sort works", () => {
    expect(mergeSort(assorted)).toEqual(sorted);
  });

  it("heap sort works", () => {
    expect(heapSort(assorted)).toEqual(sorted);
  });

  it("quick sort works", () => {
    expect(quickSort(assorted)).toEqual(sorted);
  });

  it("counting sort works", () => {
    const assorted: Array<number> = [38, 27, 43, 3, 9, 82, 10];
    const sorted: Array<number> = [3, 9, 10, 27, 38, 43, 82];
    expect(countingSort(assorted)).toEqual(sorted);
  });

  it("counting sort doesn't work on negative numbers", () => {
    expect(() => {
      countingSort(assorted);
    }).toThrowError("error(negative numbers in array)");
  });
});
