"use client"
import { useState } from \'react\'
import { Sparkles, Video, PersonStanding, Shirt, Wand2, Download, History, Zap } from \'lucide-react\'

export default function Home() {
  const [tab, setTab] = useState(\'image\')
  const [prompt, setPrompt] = useState(\'cyberpunk girl streetwear, neon tokyo night, cinematic\')
  const [image, setImage] = useState(\'\')
  const [loading, setLoading] = useState(false)
  const [style, setStyle] = useState(\'Realistic\')

  const generateImage = async () => {
    setLoading(true)
    setImage(\'\')
    const encoded = encodeURIComponent(`${prompt}, ${style} style, 8k, ultra detailed`)
    // Pakai API Gratis Pollinations - bisa diganti Stability AI / Replicate nanti
    const url = `https://image.pollinations.ai/p/${encoded}?width=1024&height=1024&seed=${Math.floor(Math.random()*9999)}&nologo=true`
    setTimeout(() => {
      setImage(url)
      setLoading(false)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-[#070709] text-white selection:bg-[#FF3EA5]/30">
      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-[#FF3EA5] opacity-20 blur-[250px] rounded-full -top-40 -left-40"></div>
        <div className="absolute w-[700px] h-[700px] bg-[#8A5CFF] opacity-20 blur-[250px] rounded-full top-20 -right-40"></div>
      </div>

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#FF3EA5] to-[#8A5CFF] flex items-center justify-center font-black text-xl">N</div>
          <span className="font-black text-xl tracking-tight">NEXA<span className="font-light">AI</span></span>
          <span className="hidden md:block ml-2 px-3 py-1 rounded-full bg-white/10 text-xs border border-white/10">BETA 2.0</span>
        </div>
        <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition">Deploy ke Vercel 🚀</button>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 text-center pt-4">
        <h1 className="text-5xl md:text-7xl font-black leading-[0.9]">BIKIN KONTEN <br/>
          <span className="bg-gradient-to-r from-[#FF3EA5] via-[#8A5CFF] to-[#00D1FF] bg-clip-text text-transparent">VIRAL DALAM 10 DETIK.</span>
        </h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto">Satu platform AI untuk Image, Video, Motion & Outfit. Dibuat khusus untuk Gen-Z Creator.</p>
        
        <div className="flex flex-wrap justify-center gap-3 mt-8 p-2 bg-white/5 backdrop-blur-xl rounded-full w-fit mx-auto border border-white/10">
          <button onClick={()=>setTab(\'image\')} className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition ${tab===\'image\'?\'bg-white text-black\':\'text-white/70 hover:text-white\'}`}><Sparkles size={16}/> Image Generate</button>
          <button onClick={()=>setTab(\'video\')} className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition ${tab===\'video\'?\'bg-white text-black\':\'text-white/70 hover:text-white\'}`}><Video size={16}/> Video Generate</button>
          <button onClick={()=>setTab(\'motion\')} className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition ${tab===\'motion\'?\'bg-white text-black\':\'text-white/70 hover:text-white\'}`}><PersonStanding size={16}/> Motion Control</button>
          <button onClick={()=>setTab(\'outfit\')} className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition ${tab===\'outfit\'?\'bg-white text-black\':\'text-white/70 hover:text-white\'}`}><Shirt size={16}/> AI Outfit</button>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        {tab === \'image\' && (
          <div className="grid lg:grid-cols-[380px_1fr] gap-6">
            <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[32px] p-6 h-fit">
              <h3 className="font-bold text-lg flex items-center gap-2"><Wand2 size={18} className="text-[#FF3EA5]"/> AI Image Generator</h3>
              <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Tulis prompt kamu..." className="w-full mt-5 bg-black/40 border border-white/10 rounded-2xl p-4 text-sm h-32 focus:outline-none focus:border-[#8A5CFF]" />
              <p className="text-xs font-bold mt-4 mb-2">Style</p>
              <div className="grid grid-cols-3 gap-2">
                {[\'Anime\',\'Realistic\',\'3D\'].map(s=>(
                  <button key={s} onClick={()=>setStyle(s)} className={`py-2.5 rounded-xl text-xs font-bold border ${style===s?\'bg-white text-black border-white\':\'bg-white/5 border-white/10\'}`}>{s}</button>
                ))}
              </div>
              <button onClick={generateImage} disabled={loading} className="w-full mt-6 bg-gradient-to-r from-[#FF3EA5] to-[#8A5CFF] py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(255,62,165,0.5)] transition disabled:opacity-50">
                {loading ? \'Lagi Ngelukis...\' : \'Generate ✨\'}
              </button>
            </div>
            <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[32px] p-6 min-h-[500px] flex flex-col">
              <div className="flex justify-between items-center text-sm"><span className="font-bold">Hasil Generate</span>{image && <a href={image} download target="_blank" className="flex items-center gap-1 text-xs bg-white text-black px-3 py-1.5 rounded-full font-bold"><Download size={12}/> Download</a>}</div>
              <div className="mt-4 flex-1 bg-black/30 rounded-[24px] border border-dashed border-white/10 flex items-center justify-center overflow-hidden relative min-h-[400px]">
                {!image && !loading && <div className="text-center p-10 opacity-30"><Sparkles size={48} className="mx-auto"/><p className="text-sm mt-4">Hasil gambar akan muncul di sini</p></div>}
                {loading && <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center"><div className="w-10 h-10 border-4 border-white/20 border-t-[#FF3EA5] rounded-full animate-spin"></div><p className="text-xs mt-3 animate-pulse">NEXA lagi mikir...</p></div>}
                {image && <img src={image} className="w-full h-full object-cover absolute inset-0"/>}
              </div>
            </div>
          </div>
        )}

        {tab === \'video\' && (
          <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[32px] p-8 text-center py-20">
            <Video size={48} className="mx-auto opacity-20"/>
            <h3 className="font-bold text-xl mt-4">AI Video Generate</h3>
            <p className="text-sm text-white/50 max-w-lg mx-auto mt-2">Fitur ini butuh API Key RunwayML / Replicate. Sudah aku siapkan kodenya, tinggal tempel API Key kamu di file <code className="bg-white/10 px-2 py-1 rounded">app/api/generate-video/route.ts</code></p>
            <button className="mt-6 bg-white text-black px-8 py-3 rounded-full font-bold">Coming Soon - Hubungkan API</button>
          </div>
        )}

        {tab === \'motion\' && (
          <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[32px] p-8">
            <h3 className="font-bold text-2xl">Motion Control Studio</h3>
            <p className="text-sm text-white/50">Kontrol gerakan karakter untuk video dance / TikTok. (Demo Interaktif)</p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-black rounded-[24px] aspect-video flex items-center justify-center text-6xl border border-white/10">🕺</div>
              <div className="space-y-4">
                <label className="block text-xs font-bold">Speed <input type="range" className="w-full accent-[#FF3EA5]"/></label>
                <label className="block text-xs font-bold">Smoothness <input type="range" className="w-full accent-[#8A5CFF]"/></label>
                <button className="w-full bg-gradient-to-r from-[#FF3EA5] to-[#8A5CFF] py-4 rounded-2xl font-black">Export Motion</button>
              </div>
            </div>
          </div>
        )}

        {tab === \'outfit\' && (
          <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[32px] p-8 text-center py-20">
            <Shirt size={48} className="mx-auto opacity-20"/>
            <h3 className="font-bold text-xl mt-4">AI Outfit Try-On</h3>
            <p className="text-sm text-white/50 max-w-lg mx-auto mt-2">Upload foto kamu dan pilih outfit. Fitur ini pakai API Fashn.ai / Replicate IDM-VTON. Code-nya sudah siap.</p>
            <label className="mt-6 inline-block bg-white text-black px-8 py-3 rounded-full font-bold cursor-pointer">Upload Foto <input type="file" className="hidden"/></label>
          </div>
        )}
      </section>
    </main>
  )
}