import React from 'react';

const MOCK_TASKS = [
  { id: 1, title: "Biyofilik Mola", desc: "Pencereyi aç ve 2 dakika uzaklara bak.", icon: "🌿" },
  { id: 2, title: "Mataranı Doldur", desc: "Plastik kullanımını azalt, suyunu tazele.", icon: "💧" },
  { id: 3, title: "Postür Kontrolü", desc: "Omuzlarını geriye at ve derin bir nefes al.", icon: "🧘" }
];

function App() {
  return (
    <div style={{ backgroundColor: '#F8F4EA', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <header style={{ maxWidth: '500px', margin: '0 auto 40px auto' }}>
        <h1 style={{ color: '#4F6F52', fontSize: '32px', margin: '0' }}>VitalLoop</h1>
        <p style={{ fontStyle: 'italic', opacity: '0.7' }}>"Dijital monotonluğu doğanla kır."</p>
      </header>

      <main style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: '#4F6F52', fontWeight: 'bold' }}>
          <span>Günün Görevleri</span>
          <span style={{ fontSize: '12px', opacity: '0.5' }}>DENGE SKORU: %85</span>
        </div>

        {MOCK_TASKS.map(task => (
          <div key={task.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '24px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #D2E9E9' }}>
            <div style={{ fontSize: '30px', backgroundColor: '#D2E9E9', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyCenter: 'center', borderRadius: '16px', flexShrink: 0, justifyContent: 'center' }}>
              {task.icon}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0', fontSize: '18px' }}>{task.title}</h3>
              <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#888' }}>{task.desc}</p>
            </div>
            <button style={{ backgroundColor: '#4F6F52', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
              Bitti
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;