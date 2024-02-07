import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateMeetingDto } from './models/createMeetingData';

@Injectable({
  providedIn: 'root',
})
export class CallService {
  // private twilioDevice: any;
  // private connection: any;
  token: any;
  headers: any;
  public callStatus$ = new BehaviorSubject<string>(''); // Observable to track call status

  constructor(private http: HttpClient) {}
  apiUrl = 'https://business-api.algorithms.ws/api/v1/zoom/';

  // getToken() {
  //   return this.http.post(this.apiUrl + `accessToken`, {});
  // }
  // getSignature() {
  //   return this.http.post(this.apiUrl + `sdkToken`, {});
  // }
  // createMeeting(reqBody: CreateMeetingDto) {
  //   this.headers = new HttpHeaders();
  //   this.headers = this.headers.set('Authorization', `Bearer ${this.token}`);
  //   return this.http.post(this.apiUrl + `createMeeting`, reqBody, {
  //     headers: this.headers,
  //   });
  // }



}
