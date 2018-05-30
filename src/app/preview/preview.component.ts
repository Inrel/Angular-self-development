import { Component, OnInit } from '@angular/core';
import { PersonalInformationService } from "../personal-information.service";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  valueInfo: any = null;

  constructor(private previewDataService: PersonalInformationService) { }


  ngOnInit() {
    this.valueInfo = this.previewDataService.getPersonalInformation();
  }

}
