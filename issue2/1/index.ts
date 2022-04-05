import prompt from "prompt";

import BinarySearch from "./BinarySearch";

prompt.start();

prompt.get(
  [
    { name: "haystack", type: "string", pattern: /-?\d+/, required: true },
    { name: "needle", type: "string", pattern: /-?\d+/, required: true },
  ],
  (err, result) => {
    if (err) {
      console.log(err);
      return 1;
    }
    console.log("\n  Haystack: " + result.haystack);
    console.log("  Needle: " + result.needle + "\n");

    let needle = [];
    let haystack = [];

    String(result.needle)
      .split(" ")
      .forEach((element) => {
        needle.push(+element);
      });

    String(result.haystack)
      .split(" ")
      .forEach((element) => {
        haystack.push(+element);
      });

    const searchResults = BinarySearch.search(needle, haystack);
    searchResults.forEach((result) => {
      console.log(result);
    });
  }
);
