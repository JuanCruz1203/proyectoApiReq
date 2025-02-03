import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountrycompComponent } from './components/countrycomp/countrycomp.component';
import { CountryservService } from './services/countryserv.service';
import { HeaderComponent } from './components/countrycomp/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CountrycompComponent, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'otrademoapi';
}
