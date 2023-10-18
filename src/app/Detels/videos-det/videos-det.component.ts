import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { RestService } from 'src/app/Servic/rest.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-det',
  templateUrl: './videos-det.component.html',
  styleUrls: ['./videos-det.component.css']
})

export class VideosDetComponent implements OnInit {
  
  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;

  langId = '1'
  id

  constructor(
    public rest: RestService,
    private router: ActivatedRoute,
    private route :Router,
    private sanitizer: DomSanitizer
  ) { }


  ngOnInit() {
    let elment: HTMLElement = document.getElementById('myModala') as HTMLElement
    elment.click()
    
    this.router.params.subscribe(params => {
      this.id = params['id']; 
      
   });
  }



}
