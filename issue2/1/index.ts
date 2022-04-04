import prompt from "prompt";

import BinarySearch from "./BinarySearch";

prompt.start();

prompt.get(
  [
    { name: "haystack", type: "string", pattern: /-?\d+/, required: true },
    { name: "needle", type: "integer", required: true },
  ],
  (err, result) => {
    if (err) {
      console.log(err);
      return 1;
    }
    console.log("\n  Haystack: " + result.haystack);
    console.log("  Needle: " + result.needle);

    let needle = +result.needle;
    let haystack = [];

    String(result.haystack)
      .split(" ")
      .forEach((element) => {
        haystack.push(+element);
      });

    console.log("\n  Result: " + BinarySearch.search(needle, haystack) + "\n");
  }
);
