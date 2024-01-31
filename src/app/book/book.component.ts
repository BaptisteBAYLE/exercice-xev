import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Book } from '../book';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() book!: Book;
}
