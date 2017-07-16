import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AngularFireModule } from 'angularfire2';

import { MaterialModule } from '@angular/material';

import 'hammerjs';

//Views
import { LoginViewComponent } from './views/login-view/login-view.component';
import { SettingsViewComponent } from './views/settings-view/settings-view.component';
import { ManageListingsViewComponent } from './views/manage-listings-view/manage-listings-view.component';
import { IndividualListingViewComponent } from './views/individual-listing-view/individual-listing-view.component';
import { DirectoryViewComponent } from './views/directory-view/directory-view.component';
import { NavBarPartComponent } from './parts/nav-bar-part/nav-bar-part.component';
import { SignUpPartComponent } from './parts/sign-up-part/sign-up-part.component';

//Firebase Details
export const firebaseConfig = {
    apiKey: "AIzaSyDXdjt0kAV-k9WAUyXC-rMxFut9DygfSxU",
    authDomain: "where-beer.firebaseapp.com",
    databaseURL: "https://where-beer.firebaseio.com",
    storageBucket: "where-beer.appspot.com",
    messagingSenderId: "1025843505306"
};

//Routes
 const appRoutes : Routes = [
    { path:'', component: LoginViewComponent },
    { path:'login', component: LoginViewComponent },
    { path:'settings/:userId', component: SettingsViewComponent },
    { path:'view-listing/:listingId', component: IndividualListingViewComponent },
    { path:'directory', component: DirectoryViewComponent },
    { path:'manage-listings', component: ManageListingsViewComponent }
 ]

 //Angular Google Maps Api Key
 const agmApiKey : string = 'AIzaSyBbCQ4PCVQ4uaW8vJun8Dzl-mngcNGHReo'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    SettingsViewComponent,
    ManageListingsViewComponent,
    IndividualListingViewComponent,
    DirectoryViewComponent,
    NavBarPartComponent,
    SignUpPartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AgmCoreModule.forRoot({ apiKey: agmApiKey }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

