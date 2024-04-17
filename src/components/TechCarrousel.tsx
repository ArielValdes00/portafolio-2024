import { useEffect, useState } from 'react';
import "./style.css";
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { skills } from '../utils/skills';

const TechCarrousel: React.FC = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = (e: any) => {
        e.stopPropagation();
        setIsClicked(!isClicked);
    };

    const handleClickOutside = () => {
        setIsClicked(false);
    };

    useEffect(() => {
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div
            className={`pb-8 pt-7 md:py-12 px-3 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] w-full ${isClicked ? 'paused' : ''}`}
        >
            <ul
                className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_li]:mx-2 xl:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
                {
                    skills.map((icon, index) => (
                        <Popover
                            key={index}
                            showArrow
                            placement="bottom"
                            classNames={{
                                content: [
                                    "px-5 py-2 font-semibold"
                                ],
                            }}>
                            <PopoverTrigger>
                                <li>
                                    <img
                                        src={icon.icon}
                                        alt={icon.name}
                                        title={icon.name}
                                        className="size-12 cursor-pointer"
                                        loading="eager"
                                        onClick={handleClick}
                                    />
                                </li>
                            </PopoverTrigger>
                            <PopoverContent>
                                <p className='text-neutral-900'>{icon.name}</p>
                            </PopoverContent>
                        </Popover>
                    ))
                }
            </ul>
            <ul
                className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_li]:mx-2 xl:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
                {
                    skills.map((icon, index) => (
                        <Popover
                            key={index}
                            showArrow
                            placement="bottom"
                            classNames={{
                                content: [
                                    "px-5 py-2 font-semibold"
                                ],
                            }}>
                            <PopoverTrigger>
                                <li>
                                    <img
                                        src={icon.icon}
                                        alt={icon.name}
                                        title={icon.name}
                                        className="size-12 cursor-pointer"
                                        loading="eager"
                                        onClick={handleClick}
                                    />
                                </li>
                            </PopoverTrigger>
                            <PopoverContent>
                                <p className='text-neutral-900'>{icon.name}</p>
                            </PopoverContent>
                        </Popover>
                    ))
                }
            </ul>
        </div>
    )
}

export default TechCarrousel;