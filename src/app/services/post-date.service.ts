import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostDateService {
    date = new Date();
    getDate() {
        return this.date;
    }
}