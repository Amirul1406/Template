import React from 'react';
import { Component } from '../../types/component';

const Preview = () => (
  <div className="w-full max-w-sm bg-dark-surface border border-dark-border rounded-lg p-6 shadow-lg">
    <h3 className="text-xl font-bold mb-2">Card Title</h3>
    <p className="text-gray-400 mb-4">
      This is a beautiful card component with a clean design.
    </p>
    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
      Learn More
    </button>
  </div>
);

const ReactCode = `import React from 'react';

export default function Card() {
  return (
    <div className="w-full max-w-sm bg-dark-surface border border-dark-border rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-2">Card Title</h3>
      <p className="text-gray-400 mb-4">
        This is a beautiful card component with a clean design.
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Learn More
      </button>
    </div>
  );
}`;

const VueCode = `<template>
  <div class="w-full max-w-sm bg-dark-surface border border-dark-border rounded-lg p-6 shadow-lg">
    <h3 class="text-xl font-bold mb-2">Card Title</h3>
    <p class="text-gray-400 mb-4">
      This is a beautiful card component with a clean design.
    </p>
    <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
      Learn More
    </button>
  </div>
</template>

<script setup>
// Component logic here
</script>`;

const HtmlCode = `<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      width: 100%;
      max-width: 24rem;
      background-color: #141414;
      border: 1px solid #262626;
      border-radius: 0.5rem;
      padding: 1.5rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    .card-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .card-text {
      color: #9ca3af;
      margin-bottom: 1rem;
    }
    .card-btn {
      padding: 0.5rem 1rem;
      background-color: #2563eb;
      color: white;
      border-radius: 0.25rem;
      border: none;
      cursor: pointer;
    }
    .card-btn:hover {
      background-color: #1d4ed8;
    }
  </style>
</head>
<body>
  <div class="card">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">
      This is a beautiful card component with a clean design.
    </p>
    <button class="card-btn">Learn More</button>
  </div>
</body>
</html>`;

export const basicCard: Component = {
  id: 'card-basic',
  title: 'Basic Card',
  description: 'A clean and modern card component perfect for displaying content.',
  category: 'Card',
  tags: ['card', 'content', 'layout'],
  preview: Preview,
  codes: [
    { language: 'react', code: ReactCode, label: 'React' },
    { language: 'vue', code: VueCode, label: 'Vue' },
    { language: 'html', code: HtmlCode, label: 'HTML/CSS' },
  ],
  author: 'UI Library',
  createdAt: '2024-01-02',
};


