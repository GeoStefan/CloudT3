import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  private imageUpload = 'http://127.0.0.1:8080/upload_photo';

  public postImage(image) {
    console.log('Uploading...');
    return this.http.post<any>(this.imageUpload, image, httpOptions).toPromise();
  }
}
