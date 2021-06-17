import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointments:Appointment[];
  appointment:Appointment;
  dataLoaded=false;
  constructor(private activatedRoute:ActivatedRoute, private appointmentService:AppointmentService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllAppointments()
  }

  getAllAppointments() {
    this.appointmentService.getAllAppointments().subscribe(response=>{
      this.appointments=response.data
      console.log(response)
      this.dataLoaded=true
    })
  }

  deleteAppointment(appointment:Appointment){
    console.warn(appointment)
    this.appointmentService.getAppointmentById(appointment.appointmentId).subscribe(response=>{
      this.appointment=response.data
      this.appointmentService.deleteAppointment(this.appointment).subscribe(response=>{
        this.getAllAppointments();
        this.toastr.error("Appointment deleted!")
      })
    })
  }

}
