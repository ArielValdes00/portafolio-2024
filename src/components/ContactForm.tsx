import { Button, Input, Textarea, input } from '@nextui-org/react';
import React from 'react';
import "./style.css";

const ContactForm: React.FC = () => {
    return (
        <form className='mt-2'>
            <div className='flex items-center justify-between gap-2'>
                <Input size='sm' type="email" label="Email" classNames={{
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
                <Input size='sm' color='secondary' type="text" label="Asunto" classNames={{
                    input: [
                        "text-gray-100"
                    ],
                    label: [
                        "text-gray-100"
                    ],
                    inputWrapper: [
                        "bg-slate-700",
                    ],
                }}/>
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
            <Button className='mt-2 w-full bg-sky-500 text-white'>Enviar</Button>
        </form>
    )
};

export default ContactForm;