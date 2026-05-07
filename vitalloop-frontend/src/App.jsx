import React from 'react';

const MOCK_TASKS = [
  { id: 1, title: "Biyofilik Mola", desc: "Pencereyi aç ve 2 dakika uzaklara bak.", icon: "🌿" },
  { id: 2, title: "Mataranı Doldur", desc: "Plastik kullanımını azalt, suyunu tazele.", icon: "💧" },
  { id: 3, title: "Postür Kontrolü", desc: "Omuzlarını geriye at ve derin bir nefes al.", icon: "🧘" }
];

function App() {
  return (
    <div className="min-h-screen bg-[#F8F4EA] text-[#2D3142] p-6 md:p-12 font-sans">
      <header className="max-w-xl mx-auto mb-12 text-center md:text-left">
        <h1 className="text-4xl font-bold text-[#4F6F52]">VitalLoop</h1>
        <p className="opacity-60 italic mt-1 font-medium">"Dijital monotonluğu doğanla kır."</p>
      </header>

      <main className="max-w-xl mx-auto space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="text-xl font-bold text-[#4F6F52] opacity-90">Günün Görevleri</h2>
          <span className="text-xs font-bold uppercase tracking-widest opacity-40">Denge Skoru: %85</span>
        </div>

        {MOCK_TASKS.map(task => (
          <div key={task.id} className="bg-white p-6 rounded-[32px] border border-[#D2E9E9] flex items-center gap-6 shadow-sm hover:shadow-md transition-all">
            <div className="text-4xl bg-[#D2E9E9] w-20 h-20 flex items-center justify-center rounded-3xl shrink-0">
              {task.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg leading-tight">{task.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{task.desc}</p>
            </div>
            <button className="bg-[#4F6F52] text-white px-5 py-2 rounded-full text-sm font-bold active:scale-95 transition-transform shrink-0">
              Tamamla
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;