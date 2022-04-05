import prompt from "prompt";

import { countFridayAnniversaries } from "./functions";

prompt.start();
prompt.get(
  [
    {
      name: "birthday",
      type: "string",
      description: "birthday(dd.mm.yyyy)",
      message: "dd.mm.yyyy",
      pattern:
        /(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/,

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
