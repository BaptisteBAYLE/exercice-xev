import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewBookComponent } from './new-book/new-book.component';
import { AuthentificationComponent } from './authentification/authentification.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'new-book',
        component: NewBookComponent,
        title: 'New book form'
    },
    {
        path: 'authentification',
        component: AuthentificationComponent,
        title: 'Authentification page'
    }
];
