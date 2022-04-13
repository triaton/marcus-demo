import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/api.service';
import useAuth from '../hooks/useAuth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { saveAuth } = useAuth();
  const navigate = useNavigate();
  const onLogin = async () => {
    if (!email || !password) {
      setError('Email and password can\'t be empty');
    }
    setIsLoading(true);
    try {
      setError('');
      const token = await ApiService.login(email, password);
      if (token) {
        saveAuth(token);
        navigate('/profile');
      }
    } catch (e) {
      setError('Unable to log in.');
    } finally {
      setIsLoading(false);
    }
  }
  return <div className="flex flex-col">
    <div className="flex mb-2 items-center">
      <div className="w-20">Email</div>
      <input type="text" className="input" onChange={evt => setEmail(evt.target.value)}/>
    </div>
    <div className="flex items-center">
      <div className="w-20">Password</div>
      <input type="password" className="input" onChange={evt => setPassword(evt.target.value)}/>
    </div>
    {error && <p className="mt-2 text-red-400">* {error}</p>}
    <div className="flex justify-center mt-4">
      <button
        onClick={onLogin}
        disabled={isLoading}
        className="rounded-none bg-sky-400 border-2 border-sky-400 px-4 py-2 text-white w-full hover:bg-sky-300 active:bg-white active:border-sky-400 active:text-sky-400 disabled:bg-gray-400 disabled:text-white disabled:border-gray-400">{isLoading ? 'Signing In ...' : 'Sign In'}</button>
    </div>
  </div>;
}
