import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BotService} from "../api/bot.service";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public id: string;
  public addBot = false;
  public currentBot = {
    name: '',
    itemLink: '',
    autoLogin: true,
    accounts: [
      0
    ],
    autoCheckout: true,
    payments: [0],
    quantity: 1,
    buyAsMuchAsPossible: true,
    startLater: true,
    startDate: '04/09/2022 06:45 PM'
  }

  constructor(private activatedRoute: ActivatedRoute, private botService: BotService, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.addBot = this.id == '0';
  }

  addNewBot() {
    this.botService.addBot(this.currentBot);
    this.router.navigate([`folder/${this.currentBot.name}`]).then(
      () => {this.addBot = false}
    )
  }

  payments() {
    return this.botService.payments;
  }

  accounts() {
    return this.botService.accounts;
  }

  chosenAccounts() {
    return this.botService.accounts.filter( (a, i) => this.currentBot.accounts.includes(i))
      .map(a => a.username);
  }

  chosenPayments() {
    return this.botService.payments.filter( (a, i) => this.currentBot.payments.includes(i))
      .map(a => a.card);
  }
}
