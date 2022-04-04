export default class BinarySearch {
  public static search(needle: number, haystack: Array<number>): string {
    const sortedHaystack = haystack.sort(function (a: number, b: number) {
      return a - b;
    });

    let first = 0;
    let last = sortedHaystack.length - 1;

    while (first <= last) {
      let mid = Math.floor(first + (last - first) / 2);
      let candidate = sortedHaystack[mid];

      if (candidate == needle) {
        return needle + " Да";
      }

      if (candidate > needle) {
        last = mid - 1;
      } else if (candidate < needle) {
        first = mid + 1;
      }
    }
    return needle + " Нет";
  }
}
