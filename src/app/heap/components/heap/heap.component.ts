import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArrayViewComponent } from '../../visualizer/array-view/array-view.component';
import { TreeViewComponent } from '../../visualizer/tree-view/tree-view.component';
import { HeapService } from '../../heap.service';
import { TreeNodeComponent } from "../tree-node/tree-node.component";
@Component({
  selector: 'app-heap',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ArrayViewComponent,
    TreeViewComponent,
    TreeNodeComponent
],
  templateUrl: './heap.component.html',
  styleUrl: './heap.component.css'
})
export class HeapComponent {
  valueToInsert!: number ;
  constructor(private heapService: HeapService) { }

  insertValue() {
    if (!isNaN(this.valueToInsert)) {
      this.heapService.insert(this.valueToInsert)
      this.valueToInsert = 0;
    }
  }

  extractValue() {
    this.heapService.extract();
  }

  resetHeap() {
    this.heapService.reset();
  }

  get heapArray() {
    return this.heapService.heapArray();
  }

  get currentIndex(){
    return this.heapService.currentIndex();
  }

  get compareIndices(){
    return this.heapService.compareIndices();
  }
}
