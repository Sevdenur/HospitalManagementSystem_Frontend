import { Doctor } from "./doctor";
import { ResponseModel } from "./responseModel";

export interface DoctorResponseModel extends ResponseModel{
    data:Doctor[]
}