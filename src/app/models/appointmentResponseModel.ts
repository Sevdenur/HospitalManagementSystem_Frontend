import { Appointment } from "./appointment";
import { ResponseModel } from "./responseModel";

export interface AppointmentResponseModel extends ResponseModel{
    data:Appointment[]
}