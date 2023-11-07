import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  buttonText!: string;
  userSnapped!: boolean;

  constructor(private faceSnapsServices: FaceSnapsService, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.buttonText = "Oh Snap !";
    this.userSnapped = false;

    const faceSnapID = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsServices.getFaceSnapByID(faceSnapID);
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
}
