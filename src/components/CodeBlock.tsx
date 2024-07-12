import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './style.css';
import { useState } from 'react';

interface CodeBlockProps {
    codeString: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ codeString }) => {
    const [copySuccess, setCopySuccess] = useState<boolean>(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(codeString);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 3000); 
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className='rounded-md overflow-hidden my-6'>
            <div className='bg-neutral-700 flex items-center justify-between text-sm p-1'>
                <div className='flex items-center gap-1 p-2'>
                    <span className='h-2 w-2 bg-red-500 rounded-full'></span>
                    <span className='h-2 w-2 bg-yellow-500 rounded-full'></span>
                    <span className='h-2 w-2 bg-green-500 rounded-full'></span>
                </div>
                <button
                    onClick={copyToClipboard}
                    className='hover:bg-neutral-800 transition duration-200 flex items-center gap-1 cursor-pointer p-2 rounded-md'
                >
                    <img src={copySuccess ? "/icons-svg/check.svg" : "/icons-svg/copy.svg"} alt='Copy To Clipboard' />
                    <p>{copySuccess ? 'Código copiado' : 'Copiar código'}</p>
                </button>
            </div>
            <SyntaxHighlighter
                wrapLongLines={true}
                language="arduino"
                style={darcula}
                customStyle={{
                    padding: '25px',
                }}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
