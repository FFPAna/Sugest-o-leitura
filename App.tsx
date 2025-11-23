import React, { useState } from 'react';
import StepWelcome from './components/StepWelcome';
import StepQuiz from './components/StepQuiz';
import StepResults from './components/StepResults';
import { UserPreferences } from './types';

enum AppStep {
  Welcome,
  Quiz,
  Results
}

function App() {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.Welcome);
  const [preferences, setPreferences] = useState<UserPreferences>({
    selectedGenres: [],
    level: null,
    length: null,
  });

  const handleStart = () => {
    setCurrentStep(AppStep.Quiz);
    window.scrollTo(0, 0);
  };

  const handleQuizSubmit = (prefs: UserPreferences) => {
    setPreferences(prefs);
    setCurrentStep(AppStep.Results);
    window.scrollTo(0, 0);
  };

  const handleRestart = () => {
    setPreferences({
      selectedGenres: [],
      level: null,
      length: null,
    });
    setCurrentStep(AppStep.Welcome);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Header Simples */}
      <header className="w-full py-6 px-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold serif">
            BE
          </div>
          <span className="font-bold text-slate-700 tracking-tight">Biblioteca Escolar</span>
        </div>
        {currentStep !== AppStep.Welcome && (
          <button 
            onClick={handleRestart}
            className="text-sm text-slate-400 hover:text-teal-600 transition-colors font-medium"
          >
            Início
          </button>
        )}
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-6xl mx-auto px-6 py-4 md:py-8">
        {currentStep === AppStep.Welcome && (
          <StepWelcome onStart={handleStart} />
        )}
        {currentStep === AppStep.Quiz && (
          <StepQuiz onSubmit={handleQuizSubmit} />
        )}
        {currentStep === AppStep.Results && (
          <StepResults preferences={preferences} onRestart={handleRestart} />
        )}
      </main>

      {/* Footer decorative */}
      <footer className="fixed bottom-0 left-0 w-full pointer-events-none opacity-50 z-0">
        <svg className="w-full h-auto text-slate-200/50 fill-current" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </footer>
    </div>
  );
}

export default App;