'use client';

import { useEffect, useState } from 'react';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import PropForm from '../components/PropForm';
import { validateComponent } from '../lib/validation';

const defaultCode = `export default function Example({ message = "Hello" }) {
  return <div className="p-4 text-xl">{message}</div>;
}`;

type PropValues = Record<string, unknown>;

export default function Page() {
  const [code, setCode] = useState(defaultCode);
  const [props, setProps] = useState<PropValues>({ message: 'Hello' });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const result = validateComponent(code);
    setError(result.valid ? null : result.error || 'Invalid component');
  }, [code]);

  return (
    <main className="p-4 grid gap-4 md:grid-cols-2">
      <section>
        <Editor value={code} onChange={setCode} />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </section>
      <section className="space-y-4">
        <PropForm
          schema={{ message: 'string' }}
          values={props}
          onChange={(key, value) => setProps((p) => ({ ...p, [key]: value }))}
        />
        <div className="h-80 border rounded overflow-hidden">
          <Preview code={code} props={props} />
        </div>
      </section>
    </main>
  );
}
