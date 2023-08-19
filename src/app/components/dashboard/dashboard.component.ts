// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { TaskDataService } from 'src/app/services/taskdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: any[] = [];
  filteredTasks: any[] = []; // Store the filtered tasks
  filterValue: string = 'all'; // Default filter value

  constructor(private taskDataService: TaskDataService) { }

  ngOnInit() {

    this.fetchTasks();
  }

  fetchTasks() {
    this.taskDataService.getAllTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.applyFilter();
    });
   
  }

  deleteTask(taskId: string) {
    this.taskDataService.deleteTask(taskId).subscribe(() => {
      this.fetchTasks();
      alert('Task Deleted');

    });
  }

  updateTaskStatus(task: any) {
    if (task.status !== 'completed') {
      task.status = 'completed';
    this.taskDataService.updateTask(task).subscribe(() => {
      this.fetchTasks();
      alert('Task updated Successfully')
    });
  }
}

applyFilter() {
  if (this.filterValue === 'completed') {
    this.filteredTasks = this.tasks.filter(task => task.status === 'completed');
  } else if (this.filterValue === 'incomplete') {
    this.filteredTasks = this.tasks.filter(task => task.status !== 'completed');
  } else {
    this.filteredTasks = this.tasks;
  }
}
}
