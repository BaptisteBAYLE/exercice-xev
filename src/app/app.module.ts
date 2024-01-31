import { AngularFireModule } from '@angular/fire/compat';

import { NgModule } from '@angular/core';
import { environment } from '../environment/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
    // autres imports
  ],
  providers: [],
  // déclarations, providers, etc.
})
export class AppModule { }