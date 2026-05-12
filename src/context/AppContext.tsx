import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ChatMessage, ModelSettings, GitHubWorkspaceSettings } from '@/types';

interface AppContextType {
  // Sidebar navigation
  sidebarMode: 'dashboard' | 'setup' | 'code' | 'nursery';
  setSidebarMode: (mode: 'dashboard' | 'setup' | 'code' | 'nursery') => void;
  
  // Trading sub-tabs
  tradingSubTab: 'trading' | 'training';
  setTradingSubTab: (tab: 'trading' | 'training') => void;
  
  // Chat
  chatMessages: ChatMessage[];
  setChatMessages: (messages: ChatMessage[]) => void;
  modelSettings: ModelSettings;
  setModelSettings: (settings: ModelSettings) => void;
  
  // GitHub workspace
  githubSettings: GitHubWorkspaceSettings;
  setGithubSettings: (settings: GitHubWorkspaceSettings) => void;
  
  // Chart analytics
  activeMint: string;
  setActiveMint: (mint: string) => void;
  selectedAlgo: string;
  setSelectedAlgo: (algo: string) => void;
  tradingMode: 'paper' | 'real';
  setTradingMode: (mode: 'paper' | 'real') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [sidebarMode, setSidebarMode] = useState<'dashboard' | 'setup' | 'code' | 'nursery'>('dashboard');
  const [tradingSubTab, setTradingSubTab] = useState<'trading' | 'training'>('trading');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [modelSettings, setModelSettings] = useState<ModelSettings>({
    provider: 'openai',
    model: 'gpt-4o-mini',
    apiKey: '',
    baseUrl: '',
    maxTokens: 4000,
    temperature: 0.7,
  });
  const [githubSettings, setGithubSettings] = useState<GitHubWorkspaceSettings>({
    pat: '',
    owner: '',
    repo: '',
    branch: 'main',
  });
  const [activeMint, setActiveMint] = useState('');
  const [selectedAlgo, setSelectedAlgo] = useState('unt-builtin-scalper');
  const [tradingMode, setTradingMode] = useState<'paper' | 'real'>('paper');

  return (
    <AppContext.Provider
      value={{
        sidebarMode,
        setSidebarMode,
        tradingSubTab,
        setTradingSubTab,
        chatMessages,
        setChatMessages,
        modelSettings,
        setModelSettings,
        githubSettings,
        setGithubSettings,
        activeMint,
        setActiveMint,
        selectedAlgo,
        setSelectedAlgo,
        tradingMode,
        setTradingMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
