import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';
import { Router } from '@angular/router'

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;
  userSnapped!: boolean;

  constructor(private faceSnapsServices: FaceSnapsService, private router: Router){

  }

  ngOnInit(){
    this.buttonText = "Oh Snap !";
    this.userSnapped = false;
  }

  onSnap(){
    if(!this.userSnapped){
      this.faceSnapsServices.snapFaceSnapByID(this.faceSnap.id, 'snap');
      this.userSnapped = true;
      this.buttonText = "Snapped";
    }
    else{
      this.faceSnapsServices.snapFaceSnapByID(this.faceSnap.id, 'unsnap');
      this.userSnapped = false;
      this.buttonText = "Oh Snap !";
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
  }
}
