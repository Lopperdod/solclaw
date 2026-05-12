import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { useSetupProgress } from '@/hooks/useSetupProgress';

export function AppTopChrome() {
  const { sidebarMode, setSidebarMode } = useAppContext();
  const { progressText, isComplete } = useSetupProgress();

  const navItems = [
    { id: 'dashboard' as const, label: 'Dashboard' },
    { id: 'setup' as const, label: 'Setup' },
    { id: 'code' as const, label: 'Code' },
    { id: 'nursery' as const, label: 'Nursery' },
  ];

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      {!isComplete && (
        <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800 px-4 py-2">
          <div className="text-sm text-red-700 dark:text-red-300">
            ⚠️ Setup incomplete: {progressText}
          </div>
        </div>
      )}
      <nav className="flex space-x-8 px-6 py-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSidebarMode(item.id)}
            className={`text-sm font-medium transition-colors ${
              sidebarMode === item.id
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-3 -mb-3'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
