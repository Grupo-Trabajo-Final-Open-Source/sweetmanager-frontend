import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-workers-management',
  standalone: true,
    imports: [
        TranslateModule
    ],
  templateUrl: './workers-management.component.html',
  styleUrl: './workers-management.component.css'
})
export class WorkersManagementComponent {

}
