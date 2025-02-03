
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryservService } from '../../services/countryserv.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countrycomp',
  imports: [CommonModule, FormsModule],
  templateUrl: './countrycomp.component.html',
  styleUrls: ['./countrycomp.component.scss']
})
export class CountrycompComponent implements OnInit, OnDestroy {

  country: any[] = [];
  countryFound: boolean = false;
  name: string = '';  
  subscription: Subscription = new Subscription();
  loading: boolean = false;

  constructor(private countryserv: CountryservService) {}

  ngOnInit(): void {}

  onSearch(): void {
    if (this.name.trim() !== '') {
      this.getCountry(this.name);  
    }
  }

 
  getCountry(name: string): void {
    this.loading = true;
    this.countryFound = false; 

    this.countryserv.getCountry(name).subscribe({
      next: (country: any[]) => {
        if (country.length > 0) {
          this.country = country;
          this.countryFound = true;
        } else {
          this.countryFound = false; 
        }
        this.loading = false;
        console.log("API consultada correctamente");
      },
      error: (err) => {
        this.loading = false;
        this.countryFound = false; 
        console.error('Error al obtener el país:', err);
      }
    });
  }

  
  getLanguages(languages: any): string[] {
    return Object.values(languages);  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }
}
