import axios from 'axios';

export async function fetchData() {
    try {
        const response = await axios.get('https://localhost:3001/people');
        const data = response.data;
        return data.data;
    } catch (error) {
        console.error(error);
        errorType(error);
    }
}

export async function deleteData(id: number) {
    try {
        const response = await axios.delete(`https://localhost:3001/people/delete/${id}`);
        return response.data;

    } catch (error : any) {
        console.error(error);
        errorType(error);
    }
}

export async function updateData(id: number, updatedData: any) {
    try {
        const response = await axios.put(`https://localhost:3001/people/update/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(error);
        errorType(error);
    }
}

export async function createData(newData: any) {
    try {
        const response = await axios.post('https://localhost:3001/people/add', newData);
        return response.data;
    } catch (error) {
        console.error(error);
        errorType(error);
    }
}

function errorType (error: any)
{
    if (error.response.status === 400) {
        throw new Error ("Bad request error");
    } else if (error.response.status === 500) {
        throw new Error("Internal server error");
    } else if (error.response.status === 404) {
        throw new Error("Person not found");
    } else {
        throw new Error("Unknown error");
    }
}
