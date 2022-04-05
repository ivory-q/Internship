import SelectionSort from "../SelectionSort";
import BubbleSort from "../BubbleSort";
import InsertionSort from "../InsertionSort";
import MergeSort from "../MergeSort";
import HeapSort from "../HeapSort";
import QuickSort from "../QuickSort";
import CountingSort from "../CountingSort";

describe("sorting algorithms", () => {
  const assorted: Array<number> = [-3, -1, 2, 4, -5, 0, 7, -2];
  const sorted: Array<number> = [-5, -3, -2, -1, 0, 2, 4, 7];

  it("selection sort works", () => {
    expect(SelectionSort.sort(assorted)).toEqual(sorted);
  });

  it("bubble sort works", () => {
    expect(BubbleSort.sort(assorted)).toEqual(sorted);
  });

  it("insertion sort works", () => {
    expect(InsertionSort.sort(assorted)).toEqual(sorted);
  });

  it("merge sort works", () => {
    expect(MergeSort.sort(assorted)).toEqual(sorted);
  });

  it("heap sort works", () => {
    expect(HeapSort.sort(assorted)).toEqual(sorted);
  });

  it("quick sort works", () => {
    expect(QuickSort.sort(assorted)).toEqual(sorted);
  });

  it("counting sort works", () => {
    const assorted: Array<number> = [38, 27, 43, 3, 9, 82, 10];
    const sorted: Array<number> = [3, 9, 10, 27, 38, 43, 82];
    expect(CountingSort.sort(assorted)).toEqual(sorted);
  });

  it("counting sort doesn't work on negative numbers", () => {
    expect(() => {
      CountingSort.sort(assorted);
    }).toThrowError("error(negative numbers in array)");
  });
});
