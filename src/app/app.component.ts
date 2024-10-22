import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ConfigService } from './config.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'setup-standalone';

  apiUrl: string = '';

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.loadConfig().then(() => {
      this.apiUrl = environment.apiUrl;
      console.log('API URL:', this.apiUrl);
    });
  }
}
