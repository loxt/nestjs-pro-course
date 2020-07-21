interface ElementChecker {
  <T>(items: T[], toBeChecked: T, atIndex: number): boolean;
}

function checkElementAt<T>(
  items: T[],
  toBeChecked: T,
  atIndex: number
): boolean {
  return items[atIndex] == toBeChecked;
}

let checker: ElementChecker = checkElementAt;
let items = [1, 3, 5, 7];
let b: boolean = checker<number>(items, 5, 1);
console.log(b);

let b2: boolean = checker<number>(items, 5, 2);
console.log(b2);

// Interfaces describing indexables
interface States<R> {
  [state: string]: R;
}

let s: States<boolean> = { enabled: true, maximized: false};
console.log(s);
console.log(s['maximized']);
