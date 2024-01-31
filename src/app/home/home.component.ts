import { Component, inject } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LibraryService } from '../library.service';
import { RouterModule, Router } from '@angular/router';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookComponent, CommonModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
  
  <section class="app-home">
    <app-book *ngFor='let book of listOfBook$ | async' [book]="book"></app-book>
  </section>
  <a [routerLink]="['/new-book']">
    <button mat-fab class="add" >
      <mat-icon>add</mat-icon>
    </button>
  </a>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listOfBook$: Observable<Book[]>;
  
  
  

  constructor(private router: Router, private library: LibraryService) {
    // Si il n'y a pas d'utilisateur connecté, on redirige vers la page de connexion
    if (!(this.library.isUserSignIn())) {
      router.navigate(['/authentification'])
    }

    this.listOfBook$ = this.library.getAllBooks();

  }
}
