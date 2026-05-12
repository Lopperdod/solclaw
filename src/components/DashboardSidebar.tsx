import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { SetupPanel } from './SetupPanel';
import { WorkspacePanel } from './WorkspacePanel';
import { NurseryPanel } from './NurseryPanel';
import { TrainingDataPanel } from './TrainingDataPanel';
import { CaChartPanel } from './CaChartPanel';
import { PumpOrderBook } from './PumpOrderBook';
import { BotTradesBook } from './BotTradesBook';
import { PerformancePanel } from './PerformancePanel';

export function DashboardSidebar() {
  const { sidebarMode, setSidebarMode, tradingSubTab, setTradingSubTab } = useAppContext();

  if (sidebarMode === 'setup') {
    return <SetupPanel />;
  }

  if (sidebarMode === 'code') {
    return <WorkspacePanel />;
  }

  if (sidebarMode === 'nursery') {
    return <NurseryPanel />;
  }

  // Dashboard mode with trading tabs
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col min-h-0">
        {/* Trading Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <button
            onClick={() => setTradingSubTab('trading')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              tradingSubTab === 'trading'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Trading
          </button>
          <button
            onClick={() => setTradingSubTab('training')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              tradingSubTab === 'training'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Training
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 flex flex-col min-h-0">
          {tradingSubTab === 'trading' ? (
            <>
              <div className="flex-1 min-h-0">
                <CaChartPanel />
              </div>
              <div className="h-80 border-t border-gray-200 dark:border-gray-700">
                <div className="h-full flex">
                  <div className="flex-1 border-r border-gray-200 dark:border-gray-700">
                    <PumpOrderBook />
                  </div>
                  <div className="flex-1">
                    <BotTradesBook />
                  </div>
                </div>
              </div>
              <div className="h-48 border-t border-gray-200 dark:border-gray-700">
                <PerformancePanel />
              </div>
            </>
          ) : (
            <div className="flex-1 min-h-0">
              <TrainingDataPanel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
