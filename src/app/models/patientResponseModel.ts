import { Patient } from "./patient";
import { ResponseModel } from "./responseModel";

export interface PatientResponseModel extends ResponseModel{
    data:Patient[]
}