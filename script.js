function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => 
        btn.getAttribute('onclick')?.includes(tabName)
    );
    if (activeBtn) activeBtn.classList.add('active');
    
    document.getElementById(tabName + '-tab').classList.add('active');
    document.getElementById('hasil').innerHTML = '';
}

// 🆕 BARIS GEOMETRI - SUPER DETAIL
function hitungBaris() {
    const a = parseFloat(document.getElementById('suku1').value);
    const r = parseFloat(document.getElementById('rasio').value);
    const n = parseInt(document.getElementById('n').value);
    
    if (isNaN(a) || isNaN(r) || isNaN(n) || n <= 0) {
        document.getElementById('hasil').innerHTML = '❌ Masukkan angka yang valid!';
        return;
    }
    
    const pangkat = n - 1;
    const rPangkat = Math.pow(r, pangkat);
    const un = a * rPangkat;
    
    const penjelasan = `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                    color: white; padding: 25px; border-radius: 20px; margin-bottom: 20px; 
                    box-shadow: 0 15px 40px rgba(0,0,0,0.3); font-family: 'Comic Sans MS', cursive;">
            <h2 style="margin: 0 0 20px 0; text-align: center; text-shadow: 3px 3px 6px rgba(0,0,0,0.5); font-size: 1.6rem;">
                🧮 BARIS GEOMETRI - SUKU KE-${n}
            </h2>
            
            <div style="background: rgba(255,255,255,0.15); padding: 20px; border-radius: 15px; 
                        border-left: 6px solid #FFD700; line-height: 1.9; font-size: 1.15rem;">
                
                <div style="margin-bottom: 20px; padding: 15px; 
                            background: rgba(255,215,0,0.2); border-radius: 12px;">
                    <strong>📋 DATA MASUKAN:</strong><br><br>
                    - Suku pertama = <span style="color: #FFD700; font-size: 1.2rem;">${a}</span><br>
                    - Rasio (r) = <span style="color: #FFD700; font-size: 1.2rem;">${r}</span><br>
                    - Suku yang dicari = <span style="color: #FFD700; font-size: 1.2rem;">ke-${n}</span>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <strong>📖 POLA BARIS GEOMETRI:</strong><br>
                    U₁ = ${a}<br>
                    U₂ = ${a} × ${r} = ${(a*r).toLocaleString('id-ID', {maximumFractionDigits: 2})}<br>
                    U₃ = ${a} × ${r}² = ${(a*r*r).toLocaleString('id-ID', {maximumFractionDigits: 2})}<br>
                    ...<br>
                    <strong>U<sub>${n}</sub> = ${a} × ${r}<sup>${pangkat}</sup></strong>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <strong>📐 RUMUS MATEMATIS:</strong><br>
                    <div style="font-size: 1.6rem; color: #FFD700; text-align: center; 
                                padding: 20px; background: rgba(255,215,0,0.3); border-radius: 12px; margin: 10px 0;">
                        <strong>U<sub>n</sub> = a × r<sup>n-1</sup></strong>
                    </div>
                </div>
                
                <div style="padding: 25px; background: linear-gradient(135deg, #FF6B6B, #FF8E8E); 
                            color: white; border-radius: 18px; text-align: center;">
                    <div style="font-size: 1.5rem; margin-bottom: 15px;">
                        <strong>🔢 PERHITUNGAN LENGKAP:</strong>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 15px; text-align: left; margin: 15px 0;">
                        <div style="font-size: 1.4rem; color: #FFD700;">Langkah 1:</div>
                        <div style="font-size: 1.4rem;"><strong>${r}<sup>${pangkat}</sup></strong></div>
                        
                        <div style="font-size: 1.4rem; color: #90EE90;">Langkah 2:</div>
                        <div style="font-size: 1.4rem; color: #90EE90;">${rPangkat.toLocaleString('id-ID', {maximumFractionDigits: 4})}</div>
                        
                        <div style="font-size: 1.4rem; color: #FFEB3B;">Langkah 3:</div>
                        <div style="font-size: 1.4rem; color: #FFEB3B;">${a} × ${rPangkat.toLocaleString('id-ID', {maximumFractionDigits: 4})}</div>
                    </div>
                    
                    <div style="font-size: 2.2rem; margin: 20px 0; color: #FFF; font-weight: bold;
                                text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                        <strong>U<sub>${n}</sub> = ${un.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong>
                    </div>
                </div>
                
                <div style="margin-top: 20px; padding: 20px; 
                            background: linear-gradient(135deg, #4CAF50, #81C784); 
                            border-radius: 15px; text-align: center; color: white;">
                    <div style="font-size: 1.8rem; margin-bottom: 10px; font-weight: bold;">
                        🎯 HASIL AKHIR
                    </div>
                    <div style="font-size: 2.5rem;">
                        Suku ke-<strong>${n}</strong> = <strong>${un.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('hasil').innerHTML = penjelasan;
}

// 🆕 DERET GEOMETRI - ULTRA DETAIL (Sudah ada dari sebelumnya)
function hitungDeret() {
    const a = parseFloat(document.getElementById('deret_a').value);
    const r = parseFloat(document.getElementById('deret_r').value);
    const n = parseInt(document.getElementById('deret_n').value);
    
    if (isNaN(a) || isNaN(r) || isNaN(n) || n <= 0) {
        document.getElementById('hasil').innerHTML = '❌ Masukkan angka yang valid!';
        return;
    }
    
    let sn, penjelasan;
    
    if (Math.abs(r - 1) < 0.0001) {
        sn = a * n;
        penjelasan = `
            <div style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); 
                        color: #333; padding: 25px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.2); 
                        font-family: 'Comic Sans MS', cursive;">
                <h2 style="text-align: center; color: #e74c3c; font-size: 1.6rem; margin-bottom: 20px;">
                    ⚠️ KASUS KHUSUS: r = 1
                </h2>
                <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 15px; 
                            border-left: 6px solid #e74c3c; line-height: 1.9; font-size: 1.15rem;">
                    <strong>💡 Alasannya:</strong> Semua suku sama ${a}, ${a}, ${a}... (${n} kali)<br><br>
                    <div style="font-size: 2rem; color: #27ae60; text-align: center; font-weight: bold;">
                        S<sub>${n}</sub> = ${a} × ${n} = <strong>${sn.toLocaleString('id-ID')}</strong>
                    </div>
                </div>
            </div>
        `;
    } else {
        const rn = Math.pow(r, n);
        const pembilang = rn - 1;
        const penyebut = r - 1;
        sn = a * (pembilang / penyebut);
        
        penjelasan = `
            <div style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); 
                        color: #333; padding: 25px; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.2); 
                        font-family: 'Comic Sans MS', cursive;">
                <h2 style="text-align: center; color: #3498db; font-size: 1.6rem; margin-bottom: 20px;">
                    📊 DERET GEOMETRI - ${n} SUKU
                </h2>
                
                <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 15px; 
                            border-left: 6px solid #3498db; line-height: 1.9; font-size: 1.15rem;">
                    
                    <div style="margin-bottom: 15px;">
                        <strong>📋 DATA:</strong> a=${a}, r=${r}, n=${n}
                    </div>
                    
                    <div style="font-size: 1.6rem; color: #3498db; text-align: center; padding: 15px;
                                background: rgba(52,152,219,0.2); border-radius: 12px; margin: 15px 0;">
                        S<sub>n</sub> = a × (r<sup>n</sup> - 1) / (r - 1)
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 10px; font-size: 1.2rem;">
                        <div>① r<sup>${n}</sup>:</div>
                        <div><strong>${rn.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong></div>
                        
                        <div>② Pembilang:</div>
                        <div>${rn.toLocaleString('id-ID', {maximumFractionDigits: 4})} - 1 = <strong>${pembilang.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong></div>
                        
                        <div>③ Penyebut:</div>
                        <div>${r} - 1 = <strong>${penyebut}</strong></div>
                        
                        <div>④ Hasil:</div>
                        <div style="font-size: 1.6rem; color: #27ae60; font-weight: bold;">
                            <strong>${sn.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 20px; background: linear-gradient(135deg, #27ae60, #2ecc71);
                                color: white; border-radius: 15px; text-align: center; font-size: 1.8rem; font-weight: bold;">
                        🎯 Jumlah ${n} suku = <strong>${sn.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong>
                    </div>
                </div>
            </div>
        `;
    }
    
    document.getElementById('hasil').innerHTML = penjelasan;
}

// Enter key support
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (document.getElementById('baris-tab').classList.contains('active')) {
            hitungBaris();
        } else {
            hitungDeret();
        }
    }
});