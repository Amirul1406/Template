export type CodeLanguage = 'react' | 'vue' | 'html' | 'vanilla';

export interface CodeSnippet {
  language: CodeLanguage;
  code: string;
  label: string;
}

export interface Component {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  preview: React.ComponentType<any>;
  codes: CodeSnippet[];
  author?: string;
  createdAt?: string;
}

