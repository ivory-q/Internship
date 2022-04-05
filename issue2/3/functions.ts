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

export function dateArrayFromString(dateString: string): Array<number> {
  let dateArray = dateString
    .toString()
    .split(".")
    .map((elem) => {
      // Convert to number
      return +elem;
    });

  return dateArray;
}
