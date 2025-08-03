import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.css'
})
export class TreeNodeComponent {
  @Input() heapArray: number[] = [];
  @Input() index: number = 0;

  get leftIndex(): number {
    return 2 * this.index + 1;
  }

  get rightIndex(): number {
    return 2 * this.index + 2;
  }

  get hasLeft(): boolean {
    return this.leftIndex < this.heapArray.length;
  }

  get hasRight(): boolean {
    return this.rightIndex < this.heapArray.length;
  }
}
