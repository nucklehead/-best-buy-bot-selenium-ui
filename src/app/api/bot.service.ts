import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BotService {
  public bots = [
    {
      name: 'First bot',
      itemLink: 'https//test.com',
      autoLogin: true,
      accounts: [
        0
      ],
      autoCheckout: true,
      payments: [0],
      quantity: 2,
      buyAsMuchAsPossible: true,
      startLater: true,
      startDate: '04/09/2022 06:45 PM'
    }
  ]

  public accounts = [
    {
      username: 'that_bot@gmail.com',
      password: 'aljsdasldjasdalj'
    }
  ]

  public payments = [
    {
      card: 'Visa ...1234',
    },
    {
      card: 'Visa ...5678',
    },
    {
      card: 'MasterCard ...9100',
    }
  ]

  constructor() { }

  addBot(bot: any): void {
    this.bots.push(bot);
  }
}
