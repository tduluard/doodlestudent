import { Component, Input } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.css']
})
export class KanbanColumnComponent {
  @Input() column: any;

  onDrop(event: CdkDragDrop<any[]>) {
    const previousIndex = this.column.tasks.findIndex(task => task === event.item.data);
    this.column.tasks.splice(previousIndex, 1);
    this.column.tasks.splice(event.currentIndex, 0, event.item.data);
  }
}
