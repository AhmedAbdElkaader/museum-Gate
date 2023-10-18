import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  getMussum(langId,count, CurrentPage) {
    return this.http.get(`${environment.baseUrl}/api/Museums/GetAllMuseums/${langId}?Count=${count}&CurrentPage=${CurrentPage}`)
  }

  getCulturalTreasureDet(langId,id) {
    return this.http.get(`${environment.baseUrl}/api/CulturalTreasure/GetCulturalTreasureDetails/${langId}/${id}`)
  }

  getNumbersUrl(ItemId){
    return this.http.get(`${environment.baseUrl}/api/CulturalTreasure/IncreaseReadNumber?ItemId=${ItemId}`)
  }
}
