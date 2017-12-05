import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objFeed = {
    titulo: "Feed",
    data: "05 de Dezembro",
    descricao: "Texto do post",
    likes: 10,
    comments: 1,
    timeAgo: "10h"
  }

  public listaFilmes = new Array<any>();

  public nomeUsuario:string = "Davi Ozolin";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider

  ) {
  }


  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=> {
        this.listaFilmes = data.results;
        console.log(this.listaFilmes);
      },
    error => {
      console.log(error);
      console.log("Erro no acesso à API");
    })
  }
}
