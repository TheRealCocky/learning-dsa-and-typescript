#!/usr/bin/env bash
set -euo pipefail

# --- Repo meta ---
AUTHOR_NAME="Euclides Baltazar"
REPO_NAME="typescript-learning-lab"
DESCRIPTION="A curated TypeScript learning repo covering OOP and DSA with real, runnable code."

# --- Folders ---
mkdir -p assets/images
mkdir -p src/{playground,dsa/{arrays,linked-list,stack,queue,tree,graph},algorithms/{sorting,searching},oop/{basics,solid,design-patterns}}
mkdir -p tests

# --- Placeholder images (you should replace these with your own) ---
# Add any banner/screenshot files into assets/images and keep these names for README
: > assets/images/banner.png
: > assets/images/screenshot-dsa.png
: > assets/images/screenshot-oop.png

# --- package.json ---
cat > package.json <<'JSON'
{
  "name": "typescript-learning-lab",
  "version": "1.0.0",
  "private": true,
  "description": "A curated TypeScript learning repo covering OOP and DSA with real, runnable code.",
  "type": "module",
  "scripts": {
    "dev": "tsx src/playground/index.ts",
    "build": "tsc -p tsconfig.json",
    "start": "node dist/playground/index.js",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "devDependencies": {
    "@types/node": "^22.7.4",
    "tsx": "^4.19.1",
    "typescript": "^5.6.3",
    "vitest": "^2.0.5"
  }
}
JSON

# --- tsconfig.json ---
cat > tsconfig.json <<'JSON'
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "moduleResolution": "bundler",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "noImplicitAny": true,
    "exactOptionalPropertyTypes": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src", "tests"]
}
JSON

# --- Playground entry ---
cat > src/playground/index.ts <<'TS'
import { DoublyLinkedList } from "../dsa/linked-list/DoublyLinkedList";
import { quickSort } from "../algorithms/sorting/quickSort";
import { Dog } from "../oop/basics/Animal";

// DSA demo
const list = new DoublyLinkedList<number>();
[10, 20, 30, 40, 50].forEach(n => list.push(n));
list.insertAt(3, 999);
list.deleteAt(1);
console.log("DLL Forward:", list.toArray());
console.log("DLL Reverse:", list.toReverseArray());

// Algorithm demo
const arr = [5, 2, 9, 1, 5, 6];
console.log("QuickSort:", quickSort(arr));

// OOP demo
const rex = new Dog("Rex");
console.log(rex.speak());
TS

# --- DSA: Doubly Linked List (clean & tested structure) ---
cat > src/dsa/linked-list/DoublyLinkedList.ts <<'TS'
export class Node<T> {
  constructor(
    public value: T,
    public prev: Node<T> | null = null,
    public next: Node<T> | null = null
  ) {}
}

export class DoublyLinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private _size = 0;

  get size(): number {
    return this._size;
  }

  push(value: T): void {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      if (this.tail) this.tail.next = node;
      this.tail = node;
    }
    this._size++;
  }

  private getNodeAt(index: number): Node<T> | null {
    if (index < 0 || index >= this._size) return null;
    if (index <= this._size / 2) {
      let i = 0, curr = this.head;
      while (curr && i < index) { curr = curr.next; i++; }
      return curr;
    } else {
      let i = this._size - 1, curr = this.tail;
      while (curr && i > index) { curr = curr.prev; i--; }
      return curr;
    }
  }

  insertAt(index: number, value: T): boolean {
    if (index < 0 || index > this._size) return false;
    if (index === this._size) { this.push(value); return true; }
    const node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      if (this.head) this.head.prev = node;
      this.head = node;
      if (!this.tail) this.tail = node;
      this._size++;
      return true;
    }
    const prev = this.getNodeAt(index - 1);
    const curr = prev?.next ?? null;
    if (!prev) return false;
    node.prev = prev;
    node.next = curr;
    prev.next = node;
    if (curr) curr.prev = node;
    if (!node.next) this.tail = node;
    this._size++;
    return true;
  }

  deleteAt(index: number): T | null {
    const node = this.getNodeAt(index);
    if (!node) return null;
    if (node.prev) node.prev.next = node.next; else this.head = node.next;
    if (node.next) node.next.prev = node.prev; else this.tail = node.prev;
    this._size--;
    return node.value;
  }

  toArray(): T[] {
    const out: T[] = [];
    let curr = this.head;
    while (curr) { out.push(curr.value); curr = curr.next; }
    return out;
  }

  toReverseArray(): T[] {
    const out: T[] = [];
    let curr = this.tail;
    while (curr) { out.push(curr.value); curr = curr.prev; }
    return out;
  }
}
TS

# --- Algorithms: QuickSort ---
cat > src/algorithms/sorting/quickSort.ts <<'TS'
export function quickSort<T>(arr: T[], cmp: (a: T, b: T) => number = (a, b) => (a as any) - (b as any)): T[] {
  if (arr.length <= 1) return arr.slice();
  const pivot = arr[Math.floor(arr.length / 2)];
  const left: T[] = [], mid: T[] = [], right: T[] = [];
  for (const x of arr) {
    const c = cmp(x, pivot);
    if (c < 0) left.push(x);
    else if (c > 0) right.push(x);
    else mid.push(x);
  }
  return [...quickSort(left, cmp), ...mid, ...quickSort(right, cmp)];
}
TS

# --- OOP basics example ---
cat > src/oop/basics/Animal.ts <<'TS'
export abstract class Animal {
  constructor(protected name: string) {}
  abstract speak(): string;
}

export class Dog extends Animal {
  speak(): string {
    return `Dog ${this.name} says: Woof!`;
  }
}

export class Cat extends Animal {
  speak(): string {
    return `Cat ${this.name} says: Meow!`;
  }
}
TS

# --- Simple Vitest example ---
cat > tests/quickSort.test.ts <<'TS'
import { describe, it, expect } from "vitest";
import { quickSort } from "../src/algorithms/sorting/quickSort";

describe("quickSort", () => {
  it("sorts numbers", () => {
    expect(quickSort([3,1,2])).toEqual([1,2,3]);
  });
});
TS

# --- README.md ---
cat > README.md <<'MD'
<!-- Banner -->
<p align="center">
  <img src="assets/images/banner.png" alt="TypeScript Learning Lab Banner" width="840">
</p>

<h1 align="center">TypeScript Learning Lab</h1>
<p align="center">
  A curated, hands-on journey through <strong>TypeScript</strong>, <strong>OOP</strong>, and <strong>Data Structures & Algorithms</strong>.
</p>

<p align="center">
  <a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white"></a>
  <img alt="Node" src="https://img.shields.io/badge/Node-ES2020-339933?logo=node.js&logoColor=white">
  <img alt="Vitest" src="https://img.shields.io/badge/Vitest-2.x-6E9F18?logo=vitest&logoColor=white">
  <img alt="Status" src="https://img.shields.io/badge/Status-Active-success">
</p>

## Why this repo?
I’m advancing quickly in **TypeScript**, building on a solid JavaScript background. My focus areas:
- **OOP** (clean, maintainable, scalable code)
- **DSA** (linked lists, stacks, queues, trees, graphs)
- **Algorithms** (sorting/searching)
- Real-world readiness for **NestJS**, **Next.js**, **.NET**, with **MongoDB** and **PostgreSQL**

<p>
  <img src="assets/images/screenshot-dsa.png" alt="DSA Screenshot" width="420">
  <img src="assets/images/screenshot-oop.png" alt="OOP Screenshot" width="420">
</p>

## Quick Start
```bash
# 1) Install dependencies
npm install

# 2) Run the playground (TSX)
npm run dev

# 3) Run tests (Vitest)
npm test
