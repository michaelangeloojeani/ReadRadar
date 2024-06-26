import { Component } from '@angular/core';
import { IonApp, IonMenu, IonRouterOutlet, IonContent,IonMenuButton,IonButtons,IonTitle,IonToolbar,IonHeader,IonItem,IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,IonMenu,IonContent,IonMenuButton,IonButtons,IonTitle,IonToolbar,IonHeader,IonItem,IonLabel],
})
export class AppComponent {
  constructor() {}
}
