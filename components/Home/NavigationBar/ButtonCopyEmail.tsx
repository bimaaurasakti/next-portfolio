"use client";
import { useState } from 'react';
import SocialMediaIcon from './SocialMediaIcon';

export default function ButtonCopyEmail() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("bimaaurasakti2001@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div className='flex items-center'>
      <SocialMediaIcon />
      <button
        onClick={copyEmailToClipboard}
        className="shadow-[inset_0_0_0_2px_#616467] text-black px-6 py-3 text-sm rounded-full bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 relative ms-4"
      >
        <span className={"transition duration-200" + (copied ? " opacity-0 invisible" : " opacity-100 visible")}>
          bimaaurasakti2001@gmail.com
        </span>
        <span className={"absolute transition duration-200 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" + (copied ? " opacity-100 visible" : " opacity-0 invisible")}>Email copied</span>
      </button>
    </div>
  );
}