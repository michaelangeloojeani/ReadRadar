import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonGrid,IonRow,IonCard,IonCol,IonCardTitle, IonCardHeader,IonImg,IonCardContent,IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.page.html',
  styleUrls: ['./romance.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonGrid,IonRow,IonCard,IonCol,IonCardTitle, IonCardHeader,IonImg,IonCardContent,IonCardSubtitle]
})
export class RomancePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
