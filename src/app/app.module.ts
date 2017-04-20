import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MovieListPage } from '../pages/movie-list/movie-list';
import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { MovieService } from '../pages/service/movie-service';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ParseService } from "../services/parse.service";
import { AuthService } from "../services/auth.service";
import { ProfilePage } from '../pages/profile/profile';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    ProfilePage,
    MovieListPage,
	MovieInfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MovieListPage,
    LoginPage,
    ProfilePage,
    RegisterPage,
	MovieInfoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},  AuthService,
    ParseService ]
})
export class AppModule {}
