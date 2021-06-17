import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';
import { DoctorResponseModel } from '../models/doctorResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
//import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  apiUrl='http://localhost:35163/api/'
  constructor(private httpClient:HttpClient) { }

  getAllDoctors(): Observable<ListResponseModel<Doctor>>{
    let newPath=this.apiUrl + "doctors/getall"
    return this.httpClient.get<ListResponseModel<Doctor>>(newPath)
  }

  getDoctorById(id:number):Observable<SingleResponseModel<Doctor>>{
    let newPath=this.apiUrl +  "doctors/getbyid?id=" + id
    return this.httpClient.get<SingleResponseModel<Doctor>>(newPath)
  }

  addDoctor(doctor:Doctor):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"doctors/add", doctor)
  }

  deleteDoctor(doctor:Doctor):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "doctors/delete", doctor)
  }
 
  updateDoctor(doctor:Doctor):Observable<ResponseModel> {   
    return this.httpClient.post<ResponseModel>(this.apiUrl + "doctors/update", doctor)
  }

}


