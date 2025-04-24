import {useEffect, useState} from 'react';
import {getLoginData} from '../LocalStorage/Database';

/**
 * Custom hook to check and manage user authentication status.
 *
 * @returns {{ isUserLoggedIn: boolean | null }} - The user's login status.
 */

const useAuth = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loginData = getLoginData();
        console.log('loginData in useauth>>>', loginData);
        if (loginData.length > 0) {
          setIsUserLoggedIn(loginData[0].isUserLoggedIn);
        } else {
          setIsUserLoggedIn(false);
        }
      } catch (error) {
        console.error('Error fetching login status:', error);
        setIsUserLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  return {isUserLoggedIn};
};

export default useAuth;
