import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from 'src/app/data/userInfo';

@Injectable({
  providedIn:'root'
})

export class RegisterServiceService {

  constructor(private http:HttpClient) { }

  postRegistrationForm(user: UserInfo): Observable<any> {

    return this.http.post('https://putsreq.com/3CQMMUPpgFMp17OAgasA',user);
  }
}
