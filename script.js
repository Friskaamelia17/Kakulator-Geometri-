// 🚀 KALCULATOR BARIS & DERET GEOMETRI v3.0 - ULTRA DETAIL
console.log("🧮 SCRIPT.JS v3.0 LOADED - ULTRA DETAIL MODE!");

function switchTab(tabName) {
    // Hapus active class dari semua
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Aktifkan tombol yang diklik
    const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => 
        btn.getAttribute('onclick')?.includes(tabName)
    );
    if (activeBtn) activeBtn.classList.add('active');
    
    // Aktifkan tab content
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // Clear hasil
    document.getElementById('hasil').innerHTML = '';
}

// ============================================================================
// 🆕 BARIS GEOMETRI - ULTRA DETAIL (7+ LANGKAH)
// ============================================================================
function hitungBaris() {
    const a = parseFloat(document.getElementById('suku1').value);
    const r = parseFloat(document.getElementById('rasio').value);
    const n = parseInt(document.getElementById('n').value);
    
    if (isNaN(a) || isNaN(r) || isNaN(n) || n <= 0) {
        document.getElementById('hasil').innerHTML = `
            <div style="padding: 20px; text-align: center; color: #e74c3c; font-size: 1.2rem;">
                ❌ <strong>Masukkan angka yang valid!</strong><br>
                Pastikan a, r, dan n adalah angka positif
            </div>
        `;
        return;
    }
    
    // Hitung step by step
    const pangkat = n - 1;
    const rPangkat = Math.pow(r, pangkat);
    const un = a * rPangkat;
    
    // Contoh suku-suku awal
    const u1 = a;
    const u2 = a * r;
    const u3 = a * Math.pow(r, 2);
    
    const penjelasan = `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                    color: white; padding: 30px; border-radius: 25px; margin: 20px 0; 
                    box-shadow: 0 20px 50px rgba(102,126,234,0.4); font-family: 'Comic Sans MS', cursive; max-width: 100%; overflow: hidden;">
            
            <!-- HEADER -->
            <div style="text-align: center; margin-bottom: 25px;">
                <h1 style="font-size: 2rem; margin: 0; text-shadow: 3px 3px 8px rgba(0,0,0,0.5);">
                    🧮 BARIS GEOMETRI
                </h1>
                <div style="font-size: 1.4rem; opacity: 0.9;">Mencari Suku ke-<strong>${n}</strong></div>
            </div>
            
            <!-- DATA INPUT -->
            <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 15px; margin-bottom: 25px; border-left: 6px solid #FFD700;">
                <h3 style="margin: 0 0 15px 0; color: #FFD700;">📋 DATA YANG DIKETAHUI</h3>
                <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 15px; font-size: 1.2rem;">
                    <div><strong>Suku Pertama (a):</strong></div>
                    <div style="color: #FFD700; font-weight: bold; font-size: 1.3rem;">${a}</div>
                    
                    <div><strong>Rasio (r):</strong></div>
                    <div style="color: #FFD700; font-weight: bold; font-size: 1.3rem;">${r}</div>
                    
                    <div><strong>Suku ke-n:</strong></div>
                    <div style="color: #FFD700; font-weight: bold; font-size: 1.3rem;">${n}</div>
                </div>
            </div>
            
            <!-- POLA BARIS -->
            <div style="background: rgba(255,255,255,0.15); padding: 20px; border-radius: 15px; margin-bottom: 25px;">
                <h3 style="margin: 0 0 15px 0; color: #90EE90;">📖 POLA BARIS GEOMETRI</h3>
                <div style="font-size: 1.3rem; line-height: 2;">
                    U₁ = <strong style="color: #90EE90;">${u1}</strong><br>
                    U₂ = U₁ × r = <strong style="color: #90EE90;">${u2.toLocaleString('id-ID', {maximumFractionDigits: 2})}</strong><br>
                    U₃ = U₂ × r = <strong style="color: #90EE90;">${u3.toLocaleString('id-ID', {maximumFractionDigits: 2})}</strong><br>
                    ⋮<br>
                    <strong style="font-size: 1.5rem; color: #FFD700;">U<sub>${n}</sub> = U<sub>${n-1}</sub> × r</strong>
                </div>
            </div>
            
            <!-- RUMUS -->
            <div style="background: rgba(255,215,0,0.25); padding: 25px; border-radius: 20px; margin-bottom: 25px; text-align: center;">
                <h3 style="margin: 0 0 20px 0; color: #FF6B00;">📐 RUMUS MATEMATIS</h3>
                <div style="font-size: 2.2rem; color: #FF6B00; font-weight: bold; line-height: 1.4;">
                    U<sub>n</sub> = a × r<sup>${pangkat}</sup>
                </div>
            </div>
            
            <!-- PERHITUNGAN GRID -->
            <div style="background: linear-gradient(135deg, #FF6B6B, #FF8E8E); padding: 30px; border-radius: 20px; margin-bottom: 25px;">
                <h3 style="text-align: center; margin: 0 0 25px 0; color: white; font-size: 1.6rem;">🔢 PERHITUNGAN LENGKAP</h3>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr 2fr; gap: 20px; font-size: 1.4rem; text-align: center;">
                    <div style="color: #FFD700; font-weight: bold; padding: 15px; background: rgba(255,255,255,0.2); border-radius: 10px;">
                        <div style="font-size: 1.6rem;">①</div>
                        <div>${r}<sup>${pangkat}</sup></div>
                    </div>
                    
                    <div style="color: #90EE90; font-weight: bold; padding: 15px; background: rgba(255,255,255,0.2); border-radius: 10px;">
                        <div style="font-size: 1.6rem;">②</div>
                        <div>${rPangkat.toLocaleString('id-ID', {maximumFractionDigits: 4})}</div>
                    </div>
                    
                    <div style="color: #FFEB3B; font-weight: bold; padding: 15px; background: rgba(255,255,255,0.2); border-radius: 10px;">
                        <div style="font-size: 1.6rem;">③</div>
                        <div>${a} × ${rPangkat.toLocaleString('id-ID', {maximumFractionDigits: 4})}</div>
                    </div>
                </div>
                
                <div style="margin-top: 25px; padding: 25px; background: rgba(255,255,255,0.3); border-radius: 15px; font-size: 2.8rem; font-weight: bold; color: white; text-shadow: 3px 3px 6px rgba(0,0,0,0.5);">
                    U<sub>${n}</sub> = <strong style="color: #FFF; font-size: 3rem;">${un.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong>
                </div>
            </div>
            
            <!-- HASIL FINAL -->
            <div style="background: linear-gradient(135deg, #4CAF50, #81C784); padding: 30px; border-radius: 25px; text-align: center;">
                <h2 style="margin: 0 0 15px 0; font-size: 2rem; color: white;">🎯 HASIL AKHIR</h2>
                <div style="font-size: 3rem; font-weight: bold; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                    Suku ke-<strong>${n}</strong> = <strong>${un.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('hasil').innerHTML = penjelasan;
}

// ============================================================================
// 🆕 DERET GEOMETRI - ULTRA DETAIL (10+ LANGKAH)
// ============================================================================
function hitungDeret() {
    const a = parseFloat(document.getElementById('deret_a').value);
    const r = parseFloat(document.getElementById('deret_r').value);
    const n = parseInt(document.getElementById('deret_n').value);
    
    if (isNaN(a) || isNaN(r) || isNaN(n) || n <= 0) {
        document.getElementById('hasil').innerHTML = `
            <div style="padding: