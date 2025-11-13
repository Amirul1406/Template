import React from 'react';
import { Component } from '../../types/component';

const Preview = () => (
  <button className="px-6 py-3 bg-dark-surface border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-all duration-200">
    Secondary Button
  </button>
);

const ReactCode = `import React from 'react';

export default function SecondaryButton() {
  return (
    <button className="px-6 py-3 bg-dark-surface border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-all duration-200">
      Secondary Button
    </button>
  );
}`;

const VueCode = `<template>
  <button class="px-6 py-3 bg-dark-surface border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-all duration-200">
    Secondary Button
  </button>
</template>

<script setup>
// Component logic here
</script>`;

const HtmlCode = `<!DOCTYPE html>
<html>
<head>
  <style>
    .btn-secondary {
      padding: 0.75rem 1.5rem;
      background-color: #141414;
      border: 2px solid #2563eb;
      color: #2563eb;
      font-weight: 500;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-secondary:hover {
      background-color: #2563eb;
      color: white;
    }
  </style>
</head>
<body>
  <button class="btn-secondary">Secondary Button</button>
</body>
</html>`;

export const secondaryButton: Component = {
  id: 'button-secondary',
  title: 'Secondary Button',
  description: 'An outlined button with hover fill effect, perfect for secondary actions.',
  category: 'Button',
  tags: ['button', 'secondary', 'outline'],
  preview: Preview,
  codes: [
    { language: 'react', code: ReactCode, label: 'React' },
    { language: 'vue', code: VueCode, label: 'Vue' },
    { language: 'html', code: HtmlCode, label: 'HTML/CSS' },
  ],
  author: 'UI Library',
  createdAt: '2024-01-01',
};


