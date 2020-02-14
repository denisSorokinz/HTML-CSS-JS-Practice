import { Component } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { ToDoItem } from '../../models/to-do-item';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  items: Observable<ToDoItem[]>;
  itemsList: AngularFireList<ToDoItem>;

  currentName = '';
  currentDescription = '';

  constructor(public db: AngularFireDatabase) {
    this.itemsList = this.db.list<ToDoItem>('tasks');
    this.items = this.getItems();
  }

  getItems(): Observable<ToDoItem[]> {
    const obj = this.itemsList.snapshotChanges().pipe(
      map(actions => actions.map(action => {
        const id = action.payload.val().id;
        const name = action.payload.val().name;
        const description = action.payload.val().description;
        return {id, name, description};
      }))
    );
    return obj;
  }

  onItemSubmit() {
    this.biggestId.subscribe({next: (id) => {
      if (this.currentName && this.currentDescription) {
        this.getItems().subscribe((v) => console.log(v));
        this.db.list<ToDoItem>(`tasks`).set(`task-${id + 1}`, {
          id: id + 1,
          name: this.currentName,
          description: this.currentDescription
        });
        this.currentName = this.currentDescription = '';
      }
    }});
  }

  onItemDelete(item: ToDoItem) {
    this.biggestId.subscribe({next: (id) => {
      this.itemsList.remove(`task-${id}`);
    }});
  }

  get biggestId(): Observable<number> {
    const obs = new Observable<number>(subscriber => {
      const subscription = this.getItems().subscribe({next: (items) => {
        let max = 0;
        items.forEach((item) => {
          max = item.id > max ? item.id : max;
        });
        subscriber.next(max);
        subscriber.complete();
      }});
    });
    return obs;
  }
}
