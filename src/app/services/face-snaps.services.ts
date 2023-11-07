import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService{
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 2,
          location: "Roubaix"
        },
        {
          id: 2,
          title: 'Titouan',
          description: 'Posey devant mon marais',
          imageUrl: 'https://i.f1g.fr/media/figaro/1200x630_crop/2018/11/07/XVMc710a612-e26b-11e8-83d1-fc7ebc69ae48.jpg',
          createdDate: new Date(),
          snaps: 320,
          location: "MON MARAIS"
        }
    ]

    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }

    getFaceSnapByID(faceSnapID: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(el => el.id === faceSnapID);
        if(!faceSnap){
            throw new Error("FaceSmap not found");
        }
        else{
            return faceSnap;
        }
    }

    snapFaceSnapByID(faceSnapID: number, snapType: 'snap' | 'unsnap'){
        const faceSnap = this.getFaceSnapByID(faceSnapID);
        snapType == 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}