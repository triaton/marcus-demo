import React from 'react';
import LoginForm from '../components/LoginForm';

export default function Home() {
  return <div className="w-screen h-screen flex flex-col justify-center items-center">
    <p className="text-3xl font-bold text-sky-600 mb-5">Marcus Demo</p>
    <LoginForm/>
  </div>

}