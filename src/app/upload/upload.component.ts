import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private auth: AuthService, private http: HttpClient) { }

  fileName='';
  fileContent:any[] = [];


  ngOnInit(): void {
    this.auth.canAccess()
  }

  onSelectedFile(event:any){
    // console.log(event)
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.fileName = file.name;
    if(file.type == 'image/txt'){

      const formData = new FormData();
      formData.append('file', file);
      // this.http.post('url', formData).subscribe((res:any) => {
      //  console.log(res);
      // });
    } else {
      alert('Please select only text file');
     }
    }
  }

}