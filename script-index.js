 function openModal(modalId, company, item, qty, price) {
            if (modalId === 'modal-ambil') {
                document.getElementById('ambil-company').innerText = company;
                document.getElementById('ambil-item').innerText = item;
                document.getElementById('ambil-price').innerText = price;
                document.getElementById('ambil-qty-input').value = parseInt(qty.replace(/\D/g, ''));
            } else if (modalId === 'modal-nego') {
                document.getElementById('nego-company').innerText = company;
                document.getElementById('nego-price').innerText = price + " / kg";
            } else if (modalId === 'modal-sampel') {
                document.getElementById('sampel-company').innerText = company;
                document.getElementById('sampel-item').innerText = item;
            }

            const overlay = document.getElementById('modal-overlay');
            overlay.style.zIndex = "100";
            overlay.classList.remove('opacity-0', 'pointer-events-none');
            overlay.classList.add('opacity-100', 'pointer-events-auto');

            const modal = document.getElementById(modalId);
            modal.style.zIndex = "110";
            modal.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
            modal.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
        }

        function openTradeModal(type, item, price) {
            const modal = document.getElementById('trade-modal');
            const overlay = document.getElementById('modal-overlay');
            const header = document.getElementById('modal-header');
            const badge = document.getElementById('modal-badge');
            const title = document.getElementById('modal-title');
            const subtitle = document.getElementById('modal-subtitle');
            const extraFields = document.getElementById('extra-fields');
            const submitBtn = document.getElementById('modal-submit-btn');
            const inputRing = document.getElementById('input-ring');
            const icon = document.getElementById('item-icon');

            document.getElementById('target-item').innerText = item;
            document.getElementById('target-price').innerText = "Rp " + price + " / kg";
            badge.innerText = type;
            extraFields.innerHTML = "";

            if (type === 'BELI') {
                header.className = "p-8 text-white relative bg-green-600 transition-colors duration-500";
                title.innerText = "Konfirmasi Pembelian";
                subtitle.innerText = "Stok akan dikirim ke alamat Anda setelah pembayaran.";
                submitBtn.className = "w-full py-4 rounded-2xl text-white font-black shadow-lg bg-green-600 hover:bg-green-700 shadow-green-200 transition-all";
                submitBtn.innerText = "BAYAR SEKARANG";
                inputRing.className = "flex items-center border border-slate-200 rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-green-100 focus-within:border-green-500 transition-all";
                icon.className = "fa-solid fa-cart-shopping text-green-600";
                extraFields.innerHTML = `
            <div>
                <label class="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Metode Pembayaran</label>
                <select class="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none text-sm font-bold text-slate-700 focus:border-green-500 transition-all">
                    <option>Saldo TaniTrade (Rp 12.500.000)</option>
                    <option>Transfer Bank (VA)</option>
                    <option>QRIS / E-Wallet</option>
                </select>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Alamat Pengiriman</label>
                <textarea class="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none text-sm font-medium text-slate-600 focus:border-green-500" rows="2">Gudang Saya, Jl. Pertanian No. 45, Kab. Bandung.</textarea>
            </div>`;
            } else {
                header.className = "p-8 text-white relative bg-slate-900 transition-colors duration-500";
                title.innerText = "Konfirmasi Penjualan";
                subtitle.innerText = "Pastikan barang Anda sesuai grade sebelum dijemput kurir.";
                submitBtn.className = "w-full py-4 rounded-2xl text-white font-black shadow-lg bg-slate-900 hover:bg-slate-800 shadow-slate-200 transition-all";
                submitBtn.innerText = "PROSES PENJUALAN";
                inputRing.className = "flex items-center border border-slate-200 rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-slate-100 focus-within:border-slate-900 transition-all";
                icon.className = "fa-solid fa-truck-ramp-box text-slate-900";
                extraFields.innerHTML = `
            <div>
                <label class="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Kualitas Barang (Grade)</label>
                <div class="grid grid-cols-2 gap-3">
                    <label class="flex items-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                        <input type="radio" name="grade" checked> <span class="text-xs font-bold">Grade A (Super)</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                        <input type="radio" name="grade"> <span class="text-xs font-bold">Grade B (Normal)</span>
                    </label>
                </div>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Titik Penjemputan</label>
                <div class="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-center gap-3">
                    <i class="fa-solid fa-location-dot text-blue-600"></i>
                    <p class="text-xs font-bold text-blue-800 text-left">Lahan Sukamulya (Lokasi Terdaftar)</p>
                </div>
            </div>`;
            }

            overlay.style.zIndex = "100";
            overlay.classList.remove('opacity-0', 'pointer-events-none');
            overlay.classList.add('opacity-100', 'pointer-events-auto');

            modal.style.zIndex = "110";
            modal.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
            modal.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
        }

        function closeAllModals() {
            const overlay = document.getElementById('modal-overlay');
            overlay.classList.remove('opacity-100', 'pointer-events-auto');
            overlay.classList.add('opacity-0', 'pointer-events-none');

            const modalIds = ['modal-ambil', 'modal-nego', 'modal-sampel', 'trade-modal'];
            modalIds.forEach(id => {
                const modal = document.getElementById(id);
                if (modal) {
                    modal.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
                    modal.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
                }
            });
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('main-sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            const isOpen = sidebar.classList.contains('translate-x-0');

            if (isOpen) {
                sidebar.classList.replace('translate-x-0', '-translate-x-full');
                overlay.classList.replace('opacity-100', 'opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            } else {
                overlay.classList.remove('hidden');
                sidebar.classList.replace('-translate-x-full', 'translate-x-0');
                setTimeout(() => overlay.classList.replace('opacity-0', 'opacity-100'), 10);
            }
        }