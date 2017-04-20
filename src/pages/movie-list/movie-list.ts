import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from '../service/movie-service';
import { MovieInfoPage } from '../movie-info/movie-info';
import {Parse} from 'parse';
import {LoginPage} from "../login/login";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";
import { ProfilePage } from '../profile/profile'


@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html',
  providers: [MovieService]
})
export class MovieListPage {

	movies: Array<any>;
	user: User
	constructor(public navCtrl: NavController, private movieService: MovieService, private authSvc: AuthService) {
		this.user = this.authSvc.currentUser

		/*Parse.initialize('APPLICATION_ID');
		Parse.serverURL = 'http://localhost:1337/parse';

		//Create class testObjClass
		var testObjClass = new Parse.Object.extend('TestObject');

		//Create instance of testObjClass
		var testObj = new testObjClass();

		//Add data you want to save as a hush
		testObj.set('key1','val1');
		testObj.set('key2','val2');
		testObj.set('key3','val3');

		//Save object to DB
		testObj.save().then(
			function(obj) {
				console.log("'New object created with objectId: " + testObj.id);
			},
			function(err) {
				console.log('Failed to create new object, with error code:  + error.message');
			});*/

	}

	logout() {
		this.authSvc.logout()
            .subscribe( success => {
			})
		this.navCtrl.setRoot(LoginPage)
	}

	profile() {
		this.navCtrl.push(ProfilePage)
	}

	searchMovieDB(event, key) {
		console.log(event.target.value);
		if(event.target.value.length > 2) {
			this.movieService.searchMovies(event.target.value).subscribe(
				data => {
					this.movies = data.results; 
					console.log(data);
				},
				err => {
					console.log(err);
				},
				() => console.log('Movie Search Complete')
			);
		}
	}   
	
	itemTapped(event, movie) {
		this.navCtrl.push(MovieInfoPage, {
			movie: movie
		});
	}
}
