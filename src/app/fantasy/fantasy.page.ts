import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonGrid,IonRow,IonCard,IonCol,IonCardTitle, IonCardHeader,IonImg,IonCardContent,IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.page.html',
  styleUrls: ['./fantasy.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonGrid,IonRow,IonCard,IonCol,IonCardTitle, IonCardHeader,IonImg,IonCardContent,IonCardSubtitle]
})
export class FantasyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
