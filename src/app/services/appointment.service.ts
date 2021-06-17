import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import { AppointmentResponseModel } from '../models/appointmentResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  apiUrl='http://localhost:35163/api/'
  constructor(private httpClient:HttpClient) { }

  getAllAppointments(): Observable<ListResponseModel<Appointment>>{
    let newPath=this.apiUrl + "appointments/getappointmentdetails"
    return this.httpClient.get<ListResponseModel<Appointment>>(newPath)
  }

  getAppointmentById(id:number):Observable<SingleResponseModel<Appointment>>{
    let newPath=this.apiUrl +  "appointments/getbyid?id=" + id
    return this.httpClient.get<SingleResponseModel<Appointment>>(newPath)
  }

  addAppointment(apoointment:Appointment):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"appointments/add", apoointment)
  }

  deleteAppointment(apoointment:Appointment):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "appointments/delete", apoointment)
  }

  deleteAppointmentId(id:number):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "appointments/deleteID", id)
  }

  updateAppointment(apoointment:Appointment):Observable<ResponseModel> {   
    return this.httpClient.post<ResponseModel>(this.apiUrl + "appointments/update", apoointment)
  }
}
