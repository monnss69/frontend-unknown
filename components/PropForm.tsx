'use client';

type PropType = 'string' | 'number' | 'boolean';
type PropSchema = Record<string, PropType>;

interface PropFormProps {
  schema: PropSchema;
  values: Record<string, unknown>;
  onChange: (key: string, value: unknown) => void;
}

export default function PropForm({ schema, values, onChange }: PropFormProps) {
  return (
    <form className="space-y-2">
      {Object.entries(schema).map(([key, type]) => (
        <label key={key} className="block text-sm">
          <span className="mb-1 block font-medium capitalize">{key}</span>
          {type === 'boolean' ? (
            <input
              type="checkbox"
              checked={Boolean(values[key])}
              onChange={(e) => onChange(key, e.target.checked)}
            />
          ) : (
            <input
              type={type === 'number' ? 'number' : 'text'}
              className="border rounded px-2 py-1 w-full"
              value={String(values[key] ?? '')}
              onChange={(e) =>
                onChange(
                  key,
                  type === 'number' ? Number(e.target.value) : e.target.value
                )
              }
            />
          )}
        </label>
      ))}
    </form>
  );
}
