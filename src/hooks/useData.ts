import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";


export interface UsedPlate {
    weight: number, 
    count: number
}
export interface Plate {
    weight: number, 
    count: number
}
export interface Set {
    total_weight: number, 
    plate_weight: number, 
    percentage: number, 
    count: number, 
    plates: Plate[]
}


export interface FetchResponse{
    used_plates: UsedPlate[]
    sets: Set[]
}



const useData = (endpoint: string, postData: {}, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    
    const [data, setData] = useState<FetchResponse>();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading]  = useState(false);  

    useEffect(() => {

      const controller = new AbortController()
      setIsLoading(true)
      apiClient
        .post<FetchResponse>(endpoint, postData, {signal: controller.signal, ...requestConfig})
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return; 
            setError(err.message);
            setIsLoading(false)
        });
      return () => controller.abort();
    // cant spread an optional array if empty.  if empty, return empty array
    }, deps ? [...deps] : []);

    return {data, error, isLoading};
};

export default useData;