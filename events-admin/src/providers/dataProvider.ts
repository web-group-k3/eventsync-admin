import { DataProvider } from 'react-admin';

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
    };
};

export const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        const response = await fetch(`${apiUrl}/${resource}`, { headers: getHeaders() });
        const data = await response.json();
        
        return {
            data: Array.isArray(data) ? data : (data.content || []),
            total: Array.isArray(data) ? data.length : (data.totalElements || 0),
        };
    },

    getOne: async (resource, params) => {
        const response = await fetch(`${apiUrl}/${resource}/${params.id}`, { headers: getHeaders() });
        if (!response.ok) {
            throw new Error(`Resource not found (404)`);
        }
        const data = await response.json();
        return { data };
    },

    create: async (resource, params) => {
        const payload = { ...params.data };
        
        if (!payload.id) {
            payload.id = "evt-" + Math.random().toString(36).substring(2, 11);
        }

        const response = await fetch(`${apiUrl}/${resource}`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(payload),
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Server error (${response.status}): ${errorText || 'Invalid data submitted'}`);
        }
        
        const data = await response.json();
        return { data };
    },

    update: async (resource, params) => {
        const response = await fetch(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            headers: getHeaders(),
            body: JSON.stringify(params.data),
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Server error (${response.status}): ${errorText || 'Failed to update'}`);
        }

        const data = await response.json();
        return { data };
    },

    delete: async (resource, params) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        
        if (!confirmDelete) {
            throw new Error("Deletion cancelled by user");
        }

        const response = await fetch(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
            headers: getHeaders(),
        });
        
        if (!response.ok) {
            throw new Error(`Failed to delete resource`);
        }
        
        return { data: params.previousData };
    },

    getMany: () => Promise.resolve({ data: [] }),
    getManyReference: () => Promise.resolve({ data: [], total: 0 }),
    updateMany: () => Promise.resolve({ data: [] }),
    deleteMany: () => Promise.resolve({ data: [] }),
};

export default dataProvider;