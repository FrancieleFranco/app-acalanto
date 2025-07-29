import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MessageResponse } from 'src/app/core/models/messageResponse.model';
import { MessageService } from 'src/app/core/service/message.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messages: MessageResponse[] = [];
   selectedMessage: MessageResponse | null = null;
  errorMessage = '';

  constructor(private messageService: MessageService) {}

 ngOnInit(): void {
    this.messageService.getMessage() .pipe(
      map(data => data.messages)
    )
    .subscribe({
      next: (messagesArray) => {
        this.messages = messagesArray;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  showRandomMessage(): void {
  if (this.messages.length > 0) {
    const index = Math.floor(Math.random() * this.messages.length);
    this.selectedMessage = this.messages[index];
  }
  console.log("clicou", this.messages)
  }
}
