import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  constructor( private toastController: ToastController ) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Holi',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

  onClick( ) {
    this.presentToast();
  }

}
