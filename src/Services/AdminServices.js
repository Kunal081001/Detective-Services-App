import axios from "axios";
import {BASE_URL} from './APIConstants'
import { getToken } from "../utils/TokenUtils";

export async function adminLogin(credentials){
    const response = await axios.post(`${BASE_URL}/admin/login`,credentials);
    return response.data;
}



export async function saveDetective(detectiveData){
    try {
        const response = await axios.post(`${BASE_URL}/detectivelist`,detectiveData,{headers:{'Authorization':`Bearer ${getToken()}`}});        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveCase(caseData){
    try {
        const response = await axios.post(`${BASE_URL}/caselist`,caseData,{headers:{'Authorization':`Bearer ${getToken()}`}});        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchCase(){
    try {
        const response = await axios.get(`${BASE_URL}/caselist`,{headers:{'Authorization':`Bearer ${getToken()}`}});        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export async function deleteCase(id){
    try{
        const response = await axios.delete(`${BASE_URL}/caselist/${id}`,{headers:{'Authorization':`Bearer ${getToken()}`}});        
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}


export async function fetchCaseById(id){
    try{
        const response = await axios.get(`${BASE_URL}/caselist/${id}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data; 
    }
    catch(error){
        console.log(error);
    }
}

export async function updateCase(updatedData,id){
    try{
        const response = await axios.put(`${BASE_URL}/caselist/${id}`,updatedData,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data; 
    }
    catch(error){
        console.log(error);
    }
}

export async function deleteDetective(id){
    try{
        const response = await axios.delete(`${BASE_URL}/detectivelist/${id}`,{headers:{'Authorization':`Bearer ${getToken()}`}});        
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

export async function fetchDetective(){
    try {
        const response = await axios.get(`${BASE_URL}/detectivelist`,{headers:{'Authorization':`Bearer ${getToken()}`}});        
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchDetectiveById(id){
    try{
        const response = await axios.get(`${BASE_URL}/detectivelist/${id}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
        console.log(response);
        return response.data; 
    }
    catch(error){
        console.log(error);
    }
}

export async function updateDetective(updatedData,id){
    try{
        const response = await axios.put(`${BASE_URL}/detectivelist/${id}`,updatedData,{headers:{'Authorization':`Bearer ${getToken()}`}});
        return response.data; 
    }
    catch(error){
        console.log(error);
    }
}