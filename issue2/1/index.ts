import prompt from "prompt";

import binarySearch from "./BinarySearch";

// Start user prompt in a terminal
prompt.start();

prompt.get(
  // Get haystack and needle arrays as strings where elements are divided by a comma from the user input
  [
    { name: "haystack", type: "string", pattern: /-?\d+/, required: true },
    { name: "needle", type: "string", pattern: /-?\d+/, required: true },
  ],
  (err, result) => {
    // If unexpected input(doesn't match pattern of type) log an error
    if (err) {
      console.log(err);
      return 1;
    }
    // Print back the user input
    console.log("\n  Haystack: " + result.haystack);
    console.log("  Needle: " + result.needle + "\n");

    // Empty arrays to fill with converted to number values from user input
    let needle = [];
    let haystack = [];

    // Convert strings from user input to arrays of numbers
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

    // Perform binary search on user defined arrays
    const searchResults = binarySearch(needle, haystack);
    searchResults.forEach((result) => {
      // Print the results of the search
      console.log(result);
    });
  }
);
