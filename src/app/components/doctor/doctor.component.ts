import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  updateDoctorForm: FormGroup
  doctors:Doctor[];
  doctor:Doctor;
  dataLoaded=false;
  constructor(private activatedRoute:ActivatedRoute, private doctorService:DoctorService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.doctorService.getAllDoctors().subscribe(response=>{
      this.doctors=response.data    
      this.dataLoaded=true
    })
  }

  deleteDoctor(doctor:Doctor){   
    this.doctorService.deleteDoctor(doctor).subscribe(response=>{
      this.getAllDoctors();
      this.toastr.error("Doctor deleted from system")
    })
  }

}
