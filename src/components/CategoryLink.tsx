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
    { icon: IconBat, label: "PayFlow", url: "https://payflow.vercel.app/" },
    { icon: IconSpeakerphone, label: "BrainNest", url: "https://brain-nest-frontend.vercel.app/" },
    { icon: IconGrain, label: "PenCraft", url: "https://pencraft.vercel.app/" }

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