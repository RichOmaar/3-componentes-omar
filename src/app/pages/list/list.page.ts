import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {

  usuarios: Observable<any>;

  constructor( private dataService: DataService,
               private toastController: ToastController) { }

    async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();

  }

  share(item){
    this.presentToast()
  }

}
