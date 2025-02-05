export async function RadioItemLarge({ value, name, label, required }: { value: string, name: string, label: string, required: boolean }) {
  return <div className="flex justify-center items-center w-full h-12">
    <input type="radio" name={name} id={value} value={value} className="hidden peer" required={required ? true : false} />
    <label
      htmlFor={value}
      className={`py-3 px-4 align-middle text-sm size-full border rounded-md peer-checked:border-slate-950 peer-checked:font-bold peer-checked:border-3 border-gray-300 hover:border-slate-600 peer-checked:-rotate-1 peer-checked:scale-[101%] font-[family-name:var(--font-geist-mono)] transition-all duration-500`}
    >
      {label}
    </label>
  </div>
}

export async function RadioItemSmall({ value, name, label, required }: { value: string, name: string, label: string, required: boolean }) {
  return <div className="flex justify-center items-center w-full h-12">
    <input type="radio" name={name} id={value} value={value} className="hidden peer" required={required ? true : false} />
    <label
      htmlFor={value}
      className={`py-2 px-2 text-sm text-center size-10 border rounded-md font-[family-name:var(--font-geist-mono)] peer-checked:border-3 peer-checked:-rotate-6 peer-checked:scale-110 peer-checked:border-slate-950 peer-checked:font-bold transition-all duration-300`}
    >
      {label}
    </label>
  </div>
}

const RadioItem = {
  RadioItemLarge,
  RadioItemSmall
}
export default RadioItem;