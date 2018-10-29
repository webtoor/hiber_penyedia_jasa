import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api'
import { LoginPage } from '../login/login'

/**
 * Generated class for the TawaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/* @IonicPage() */
@Component({
  selector: 'page-tawaran',
  templateUrl: 'tawaran.html',
})
export class TawaranPage {
  public userDetails : any;
  public responseData: any;
  public items : any;
  loading:any
  constructor(public loadingCtrl: LoadingController, public app: App, public navCtrl: NavController, public navParams: NavParams, public authService: RestApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TawaranPage');
  }

  getTawaran(){
    this.authService.getData('api/provider/tawaran_show/', this.userDetails['access_token']).then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      if(this.responseData['success'] == true){
        this.items = this.responseData['data'];
        this.loading.dismiss()
      }else{
        this.loading.dismiss()
        localStorage.clear();
        setTimeout(()=> this.backToWelcome(), 1000);  
      }
    }, (err) => {
      this.loading.dismiss()
    });
  }

  backToWelcome(){
    let nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
   }

   showLoader() {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'Loading..',
    });

    this.loading.present();
  }
}
