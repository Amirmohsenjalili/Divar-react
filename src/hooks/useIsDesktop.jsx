import {useState,useEffect} from 'react';

const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(true)

    const setWidthDimensions = () =>{
      setIsDesktop(window.innerWidth > 768)
    }
  
  
    useEffect(() => {
      
      window.addEventListener('resize', setWidthDimensions)
      return () => {
        window.removeEventListener('resize', setWidthDimensions)
      }
    },[])

    return isDesktop;
};

export default useIsDesktop;