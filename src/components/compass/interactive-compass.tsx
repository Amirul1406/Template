import React, { useEffect, useRef, useState } from 'react';
import { Component } from '../../types/component';
import { alphaToHeadingDeg } from '../../utils/heading';
import './compass.css';

const Preview = () => {
  const [direction, setDirection] = useState(0); // Direction in radians
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      const northOffsetDeg = 270;
      const headingDeg = alphaToHeadingDeg(direction, northOffsetDeg);
      const percentPer360 = 200;
      const basePercent = 308;
      const value = basePercent + (headingDeg / 360) * percentPer360;
      wrapperRef.current.style.transform = `translateX(${-value}%)`;
    }
  }, [direction]);

  // Auto-rotate for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev + 0.02) % (Math.PI * 2));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="compass-container">
      <div className="compass-arrow">▼</div>
      <div className="compass-wrapper" ref={wrapperRef}>
        <img src="/assets/compass/compass.png" className="compass-img" alt="Compass" />
        <img src="/assets/compass/compass.png" className="compass-img" alt="Compass" />
        <img src="/assets/compass/compass.png" className="compass-img" alt="Compass" />
        <img src="/assets/compass/compass.png" className="compass-img" alt="Compass" />
      </div>
      <div className="compass-arrow">▲</div>
    </div>
  );
};

const ReactCode = `import { useEffect, useRef } from "react";
import { alphaToHeadingDeg } from "../utils/heading";
import compassImg from "/assets/compass/compass.png";

interface CompassProps {
  direction: number; // Camera alpha in radians
}

const Compass = ({ direction }: CompassProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      const northOffsetDeg = 270;
      const headingDeg = alphaToHeadingDeg(direction, northOffsetDeg);
      const percentPer360 = 200;
      const basePercent = 308;
      const value = basePercent + (headingDeg / 360) * percentPer360;
      wrapperRef.current.style.transform = \`translateX(\${-value}%)\`;
    }
  }, [direction]);

  return (
    <div className="compass-container">
      <div className="compass-arrow">▼</div>
      <div className="compass-wrapper" ref={wrapperRef}>
        <img src={compassImg} className="compass-img" alt="Compass" />
        <img src={compassImg} className="compass-img" alt="Compass" />
        <img src={compassImg} className="compass-img" alt="Compass" />
        <img src={compassImg} className="compass-img" alt="Compass" />
      </div>
      <div className="compass-arrow">▲</div>
    </div>
  );
};

export default Compass;`;

const ReactStylesCode = `.compass-container {
  position: absolute;
  top: 0.5rem;
  right: calc(50% - 150px);
  width: 300px;
  height: auto;
  overflow: hidden;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.compass-wrapper {
  position: relative;
  display: flex;
  transform: translateX(-120%);
}

.compass-img {
  width: 600px;
  left: 0;
}

.compass-arrow {
  font-size: 1rem;
  color: white;
  position: relative;
  pointer-events: none;
  align-self: center;
}

@media screen and (max-width: 700px) {
  .compass-container {
    scale: 0.9;
  }
}

@media screen and (max-width: 500px) {
  .compass-container {
    scale: 0.7;
  }
}`;

const VueCode = `<template>
  <div class="compass-container">
    <div class="compass-arrow">▼</div>
    <div class="compass-wrapper" ref="wrapperRef">
      <img v-for="i in 4" :key="i" :src="compassImg" class="compass-img" alt="Compass" />
    </div>
    <div class="compass-arrow">▲</div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { alphaToHeadingDeg } from '../utils/heading';
import compassImg from '/assets/compass/compass.png';

const props = defineProps({
  direction: {
    type: Number,
    required: true
  }
});

const wrapperRef = ref(null);

watch(() => props.direction, (newDirection) => {
  if (wrapperRef.value) {
    const northOffsetDeg = 270;
    const headingDeg = alphaToHeadingDeg(newDirection, northOffsetDeg);
    const percentPer360 = 200;
    const basePercent = 308;
    const value = basePercent + (headingDeg / 360) * percentPer360;
    wrapperRef.value.style.transform = \`translateX(\${-value}%)\`;
  }
}, { immediate: true });
</script>`;

const HtmlCode = `<!DOCTYPE html>
<html>
<head>
  <style>
    .compass-container {
      position: absolute;
      top: 0.5rem;
      right: calc(50% - 150px);
      width: 300px;
      height: auto;
      overflow: hidden;
      z-index: 2;
      display: flex;
      flex-direction: column;
    }
    .compass-wrapper {
      position: relative;
      display: flex;
      transform: translateX(-120%);
    }
    .compass-img {
      width: 600px;
      left: 0;
    }
    .compass-arrow {
      font-size: 1rem;
      color: white;
      position: relative;
      pointer-events: none;
      align-self: center;
    }
  </style>
</head>
<body>
  <div class="compass-container">
    <div class="compass-arrow">▼</div>
    <div class="compass-wrapper" id="compassWrapper">
      <img src="/assets/compass/compass.png" class="compass-img" alt="Compass" />
      <img src="/assets/compass/compass.png" class="compass-img" alt="Compass" />
      <img src="/assets/compass/compass.png" class="compass-img" alt="Compass" />
      <img src="/assets/compass/compass.png" class="compass-img" alt="Compass" />
    </div>
    <div class="compass-arrow">▲</div>
  </div>
  
  <script>
    function updateCompass(direction) {
      const wrapper = document.getElementById('compassWrapper');
      const northOffsetDeg = 270;
      const alphaDeg = (direction * 180) / Math.PI;
      const raw = 90 - alphaDeg + northOffsetDeg;
      const headingDeg = ((raw % 360) + 360) % 360;
      const percentPer360 = 200;
      const basePercent = 308;
      const value = basePercent + (headingDeg / 360) * percentPer360;
      wrapper.style.transform = \`translateX(\${-value}%)\`;
    }
    
    // Example: Update compass with direction in radians
    // updateCompass(0); // North
    // updateCompass(Math.PI / 2); // East
  </script>
</body>
</html>`;

export const interactiveCompass: Component = {
  id: 'compass-interactive',
  title: 'Interactive Compass',
  description: 'A rotating compass component that displays direction based on camera or device orientation. Perfect for 3D applications and navigation interfaces.',
  category: 'Compass',
  tags: ['compass', 'navigation', 'direction', '3d'],
  preview: Preview,
  codes: [
    { language: 'react', code: ReactCode, label: 'React' },
    { language: 'react', code: ReactStylesCode, label: 'React Styles' },
    { language: 'vue', code: VueCode, label: 'Vue' },
    { language: 'html', code: HtmlCode, label: 'HTML/CSS' },
  ],
  author: 'UI Library',
  createdAt: '2024-01-06',
};

