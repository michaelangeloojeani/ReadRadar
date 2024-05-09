import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton,IonCard,IonLabel,IonItem} from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonCard,IonLabel,IonItem ],
})
export class HomePage {
  constructor() {}
}
