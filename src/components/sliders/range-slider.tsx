import React, { useState } from 'react';
import { Component } from '../../types/component';

const Preview = () => {
  const [value, setValue] = useState(50);
  
  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-400">Volume</span>
        <span className="text-sm text-white">{value}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-dark-border rounded-lg appearance-none cursor-pointer slider"
        style={{
          background: `linear-gradient(to right, #2563eb 0%, #2563eb ${value}%, #262626 ${value}%, #262626 100%)`
        }}
      />
    </div>
  );
};

const ReactCode = `import React, { useState } from 'react';

export default function Slider() {
  const [value, setValue] = useState(50);
  
  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-400">Volume</span>
        <span className="text-sm text-white">{value}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-dark-border rounded-lg appearance-none cursor-pointer"
        style={{
          background: \`linear-gradient(to right, #2563eb 0%, #2563eb \${value}%, #262626 \${value}%, #262626 100%)\`
        }}
      />
    </div>
  );
}`;

const VueCode = `<template>
  <div class="w-full max-w-md">
    <div class="flex justify-between mb-2">
      <span class="text-sm text-gray-400">Volume</span>
      <span class="text-sm text-white">{{ value }}%</span>
    </div>
    <input
      type="range"
      min="0"
      max="100"
      :value="value"
      @input="value = $event.target.value"
      class="w-full h-2 bg-dark-border rounded-lg appearance-none cursor-pointer"
      :style="{
        background: \`linear-gradient(to right, #2563eb 0%, #2563eb \${value}%, #262626 \${value}%, #262626 100%)\`
      }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
</script>`;

const HtmlCode = `<!DOCTYPE html>
<html>
<head>
  <style>
    .slider-container {
      width: 100%;
      max-width: 28rem;
    }
    .slider-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    .slider-label {
      font-size: 0.875rem;
      color: #9ca3af;
    }
    .slider-value {
      font-size: 0.875rem;
      color: white;
    }
    .slider {
      width: 100%;
      height: 0.5rem;
      background-color: #262626;
      border-radius: 0.5rem;
      outline: none;
      -webkit-appearance: none;
    }
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1rem;
      height: 1rem;
      background-color: #2563eb;
      border-radius: 50%;
      cursor: pointer;
    }
    .slider::-moz-range-thumb {
      width: 1rem;
      height: 1rem;
      background-color: #2563eb;
      border-radius: 50%;
      cursor: pointer;
      border: none;
    }
  </style>
</head>
<body>
  <div class="slider-container">
    <div class="slider-header">
      <span class="slider-label">Volume</span>
      <span class="slider-value" id="value">50%</span>
    </div>
    <input
      type="range"
      min="0"
      max="100"
      value="50"
      class="slider"
      oninput="updateValue(this.value)"
    />
  </div>
  
  <script>
    function updateValue(val) {
      document.getElementById('value').textContent = val + '%';
    }
  </script>
</body>
</html>`;

export const rangeSlider: Component = {
  id: 'slider-range',
  title: 'Range Slider',
  description: 'A customizable range slider with visual feedback and smooth interactions.',
  category: 'Slider',
  tags: ['slider', 'input', 'range'],
  preview: Preview,
  codes: [
    { language: 'react', code: ReactCode, label: 'React' },
    { language: 'vue', code: VueCode, label: 'Vue' },
    { language: 'html', code: HtmlCode, label: 'HTML/CSS' },
  ],
  author: 'UI Library',
  createdAt: '2024-01-04',
};

