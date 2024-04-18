import { Link } from '@nextui-org/react';
import { media } from '../utils/media'
import "./style.css";

const GetInTouch = () => {
    const email = 'ariel.jvaldes20@gmail.com';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                alert('¡Correo copiado al portapapeles!');
            })
            .catch((err) => {
                console.error('Error al copiar al portapapeles:', err);
                alert('Error al copiar al portapapeles');
            });
    };
    return (
        <div className="flex flex-col gap-2">
            <p className="text-start text-2xl font-bold">
                ¡Contactame <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Ahora!</span>
            </p>
            <p className="sm:max-w-xs text-sm">
                ¿Estás listo para dar el <b
                    className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"
                >siguiente paso</b
                >? Completa el formulario a continuación y comencemos a trabajar juntos en
                hacer <b
                    className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"
                >realidad </b
                > tus <b
                    className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"
                >proyectos</b
                >.
            </p>
            <div
                className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-2 mt-1"
            >
                <div className="flex items-center gap-2 text-sm">
                    <img
                        src="/icons-svg/location.svg"
                        alt="location"
                        width={20}
                        height={20}
                    />
                    <p>Buenos Aires, Argentina</p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <img src="/icons-svg/email.svg" alt="email" width={20} height={20} />
                    <p
                        id="email"
                        className="relative before cursor-pointer pb-1"
                        onClick={copyToClipboard}
                    >
                        {email}
                    </p>
                </div>
            </div>
            <div className="flex items-center my-2 gap-4">
                {media.map((icon) => (
                    <Link key={icon.name} href={icon.link} target="_blank" rel="noopener noreferrer">
                        <img src={icon.icon} alt={icon.name} width={30} height={30} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default GetInTouch;