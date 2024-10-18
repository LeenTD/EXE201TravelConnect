// context/TeacherContext.js
import React, { createContext, useState } from 'react';

export const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
    const [teacher, setTeacher] = useState(null);
    const [course, setCourse ] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const saveToken = (userToken) => {
        localStorage.setItem('token', userToken);
        setToken(userToken);
      };
    return (
        <TeacherContext.Provider value={{ teacher, setTeacher, course, setCourse, token, setToken: saveToken }}>
            {children}
        </TeacherContext.Provider>
    );
};
