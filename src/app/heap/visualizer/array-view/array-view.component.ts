import { CommonModule } from '@angular/common';
import { Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-array-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-view.component.html',
  styleUrl: './array-view.component.css'
})
export class ArrayViewComponent {
  @Input({ required: true }) heapArray!: number[]
  @Input() currIdx: number | null = null;
  @Input() compareIndices: [number, number] | null = null;
}
