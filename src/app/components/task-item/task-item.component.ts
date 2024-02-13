import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task! : Task;
  @Output() onDeleteTask = new EventEmitter();
  @Output() onToggleReminder = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task: any){
    // console.log(task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any){
    this.onToggleReminder.emit(task);
  }

}
