import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { errorMonitor } from 'events';

import { RouterModule, Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [CommonModule,
          MatButtonModule,
          MatCardModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          MatInputModule,
          FormsModule,
          RouterModule],
  templateUrl: "./authentification.component.html",
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent {
  
  connexion: boolean = true; // La variable sert à diferencier la connexion de l'inscription

  logInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth: Auth, private router: Router, private library: LibraryService) {

    signOut(this.auth); // On se déconecte dans firebase
    this.library.setUser(''); // On se deconnecte coté application
  };

  switchConnexion() {
    this.connexion = !(this.connexion)
  }

  signIn() {
    const email = this.logInForm.value.email;
    const password = this.logInForm.value.password;
    console.log(email, password, this.logInForm)
    if (typeof email === 'string' && typeof password === 'string') {

      signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.library.setUser(user.uid);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
    }
  }

  signUp() {
    if (this.logInForm.valid) {

      const email = this.logInForm.value.email;
      const password = this.logInForm.value.password;
      console.log(email, password, this.logInForm)
      if (typeof email === 'string' && typeof password === 'string') {
  
        createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         
          this.router.navigate(['/']);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });

        signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.library.setUser(user.uid);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
      }

    }
    }

}
