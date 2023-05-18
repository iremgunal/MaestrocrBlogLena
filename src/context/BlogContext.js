import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

export const ContextProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);


    const fetchBlogs = async () => {
        try {
            const response = await fetch('https://www.lenasoftware.com/api/v1/en/maestro/1');
            const data = await response.json();
            setBlogPosts(data.result);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <BlogContext.Provider value={{ blogPosts, setBlogPosts }}>
        {children}
      </BlogContext.Provider>
    )

}


