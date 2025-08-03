import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TreeNodeComponent } from "../../components/tree-node/tree-node.component";

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [CommonModule, TreeNodeComponent],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.css'
})
export class TreeViewComponent {
  @Input() heapArray: number[] = [];
  @ViewChild('treeContainer', { static: true }) treeContainer!: ElementRef;
  svgLines: string[] = [];

  ngAfterViewInit() {
    // Can handle redrawing lines here when needed
  }

  onLineDrawn(lineSvg: string) {
    this.svgLines.push(lineSvg);
    const svg = this.treeContainer.nativeElement.querySelector('svg');
    svg.innerHTML = this.svgLines.join('\n');
  }
}

