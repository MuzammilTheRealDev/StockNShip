import { Link } from 'react-router-dom';
import AnimatedButton from '../buttons/AnimatedButton';

const NotFound = () => {
    return (
        <main className="bg-secondary min-h-screen flex items-start justify-center relative overflow-hidden px-4">
            <div className="absolute w-60 h-60 rounded-full bg-primary blur-3xl opacity-30 -top-14 -left-14"></div>
            <div className="absolute w-60 h-60 rounded-full bg-primary blur-3xl opacity-30 -bottom-14 -right-14"></div>
            <article className="max-w-7xl w-full flex flex-col py-16 gap-12">
                <Link to={'/'} className="mx-auto">
                    <img 
                        src="/images/logo.webp" 
                        className="h-16 md:h-20 object-contain" 
                        alt="Company Logo" 
                    />
                </Link>
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
                    <div className="w-full md:w-1/2">
                        <img 
                            src="/images/404.svg" 
                            alt="404 Illustration"
                        />
                    </div>
                    <div className="text-white w-full md:w-1/2 flex flex-col gap-5 justify-center text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-semibold">Page Not Found</h1>
                        <p className="text-white/80 text-base md:text-lg">
                            Sorry, the page you’re looking for doesn’t exist. If you think something is broken, report a problem.
                        </p>
                        <div className="mx-auto md:mx-0">
                            <AnimatedButton to='/'>Back To Home</AnimatedButton>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default NotFound;
