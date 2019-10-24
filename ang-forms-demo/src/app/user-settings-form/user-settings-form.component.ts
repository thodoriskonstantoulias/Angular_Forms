import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings : UserSettings = {
    name : null,
    emailOffers : null,
    interfaceStyle : null,
    subscriptionType : null,
    notes : null
  };
  postError  = false;
  postErrorMessage = '';
  subscriptionTypes : Observable<string[]>;

  constructor(private dataService : DataService) { }

  ngOnInit() {
     this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onBlur(field : NgModel){
    console.log("in onBlur", field.valid);
  }

  onHttpError(errorResonse : any){
     console.log("error : " , errorResonse);
     this.postError = true;
     this.postErrorMessage = errorResonse.error.errorMessage;
  }

  onSubmit(form : NgForm){
    console.log("in onSubmit " , form.valid);
    if (form.valid){
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success : ',result),
        error => this.onHttpError(error)
      );
    }
    else{
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors";
    }
    
  }

}
