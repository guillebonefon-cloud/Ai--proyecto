// La Nueva Barcelonesa - Premium E-commerce Logic
// Data

const PRODUCTS = [
  {
    id: 'olympic-4',
    name: 'Sándwich Olímpico',
    desc: 'Jamón, queso, morrón, huevo y aceitunas. Pan artesanal.',
    price: 159,
    cat: 'salados',
    tag: 'Clásico',
    image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?q=80&w=600&auto=format&fit=crop',
    unit: '4 unidades'
  },
  {
    id: 'ricotta',
    name: 'Torta de Ricotta',
    desc: 'Masa sablée, ricotta fresca y ralladura de limón.',
    price: 189,
    cat: 'dulces',
    tag: 'Destacada',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    unit: 'Porción 200g'
  },
  {
    id: 'medialunas-jq',
    name: 'Medialunas de Jamón y Queso',
    desc: 'Hojaldre mantecoso, J&Q premium, horneadas hoy.',
    price: 420,
    cat: 'salados',
    tag: 'Horneado hoy',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    unit: '12 unidades'
  },
  {
    id: 'saladitos',
    name: 'Saladitos de Copetín Variados',
    desc: 'Surtido de sabores: atún, palmitos, J&Q, salame.',
    price: 480,
    cat: 'salados',
    tag: 'Para eventos',
    image: 'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?q=80&w=600&auto=format&fit=crop',
    unit: '24 unidades'
  },
  {
    id: 'empanadas',
    name: 'Empanaditas Copetín',
    desc: 'Carne, J&Q, humita. Masa casera frita al horno.',
    price: 390,
    cat: 'salados',
    tag: 'Bocado caliente',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop',
    unit: '12 unidades'
  },
  {
    id: 'jesuitas',
    name: 'Jesuitas de Lunch',
    desc: 'Hojaldre caramelizado, jamón y queso gratinado.',
    price: 520,
    cat: 'salados',
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop',
    unit: '12 unidades'
  },
  {
    id: 'torta-masa',
    name: 'Torta de Masas Finas',
    desc: 'Selección de masitas artesanales, dulce de leche.',
    price: 890,
    cat: 'dulces',
    tag: 'Regalo',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=600&auto=format&fit=crop',
    unit: '1 kg'
  },
  {
    id: 'alfajores',
    name: 'Alfajores Artesanales',
    desc: 'Maicena y chocolate, dulce de leche repostero.',
    price: 320,
    cat: 'dulces',
    tag: 'Dulce',
    image: 'https://images.unsplash.com/photo-1488477181946-64290103bbd6?q=80&w=600&auto=format&fit=crop',
    unit: '12 unidades'
  },
  {
    id: 'postre-chaja',
    name: 'Postre Chajá',
    desc: 'Bizcochuelo, merengue, duraznos y crema.',
    price: 420,
    cat: 'dulces',
    tag: 'Postre',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600&auto=format&fit=crop',
    unit: 'Porción'
  },
  {
    id: 'lunch-5',
    name: 'Lunch para 5 personas',
    desc: '60 bocados combinados. Ideal reuniones.',
    price: 3990,
    cat: 'eventos',
    tag: 'Evento',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop',
    unit: '60 bocados'
  },
  {
    id: 'lunch-10',
    name: 'Lunch para 10 personas',
    desc: '120 bocados combinados. Cumpleaños.',
    price: 7590,
    cat: 'eventos',
    tag: 'Más vendido',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop',
    unit: '120 bocados'
  },
  {
    id: 'lunch-20',
    name: 'Lunch para 20 personas',
    desc: '240 bocados premium entre salados y masas.',
    price: 13990,
    cat: 'eventos',
    tag: 'Evento grande',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop',
    unit: '240 bocados'
  }
];

const PACKAGES = [
  { people: 5, price: 3990, bocados: 60, desc: '60 bocados combinados. Perfecto para reuniones íntimas.', items: 'Surtidos + saladitos + jesuitas' },
  { people: 10, price: 7590, bocados: 120, desc: '120 bocados combinados. El favorito para cumpleaños.', items: 'Surtidos + olímpicos + saladitos + jesuitas', popular: true },
  { people: 15, price: 9290, bocados: 180, desc: '50 J&Q, 50 surtidos, 50 saladitos, 30 jesuitas, bocados calientes + postre obsequio.', items: '50 J&Q + 50 surtidos + 50 saladitos + 30 jesuitas + calientes', gift: 'Postre obsequio' },
  { people: 20, price: 13990, bocados: 240, desc: '240 bocados combinados entre salados y masas finas.', items: '240 bocados premium salados y dulces' },
  { people: 100, price: 74990, bocados: 1200, desc: 'Paquete masivo. Eventos corporativos y fiestas grandes.', items: '1200 bocados + asesoramiento + entrega' },
];

const SUELTOS = [
  { id: 'surtidos', name: 'Sándwiches de Copetín Surtidos', price: 38, desc: 'Jamón, queso, salame, palmitos' },
  { id: 'olimpicos', name: 'Sándwiches Olímpicos de Copetín', price: 40, desc: 'Jamón, queso, morrón, huevo' },
  { id: 'saladitos_cop', name: 'Saladitos de Copetín Variados', price: 40, desc: 'Atún, palmitos, J&Q, roquefort' },
  { id: 'jesuitas_cop', name: 'Jesuitas de Lunch', price: 42, desc: 'Hojaldre caramelizado premium' },
  { id: 'calientes', name: 'Bocados Calientes', price: 35, desc: 'Empanaditas / Pizzetas' },
];

// State
let cart = JSON.parse(localStorage.getItem('barcelonesa_cart') || '[]');
let customQuantities = {};
SUELTOS.forEach(s => customQuantities[s.id] = 0);
let selectedSlot = null;
let currentFilter = 'todos';
let cotizadorTab = 'paquetes';
let orders = JSON.parse(localStorage.getItem('barcelonesa_orders') || '[]');

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderPackages();
  renderCustomItems();
  updateCartUI();
  renderOrders();
  initDate();
  // mobile menu
  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });
});

function initDate() {
  const input = document.getElementById('fecha-input');
  if (!input) return;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yyyy = tomorrow.getFullYear();
  const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const dd = String(tomorrow.getDate()).padStart(2, '0');
  input.min = `${yyyy}-${mm}-${dd}`;
  input.value = `${yyyy}-${mm}-${dd}`;
}

// Products
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const filtered = currentFilter === 'todos' ? PRODUCTS : PRODUCTS.filter(p => p.cat === currentFilter);
  grid.innerHTML = filtered.map(p => `
    <div class="group bg-paper border border-ink/[0.06] rounded-[22px] overflow-hidden card-hover flex flex-col">
      <div class="relative h-[220px] overflow-hidden bg-cream">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
        <div class="absolute top-3 left-3 bg-paper/90 backdrop-blur px-2.5 py-1 rounded-full text-[10px] tracking-[0.12em] uppercase font-medium">${p.tag}</div>
        <div class="absolute top-3 right-3 w-8 h-8 bg-paper rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">♡</div>
        <div class="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-ink/20 to-transparent pointer-events-none"></div>
      </div>
      <div class="p-5 flex flex-col flex-1">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="text-[11px] tracking-[0.14em] uppercase opacity-50">${p.cat} • ${p.unit}</div>
            <h3 class="font-display text-[19px] leading-[1.1] mt-1">${p.name}</h3>
          </div>
          <div class="text-right">
            <div class="font-medium text-[16px]">$${p.price.toLocaleString('es-UY')}</div>
            <div class="text-[11px] opacity-50 line-through">$${Math.round(p.price*1.25).toLocaleString('es-UY')}</div>
          </div>
        </div>
        <p class="text-[13px] leading-[1.5] opacity-60 mt-3 flex-1">${p.desc}</p>
        <button onclick="addToCart('${p.id}')" class="mt-5 w-full h-[44px] bg-ink text-cream rounded-full text-[12px] tracking-[0.12em] uppercase font-medium flex items-center justify-center gap-2 hover:bg-navy-light transition group/btn">
          Agregar
          <span class="w-6 h-6 bg-cream text-ink rounded-full flex items-center justify-center group-hover/btn:rotate-45 transition-transform text-[14px]">+</span>
        </button>
      </div>
    </div>
  `).join('');
}

function filterProducts(cat) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.className = b.dataset.filter === cat ? 'filter-btn tab-active px-5 h-9 rounded-full text-[13px] font-medium tracking-wide transition' : 'filter-btn tab-inactive px-5 h-9 rounded-full text-[13px] font-medium tracking-wide transition';
  });
  renderProducts();
  document.getElementById('tienda').scrollIntoView({ behavior: 'smooth' });
}

// Packages
function renderPackages() {
  const grid = document.getElementById('packages-grid');
  grid.innerHTML = PACKAGES.map(pkg => `
    <div class="group border ${pkg.popular ? 'border-gold bg-cream' : 'border-ink/10 bg-paper'} rounded-[18px] p-5 flex gap-4 hover:shadow-lg transition">
      <div class="flex-1">
        <div class="flex items-center gap-2">
          <div class="font-display text-[20px] leading-none">Lunch ${pkg.people} personas</div>
          ${pkg.popular ? '<span class="text-[10px] tracking-[0.1em] uppercase bg-ink text-cream px-2 py-0.5 rounded-full">Más pedido</span>' : ''}
          ${pkg.gift ? `<span class="text-[10px] tracking-[0.1em] uppercase bg-gold text-ink px-2 py-0.5 rounded-full font-bold">${pkg.gift}</span>` : ''}
        </div>
        <div class="text-[12px] opacity-60 mt-1">${pkg.bocados} bocados • ${pkg.items}</div>
        <div class="text-[13px] leading-[1.4] mt-3 opacity-80">${pkg.desc}</div>
      </div>
      <div class="text-right flex flex-col items-end justify-between">
        <div class="font-display text-[22px]">$${pkg.price.toLocaleString('es-UY')}</div>
        <button onclick="addPackageToCart('${pkg.people}')" class="mt-3 bg-ink text-cream px-4 h-9 rounded-full text-[11px] tracking-[0.1em] uppercase font-medium hover:bg-navy-light transition">Agregar +</button>
      </div>
    </div>
  `).join('');
}

function switchCotizadorTab(tab) {
  cotizadorTab = tab;
  document.getElementById('tab-paquetes').className = tab === 'paquetes' ? 'px-6 h-10 rounded-[12px] text-[13px] font-medium tracking-wide bg-ink text-cream transition' : 'px-6 h-10 rounded-[12px] text-[13px] font-medium tracking-wide text-ink/60 hover:text-ink transition';
  document.getElementById('tab-medida').className = tab === 'medida' ? 'px-6 h-10 rounded-[12px] text-[13px] font-medium tracking-wide bg-ink text-cream transition' : 'px-6 h-10 rounded-[12px] text-[13px] font-medium tracking-wide text-ink/60 hover:text-ink transition';
  document.getElementById('cotizador-paquetes').classList.toggle('hidden', tab !== 'paquetes');
  document.getElementById('cotizador-medida').classList.toggle('hidden', tab !== 'medida');
}

function renderCustomItems() {
  const container = document.getElementById('custom-items');
  container.innerHTML = SUELTOS.map(item => `
    <div class="flex items-center gap-4 p-3 border border-ink/10 rounded-[14px] bg-paper">
      <div class="flex-1 min-w-0">
        <div class="font-medium text-[13px]">${item.name}</div>
        <div class="text-[11px] opacity-60">${item.desc} • $${item.price} c/u</div>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="updateCustomQty('${item.id}', -1)" class="w-8 h-8 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-cream transition">−</button>
        <span id="qty-${item.id}" class="w-8 text-center font-medium text-[14px]">${customQuantities[item.id]}</span>
        <button onclick="updateCustomQty('${item.id}', 1)" class="w-8 h-8 rounded-full bg-ink text-cream flex items-center justify-center hover:bg-navy-light transition">+</button>
      </div>
    </div>
  `).join('');
  updateCustomTotals();
}

function updateCustomQty(id, delta) {
  customQuantities[id] = Math.max(0, (customQuantities[id] || 0) + delta);
  document.getElementById(`qty-${id}`).textContent = customQuantities[id];
  updateCustomTotals();
}

function updateCustomTotals() {
  let totalBocados = 0;
  let totalPrice = 0;
  SUELTOS.forEach(s => {
    totalBocados += customQuantities[s.id];
    totalPrice += customQuantities[s.id] * s.price;
  });
  document.getElementById('custom-total-bocados').textContent = `${totalBocados} unidades`;
  document.getElementById('custom-total-price').textContent = `$${totalPrice.toLocaleString('es-UY')}`;
  document.getElementById('btn-add-custom').disabled = totalBocados === 0;

  // Smart logic
  const alertBox = document.getElementById('smart-alert');
  const alertText = document.getElementById('smart-alert-text');
  const alertBtn = document.getElementById('smart-alert-btn');

  if (totalBocados === 0) {
    alertBox.classList.add('hidden');
    return;
  }

  // Find best package suggestion
  let suggestion = null;
  for (let pkg of PACKAGES) {
    const priceThreshold = pkg.price * 0.85; // if within 85% or exceeds
    const bocadosThreshold = pkg.bocados * 0.8;
    if (totalPrice >= priceThreshold && totalBocados >= bocadosThreshold) {
      // suggest if custom is more expensive or close
      if (totalPrice >= pkg.price * 0.9) {
        suggestion = pkg;
        break;
      }
    }
    // also if bocados exceed package but price still high
    if (totalBocados >= pkg.bocados && totalPrice >= pkg.price * 0.75) {
      suggestion = pkg;
      break;
    }
  }

  // Additional: if totalPrice alone exceeds any package price, suggest smallest package that is cheaper
  if (!suggestion) {
    for (let pkg of PACKAGES) {
      if (totalPrice >= pkg.price && totalBocados <= pkg.bocados * 1.2) {
        suggestion = pkg;
        break;
      }
    }
  }

  if (suggestion) {
    alertBox.classList.remove('hidden');
    alertText.textContent = `¡Te conviene más nuestro paquete cerrado para ${suggestion.people} personas por $${suggestion.price.toLocaleString('es-UY')}! Incluye ${suggestion.bocados} bocados y te ahorrás $${(totalPrice - suggestion.price) > 0 ? (totalPrice - suggestion.price).toLocaleString('es-UY') : 'hasta un 20%'} vs tu armado actual.`;
    alertBtn.textContent = `Ver paquete ${suggestion.people} pers →`;
    alertBtn.onclick = () => {
      addPackageToCart(String(suggestion.people));
      switchCotizadorTab('paquetes');
      document.getElementById('cotizador').scrollIntoView({ behavior: 'smooth' });
    };
  } else {
    alertBox.classList.add('hidden');
  }
}

function addCustomToCart() {
  let totalBocados = 0;
  let totalPrice = 0;
  let descriptionParts = [];
  SUELTOS.forEach(s => {
    if (customQuantities[s.id] > 0) {
      totalBocados += customQuantities[s.id];
      totalPrice += customQuantities[s.id] * s.price;
      descriptionParts.push(`${customQuantities[s.id]}x ${s.name}`);
    }
  });
  if (totalBocados === 0) return;
  const id = 'custom-' + Date.now();
  cart.push({
    id,
    name: `Lunch a medida - ${totalBocados} bocados`,
    desc: descriptionParts.join(', '),
    price: totalPrice,
    qty: 1,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=200&auto=format&fit=crop',
    custom: true,
    detail: customQuantities
  });
  saveCart();
  updateCartUI();
  showToast(`Cotización de ${totalBocados} bocados agregada`);
  // reset
  SUELTOS.forEach(s => customQuantities[s.id] = 0);
  renderCustomItems();
  openCart();
}

// Cart
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, desc: product.unit, price: product.price, qty: 1, image: product.image });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name} agregado`);
  openCart();
}

function addPackageToCart(people) {
  const pkg = PACKAGES.find(p => String(p.people) === String(people));
  if (!pkg) return;
  const id = `pkg-${pkg.people}`;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id,
      name: `Lunch ${pkg.people} personas`,
      desc: `${pkg.bocados} bocados • ${pkg.items}`,
      price: pkg.price,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=200&auto=format&fit=crop'
    });
  }
  saveCart();
  updateCartUI();
  showToast(`Lunch ${pkg.people} personas agregado`);
  openCart();
}

function saveCart() {
  localStorage.setItem('barcelonesa_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((a, b) => a + b.qty, 0);
  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-items-count').textContent = count;

  const itemsContainer = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');
  const empty = document.getElementById('empty-cart');

  if (count === 0) {
    itemsContainer.innerHTML = empty.outerHTML;
    footer.classList.add('hidden');
    return;
  }

  footer.classList.remove('hidden');
  itemsContainer.innerHTML = cart.map(item => `
    <div class="flex gap-3 p-3 bg-paper border border-ink/10 rounded-[14px]">
      <img src="${item.image}" class="w-[56px] h-[56px] rounded-[10px] object-cover flex-shrink-0">
      <div class="flex-1 min-w-0">
        <div class="font-medium text-[13px] leading-[1.2]">${item.name}</div>
        <div class="text-[11px] opacity-60 mt-0.5 truncate">${item.desc}</div>
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center gap-2">
            <button onclick="changeQty('${item.id}', -1)" class="w-6 h-6 rounded-full border border-ink/10 flex items-center justify-center text-[12px]">−</button>
            <span class="text-[12px] font-medium w-4 text-center">${item.qty}</span>
            <button onclick="changeQty('${item.id}', 1)" class="w-6 h-6 rounded-full bg-ink text-cream flex items-center justify-center text-[12px]">+</button>
          </div>
          <div class="font-medium text-[13px]">$${(item.price * item.qty).toLocaleString('es-UY')}</div>
        </div>
      </div>
      <button onclick="removeItem('${item.id}')" class="w-6 h-6 flex items-center justify-center opacity-30 hover:opacity-100">✕</button>
    </div>
  `).join('');

  const subtotal = cart.reduce((a, b) => a + b.price * b.qty, 0);
  document.getElementById('cart-subtotal').textContent = `$${subtotal.toLocaleString('es-UY')}`;
  document.getElementById('cart-total').textContent = `$${subtotal.toLocaleString('es-UY')}`;
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== id);
  }
  saveCart();
  updateCartUI();
}

function removeItem(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
}

function openCart() {
  document.getElementById('cart-backdrop').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('cart-backdrop').classList.remove('opacity-0');
    document.getElementById('cart-drawer').classList.remove('translate-x-full');
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-drawer').classList.add('translate-x-full');
  document.getElementById('cart-backdrop').classList.add('opacity-0');
  setTimeout(() => {
    document.getElementById('cart-backdrop').classList.add('hidden');
  }, 300);
  document.body.style.overflow = '';
}

// Checkout
function openCheckout() {
  closeCart();
  const subtotal = cart.reduce((a, b) => a + b.price * b.qty, 0);
  document.getElementById('checkout-subtotal').textContent = `$${subtotal.toLocaleString('es-UY')}`;
  document.getElementById('checkout-total').textContent = `$${subtotal.toLocaleString('es-UY')}`;
  document.getElementById('checkout-items').innerHTML = cart.map(i => `
    <div class="flex gap-3 text-[13px]">
      <span class="opacity-60">${i.qty}x</span>
      <span class="flex-1">${i.name}</span>
      <span class="font-medium">$${(i.price*i.qty).toLocaleString('es-UY')}</span>
    </div>
  `).join('');
  document.getElementById('checkout-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkout-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

function toggleEntrega() {
  const tipo = document.querySelector('input[name="tipoEntrega"]:checked').value;
  document.getElementById('direccion-field').classList.toggle('hidden', tipo !== 'envio');
  document.getElementById('checkout-envio').textContent = tipo === 'envio' ? '$350 (Montevideo)' : 'Gratis - Retiro';
  const subtotal = cart.reduce((a, b) => a + b.price * b.qty, 0);
  const total = tipo === 'envio' ? subtotal + 350 : subtotal;
  document.getElementById('checkout-total').textContent = `$${total.toLocaleString('es-UY')}`;
}

function selectSlot(btn) {
  document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('slot-active'));
  btn.classList.add('slot-active');
  selectedSlot = btn.dataset.slot;
  document.getElementById('franja-input').value = selectedSlot;
}

function submitOrder(e) {
  e.preventDefault();
  if (!selectedSlot) {
    alert('Seleccioná una franja horaria');
    return;
  }
  const formData = new FormData(e.target);
  const nombre = formData.get('nombre');
  const telefono = formData.get('telefono');
  const email = formData.get('email');
  const fecha = formData.get('fecha');
  const franja = formData.get('franja');
  const tipoEntrega = formData.get('tipoEntrega');
  const direccion = formData.get('direccion');

  const subtotal = cart.reduce((a, b) => a + b.price * b.qty, 0);
  const envioCost = tipoEntrega === 'envio' ? 350 : 0;
  const total = subtotal + envioCost;

  const orderId = 'BRC-' + Date.now().toString().slice(-6);

  const order = {
    id: orderId,
    cliente: nombre,
    telefono,
    email,
    productos: cart.map(c => `${c.qty}x ${c.name}`).join(', '),
    productosDetalle: [...cart],
    total,
    fecha,
    hora: franja,
    tipoEntrega,
    direccion: direccion || 'Retiro en local - Ejido 1400',
    timestamp: new Date().toISOString(),
    estado: 'Confirmado'
  };

  orders.push(order);
  localStorage.setItem('barcelonesa_orders', JSON.stringify(orders));

  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();
  closeCheckout();

  // Show success
  document.getElementById('success-name').textContent = nombre.split(' ')[0];
  document.getElementById('success-id').textContent = orderId;
  document.getElementById('success-summary').innerHTML = `
    <div>${order.productos}</div>
    <div class="mt-2 font-medium">Total: $${total.toLocaleString('es-UY')} • ${fecha} ${franja} • ${tipoEntrega}</div>
  `;
  document.getElementById('success-modal').classList.remove('hidden');

  renderOrders();
}

function closeSuccess() {
  document.getElementById('success-modal').classList.add('hidden');
}

function openAdminFromSuccess() {
  closeSuccess();
  toggleAdmin();
}

// Admin / Planilla
function toggleAdmin() {
  const panel = document.getElementById('admin-panel');
  const isHidden = panel.classList.contains('hidden');
  if (isHidden) {
    panel.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.overflow = 'hidden';
    renderOrders();
  } else {
    panel.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function renderOrders() {
  const tbody = document.getElementById('orders-tbody');
  const jsonPre = document.getElementById('orders-json');
  const count = document.getElementById('admin-count');

  if (!tbody) return;
  count.textContent = orders.length;

  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="px-5 py-16 text-center opacity-40 text-[13px]">Aún no hay pedidos. Realizá una compra para ver la planilla.</td></tr>`;
    jsonPre.textContent = '// Array de pedidos - se actualiza en tiempo real\n[]';
    return;
  }

  tbody.innerHTML = orders.slice().reverse().map(o => `
    <tr class="hover:bg-cream/[0.03] transition">
      <td class="px-5 py-4">
        <div class="font-mono text-[12px] font-bold">${o.id}</div>
        <div class="font-medium text-[13px] mt-1">${o.cliente}</div>
        <div class="text-[11px] opacity-60">${o.telefono}</div>
      </td>
      <td class="px-5 py-4 max-w-[280px]">
        <div class="text-[12px] leading-[1.4] line-clamp-3">${o.productos}</div>
      </td>
      <td class="px-5 py-4">
        <div class="font-medium">$${o.total.toLocaleString('es-UY')}</div>
        <div class="text-[11px] opacity-60">${o.estado}</div>
      </td>
      <td class="px-5 py-4">
        <div class="text-[12px]">${o.fecha}</div>
        <div class="text-[11px] opacity-60">${o.hora}</div>
      </td>
      <td class="px-5 py-4">
        <div class="text-[11px] px-2 py-1 rounded-full bg-cream/10 inline-flex">${o.tipoEntrega === 'envio' ? '🚚 Envío' : '🏪 Retiro'}</div>
        <div class="text-[11px] opacity-60 mt-1 max-w-[160px] truncate">${o.direccion}</div>
      </td>
    </tr>
  `).join('');

  jsonPre.textContent = JSON.stringify(orders, null, 2);
}

function clearOrders() {
  if (!confirm('¿Limpiar planilla de pedidos?')) return;
  orders = [];
  localStorage.setItem('barcelonesa_orders', JSON.stringify(orders));
  renderOrders();
}

function exportJSON() {
  const blob = new Blob([JSON.stringify(orders, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `barcelonesa-pedidos-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('JSON exportado');
}

function showToast(text) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-text').textContent = text;
  toast.classList.remove('hidden');
  toast.classList.add('flex');
  setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }, 3000);
}

// Expose global
window.addToCart = addToCart;
window.addPackageToCart = addPackageToCart;
window.filterProducts = filterProducts;
window.switchCotizadorTab = switchCotizadorTab;
window.updateCustomQty = updateCustomQty;
window.addCustomToCart = addCustomToCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.toggleEntrega = toggleEntrega;
window.selectSlot = selectSlot;
window.submitOrder = submitOrder;
window.closeSuccess = closeSuccess;
window.openAdminFromSuccess = openAdminFromSuccess;
window.toggleAdmin = toggleAdmin;
window.clearOrders = clearOrders;
window.exportJSON = exportJSON;
window.changeQty = changeQty;
window.removeItem = removeItem;
