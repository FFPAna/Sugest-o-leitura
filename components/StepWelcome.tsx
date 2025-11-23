import React from 'react';

interface Props {
  onStart: () => void;
}

const StepWelcome: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-8 animate-fade-in">
      <div className="space-y-4">
        <div className="inline-block p-4 rounded-full bg-teal-100 text-teal-700 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 serif">
          Descobre a tua próxima leitura
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Não sabes o que requisitar na Biblioteca Escolar? <br />
          Responde a 3 perguntas rápidas e nós sugerimos os livros perfeitos para ti!
        </p>
      </div>

      <button
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-teal-600 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Começar Agora
        <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </button>
      
      <p className="text-sm text-slate-400 pt-8">
        Desenvolvido para a Biblioteca Escolar
      </p>
    </div>
  );
};

export default StepWelcome;