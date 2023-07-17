import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const NotFound = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    }, []);
  
    if (isLoading) {
      return <div className='min-h-screen flex justify-center items-center text-2xl text-[#c78546] fond-bold'>Cargando...</div>; 
    }

  return (
    <div className="not-found min-h-screen flex flex-col justify-center items-center">
      <h1 className='text-[#7a7a7a] text-[64px] font-bold flex flex-col items-center'><FaExclamationTriangle /> 404 Not Found</h1>
      <p className='text-[18px] text-[#252525]'>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" className='underline decoration-2 pt-12 text-blue-800'>Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
