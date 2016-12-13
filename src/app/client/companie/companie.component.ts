import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {CompanieService} from './companie.service';

@Component({
  selector: 'app-companie',
  templateUrl: 'companie.component.html',
  styleUrls: ['companie.component.css']
})

export class CompanieComponent implements OnInit {
  fetchedCompanies = [];
  test = "alanNON";

  constructor(private companieService: CompanieService) {
  }

  ngOnInit() {
    this.companieService.getCompanies()
      .subscribe(
        companies => {
      //    console.log(companies);
          this.fetchedCompanies =  companies
        },
        error => {
          console.log(error);
        }
      );
  }

  // onDelete(formId) {
  //   this.companieService.deleteForm(formId)
  //     .subscribe();
  // }

}
