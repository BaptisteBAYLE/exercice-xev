import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LibraryService } from './library.service';

import { Auth, signOut } from '@angular/fire/auth';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
           HomeComponent,
           MatToolbarModule,
           RouterModule,
           MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'bibliotheque-perso';
  
  

  constructor(private router: Router, private auth: Auth, public library: LibraryService) {
  
    
   }

}
