import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';

//firebase
import{environment} from '../environments/environment';
// import{AngularFireModule} from 'angularfire2';
// import{AngularFireDatabaseModule} from 'angularfire2/database';

//servicio book
// import {BookService} from './shared/services/book/book.service';
// import { BooksComponent } from './book/books.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // BooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule
  ],
  providers: [
      // BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
