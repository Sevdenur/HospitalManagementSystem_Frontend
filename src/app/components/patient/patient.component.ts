import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients:Patient[];
  patient:Patient; 
  currentPatient:Patient;
  dataLoaded=false;

  constructor(private patientService:PatientService, private activatedRoute:ActivatedRoute, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientService.getAllPatients().subscribe(response=>{
      this.patients=response.data
      this.dataLoaded=true
    })
  }

  getPatientsById(id:number) {
    this.patientService.getPatientById(id).subscribe(response=>{
      this.patient=response.data
      this.dataLoaded=true
    })
  }

  deletePatient(patient:Patient){
    this.patientService.deletePatient(patient).subscribe(response=>{
      this.getAllPatients();
      this.toastr.error("Patient deleted from system!")
    })
  }
}
