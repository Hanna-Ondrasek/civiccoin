'use client';

import { useState, type Dispatch, type SetStateAction } from 'react';

// Mock data for the badges and rewards sections
const mockBadges = [
  {
    name: "Clean-up Crew",
    description: "You've helped clean up a local park or community area.",
    image: "https://placehold.co/100x100/50C878/FFFFFF?text=Clean+Badge"
  },
  {
    name: "Community Organizer",
    description: "You organized a successful community event.",
    image: "https://placehold.co/100x100/A3E635/FFFFFF?text=Org+Badge"
  },
  {
    name: "Civic Champion",
    description: "You logged 10 civic actions in a single month!",
    image: "https://placehold.co/100x100/FACC15/FFFFFF?text=Civic+Champ"
  }
];

const mockRewards = [
  {
    name: "1 Month Fitness Pass",
    description: "For getting 10 algos from taking civic action to help your community!",
    image: "https://placehold.co/100x100/F0582D/FFFFFF?text=Pass"
  },
  {
    name: "Movie Ticket",
    description: "For logging your first five civic actions.",
    image: "https://placehold.co/100x100/C51162/FFFFFF?text=Movie"
  },
  {
    name: "Free Coffee",
    description: "For reaching your first 100 algos.",
    image: "https://placehold.co/100x100/6A1B9A/FFFFFF?text=Coffee"
  }
];

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Civic Action</h1>
      </div>
      <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        Login
      </button>
    </nav>
  );
};

// The home page with the single "Explore Now" button
const Homepage = ({ setPage }: { setPage: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Launch your website in hours, not days"
            .split(" ")
            .map((word, index) => (
              <span
                key={index}
                className="mr-2 inline-block"
              >
                {word}
              </span>
            ))}
        </h1>
        <p className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
          With AI, you can launch your website in hours, not days. Try our best
          in class, state of the art, cutting edge AI tools to get your website
          up.
        </p>
        <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            onClick={() => setPage('main')}
          >
            Explore Now
          </button>
        </div>
        <div className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MainApp = () => {
  const [activeSection, setActiveSection] = useState('log');
  
  const renderContent = () => {
    switch (activeSection) {
      case 'log':
        return (
          <div className="p-8">
            <div className="hero-content text-center rounded-lg p-6 max-w-md bg-white mx-auto">
              <div className="max-w-md">
                <h1 className="text-4xl">
                  Welcome to <div className="font-bold">Our Project 🙂</div>
                </h1>
                <p className="py-6">
                  This starter has been generated using official AlgoKit React template. Refer to the resource below for next steps.
                </p>
                <div className="grid">
                  <button data-test-id="connect-wallet" className="w-full transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 m-2">
                    Wallet Connection
                  </button>
                  <button data-test-id="transactions-demo" className="w-full transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 m-2">
                    Transactions Demo
                  </button>
                  <button data-test-id="appcalls-demo" className="w-full transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 m-2">
                    Contract Interactions Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'badges':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-slate-700 dark:text-slate-300">Your Badges</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {mockBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
                  <img src={badge.image} alt={badge.name} className="w-24 h-24 rounded-full mb-4" />
                  <h3 className="font-semibold text-lg">{badge.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'rewards':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-slate-700 dark:text-slate-300">Your Rewards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {mockRewards.map((reward, index) => (
                <div key={index} className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
                  <img src={reward.image} alt={reward.name} className="w-24 h-24 rounded-full mb-4" />
                  <h3 className="font-semibold text-lg">{reward.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{reward.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 w-64 p-4 fixed h-full z-10">
        <div className="mb-8">
          <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 mx-auto mb-2" />
          <h1 className="text-center text-xl font-bold md:text-2xl">Civic Action</h1>
        </div>
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setActiveSection('log')}
            className={`w-full px-4 py-2 rounded-lg text-left transition-colors duration-200 ${
              activeSection === 'log' ? 'bg-blue-500 text-white shadow-lg' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Log Civic Action
          </button>
          <button
            onClick={() => setActiveSection('badges')}
            className={`w-full px-4 py-2 rounded-lg text-left transition-colors duration-200 ${
              activeSection === 'badges' ? 'bg-blue-500 text-white shadow-lg' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Badges
          </button>
          <button
            onClick={() => setActiveSection('rewards')}
            className={`w-full px-4 py-2 rounded-lg text-left transition-colors duration-200 ${
              activeSection === 'rewards' ? 'bg-blue-500 text-white shadow-lg' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Rewards
          </button>
        </nav>
      </div>

      <div className="flex-1 ml-64 p-8">
        <Navbar />
        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      {currentPage === 'home' ? (
        <Homepage setPage={setCurrentPage} />
      ) : (
        <MainApp />
      )}
    </div>
  );
}
