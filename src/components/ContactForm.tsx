import { Button, Input, Textarea } from '@nextui-org/react';
import React, { useState } from 'react';
import "./style.css";

const ContactForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const sendMessage = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    };

    return (
        <form className='mt-2'>
            <div className='flex items-center justify-between gap-2 text-gray-100'>
                <Input size='sm' type="email" label="Email" classNames={{
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
                <Input size='sm' type="text" label="Asunto" classNames={{
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
                label="Mensaje"
                className="w-full mt-2"
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
            <Button className='mt-2 w-full bg-sky-500 text-white' onClick={sendMessage} isLoading={isLoading}>{isLoading ? '' : 'Enviar'}</Button>
        </form>
    )
};

export default ContactForm;