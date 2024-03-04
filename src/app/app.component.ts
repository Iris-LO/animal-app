import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //attribut
  sections = [
    { title: 'Chien', description: 'Image de chien', image: 'image1.jpg', likes:0 },
    { title: 'Chat', description: 'Image de chat', image: 'image2.jpg', likes:0 },
    { title: 'Oiseau', description: 'Image d\'oiseau', image: 'image3.jpg', likes:0 },
  ];
}
