import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items = Array(20);

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  onClick( valor: number ) {

    console.log('Item',valor);

    this.popoverController.dismiss({
      item: valor
    });
  }

}
