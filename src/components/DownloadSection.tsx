import { useState } from 'react';
import { Download, Check, FileCode, Package } from 'lucide-react';
import { Component } from '../types/component';

interface DownloadSectionProps {
  component: Component;
}

export default function DownloadSection({ component }: DownloadSectionProps) {
  const [downloaded, setDownloaded] = useState<string | null>(null);

  const downloadFile = (content: string, filename: string, language: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(language);
    setTimeout(() => setDownloaded(null), 2000);
  };

  const downloadAll = () => {
    component.codes.forEach((code, index) => {
      setTimeout(() => {
        const extension = code.language === 'react' ? 'tsx' : code.language === 'vue' ? 'vue' : 'html';
        const filename = `${component.id}-${code.language}.${extension}`;
        downloadFile(code.code, filename, code.language);
      }, index * 300);
    });
  };

  return (
    <div className="bg-dark-surface border border-dark-border rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <Package className="text-blue-500" size={24} />
        <h3 className="text-xl font-semibold">Download Component</h3>
      </div>
      
      <p className="text-gray-400 mb-6">
        Download code files for this component in your preferred framework.
      </p>

      <div className="space-y-3 mb-6">
        {component.codes.map((code) => (
          <button
            key={code.language}
            onClick={() => {
              const extension = code.language === 'react' ? 'tsx' : code.language === 'vue' ? 'vue' : 'html';
              const filename = `${component.id}-${code.language}.${extension}`;
              downloadFile(code.code, filename, code.language);
            }}
            className="w-full flex items-center justify-between p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-blue-500 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <FileCode size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              <div className="text-left">
                <div className="font-medium text-white">{code.label}</div>
                <div className="text-sm text-gray-400">
                  {code.language === 'react' ? '.tsx' : code.language === 'vue' ? '.vue' : '.html'}
                </div>
              </div>
            </div>
            {downloaded === code.language ? (
              <div className="flex items-center gap-2 text-green-400">
                <Check size={18} />
                <span className="text-sm">Downloaded!</span>
              </div>
            ) : (
              <Download size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
            )}
          </button>
        ))}
      </div>

      <button
        onClick={downloadAll}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        <Download size={20} />
        <span>Download All Files</span>
      </button>

      {component.codes.some((c) => c.language === 'react') && (
        <div className="mt-4 p-4 bg-dark-bg border border-dark-border rounded-lg">
          <p className="text-sm text-gray-400 mb-2">
            <strong className="text-white">Note:</strong> For React components, you may also need:
          </p>
          <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
            <li>CSS/SCSS file for styles (if using separate stylesheet)</li>
            <li>Utility functions from <code className="text-blue-400">utils/heading.ts</code> (for compass)</li>
            <li>Image assets from <code className="text-blue-400">public/assets/</code></li>
          </ul>
        </div>
      )}
    </div>
  );
}

