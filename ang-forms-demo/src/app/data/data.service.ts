import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  postUserSettingsForm(userSettings : UserSettings) : Observable<any>{
    
    return this.http.post('https://putsreq.com/l0dMpeYpi9IdPUiJmB5s', userSettings);
    
  }

  getSubscriptionTypes() : Observable<string[]> {
    return of(['month', 'year', 'life']);
  }
}
