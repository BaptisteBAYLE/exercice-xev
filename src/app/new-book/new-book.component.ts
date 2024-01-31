import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LibraryService } from '../library.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-new-book',
  standalone: true,
  imports: [MatFormFieldModule,
            MatInputModule,
            FormsModule, 
            MatCardModule, 
            MatButtonModule, 
            MatIconModule, 
            ReactiveFormsModule, 
            RouterModule],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.css'
})
export class NewBookComponent {
  libraryService: LibraryService = inject(LibraryService);
  route: ActivatedRoute = inject(ActivatedRoute);

  newBookForm = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    rating: new FormControl(''),
    comment: new FormControl('')
  });

  constructor(private router: Router ) {  }

  addBook() {
    this.libraryService.addBook(
      this.newBookForm.value.author ?? '',
      this.newBookForm.value.title ?? '',
      Number(this.newBookForm.value.rating) ?? '',
      this.newBookForm.value.comment ?? '',
    )
    console.log(this.newBookForm.value);
    this.router.navigate(["/"]);
    
  }

}
