import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonGrid,IonRow,IonCard,IonCol,IonCardTitle, IonCardHeader,IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonGrid,IonRow,IonCard,IonCol,IonCardTitle,IonCardHeader,IonImg]
})
export class CategoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
