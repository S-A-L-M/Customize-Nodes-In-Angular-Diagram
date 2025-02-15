import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PaletteComponent } from "../shared/palette/palette.component";

@Component({
  selector: 'app-dashboard',
  imports: [SharedModule, PaletteComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
