import React from 'react';
import Layout from '../layout/Layout';


const Contact = () => {
    return (
        <Layout>
            <h1 className="text-2xl">Contact Page</h1>
            <form className="flex flex-col space-y-5 w-1/4 m-auto">
                <div className="flex flex-col text-left">
                    <label htmlFor="name">Name:</label>
                    <input className="p-2 rounded" type="text" name="name" />
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="email">Email:</label>
                    <input className="p-2 rounded" type="email" name="email" />
                </div>
                <div className="flex flex-col text-left">
                    <label htmlFor="message">Message:</label>
                    <textarea className="p-2 rounded h-32" name="message" />
                </div>
                <input type="submit" className="bg-blue-500 w-1/4 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" />
            </form>
        </Layout>
    );
}

export default Contact;