import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {

  updateDoctorForm=new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })
  doctor:Doctor

  constructor(private activatedRoute:ActivatedRoute,
    private doctorService:DoctorService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService) { }


  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id']) {
        this.createUpdateDoctorForm(params['id']);
      }
    });
  }
 
  createUpdateDoctorForm(id:number) {
    this.doctorService.getDoctorById(id).subscribe((response)=>{
      this.doctor=response.data
      this.updateDoctorForm.setValue({
        firstName:this.doctor.firstName,
        lastName:this.doctor.lastName
      });
    });
  }

  updateDoctor(){
    if(this.updateDoctorForm.valid) {
      let doctorModel = Object.assign({}, this.updateDoctorForm.value)
      doctorModel.id=this.doctor.id
      this.doctorService.updateDoctor(doctorModel).subscribe(response=>{
        console.log(response)
        this.toastr.success("Updated")
      });
    }this.toastr.error("Operation Failed!")
  }
}
