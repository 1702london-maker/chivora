import { ReactNode } from "react";

export function FieldGroup({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono-chivora text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
        {label}
      </label>
      {children}
      {hint && <p className="text-xs text-ink-mute">{hint}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue-tint";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={inputClass} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} rows={props.rows ?? 4} className={inputClass} />;
}

export function SelectInput(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={inputClass}>
      {props.children}
    </select>
  );
}

export function CheckboxOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm text-ink-soft transition-colors has-[:checked]:border-blue has-[:checked]:bg-blue-tint has-[:checked]:text-blue">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="accent-blue"
      />
      {label}
    </label>
  );
}

export function RadioOption({
  name,
  label,
  checked,
  onChange,
}: {
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm text-ink-soft transition-colors has-[:checked]:border-blue has-[:checked]:bg-blue-tint has-[:checked]:text-blue">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="accent-blue"
      />
      {label}
    </label>
  );
}
