import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonGrid,IonRow,IonCard,IonCol,IonCardTitle, IonCardHeader,IonImg,IonCardContent,IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-action',
  templateUrl: './action.page.html',
  styleUrls: ['./action.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid,IonRow,IonCard,IonCol,IonCardTitle, IonCardHeader,IonImg,IonCardContent,IonCardSubtitle]
})
export class ActionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
