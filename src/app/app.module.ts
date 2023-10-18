import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { VideosListComponent } from './Pages/videos-list/videos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VideosDetComponent } from './Detels/videos-det/videos-det.component';
import { HeaderComponent } from './Pages/header/header.component';
import { NgxNewstickerAlbeModule } from 'ngx-newsticker-albe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    VideosListComponent,
    VideosDetComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxNewstickerAlbeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
