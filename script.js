function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Solusi terbaik: cari tombol berdasarkan onclick
    const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => 
        btn.getAttribute('onclick')?.includes(tabName)
    );
    if (activeBtn) activeBtn.classList.add('active');
    
    document.getElementById(tabName + '-tab').classList.add('active');
    document.getElementById('hasil').innerHTML = '';
}
// Hitung Baris Geometri: Un = a * r^(n-1)
function hitungBaris() {
    const a = parseFloat(document.getElementById('suku1').value);
    const r = parseFloat(document.getElementById('rasio').value);
    const n = parseInt(document.getElementById('n').value);
    
    if (isNaN(a) || isNaN(r) || isNaN(n) || n <= 0) {
        document.getElementById('hasil').innerHTML = '❌ Masukkan angka yang valid!';
        return;
    }
    
    const un = a * Math.pow(r, n - 1);
    
    // PENJELASAN LENGKAP SEPERTI TULISAN TANGAN
    let penjelasan = `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                    color: white; padding: 20px; border-radius: 15px; margin-bottom: 15px; 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: 'Comic Sans MS', cursive;">
            <h3 style="margin: 0 0 15px 0; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                📝 PENJELASAN LENGKAP
            </h3>
            
            <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; 
                        border-left: 5px solid #FFD700; line-height: 1.8; font-size: 1.1rem;">
                <div style="margin-bottom: 12px;">
                    <strong>✅ Diketahui:</strong><br>
                    - Suku pertama (a) = <strong>${a}</strong><br>
                    - Rasio (r) = <strong>${r}</strong><br>
                    - Suku ke-<strong>${n}</strong>
                </div>
                
                <div style="margin-bottom: 12px;">
                    <strong>📐 Rumus Baris Geometri:</strong><br>
                    <span style="font-size: 1.3rem; color: #FFD700;">U<sub>n</sub> = a × r<sup>n-1</sup></span>
                </div>
                
                <div style="margin-bottom: 12px; padding: 15px; 
                            background: rgba(255,255,255,0.2); border-radius: 8px;">
                    <strong>🔢 Langkah Penyelesaian:</strong><br><br>
                    
                    <div style="text-align: center; margin: 10px 0;">
                        <span style="display: block; font-size: 1.4rem; margin: 8px 0;">
                            U<sub>${n}</sub> = ${a} × ${r}<sup>${n-1}</sup>
                        </span>
                    </div>
                    
                    <div style="text-align: center; margin: 10px 0;">
                        <span style="display: block; font-size: 1.4rem; margin: 8px 0; color: #90EE90;">
                            ${r}<sup>${n-1}</sup> = ${Math.pow(r, n-1).toLocaleString('id-ID', {maximumFractionDigits: 4})}
                        </span>
                    </div>
                    
                    <div style="text-align: center;">
                        <span style="display: block; font-size: 1.5rem; margin: 8px 0; 
                                    color: #FF6B6B; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">
                            U<sub>${n}</sub> = <strong>${un.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong>
                        </span>
                    </div>
                </div>
                
                <div style="margin-top: 15px; padding: 10px; 
                            background: rgba(255,215,0,0.2); border-radius: 8px; 
                            border: 2px solid #FFD700; text-align: center;">
                    <strong>🎯 JAWABAN:</strong><br>
                    <span style="font-size: 1.4rem; color: #FFD700;">Suku ke-${n} = ${un.toLocaleString('id-ID', {maximumFractionDigits: 4})}</span>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('hasil').innerHTML = penjelasan;
}

// Hitung Deret Geometri: Sn = a * (r^n - 1) / (r - 1)
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
        // Kasus r = 1
        sn = a * n;
        penjelasan = `
            <div style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%); 
                        color: #333; padding: 20px; border-radius: 15px; margin-bottom: 15px; 
                        box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: 'Comic Sans MS', cursive;">
                <h3 style="margin: 0 0 15px 0; text-align: center; color: #e74c3c; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                    📝 PENJELASAN LENGKAP (KASUS KHUSUS r = 1)
                </h3>
                
                <div style="background: rgba(255,255,255,0.9); padding: 15px; border-radius: 10px; 
                            border-left: 5px solid #e74c3c; line-height: 1.8; font-size: 1.1rem;">
                    <div style="margin-bottom: 12px;">
                        <strong>✅ Diketahui:</strong><br>
                        - Suku pertama (a) = <strong>${a}</strong><br>
                        - Rasio (r) = <strong>1</strong><br>
                        - Jumlah <strong>${n}</strong> suku
                    </div>
                    
                    <div style="margin-bottom: 12px;">
                        <strong>📐 Kasus Khusus (r = 1):</strong><br>
                        <span style="font-size: 1.3rem; color: #e74c3c;">S<sub>n</sub> = a × n</span>
                    </div>
                    
                    <div style="margin-bottom: 12px; padding: 15px; 
                                background: rgba(231,76,60,0.1); border-radius: 8px;">
                        <strong>🔢 Langkah Penyelesaian:</strong><br><br>
                        
                        <div style="text-align: center; margin: 15px 0;">
                            <span style="display: block; font-size: 1.5rem; margin: 10px 0; color: #e74c3c;">
                                S<sub>${n}</sub> = ${a} × ${n}
                            </span>
                            <span style="display: block; font-size: 1.6rem; margin: 10px 0; 
                                        color: #27ae60; font-weight: bold;">
                                S<sub>${n}</sub> = <strong>${sn.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong>
                            </span>
                        </div>
                    </div>
                    
                    <div style="margin-top: 15px; padding: 10px; 
                                background: rgba(46,204,113,0.2); border-radius: 8px; 
                                border: 2px solid #27ae60; text-align: center;">
                        <strong>🎯 JAWABAN:</strong><br>
                        <span style="font-size: 1.4rem; color: #27ae60;">Jumlah ${n} suku = ${sn.toLocaleString('id-ID', {maximumFractionDigits: 4})}</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Rumus umum
        const rn = Math.pow(r, n);
        sn = a * (rn - 1) / (r - 1);
        
        penjelasan = `
            <div style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); 
                        color: #333; padding: 20px; border-radius: 15px; margin-bottom: 15px; 
                        box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-family: 'Comic Sans MS', cursive;">
                <h3 style="margin: 0 0 15px 0; text-align: center; color: #3498db; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                    📝 PENJELASAN LENGKAP (RUMUS UMUM)
                </h3>
                
                <div style="background: rgba(255,255,255,0.9); padding: 15px; border-radius: 10px; 
                            border-left: 5px solid #3498db; line-height: 1.8; font-size: 1.1rem;">
                    <div style="margin-bottom: 12px;">
                        <strong>✅ Diketahui:</strong><br>
                        - Suku pertama (a) = <strong>${a}</strong><br>
                        - Rasio (r) = <strong>${r}</strong><br>
                        - Jumlah <strong>${n}</strong> suku
                    </div>
                    
                    <div style="margin-bottom: 12px;">
                        <strong>📐 Rumus Deret Geometri:</strong><br>
                        <span style="font-size: 1.3rem; color: #3498db;">S<sub>n</sub> = a × (r<sup>n</sup> - 1)/(r - 1)</span>
                    </div>
                    
                    <div style="margin-bottom: 12px; padding: 15px; 
                                background: rgba(52,152,219,0.1); border-radius: 8px;">
                        <strong>🔢 Langkah Penyelesaian:</strong><br><br>
                        
                        <div style="text-align: center; margin: 10px 0;">
                            <span style="display: block; font-size: 1.3rem; margin: 8px 0;">
                                S<sub>${n}</sub> = ${a} × (${r}<sup>${n}</sup> - 1)/( ${r} - 1)
                            </span>
                        </div>
                        
                        <div style="text-align: center; margin: 10px 0;">
                            <span style="display: block; font-size: 1.3rem; margin: 8px 0; color: #f39c12;">
                                ${r}<sup>${n}</sup> = ${rn.toLocaleString('id-ID', {maximumFractionDigits: 4})}
                            </span>
                        </div>
                        
                        <div style="text-align: center;">
                            <span style="display: block; font-size: 1.5rem; margin: 8px 0; 
                                        color: #27ae60; font-weight: bold;">
                                S<sub>${n}</sub> = <strong>${sn.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong>
                            </span>
                        </div>
                    </div>
                    
                    <div style="margin-top: 15px; padding: 10px; 
                                background: rgba(46,204,113,0.2); border-radius: 8px; 
                                border: 2px solid #27ae60; text-align: center;">
                        <strong>🎯 JAWABAN:</strong><br>
                        <span style="font-size: 1.4rem; color: #27ae60;">Jumlah ${n} suku = ${sn.toLocaleString('id-ID', {maximumFractionDigits: 4})}</span>
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