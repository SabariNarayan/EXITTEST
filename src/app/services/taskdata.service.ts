// taskdata.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskDataService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Add a new task
  addTask(task: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/tasks`, task);
  }

  // Fetch all tasks
  getAllTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tasks`);
  }

  deleteTask(taskId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tasks/${taskId}`);
  }

  // Update a task
  updateTask(task: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/tasks/${task._id}`, task);
  }
}

