'use client';

import dynamic from 'next/dynamic';
import type { editor } from 'monaco-editor';
import { useCallback } from 'react';

const MonacoEditor = dynamic(async () => (await import('@monaco-editor/react')).default, {
  ssr: false,
});

interface EditorProps {
  value: string;
  onChange: (code: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  const handleChange = useCallback((val?: string) => {
    onChange(val ?? '');
  }, [onChange]);

  return (
    <MonacoEditor
      height="400px"
      defaultLanguage="typescript"
      value={value}
      onChange={handleChange}
      options={{ minimap: { enabled: false }, fontSize: 14 }}
    />
  );
}
