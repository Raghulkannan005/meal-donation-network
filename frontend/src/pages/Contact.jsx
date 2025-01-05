import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '../components/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 px-4 sm:px-6 lg:px-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
                    <p className="text-lg text-gray-600">
                        Have questions about food donation? We're here to help!
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                required
                            />
                        </div>

                        <div className="text-center">
                            <Button
                                label="Send Message"
                                onClick={handleSubmit}
                                className="px-8 py-3 text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-950 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            />
                        </div>
                    </form>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="text-blue-900 text-2xl mb-3">📍</div>
                        <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                        <p className="text-gray-600">123 Food Street, Cuisine City, FC 12345</p>
                    </div>
                    
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="text-blue-900 text-2xl mb-3">📞</div>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                    
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="text-blue-900 text-2xl mb-3">✉️</div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <p className="text-gray-600">contact@mealmesh.com</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;