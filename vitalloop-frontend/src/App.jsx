import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  // 1. Durum Yönetimi: Görevler buraya kaydedilecek
  const [tasks, setTasks] = useState([]);

  // 2. Veri Çekme: Sayfa açıldığında Backend'e (server.js) gider
  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Henüz Backend çalışmıyor olabilir:", err));
  }, []);

  // 3. Tasarım Stilleri (Senin sevdiğin o şık görünüm)
  const styles = {
    container: { backgroundColor: '#FDFCF9', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif', color: '#2D3142', display: 'flex', flexDirection: 'column', alignItems: 'center' },
    nav: { display: 'flex', gap: '20px', marginBottom: '40px', backgroundColor: 'white', padding: '10px 30px', borderRadius: '50px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
    link: { textDecoration: 'none', color: '#4F6F52', fontWeight: 'bold', fontSize: '14px' },
    header: { textAlign: 'center', marginBottom: '40px' },
    mainCard: { backgroundColor: 'white', width: '100%', maxWidth: '600px', padding: '30px', borderRadius: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.03)', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #F0EFEA' },
    taskCard: { backgroundColor: 'white', width: '100%', maxWidth: '600px', padding: '20px', borderRadius: '25px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px', border: '1px solid #F0EFEA' },
    iconBox: { fontSize: '30px', backgroundColor: '#F0F7F3', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', flexShrink: 0 },
    button: { backgroundColor: '#4F6F52', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' },
    badge: { backgroundColor: '#EBF5EE', color: '#4F6F52', fontSize: '10px', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }
  };

  return (
    <Router>
      <div style={styles.container}>
        
        {/* Navigasyon Menüsü */}
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Anasayfa</Link>
          <Link to="/profil" style={styles.link}>Profil</Link>
        </nav>

        <Routes>
          {/* ANASAYFA (Fullstack Tasarım) */}
          <Route path="/" element={
            <>
              <header style={styles.header}>
                <h1 style={{fontSize: '42px', color: '#4F6F52', margin: '0', fontWeight: '800'}}>VitalLoop</h1>
                <p style={{fontStyle: 'italic', opacity: 0.7}}>"Dijital monotonluğu doğanla kır."</p>
              </header>

              <div style={styles.mainCard}>
                <div>
                  <h2 style={{margin: 0, color: '#4F6F52'}}>Günün Ritmi</h2>
                  <p style={{margin: 0, opacity: 0.6, fontSize: '14px'}}>
                    {tasks.length > 0 ? `${tasks.length} görev seni bekliyor.` : "Yükleniyor..."}
                  </p>
                </div>
                <div style={{textAlign: 'right'}}>
                  <span style={{fontSize: '32px', fontWeight: 'bold', color: '#4F6F52'}}>85/100</span>
                  <div style={{fontSize: '10px', opacity: 0.5}}>DENGE SKORU</div>
                </div>
              </div>

              {/* Backend'den gelen görevlerin listelendiği alan */}
              <div style={{width: '100%', maxWidth: '600px'}}>
                {tasks.map(task => (
                  <div key={task.id} style={styles.taskCard}>
                    <div style={styles.iconBox}>{task.icon || "🍃"}</div>
                    <div style={{flex: 1}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <h3 style={{margin: 0, fontSize: '18px'}}>{task.title}</h3>
                        {task.time && <span style={styles.badge}>{task.time}</span>}
                      </div>
                      <p style={{margin: '4px 0 0 0', color: '#888', fontSize: '14px'}}>{task.desc}</p>
                    </div>
                    <button style={styles.button} onClick={() => alert(`${task.title} tamamlandı! 🌿`)}>Bitir</button>
                  </div>
                ))}
              </div>
            </>
          } />

          {/* PROFİL SAYFASI */}
          <Route path="/profil" element={
            <div style={{textAlign: 'center', backgroundColor: 'white', padding: '50px', borderRadius: '30px', width: '100%', maxWidth: '400px', boxShadow: '0 10px 25px rgba(0,0,0,0.03)'}}>
              <div style={{fontSize: '60px', marginBottom: '20px'}}>👩‍💻</div>
              <h2 style={{color: '#4F6F52', margin: '0'}}>Ezgi</h2>
              <p style={{opacity: 0.6}}>Kocaeli Üniversitesi - Matematik</p>
              <hr style={{margin: '20px 0', opacity: 0.1}}/>
              <p style={{fontSize: '14px', fontWeight: 'bold'}}>VitalLoop Kurucusu & Fullstack Geliştirici</p>
              <Link to="/" style={{display: 'inline-block', marginTop: '20px', color: '#4F6F52', fontWeight: 'bold'}}>Geri Dön</Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
