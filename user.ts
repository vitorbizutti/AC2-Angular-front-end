import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [];

  constructor() { }

  getUsers() {
    // Implementar lógica
  }

  editUser(userId, userData) {
    // Implementar lógica
  }

  deleteUser(userId) {
    // Implementar lógica
  }

  addUser(userData) {
    // Implementar lógica
  }
}
