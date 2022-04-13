import prompt from "prompt";

import { countFridayAnniversaries, isValidDate } from "./functions";

prompt.start();
prompt.get(
  [
    {
      name: "birthday",
      type: "string",
      description: "birthday(dd.mm.yyyy)",
      message: "dd.mm.yyyy",
      pattern: /^\d{2}\.\d{2}\.\d{4}$/,
      conform: (val) => {
        return isValidDate(val);
      },
      required: true,
    },
  ],
  (err, result) => {
    if (err) {
      console.log(err);
      return 1;
    }
    console.log("\nBirthday: " + result.birthday + "\n");
    const fridayAnniversaries = countFridayAnniversaries(
      result.birthday.toString()
    );
    console.log(
      "Average russian can celebrate",
      fridayAnniversaries,
      "anniversar(y|ies) on Friday in his lifetime if he was born in",
      result.birthday
    );
  }
);
