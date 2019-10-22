import { Component, OnInit } from '@angular/core';
import { GaecService } from 'app/services/gaec.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gaec',
  moduleId: module.id,
  templateUrl: './gaec.component.html',
  styleUrls: ['./gaec.component.scss']
})
export class GaecComponent implements OnInit {

  public gaecForm;

  constructor(
    /* public gaecService :GaecService,
    public formBuilder :FormBuilder */
  ) { }

  ngOnInit() {
    //this.gaecForm = this.formBuilder.group({})
  }

}
