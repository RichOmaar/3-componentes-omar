import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor( private loadingController: LoadingController) { }

  ngOnInit() {

    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);

    this.presentLoading('Espere');

  }

  async presentLoading(messge: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      //duration: 2000
    });
    return this.loading.present();
  }

}
