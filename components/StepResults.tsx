import React from 'react';
import { Book, UserPreferences } from '../types';
import { getRecommendations } from '../services/bookData';

interface Props {
  preferences: UserPreferences;
  onRestart: () => void;
}

const StepResults: React.FC<Props> = ({ preferences, onRestart }) => {
  const recommendations = getRecommendations(
    preferences.selectedGenres,
    preferences.level,
    preferences.length
  );

  const hasResults = recommendations.length > 0;

  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 serif">
          Sugestões para ti
        </h2>
        <p className="text-slate-600">
          Com base nas tuas escolhas: <span className="font-semibold text-teal-600">{preferences.level}</span>,
          gosto por <span className="font-semibold text-teal-600">{preferences.selectedGenres.join(' & ')}</span>.
        </p>
      </div>

      {!hasResults ? (
        <div className="text-center bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
          <p className="text-xl text-slate-600 mb-6">
            Hmm... Ainda não temos livros exatos para essa combinação na nossa base de dados digital.
          </p>
          <p className="text-slate-500">
            Mas a Biblioteca tem milhares de livros! Pede ajuda ao professor bibliotecário.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((book, index) => (
            <div 
              key={book.id} 
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-3 bg-gradient-to-r from-teal-400 to-indigo-500"></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wide rounded-full">
                    {book.genre}
                  </span>
                  <span className="text-xs text-slate-400">
                    {book.length.split(' ')[0]}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1 serif leading-tight">
                  {book.title}
                </h3>
                <p className="text-sm text-teal-600 font-medium mb-4">
                  de {book.author}
                </p>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {book.synopsis}
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-50">
                   <div className="flex items-center text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Procura este livro na tua BE!</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 bg-indigo-900 rounded-2xl p-8 text-center text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-2 serif">Gostaste das sugestões?</h3>
        <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
          Dirige-te ao balcão da Biblioteca Escolar e mostra estes resultados ao Professor Bibliotecário para te ajudar a encontrar o livro na estante.
        </p>
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-colors"
        >
          Fazer Novo Teste
        </button>
      </div>
    </div>
  );
};

export default StepResults;