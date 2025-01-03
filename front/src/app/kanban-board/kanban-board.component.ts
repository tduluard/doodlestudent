import { Component } from '@angular/core';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent {
  columns = [
    { title: 'À faire', tasks: [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }] },
    { title: 'En cours', tasks: [{ id: 3, title: 'Task 3' }] },
    { title: 'Terminé', tasks: [{ id: 4, title: 'Task 4' }] }
  ];
}

