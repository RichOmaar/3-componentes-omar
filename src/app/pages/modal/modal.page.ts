import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  opinion: Observable<any>;

  constructor( private modalController: ModalController, private dataService: DataService ) { }

  ngOnInit() {
    this.opinion = this.dataService.getOpinion();
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'nombre': 'Douglas',
        'apellido': 'Adams',
        'pais': 'Mexico'
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log('Retorno del modal', data);
  }

}
