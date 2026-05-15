const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Görünümü güzelleştiren asıl veriler burada:
const tasks = [
  { 
    id: 1, 
    title: "Biyofilik Mola", 
    desc: "Pencereyi aç ve 2 dakika uzaklara bak.", 
    icon: "🍃", 
    time: "2 dk" 
  },
  { 
    id: 2, 
    title: "Su Riti", 
    desc: "Mataranı tazele, sürdürülebilir bir yudum al.", 
    icon: "🌊", 
    time: "1 dk" 
  },
  { 
    id: 3, 
    title: "Postür Kontrolü", 
    desc: "Omuzlarını geriye at ve derin bir nefes al.", 
    icon: "🧘‍♀️", 
    time: "1 dk" 
  }
];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});
