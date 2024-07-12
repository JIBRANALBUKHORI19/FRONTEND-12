import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

const apis = {
    getMahasiswa: () => api.get('/mahasiswa',{withCredentials: true}),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`,{withCredentials: true}),
    createMahasiswa: (data) => api.post('/mahasiswa', data,{withCredentials: true}),
    updateMahasiswa: (nim, data) => api.put(`/mahasiswa/${nim}`, data,{withCredentials: true}),
    deleteMahasiswa: (nim) => api.delete(`/mahasiswa/${nim}`,{withCredentials: true})
}

export default apis;
