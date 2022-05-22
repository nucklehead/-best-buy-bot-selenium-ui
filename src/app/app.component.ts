import { Component } from '@angular/core';
import {BotService} from "./api/bot.service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Add Bot', url: '/folder/0', icon: 'add' },
  ];

  public labels = [/*'Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'*/];
  constructor(private botService: BotService) {
    for (let index = 0; index < botService.bots.length; index++) {
      this.appPages.push(
        // { title: `Bot ${index}`, url: '/folder/Inbox', icon: 'extension-puzzle' }
      { title: botService.bots[index].name, url: `/folder/${botService.bots[index].name}`, icon: 'train' }

    );
    }
  }
}
