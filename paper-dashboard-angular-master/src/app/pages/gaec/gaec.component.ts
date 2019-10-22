import { Component, OnInit, HostListener } from '@angular/core';
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
  public listeGaec;

  constructor(
    public gaecService :GaecService,
    public formBuilder :FormBuilder
  ) { }

  ngOnInit() {
    this.gaecForm = this.formBuilder.group({
      nom: "",
      adresse: "",
      mail: ""
    });

    this.gaecService.getGaecList().then((res :any) => {
      this.listeGaec = res;
    });
  }

  onSubmit(data) {
    //this.gaecService.postGaec(data);
    this.gaecService.postGaec(data).then(
      (rep: any) => {this.listeGaec.push(rep);}
    );
    console.log(data);
    this.gaecForm.reset();
  }

}
