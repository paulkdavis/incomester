import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { IncomeDisplayerComponent } from './income-displayer/income-displayer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,
    HelloWorldComponent,
    IncomeDisplayerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Incomester';
}
