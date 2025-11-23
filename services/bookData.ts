import { Book, BookGenre, BookLength, ReadingLevel } from '../types';

// ==================================================================================
// ÁREA DE EDIÇÃO PARA O PROFESSOR BIBLIOTECÁRIO (PB)
// ==================================================================================
// Para adicionar os livros da sua biblioteca, siga o modelo abaixo.
// Pode copiar e colar um bloco {...} e alterar os dados.
// Certifique-se que o 'id' é único.
// ==================================================================================

export const LIBRARY_BOOKS: Book[] = [
  // --- 2.º CICLO ---
  {
    id: '1',
    title: 'O Clube dos Cientistas',
    author: 'Maria Francisca Macedo',
    genre: BookGenre.Aventura,
    level: ReadingLevel.Ciclo2,
    length: BookLength.Curto,
    synopsis: 'Três irmãos curiosos resolvem mistérios utilizando a ciência e muita imaginação na escola.'
  },
  {
    id: '2',
    title: 'Avozinha Gângster',
    author: 'David Walliams',
    genre: BookGenre.Aventura,
    level: ReadingLevel.Ciclo2,
    length: BookLength.Medio,
    synopsis: 'Ben descobre que a sua avó aborrecida é, na verdade, uma ladra de jóias internacional!'
  },
  {
    id: '3',
    title: 'Astérix o Gaulês',
    author: 'Goscinny & Uderzo',
    genre: BookGenre.BandaDesenhada,
    level: ReadingLevel.Ciclo2,
    length: BookLength.Curto,
    synopsis: 'As aventuras hilariantes de um guerreiro gaulês que resiste à invasão romana com uma poção mágica.'
  },
  {
    id: '4',
    title: 'O Rapaz do Bronze',
    author: 'Sophia de Mello Breyner Andresen',
    genre: BookGenre.Fantasia,
    level: ReadingLevel.Ciclo2,
    length: BookLength.Curto,
    synopsis: 'Um jardim mágico onde as estátuas ganham vida à noite e as flores dão festas maravilhosas.'
  },

  // --- 3.º CICLO ---
  {
    id: '5',
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    genre: BookGenre.Fantasia,
    level: ReadingLevel.Ciclo3,
    length: BookLength.Longo,
    synopsis: 'Harry descobre que é um feiticeiro e embarca numa jornada mágica na escola de Hogwarts.'
  },
  {
    id: '6',
    title: 'O Diário de Anne Frank',
    author: 'Anne Frank',
    genre: BookGenre.NaoFiccao,
    level: ReadingLevel.Ciclo3,
    length: BookLength.Medio,
    synopsis: 'O relato real e comovente de uma jovem escondida durante a Segunda Guerra Mundial.'
  },
  {
    id: '7',
    title: 'Sherlock Holmes: O Cão dos Baskervilles',
    author: 'Arthur Conan Doyle',
    genre: BookGenre.Misterio,
    level: ReadingLevel.Ciclo3,
    length: BookLength.Medio,
    synopsis: 'O detetive mais famoso do mundo investiga uma lenda sobre um cão fantasmagórico.'
  },
  {
    id: '8',
    title: 'Heartstopper',
    author: 'Alice Oseman',
    genre: BookGenre.BandaDesenhada,
    level: ReadingLevel.Ciclo3,
    length: BookLength.Curto,
    synopsis: 'Uma novela gráfica sobre amizade, amor e a descoberta da identidade na adolescência.'
  },

  // --- SECUNDÁRIO ---
  {
    id: '9',
    title: '1984',
    author: 'George Orwell',
    genre: BookGenre.FiccaoCientifica,
    level: ReadingLevel.Secundario,
    length: BookLength.Medio,
    synopsis: 'Uma distopia assustadora onde o "Grande Irmão" vigia todos os movimentos dos cidadãos.'
  },
  {
    id: '10',
    title: 'Os Maias',
    author: 'Eça de Queirós',
    genre: BookGenre.Classicos,
    level: ReadingLevel.Secundario,
    length: BookLength.Longo,
    synopsis: 'A história de uma família aristocrata em Lisboa e um romance trágico que marcou a literatura portuguesa.'
  },
  {
    id: '11',
    title: 'A Sombra do Vento',
    author: 'Carlos Ruiz Zafón',
    genre: BookGenre.Misterio,
    level: ReadingLevel.Secundario,
    length: BookLength.Longo,
    synopsis: 'Em Barcelona, um rapaz descobre um livro misterioso que muda a sua vida para sempre.'
  },
  {
    id: '12',
    title: 'O Tatuador de Auschwitz',
    author: 'Heather Morris',
    genre: BookGenre.Romance, // Baseado em factos reais
    level: ReadingLevel.Secundario,
    length: BookLength.Medio,
    synopsis: 'Uma história de amor e sobrevivência num dos lugares mais sombrios da história.'
  }
] as Book[]; // Casting para garantir compatibilidade com os tipos definidos

// Função simples de recomendação
export const getRecommendations = (
  genres: BookGenre[],
  level: ReadingLevel | null,
  length: BookLength | null
): Book[] => {
  if (!level || !length || genres.length === 0) return [];

  // 1. Filtrar por Nível de Leitura (Filtro Rigoroso)
  let candidates = LIBRARY_BOOKS.filter(book => book.level === level);

  // 2. Pontuação de Relevância
  const scoredCandidates = candidates.map(book => {
    let score = 0;

    // Pontuação por Género (Prioridade Alta)
    if (genres.includes(book.genre)) {
      score += 10;
    }

    // Pontuação por Tamanho (Prioridade Média)
    if (book.length === length) {
      score += 5;
    }

    return { book, score };
  });

  // 3. Ordenar por pontuação e devolver os melhores
  // Filtramos aqueles que têm pelo menos match de género ou tamanho, ou devolvemos aleatórios do nível se não houver match perfeito
  scoredCandidates.sort((a, b) => b.score - a.score);

  // Se não houver bons matches (score 0), mostramos apenas livros do nível escolar
  const topPicks = scoredCandidates.slice(0, 4).map(item => item.book);
  
  return topPicks;
};