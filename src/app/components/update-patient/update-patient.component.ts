import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  updatePatientForm=new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    tc_no: new FormControl('')
  })
  patient:Patient
  constructor(private activatedRoute:ActivatedRoute, 
    private formBuilder:FormBuilder,
    private patientService:PatientService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id']) {       
        this.createUpdatePatientForm(params['id'])
      }
    });
  }

  createUpdatePatientForm(id:number) {
    this.patientService.getPatientById(id).subscribe((response)=>{
      this.patient=response.data
      this.updatePatientForm.setValue({
        firstName:this.patient.firstName,
        lastName:this.patient.lastName,
        tc_no:this.patient.tc_no
      });
    });
  }

  updatePatient(){
    if(this.updatePatientForm.valid) {
      let patientModel = Object.assign({}, this.updatePatientForm.value)
      patientModel.id=this.patient.id
      this.patientService.updatePatient(patientModel).subscribe(response=>{
        console.log(response)
        this.toastr.success("Updated")
      });
    }this.toastr.error("Operation Failed")
  }

}
