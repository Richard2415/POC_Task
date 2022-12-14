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

  ngOnInit(): void {
    this.auth.canAccess()
  }

  onSelectedFile(event:any){
    // debugger;
    console.log(event.target.files)
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.fileName = file.name;

      if(file.type == 'text/csv'){
      const formData = new FormData();
      formData.append('file', file);

      //Upload API is added
      this.http.post('http://127.0.0.1:5000/upload', formData).subscribe((res:any) => {
       console.log(`File is uploaded ${res}`);
      });
      }
    }
  }

}
