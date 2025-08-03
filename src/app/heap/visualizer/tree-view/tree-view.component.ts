import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.css'
})
export class TreeViewComponent {
  @Input({ required: true }) heapArray!: number[]
  @Input() currIdx: number | null = null;
  @Input() compareIndices: [number, number] | null = null;


  getLeftChildIndex(index: number) {
    return 2 * index + 1;
  }

  getRightChildIndex(index: number) {
    return 2 * index + 2;
  }
}
