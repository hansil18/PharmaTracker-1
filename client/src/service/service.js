import axios from 'axios';

const url = 'http://localhost:5000/api';

export const authenticateSignup = async (user) => {
    try{
        return await axios.post(`${url}/signup`, user)
    }
    catch(error) {
        console.log('Error while calling signup api', error);
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user);
    }
    catch(error) {
        console.log('Error while calling login api', error);
    }
}

export const medicineAdder = async(medicine) => {
    try {
        return await axios.post(`${url}/medicine/add`, medicine);
    }
    catch(error) {
        console.log('Error while calling medicine adder api', error);
    }
}

export const medicineDelete = async(medicine) => {
    try {
        return await axios.post(`${url}/medicine/delete`, medicine);
    }
    catch(error) {
        console.log('Error while calling medicine delete api', error);
    }
}