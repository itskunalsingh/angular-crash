import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {  Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder!: false;

  showAddTask!: boolean;
  subscription: Subscription;


  @Output() onAddTask = new EventEmitter();

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value)=> this.showAddTask = value);

  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);
  }

}
