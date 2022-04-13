export function countFridayAnniversaries(birthday: string) {
  // Average russian lifespan
  const lifeSpan = 71;

  // Convert string to date
  let dateFragments: Array<number> = dateArrayFromString(birthday);

  let fridayCounter: number = 0;

  for (let i = 20; i < lifeSpan; i += 10) {
    // Cycle through anniversaries
    const date = new Date(
      dateFragments[2] + i,
      dateFragments[1] - 1,
      dateFragments[0]
    );

    // If Friday
    if (date.getDay() == 5) {
      fridayCounter++;
    }
  }

  return fridayCounter;
}

function dateArrayFromString(dateString: string): Array<number> {
  let dateArray = dateString
    .toString()
    .split(".")
    .map((elem) => {
      // Convert to number
      return +elem;
    });

  return dateArray;
}

export function isValidDate(dateString: string) {
  const [day, month, year] = dateString.split(".");
  const isoDateString = `${year}-${month}-${day}`;

  const date = new Date(isoDateString);
  const time = date.getTime();

  if (typeof time !== "number" || Number.isNaN(time)) {
    return false;
  }

  return date.toISOString().startsWith(isoDateString);
}
