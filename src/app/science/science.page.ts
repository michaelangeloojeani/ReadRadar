import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonGrid,IonRow,IonCard,IonCol,IonCardTitle, IonCardHeader,IonImg,IonCardContent,IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-science',
  templateUrl: './science.page.html',
  styleUrls: ['./science.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonGrid,IonRow,IonCard,IonCol,IonCardTitle, IonCardHeader,IonImg,IonCardContent,IonCardSubtitle]
})
export class SciencePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
