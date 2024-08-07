import React from 'react';
import "prismjs/themes/prism.css";
import CodeBlock from "./CodeBlock.jsx";
import { Link } from '@nextui-org/react';

interface BlogPostProps {
    title: string;
    content: string;
    contentPostCode?: string;
    contentPostCode2?: string;
    contentPostVideo?: string;
    contentPostVideo2?: string;
    image: string;
    codeString?: string;
    language?: string;
    date: string;
    links?: { label: string, url: string }[];
    video?: string;
    video2?: string;
    code2?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
    contentPostVideo,
    video2,
    title,
    content,
    contentPostVideo2,
    image,
    codeString,
    date,
    links,
    contentPostCode,
    video,
    code2,
    contentPostCode2 }) => {
    const paragraphs = content.split("\n\n");
    const paragraphsContentPostVideo = contentPostVideo ? contentPostVideo.split("\n\n") : [];
    let componentListIndex = paragraphs.findIndex(paragraph => paragraph.includes('Aquí está la lista de componentes que trajo el kit'));
    let components: any[] = [];


    if (componentListIndex !== -1) {
        const componentText = paragraphs[componentListIndex + 1];

        components = componentText.split(/,\n/).map((component, index) => (
            <li key={index}>{component.trim()}</li>
        ));

        paragraphs.splice(componentListIndex + 1, 1);
    }

    return (
        <article className="prose max-w-xl mx-auto my-10 px-2">
            <Link className='text-white cursor-pointer text-sm hover:underline mb-5' href='/posts'>← Volver</Link>
            <div className="flex flex-col items-center justify-center gap-3 my-3">
                <h1 className="text-4xl font-bold text-center">{title}</h1>
                <p className="text-sm text-gray-400">{date}</p>
            </div>
            <img src={image} alt={title} className="w-full h-auto my-4 rounded-lg" />
            <div className="text-gray-300">
                {paragraphs.map((paragraph, index) => (
                    <React.Fragment key={index}>
                        <p className="py-3">{paragraph}</p>
                        {index === componentListIndex && components.length > 0 && (
                            <div className="mt-5">
                                <p className="font-bold">Lista de componentes del kit:</p>
                                <ul className="list-disc pl-5">
                                    {components}
                                </ul>
                            </div>
                        )}
                    </React.Fragment>
                ))}
                {codeString && <CodeBlock codeString={codeString} />}
                <p className='mb-6'>{contentPostCode}</p>
                {video && (
                    <video controls width="100%">
                        <source src={video} type="video/mp4" />
                    </video>
                )}
                <div className="prose max-w-xl mx-auto my-2">
                    {paragraphsContentPostVideo.map((paragraph, index) => (
                        <p key={index} className="py-3">
                            {paragraph}
                        </p>
                    ))}
                </div>
                {code2 && <CodeBlock codeString={code2} />}
                <p className='mb-6'>{contentPostCode2}</p>
                {video2 && (
                    <video controls width="100%">
                        <source src={video2} type="video/mp4" />
                    </video>
                )}
                <p className='my-3'>{contentPostVideo2}</p>
            </div>
            {links && links.length > 0 && (
                <div className="mt-5">
                    <p className="font-bold">Enlaces útiles:</p>
                    <ul className="list-disc pl-5">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </article>
    )
}

export default BlogPost;
