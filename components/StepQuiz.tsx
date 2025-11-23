import React, { useState } from 'react';
import { BookGenre, BookLength, ReadingLevel, UserPreferences } from '../types';

interface Props {
  onSubmit: (prefs: UserPreferences) => void;
}

const StepQuiz: React.FC<Props> = ({ onSubmit }) => {
  const [genres, setGenres] = useState<BookGenre[]>([]);
  const [level, setLevel] = useState<ReadingLevel | null>(null);
  const [length, setLength] = useState<BookLength | null>(null);

  const handleGenreToggle = (genre: BookGenre) => {
    if (genres.includes(genre)) {
      setGenres(genres.filter(g => g !== genre));
    } else {
      if (genres.length < 2) {
        setGenres([...genres, genre]);
      }
    }
  };

  const isFormValid = genres.length > 0 && level !== null && length !== null;

  return (
    <div className="max-w-3xl mx-auto animate-slide-up pb-12">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center serif">Fala-nos sobre ti...</h2>

      <div className="space-y-10">
        {/* Section 1: Level */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
            <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
            Em que ano andas?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.values(ReadingLevel).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLevel(lvl)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                  level === lvl
                    ? 'border-teal-500 bg-teal-50 text-teal-900 ring-1 ring-teal-500'
                    : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50 text-slate-600'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </section>

        {/* Section 2: Length */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
            <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
            Tamanho do livro?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.values(BookLength).map((len) => (
              <button
                key={len}
                onClick={() => setLength(len)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                  length === len
                    ? 'border-teal-500 bg-teal-50 text-teal-900 ring-1 ring-teal-500'
                    : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50 text-slate-600'
                }`}
              >
                {len}
              </button>
            ))}
          </div>
        </section>

        {/* Section 3: Genres */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-700 mb-2 flex items-center">
            <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
            O que gostas de ler?
          </h3>
          <p className="text-sm text-slate-500 mb-4 ml-11">Escolhe 1 ou 2 opções.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.values(BookGenre).map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreToggle(genre)}
                disabled={!genres.includes(genre) && genres.length >= 2}
                className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 border-2 ${
                  genres.includes(genre)
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-900 ring-1 ring-indigo-500'
                    : genres.length >= 2
                      ? 'border-slate-100 text-slate-300 cursor-not-allowed'
                      : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-600'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </section>

        <div className="flex justify-end pt-4">
          <button
            onClick={() => isFormValid && onSubmit({ selectedGenres: genres, level, length })}
            disabled={!isFormValid}
            className={`px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-200 ${
              isFormValid
                ? 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Ver Recomendações
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepQuiz;