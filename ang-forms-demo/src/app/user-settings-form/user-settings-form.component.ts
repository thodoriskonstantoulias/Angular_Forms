import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings : UserSettings = {
    name : "Ted",
    emailOffers : true,
    interfaceStyle : "dark",
    subscriptionType : "Annually",
    notes : "Here are some notes"
  };
  constructor() { }

  ngOnInit() {
  }

}
