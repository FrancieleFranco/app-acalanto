import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageResponse } from '../models/messageResponse.model';
import { HttpClient } from '@angular/common/http';
import { DB_PATHS } from '../constants/api-paths';

@Injectable()
export class MessageService {
private apiUrl =  DB_PATHS.MESSAGES;
constructor(private http: HttpClient) {}

  getMessage(): Observable<{ messages: MessageResponse[]}> {
    return this.http.get<{ messages: MessageResponse[]}>(this.apiUrl);
  }
}
