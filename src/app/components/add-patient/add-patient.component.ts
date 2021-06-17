import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  addPatientForm:FormGroup
  constructor(private activatedRoute:ActivatedRoute, 
    private formBuilder:FormBuilder,
    private patientService:PatientService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createPatientAddForm()
  }

  createPatientAddForm(){
    this.addPatientForm=this.formBuilder.group({
      firstName:[""],
      lastName:[""],
      tc_no:[""]
    })
  }

  addPatient(){
    if(this.addPatientForm.valid) {
      let patientModel = Object.assign({}, this.addPatientForm.value)
      this.patientService.addPatient(patientModel).subscribe(response=>{
        console.log(response)
        this.toastr.success("New patient added to the system")
      })
    }this.toastr.error("Operation Failed!")
  }

}
