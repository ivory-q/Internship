export default function ISOtoDateString(ISODate: string): string {
  const D = new Date(ISODate);
  const DateString = `${D.getMonth() + 1}.${D.getDate()}.${D.getFullYear()}`;

  return DateString;
}
