import React from 'react';
import { Component } from '../../types/component';

const Preview = () => (
  <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
    Click Me
  </button>
);

const ReactCode = `import React from 'react';

export default function RedButton() {
  return (
    <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
      Click Me
    </button>
  );
}`;

const VueCode = `<template>
  <button class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
    Click Me
  </button>
</template>

<script setup>
// Component logic here
</script>`;

const HtmlCode = `<!DOCTYPE html>
<html>
<head>
  <style>
    .btn-red {
      padding: 0.75rem 1.5rem;
      background-color: #dc2626;
      color: white;
      font-weight: 500;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    .btn-red:hover {
      background-color: #b91c1c;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body>
  <button class="btn-red">Click Me</button>
</body>
</html>`;

export const redButton: Component = {
  id: 'button-red',
  title: 'Red Button',
  description: 'A vibrant red button perfect for destructive actions or important calls-to-action.',
  category: 'Button',
  tags: ['button', 'red', 'danger', 'action'],
  preview: Preview,
  codes: [
    { language: 'react', code: ReactCode, label: 'React' },
    { language: 'vue', code: VueCode, label: 'Vue' },
    { language: 'html', code: HtmlCode, label: 'HTML/CSS' },
  ],
  author: 'UI Library',
  createdAt: '2024-01-08',
};

