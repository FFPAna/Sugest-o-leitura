// Definição dos Níveis de Ensino
export enum ReadingLevel {
  Ciclo2 = '2.º Ciclo (5.º e 6.º anos)',
  Ciclo3 = '3.º Ciclo (7.º, 8.º e 9.º anos)',
  Secundario = 'Secundário',
}

// Definição dos Géneros Literários
export enum BookGenre {
  Aventura = 'Aventura',
  Fantasia = 'Fantasia',
  FiccaoCientifica = 'Ficção Científica',
  Romance = 'Romance',
  Misterio = 'Mistério / Policial',
  BandaDesenhada = 'Banda Desenhada / Manga',
  NaoFiccao = 'Não-Ficção / Curiosidades',
  Poesia = 'Poesia',
  Terror = 'Terror',
  Classicos = 'Clássicos',
}

// Definição do Tamanho do Livro
export enum BookLength {
  Curto = 'Curto (Para ler numa tarde)',
  Medio = 'Médio (Para ler numa semana)',
  Longo = 'Longo (Uma grande jornada)',
}

// Estrutura de um Livro
export interface Book {
  id: string;
  title: string;
  author: string;
  genre: BookGenre;
  level: ReadingLevel;
  length: BookLength;
  synopsis: string;
}

// Estado das preferências do utilizador
export interface UserPreferences {
  selectedGenres: BookGenre[];
  level: ReadingLevel | null;
  length: BookLength | null;
}