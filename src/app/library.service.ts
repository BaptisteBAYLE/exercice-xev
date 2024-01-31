import { Injectable, inject } from '@angular/core';
import { Book } from './book';
import { CollectionReference, DocumentReference, Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  
  private user: String = '';
  bookCollection: CollectionReference;
  
  getAllBooks(): Observable<Book[]> {

    return collectionData(this.bookCollection) as Observable<Book[]>;
  }

  isUserSignIn(): boolean {
    if (this.user === '') {
      return false;
    } else {
      return true;
    }
  }

  setUser(user: String) {
    this.user = user;
    if (this.user != '') {
      this.bookCollection = collection(this.fireStore, `/Users/${this.user}/Library`);
    }
  }


  addBook(author: string, title: string, rating: number, comment: string): void {
    if (!(author && title)) return;
    const newBook: Book = {
      id: '0',
      author: author,
      title: title,
      rating: rating,
      comment: comment
    };

    addDoc(this.bookCollection, newBook).then((documentReference: DocumentReference) => {})
    
  }
  
  constructor(private fireStore : Firestore) { //private store: AngularFirestore,
    this.bookCollection = collection(this.fireStore, `Test`);
    
   }
}
