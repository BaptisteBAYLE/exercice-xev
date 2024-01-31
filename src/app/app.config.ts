import { ApplicationConfig, NgModule, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environment/environment';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"exercice-recrutement-xev",
                                                                "appId":"1:260297001297:web:c556de93dc28173be72b70",
                                                                "storageBucket":"exercice-recrutement-xev.appspot.com",
                                                                "apiKey":"AIzaSyCoM5Cfe0HuZoFxUmuu8wapZqTOu4kU_FI",
                                                                "authDomain":"exercice-recrutement-xev.firebaseapp.com",
                                                                "messagingSenderId":"260297001297",
                                                                "measurementId":"G-081W8NC4Q5"}))), 
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideAnalytics(() => getAnalytics())), 
    ScreenTrackingService, 
    UserTrackingService, 
  //importProvidersFrom(provideAppCheck(() => {
  // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
  //const provider = new ReCaptchaEnterpriseProvider(/* reCAPTCHA Enterprise site key */);
  //return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
//})),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideDatabase(() => getDatabase())), 
    importProvidersFrom(provideFunctions(() => getFunctions())), 
    importProvidersFrom(provideMessaging(() => getMessaging())), 
    importProvidersFrom(providePerformance(() => getPerformance())), 
    importProvidersFrom(provideStorage(() => getStorage())), 
    importProvidersFrom(provideRemoteConfig(() => getRemoteConfig()))]
};
