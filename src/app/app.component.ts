import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(){
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 2,
        location: "Roubaix"
      },
      {
        title: 'Titouan',
        description: 'Posey devant mon marais',
        imageUrl: 'https://i.f1g.fr/media/figaro/1200x630_crop/2018/11/07/XVMc710a612-e26b-11e8-83d1-fc7ebc69ae48.jpg',
        createdDate: new Date(),
        snaps: 320,
        location: "MON MARAIS"
      },
      {
        title: 'William Afton',
        description: 'Tavu ma pizzeria',
        imageUrl: 'https://img.nrj.fr/Vg-mCdqIFbY-8UTvTO9162dYRjU=/medias%2F2023%2F05%2Fxrxrhd2h11o2agtaolwitwlusz8ox5ve7goegtqpr3s_6464d9d9a53d7.jpg',
        createdDate: new Date(),
        snaps: 238,
        location: "Freddy Frazbear Pizza"
      },
    ]
  }
}
