import React from "react";
import {
    IconBat,
    IconGrain,
    IconSpeakerphone,
    IconWriting,
    IconMoodSmile,
    IconCoinBitcoinFilled,
} from "@tabler/icons-react";

const categories = [
    { icon: IconBat, label: "Bird Checker", url: "https://bird-checker.vercel.app/" },
    { icon: IconSpeakerphone, label: "Audiofeed", url: "https://audiofeed.ai/" },
    { icon: IconGrain, label: "OG", url: "https://openapi-spec-writer.vercel.app/" },
    { icon: IconCoinBitcoinFilled, label: "CryptoBot", url: "https://crypto-chatbot-xi.vercel.app/" },
    { icon: IconWriting, label: "Journaling", url: "https://journaling.example.com" },
    { icon: IconMoodSmile, label: "Communication", url: "https://communication.example.com" },
];

const CategoryLink: React.FC = () => {
    return (
        <div className="mt-10 sm:mt-20">
            {categories.map(({ icon: Icon, label, url }) => (
                <a
                    key={label}
                    className="m-1 py-2 px-3 inline-flex 
          items-center gap-x-2 text-sm font-medium 
          rounded-lg border border-gray-200 
          bg-white text-gray-800 shadow-sm hover:bg-gray-50
           disabled:opacity-50 disabled:pointer-events-none
            dark:bg-neutral-900 dark:border-neutral-700
             dark:text-white dark:hover:bg-neutral-800"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon size={18} />
                    {label}
                </a>
            ))}
        </div>
    );
};

export default CategoryLink;