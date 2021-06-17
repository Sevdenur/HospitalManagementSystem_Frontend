import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { NaviComponent } from './components/navi/navi.component';
import { PatientComponent } from './components/patient/patient.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:NaviComponent},
  {path:"patients", component:PatientComponent},
  {path:"patients/:id",component:PatientComponent},
  {path:"appointments", component:AppointmentComponent},
  {path:"doctors", component:DoctorComponent},
  {path:"add-patient", component:AddPatientComponent},
  {path:"add-doctor", component:AddDoctorComponent},
  {path:"add-appointment", component:AddAppointmentComponent},
  {path:"update-patient/:id", component:UpdatePatientComponent},
  {path:"update-doctor/:id", component:UpdateDoctorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
