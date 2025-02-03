export default async function RadioItemLarge({ value, name, label, required }: { value: string, name: string, label: string, required: boolean }) {
  return <div className="flex justify-center items-center w-full h-12">
    <input type="radio" name={name} id={value} value={value} className="hidden peer" required={required ? true : false} />
    <label
      htmlFor={value}
      className={`py-2 px-4 text-sm size-full border rounded-md  peer-checked:bg-slate-950 peer-checked:text-white peer-checked:border-slate-950 border-gray-300 hover:border-slate-950 font-[family-name:var(--font-geist-mono)] transition-all duration-500`}
    >
      {label}
    </label>
  </div>
}