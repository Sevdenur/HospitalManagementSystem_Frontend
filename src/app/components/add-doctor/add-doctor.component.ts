import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  addDoctorForm: FormGroup;
  constructor(private activatedRoute:ActivatedRoute,
    private doctorService:DoctorService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createDoctorAddForm();
  }

  createDoctorAddForm(){
    this.addDoctorForm=this.formBuilder.group({
      firstName:[""],
      lastName:[""]
    })
  }

  addDoctor(){
    if(this.addDoctorForm.valid) {
      let doctorModel = Object.assign({}, this.addDoctorForm.value)
      this.doctorService.addDoctor(doctorModel).subscribe(response=>{
        console.log(response)
        this.toastr.success("Doctor added to the system")
      })
    }this.toastr.error("Operation Failed!")
  }
}
