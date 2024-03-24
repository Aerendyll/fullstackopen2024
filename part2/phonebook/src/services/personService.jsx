import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

 const getAll = () => {
  return axios.get(baseUrl); //obtener datos
};

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson); //subir datos
};

 const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`); //borrar datos
 
};

const update = (id, updatedPerson) => {
    return axios.put(`${baseUrl}/${id}`, updatedPerson) //actualizar datos 
}
export default {getAll ,create ,deletePerson, update}