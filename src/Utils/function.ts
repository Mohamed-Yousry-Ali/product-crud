/**
 *
 * @param txt
 * @param max
 * @returns
 */
export function txtSlicer(txt: string, max = 50) {
  if (txt.length >= max) return `${txt.slice(0, max)} ...`;
  return txt;
}
