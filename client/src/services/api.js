// src/services/api.js
const BASE_URL = 'http://localhost:5000/api';

export const fetchBooks = async () => {
    const response = await fetch(`${BASE_URL}/books`);
    if (!response.ok) {
        throw new Error('Kitaplar alınamadı');
    }
    return response.json();
};

// API fonksiyonu: Profil bilgilerini almak
export const fetchProfile = async () => {
    try {
        const response = await fetch(`${BASE_URL}/profile`); // API endpointi
        if (!response.ok) {
            throw new Error('Profil bilgileri alınırken bir hata oluştu');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};


// Profildeki kitapları almak için
export const fetchProfileBooks = async () => {
    const response = await fetch('/api/profile');
    if (!response.ok) {
        throw new Error('Profil kitapları alınırken bir hata oluştu.');
    }
    const data = await response.json();
    return data.books; // Backend'den gelen kitapları döndürüyoruz
};

// Profilinize kitap eklemek için
export const addBookToProfile = async (bookId) => {
    const response = await fetch(`/api/profile/add-book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookId }),
    });
    if (!response.ok) {
        throw new Error('Kitap profilinize eklenemedi');
    }
};