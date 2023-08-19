import { Component } from '@angular/core';
import { TaskDataService } from 'src/app/services/taskdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddTaskComponent {
  task = {
    task: '',
    status: '', // Initialize with an empty status
  };

  constructor(private taskDataService: TaskDataService, private router: Router) {}

  addTask() {
    // Check if the task description is empty
    if (!this.task.task.trim() && !this.task.status.trim()) {
      // Show an alert if the description is empty
      alert('Please enter a valid task description');
      return; // Don't add the task if the description is empty
    }

    // Call the service to add the task
    this.taskDataService.addTask(this.task).subscribe(
      (response) => {
        // Handle success (e.g., show a success message)
        console.log('Task added successfully', response);
        alert('Task Added');
        this.router.navigate(['/dash']);

        // Clear the input fields
        this.task.task = '';
        this.task.status = '';
      },
      (error) => {
        // Handle error (e.g., show an error message)
        console.error('Error adding task', error);
      }
    );
  }
}
