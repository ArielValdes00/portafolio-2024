"use client"
import { Button, Input, Textarea } from '@nextui-org/react';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import "./style.css";

const ContactForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [form, setForm] = useState({
        user_email: "",
        user_name: "",
        message: ""
    });
    const formRef = useRef<any>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: {[key: string]: string} = {};
        if (!form.user_email) newErrors.user_email = 'Email es requerido';
        if (!form.user_name) newErrors.user_name = 'Nombre es requerido';
        if (!form.message) newErrors.message = 'Mensaje es requerido';

        if (Object.keys(newErrors).length > 0) {
            Object.keys(newErrors).forEach((key) => {
                toast.error(newErrors[key]);
            });
            return;
        }
        setIsLoading(true);
        try {
            emailjs.sendForm(import.meta.env.PUBLIC_SERVICE_ID, import.meta.env.PUBLIC_TEMPLATE_ID, formRef?.current, import.meta.env.PUBLIC_PUBLIC_KEY)
                .then(() => {
                    formRef?.current.reset();
                    setForm({
                        user_email: "",
                        user_name: "",
                        message: ""
                    });
                    toast.success('Mensaje enviado con éxito');
                    setIsLoading(false);
                }, (error: any) => {
                    console.log(error);
                    toast.error('Error al enviar el mensaje');
                    setIsLoading(false);
                });
        } catch (error) {
            console.error(error);
            toast.error('Error al enviar el mensaje');
            setIsLoading(false);
        } 
    };

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <form className='mt-2' ref={formRef}>
            <div className='flex items-center justify-between gap-2 text-gray-100'>
                <Input
                    isRequired
                    size='sm'
                    type="email"
                    label="Email"
                    name='user_email'
                    value={form.user_email}
                    onChange={handleChange}
                    classNames={{
                        input: [
                            "text-gray-100",
                        ],
                        label: [
                            "text-gray-100",
                        ],
                        inputWrapper: [
                            "bg-slate-700",
                        ],
                    }} />
                <Input
                    isRequired
                    size='sm'
                    type="text"
                    name='user_name'
                    label="Nombre"
                    value={form.user_name}
                    onChange={handleChange}
                    classNames={{
                        input: [
                            "text-gray-100"
                        ],
                        label: [
                            "text-gray-100"
                        ],
                        inputWrapper: [
                            "bg-slate-700",
                        ],
                    }} />
            </div>
            <Textarea
                isRequired
                label="Mensaje"
                name='message'
                value={form.message}
                className="w-full mt-2"
                onChange={handleChange}
                classNames={{
                    input: [
                        "text-gray-100"
                    ],
                    label: [
                        "text-gray-100"
                    ],
                    inputWrapper: [
                        "bg-slate-700",
                    ],
                }}
            />
            <Button onClick={handleSubmit} className='mt-2 w-full bg-sky-500 text-white' isLoading={isLoading}>{isLoading ? '' : 'Enviar'}</Button>
        </form>
    )
};

export default ContactForm;
