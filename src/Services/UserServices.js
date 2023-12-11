import axios from "axios";
import {BASE_URL} from './APIConstants'
import { getToken } from "../utils/TokenUtils";

export async function userLogin(credentials){
    const response = await axios.post(`${BASE_URL}/user/login`,credentials);
    return response.data;
}

export async function saveUser(userData){
    try {
        const response = await axios.post(`${BASE_URL}/user`,userData);        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchDetectiveForUser(){
    try {
        const response = await axios.get(`${BASE_URL}/detectivelist`,{headers:{'Authorization':`Bearer ${getToken()}`}});        
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export async function fetchCaseForUser(){
    try {
        const response = await axios.get(`${BASE_URL}/caselist`,{headers:{'Authorization':`Bearer ${getToken()}`}});                
        return response.data;
    } catch (error) {
        console.log(error);
    }
}