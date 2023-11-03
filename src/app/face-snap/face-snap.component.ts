import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;
  userSnapped!: boolean;

  ngOnInit(){
    this.buttonText = "Oh Snap !";
    this.userSnapped = false;
  }

  onSnap(){
    if(!this.userSnapped){
      this.faceSnap.snaps++;
      this.userSnapped = true;
      this.buttonText = "Snapped";
    }
    else{
      this.faceSnap.snaps--;
      this.userSnapped = false;
      this.buttonText = "Oh Snap !";
    }
  }
}
