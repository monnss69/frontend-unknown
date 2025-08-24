'use client';

import { SandpackProvider, SandpackPreview } from '@sandpack/react';
import { useMemo } from 'react';

interface PreviewProps {
  code: string;
  props: Record<string, unknown>;
}

export default function Preview({ code, props }: PreviewProps) {
  const files = useMemo(
    () => ({
      '/App.tsx': code,
      '/index.tsx': `import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from './App';\n\nconst root = document.getElementById('root');\nReactDOM.createRoot(root!).render(<App {...${JSON.stringify(
        props
      )}} />);\n`,
    }),
    [code, props]
  );

  return (
    <SandpackProvider
      template="react-ts"
      files={files}
      options={{
        externalResources: ['https://cdn.tailwindcss.com'],
        classes: { 'sp-preview-container': '!h-full' },
      }}
    >
      <SandpackPreview style={{ height: '100%' }} />
    </SandpackProvider>
  );
}
