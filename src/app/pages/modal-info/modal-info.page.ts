import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre;
  @Input() apellido;
  @Input() pais;

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }
  
  salirSin() {
    
    this.modalController.dismiss();
  
  }

  salirCon() {

    this.modalController.dismiss({
      nombre: 'Omar',
      apellido: 'Camacho',
      pais: 'España'
    });

  }

}
