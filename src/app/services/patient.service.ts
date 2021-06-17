import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PatientResponseModel } from '../models/patientResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { Patient } from '../models/patient';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  apiUrl='http://localhost:35163/api/'
  constructor(private httpClient:HttpClient) { }

  getAllPatients(): Observable<ListResponseModel<Patient>>{
    let newPath=this.apiUrl + "patients/getall"
    return this.httpClient.get<ListResponseModel<Patient>>(newPath)
  }

  getPatientById(id:number):Observable<SingleResponseModel<Patient>>{
    let newPath=this.apiUrl +  "patients/getbyid?id=" + id
    return this.httpClient.get<SingleResponseModel<Patient>>(newPath)
  }

  addPatient(patient:Patient):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"patients/add", patient)
  }

  deletePatient(patient:Patient):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "patients/delete", patient)
  }

  updatePatient(patient:Patient):Observable<ResponseModel> {   
    return this.httpClient.post<ResponseModel>(this.apiUrl + "patients/update", patient)
  }

}
