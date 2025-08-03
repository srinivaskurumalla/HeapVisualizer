import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeapService {

  constructor() { }

  // Core data
  private _heap = signal<number[]>([]);
  private _currentIndex = signal<number | null>(null);
  private _compareIndices = signal<[number, number] | null>(null);


  // Expose signals for components
  readonly heapArray = this._heap.asReadonly();
  readonly currentIndex = this._currentIndex.asReadonly();
  readonly compareIndices = this._compareIndices.asReadonly();

  private getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }
  private getLeftIndex(i: number) {
    return Math.floor((2 * i) + 1);
  }
  private getRightIndex(i: number) {
    return Math.floor((2 * i) + 2);
  }
  //insert value and apply heapifyUp
  async insert(val: number) {
    const arr = [...this._heap()];
    arr.push(val);
    this._heap.set(arr)

    this.heapifyUp(arr.length - 1);
  }

  private async heapifyUp(index: number) {
    let arr = [...this._heap()];
    let curr = index;

    while (curr > 0) {
      let parent = this.getParentIndex(curr);

      this._currentIndex.set(curr);
      this._compareIndices.set([parent, curr])

      await this.delay();
      //swap if parent > child
      if (arr[parent] > arr[curr]) {
        [arr[parent], arr[curr]] = [arr[curr], arr[parent]];

        this._heap.set([...arr]);
        curr = parent;
      }
      else {
        break;
      }
    }
    this._currentIndex.set(null);
    this._compareIndices.set(null);
  }

  async extract(): Promise<number | null> {
    debugger
    const arr = [...this._heap()];
    if (!arr.length) return null;

    const root = arr[0];
    //swap first and last

    const last = arr.pop();

    if (arr.length > 0 && last != undefined) {
      arr[0] = last;
      this._heap.set(arr);

      this.heapifyDown(0);
    }
    else {
      this._heap.set([])
    }


    return root;
  }
  private async heapifyDown(index: number) {
    const arr = [...this._heap()];
    let curr = index;

    while (true) {
      let left = this.getLeftIndex(curr);
      let right = this.getRightIndex(curr);

      let smallest = curr;

      if (left < arr.length && arr[left] < arr[smallest]) {
        smallest = left;
      }

      if (right < arr.length && arr[right] < arr[smallest]) {
        smallest = right;
      }

      this._currentIndex.set(curr);
      this._compareIndices.set([curr, smallest]);

      if (smallest !== curr) {
        //swap
        await this.delay();
        [arr[smallest], arr[curr]] = [arr[curr], arr[smallest]]

        this._heap.set([...arr]);
        curr = smallest;
      }
      else break;
    }
    this._currentIndex.set(null);
    this._compareIndices.set(null);
  }

  reset() {
    this._heap.set([]);
    this._currentIndex.set(-1);
    this._compareIndices.set(null);
  }

  private delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

}
