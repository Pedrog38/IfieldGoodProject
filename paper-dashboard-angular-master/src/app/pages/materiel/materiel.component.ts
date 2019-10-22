import { Component,  OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MaterielService } from 'app/services/materiel.service';


@Component({
  selector: 'materiel-cmp',
  moduleId: module.id,
  templateUrl: 'materiel.component.html',
})

export class MaterielComponent implements OnInit{
  
  public matForm;
  public listMateriel;
  
  
constructor(private matService: MaterielService , private form: FormBuilder) {
  
  this.matForm = this.form.group({
    marque: '',
    modele: '',
    categorie: '', 
    gaec: '',
    urlImage:'',
  })
}
  
ngOnInit() {
  this.matService.getMateriel().then(
    (res:any)=> {this.listMateriel = res;}
  );
}

onSubmit(data) {
  this.matService.postMateriel(data).then(
    (rep:any)=> {this.listMateriel.push(rep);});
  this.matForm.reset();
}

}
