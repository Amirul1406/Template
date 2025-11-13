import React from 'react';
import { Component } from '../../types/component';

const Preview = () => (
  <div className="flex items-center justify-center gap-2">
    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
  </div>
);

const ReactCode = `import React from 'react';

export default function DotsLoader() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
    </div>
  );
}`;

const VueCode = `<template>
  <div class="flex items-center justify-center gap-2">
    <div class="w-3 h-3 bg-blue-600 rounded-full animate-bounce" :style="{ animationDelay: '0ms' }"></div>
    <div class="w-3 h-3 bg-blue-600 rounded-full animate-bounce" :style="{ animationDelay: '150ms' }"></div>
    <div class="w-3 h-3 bg-blue-600 rounded-full animate-bounce" :style="{ animationDelay: '300ms' }"></div>
  </div>
</template>

<script setup>
// Component logic here
</script>`;

const HtmlCode = `<!DOCTYPE html>
<html>
<head>
  <style>
    .dots-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    .dot {
      width: 0.75rem;
      height: 0.75rem;
      background-color: #2563eb;
      border-radius: 50%;
      animation: bounce 1.4s ease-in-out infinite;
    }
    .dot:nth-child(1) {
      animation-delay: 0ms;
    }
    .dot:nth-child(2) {
      animation-delay: 150ms;
    }
    .dot:nth-child(3) {
      animation-delay: 300ms;
    }
    @keyframes bounce {
      0%, 80%, 100% {
        transform: scale(0);
      }
      40% {
        transform: scale(1);
      }
    }
  </style>
</head>
<body>
  <div class="dots-container">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</body>
</html>`;

export const dotsLoader: Component = {
  id: 'loader-dots',
  title: 'Dots Loader',
  description: 'A bouncing dots loader animation, great for compact loading indicators.',
  category: 'Loading',
  tags: ['loading', 'dots', 'bounce'],
  preview: Preview,
  codes: [
    { language: 'react', code: ReactCode, label: 'React' },
    { language: 'vue', code: VueCode, label: 'Vue' },
    { language: 'html', code: HtmlCode, label: 'HTML/CSS' },
  ],
  author: 'UI Library',
  createdAt: '2024-01-05',
};


