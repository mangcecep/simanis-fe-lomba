import axios from "axios";
import auth from "../../../services/auth.services"
import { useMutation } from "@tanstack/react-query";
import type { SchoolSaveError, SchoolSaveResponse } from "../../../types/auth.types";

export const useSchoolSaveReq = () => {
    return useMutation({
        mutationFn: auth.schoolSaveData,
        onSuccess: (response: SchoolSaveResponse) => {
            console.log(response)
        },
        onError: (error) => {
            if(axios.isAxiosError<SchoolSaveError>(error)){
                console.log(error.response?.data);
            }
        }
    })
}