(function () {
  'use strict';

  // ----------------------------------------------------------------
  // Car data registry — one entry per car. Drives the detail page.
  // ----------------------------------------------------------------
  const INTERIOR_IMG = 'https://images.unsplash.com/photo-1542362567-b07e54358753';
  const REAR_IMG     = 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341';
  const PROFILE_IMG  = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8';

  const CAR_DATA = [
    {
      id: 1, slug: 'toyota-fortuner-2022',
      title: 'Toyota Fortuner 2022', trim: 'Sigma 4 · 2.7L Petrol',
      price: 'PKR 95,00,000', short: 'PKR 95 Lac',
      year: '2022', mileage: '28,000 km', engine: '2.7L 4-Cylinder',
      transmission: 'Automatic', fuel: 'Petrol', color: 'Pearl White',
      registered: 'Islamabad', condition: 'Used — Excellent',
      description: [
        'This 2022 Toyota Fortuner Sigma 4 is a single-owner SUV maintained exclusively at the official 3S dealership in Islamabad. With only 28,000 km on the odometer, it presents in pristine condition.',
        'Under the hood is the proven 2.7L 4-cylinder VVT-i petrol mated to a 6-speed automatic with paddle shifters. The full-time 4WD system and 220 mm of ground clearance make it equally at home on motorway trips and weekend runs up north.',
        'Inside, the cabin features full leather seating with 8-way power adjust for the driver, dual-zone climate, push start, and a 7-inch infotainment with reverse camera.'
      ],
      features: ['Sunroof','Push Start & Smart Entry','Leather Seats','Dual-Zone Climate Control','Cruise Control','Reverse Camera','Parking Sensors','Bluetooth & Apple CarPlay','Paddle Shifters','Hill-Start Assist','4WD Full-Time','7 Airbags','Alloy Wheels (18")'],
      hero: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
      gallery: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70', REAR_IMG, INTERIOR_IMG, PROFILE_IMG],
    },
    {
      id: 2, slug: 'honda-civic-2023',
      title: 'Honda Civic 2023', trim: 'Oriel · 1.5L VTEC Turbo',
      price: 'PKR 72,00,000', short: 'PKR 72 Lac',
      year: '2023', mileage: '8,000 km', engine: '1.5L 4-Cyl Turbo',
      transmission: 'Automatic CVT', fuel: 'Petrol', color: 'Crystal Black',
      registered: 'Lahore', condition: 'Used — Like New',
      description: [
        'A virtually new 2023 Honda Civic Oriel turbo, finished in Crystal Black with only 8,000 km. Single corporate owner, full Honda service history.',
        'The 1.5L VTEC Turbo delivers 178 hp through a refined CVT. Premium leather interior with 10.2" digital cluster, wireless Apple CarPlay, and Honda Sensing safety suite.',
        'Original paint throughout, no accident history, and books verified. Currently fitted with OEM 18" alloys and Bridgestone Turanza tyres.'
      ],
      features: ['Push Start & Smart Entry','Leather Seats','Honda Sensing','Lane Watch Camera','Wireless Apple CarPlay','Digital Cluster','Cruise Control','Climate Control','Reverse Camera','Alloy Wheels (18")'],
      hero: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6',
      gallery: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6', REAR_IMG, INTERIOR_IMG, PROFILE_IMG],
    },
    {
      id: 3, slug: 'bmw-x5-2021',
      title: 'BMW X5 2021', trim: 'xDrive40i · 3.0L M Sport',
      price: 'PKR 2,10,00,000', short: 'PKR 2.1 Crore',
      year: '2021', mileage: '35,000 km', engine: '3.0L Turbo I6',
      transmission: 'Automatic 8-Speed', fuel: 'Petrol', color: 'Mineral Silver',
      registered: 'Islamabad', condition: 'Used — Excellent',
      description: [
        'A stunning 2021 BMW X5 xDrive40i in Mineral Silver Metallic with the M Sport package. Pakistan-registered, single owner, complete BMW service records.',
        '3.0L mild-hybrid turbo inline-6 producing 335 hp, paired with the legendary ZF 8-speed automatic and xDrive AWD. 0-100 km/h in 5.5 seconds.',
        'Loaded with the Premium Package: panoramic sunroof, Harman/Kardon sound, gesture control, head-up display, 4-zone climate, and ventilated seats.'
      ],
      features: ['Panoramic Sunroof','Heated & Ventilated Seats','Harman/Kardon Audio','Head-Up Display','Gesture Control','4-Zone Climate','Adaptive Cruise','360° Camera','Wireless CarPlay','Soft-Close Doors','22" M Alloys'],
      hero: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      gallery: ['https://images.unsplash.com/photo-1555215695-3004980ad54e', REAR_IMG, INTERIOR_IMG, PROFILE_IMG],
    },
    {
      id: 4, slug: 'mercedes-c-class-2022',
      title: 'Mercedes C-Class 2022', trim: 'C 200 AMG Line · 2.0L Turbo',
      price: 'PKR 1,80,00,000', short: 'PKR 1.8 Crore',
      year: '2022', mileage: '18,000 km', engine: '2.0L Turbo + EQ Boost',
      transmission: 'Automatic 9G-Tronic', fuel: 'Petrol', color: 'Obsidian Black',
      registered: 'Islamabad', condition: 'Used — Like New',
      description: [
        'Brand-new shape 2022 Mercedes-Benz C 200 AMG Line, Obsidian Black with red Artico interior. Only 18,000 km from a single executive owner.',
        '2.0L turbocharged inline-4 with 48V EQ Boost mild-hybrid system producing 201 hp + 20 hp electric assist, mated to the 9G-Tronic automatic.',
        'AMG Line exterior + interior, MBUX 11.9" portrait infotainment, augmented-reality navigation, ambient lighting in 64 colours, panoramic roof.'
      ],
      features: ['Panoramic Roof','AMG Line Pack','MBUX 11.9" Display','64-Colour Ambient Lighting','Burmester Audio','Heated Leather Seats','Head-Up Display','Adaptive Cruise','360° Camera','19" AMG Alloys'],
      hero: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      gallery: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8', REAR_IMG, INTERIOR_IMG, PROFILE_IMG],
    },
    {
      id: 5, slug: 'toyota-land-cruiser-2023',
      title: 'Toyota Land Cruiser 2023', trim: 'ZX 300 · 3.5L Twin-Turbo V6',
      price: 'PKR 2,85,00,000', short: 'PKR 2.85 Crore',
      year: '2023', mileage: '15,000 km', engine: '3.5L Twin-Turbo V6',
      transmission: 'Automatic 10-Speed', fuel: 'Petrol', color: 'Precious White Pearl',
      registered: 'Islamabad', condition: 'Used — As New',
      description: [
        'A current-generation 2023 Toyota Land Cruiser 300 series ZX, finished in Precious White Pearl. Only 15,000 km, single owner, complete Toyota records.',
        '3.5L twin-turbo V6 producing 415 hp and 650 Nm paired with the new 10-speed Direct-Shift automatic and full-time 4WD with multi-terrain select.',
        'Top-spec ZX trim with semi-aniline leather, cooled & heated seats front and rear, JBL 14-speaker premium audio, head-up display, and a 12.3" infotainment.'
      ],
      features: ['Sunroof','Semi-Aniline Leather','Cooled & Heated Seats','JBL 14-Speaker Audio','Head-Up Display','Multi-Terrain Select','Adaptive Cruise','Crawl Control','360° Multi-Terrain Monitor','Kinetic Dynamic Suspension','20" Alloys'],
      hero: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf',
      gallery: ['https://images.unsplash.com/photo-1533473359331-0135ef1b58bf', REAR_IMG, INTERIOR_IMG, PROFILE_IMG],
    },
    {
      id: 6, slug: 'suzuki-alto-2023',
      title: 'Suzuki Alto 2023', trim: 'VXL AGS · 0.66L',
      price: 'PKR 28,00,000', short: 'PKR 28 Lac',
      year: '2023', mileage: '12,000 km', engine: '0.66L 3-Cylinder',
      transmission: 'AGS Auto', fuel: 'Petrol', color: 'Solid Red',
      registered: 'Rawalpindi', condition: 'Used — Excellent',
      description: [
        'A perfectly maintained 2023 Suzuki Alto VXL AGS in Solid Red with just 12,000 km. First-owner city car, original paint and books.',
        'Frugal 0.66L 3-cylinder engine paired with Suzuki AGS (auto-gear-shift) gearbox — manual reliability with auto convenience and 22+ km/L economy.',
        'Equipped with power steering, AC, central locking, ABS, dual airbags, and a 9" Android Auto/CarPlay multimedia screen aftermarket-fitted.'
      ],
      features: ['Power Steering','Air Conditioning','Dual Airbags','ABS','Central Locking','Power Windows','9" Multimedia (CarPlay)','Reverse Camera'],
      hero: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d',
      gallery: ['https://images.unsplash.com/photo-1541899481282-d53bffe3c35d', REAR_IMG, INTERIOR_IMG, PROFILE_IMG],
    },
    {
      id: 7, slug: 'kia-sportage-2023',
      title: 'KIA Sportage 2023', trim: 'AWD · 2.0L Petrol',
      price: 'PKR 85,00,000', short: 'PKR 85 Lac',
      year: '2023', mileage: '10,000 km', engine: '2.0L 4-Cylinder',
      transmission: 'Automatic 6-Speed', fuel: 'Petrol', color: 'Snow White Pearl',
      registered: 'Islamabad', condition: 'Used — Like New',
      description: [
        'A nearly-new 2023 KIA Sportage AWD in Snow White Pearl, only 10,000 km. Single owner, all services done at KIA Lucky Motors authorized service.',
        '2.0L Nu MPI engine producing 153 hp matched with a 6-speed automatic and on-demand AWD. Smooth, economical, and confidence-inspiring on poor roads.',
        'Top-trim creature comforts: panoramic sunroof, leather seats, push start, 8" infotainment, rear camera, and KIA\'s full 4-year/100k km warranty still active.'
      ],
      features: ['Panoramic Sunroof','Leather Seats','Push Start','Cruise Control','8" Infotainment','Reverse Camera','Climate Control','6 Airbags','17" Alloys','AWD On-Demand'],
      hero: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8',
      gallery: ['https://images.unsplash.com/photo-1494976388531-d1058494cdd8', REAR_IMG, INTERIOR_IMG, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70'],
    },
    {
      id: 8, slug: 'hyundai-tucson-2022',
      title: 'Hyundai Tucson 2022', trim: 'GLS Sport · 2.0L',
      price: 'PKR 78,00,000', short: 'PKR 78 Lac',
      year: '2022', mileage: '22,000 km', engine: '2.0L 4-Cylinder',
      transmission: 'Automatic 6-Speed', fuel: 'Petrol', color: 'Magnetic Grey',
      registered: 'Islamabad', condition: 'Used — Excellent',
      description: [
        'A handsome 2022 Hyundai Tucson GLS Sport in Magnetic Grey with 22,000 km. Verified single owner, complete service file, non-accidental.',
        '2.0L MPI engine producing 155 hp via a 6-speed automatic. Comfort-tuned suspension, generous cargo room, and excellent forward visibility.',
        'Sport trim adds black exterior accents, 18" alloys, leather appointments, electronic parking brake, and Hyundai\'s ISG idle-stop system for better fuel economy.'
      ],
      features: ['Push Start','Leather Seats','Electronic Parking Brake','Cruise Control','Climate Control','Rear Camera','Parking Sensors','6 Airbags','18" Alloys'],
      hero: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d',
      gallery: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d', REAR_IMG, INTERIOR_IMG, PROFILE_IMG],
    },
    {
      id: 9, slug: 'toyota-corolla-2023',
      title: 'Toyota Corolla 2023', trim: 'Altis Grande · 1.8L',
      price: 'PKR 58,00,000', short: 'PKR 58 Lac',
      year: '2023', mileage: '14,000 km', engine: '1.8L 4-Cylinder',
      transmission: 'Automatic CVT', fuel: 'Petrol', color: 'Silver Metallic',
      registered: 'Karachi', condition: 'Used — Excellent',
      description: [
        'A clean 2023 Toyota Corolla Altis Grande 1.8 in Silver Metallic with 14,000 km. Single private owner, all services at Toyota dealership.',
        '1.8L Dual VVT-i 2ZR-FE engine paired with Toyota\'s Super CVT-i. Comfortable, refined, and Pakistan\'s most trusted sedan.',
        'Top-trim Grande variant adds 17" alloys, push start, climate control, traction control, 7" infotainment, and 7 SRS airbags.'
      ],
      features: ['Push Start & Smart Entry','Climate Control','Cruise Control','7" Infotainment','Reverse Camera','Traction Control','7 SRS Airbags','17" Alloys'],
      hero: 'https://images.unsplash.com/photo-1590362891991-f776e747a588',
      gallery: ['https://images.unsplash.com/photo-1590362891991-f776e747a588', REAR_IMG, INTERIOR_IMG, PROFILE_IMG],
    },
    {
      id: 10, slug: 'honda-brv-2022',
      title: 'Honda BR-V 2022', trim: 'i-VTEC S · 1.5L',
      price: 'PKR 52,00,000', short: 'PKR 52 Lac',
      year: '2022', mileage: '30,000 km', engine: '1.5L i-VTEC',
      transmission: 'Automatic CVT', fuel: 'Petrol', color: 'Taffeta White',
      registered: 'Islamabad', condition: 'Used — Good',
      description: [
        'A practical 2022 Honda BR-V i-VTEC S in Taffeta White, 30,000 km, 7-seater family SUV with single-owner history.',
        '1.5L SOHC i-VTEC engine producing 117 hp through Honda\'s CVT. Spacious 3-row cabin perfect for growing families and long highway trips.',
        'Equipped with climate control, push start, cruise control, alloy wheels, reverse camera, and immobiliser security system.'
      ],
      features: ['7 Seats','Push Start','Climate Control','Cruise Control','Reverse Camera','Steering Controls','Power Windows','16" Alloys','Dual Airbags'],
      hero: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8',
      gallery: ['https://images.unsplash.com/photo-1581540222194-0def2dda95b8', REAR_IMG, INTERIOR_IMG, PROFILE_IMG],
    },
    {
      id: 11, slug: 'audi-a3-2021',
      title: 'Audi A3 2021', trim: '35 TFSI S Line · 1.4L',
      price: 'PKR 1,40,00,000', short: 'PKR 1.4 Crore',
      year: '2021', mileage: '40,000 km', engine: '1.4L TFSI Turbo',
      transmission: 'S Tronic 7-Speed DSG', fuel: 'Petrol', color: 'Navarra Blue',
      registered: 'Islamabad', condition: 'Used — Excellent',
      description: [
        'A sharply-styled 2021 Audi A3 Sedan 35 TFSI S Line, finished in Navarra Blue Metallic with 40,000 km and full Audi service history.',
        '1.4L TFSI turbocharged producing 148 hp through Audi\'s 7-speed S Tronic dual-clutch — quick gear changes and class-leading refinement.',
        'S Line spec adds aggressive bumpers, 18" 5-spoke alloys, sports suspension, Audi Virtual Cockpit 10.25" digital cluster, and MMI 10.1" touch infotainment.'
      ],
      features: ['S Line Pack','Sunroof','Audi Virtual Cockpit','MMI 10.1" Touch','Leather Sport Seats','3-Zone Climate','Adaptive Cruise','Parking Sensors','LED Matrix Headlights','18" Audi Sport Alloys'],
      hero: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888',
      gallery: ['https://images.unsplash.com/photo-1583121274602-3e2820c69888', REAR_IMG, INTERIOR_IMG, PROFILE_IMG],
    },
    {
      id: 12, slug: 'suzuki-cultus-2023',
      title: 'Suzuki Cultus 2023', trim: 'VXL Auto · 1.0L',
      price: 'PKR 30,00,000', short: 'PKR 30 Lac',
      year: '2023', mileage: '15,000 km', engine: '1.0L 3-Cylinder',
      transmission: 'Automatic AGS', fuel: 'Petrol', color: 'Pearl White',
      registered: 'Rawalpindi', condition: 'Used — Excellent',
      description: [
        'A well-kept 2023 Suzuki Cultus VXL Auto in Pearl White with 15,000 km. Single owner, original paint, all services done.',
        '1.0L K10B 3-cylinder engine with AGS automatic transmission — excellent fuel economy (~17 km/L city) and easy daily driving.',
        'Top VXL trim with steering controls, fog lamps, alloy wheels, immobiliser, ABS, EBD, and dual front airbags.'
      ],
      features: ['ABS & EBD','Dual Airbags','Power Steering','Power Windows','Air Conditioning','Steering Controls','Fog Lamps','Alloy Wheels','Immobiliser'],
      hero: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98',
      gallery: ['https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98', REAR_IMG, INTERIOR_IMG, PROFILE_IMG],
    },
  ];

  const getCarById = (id) => CAR_DATA.find((c) => String(c.id) === String(id));

  const buildImgUrl = (base, w = 1400, q = 80) =>
    base + (base.includes('?') ? '&' : '?') + 'auto=format&fit=crop&w=' + w + '&q=' + q;

  const header = document.getElementById('site-header');
  const mobileMenu = document.getElementById('mobile-menu');
  const openBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');

  // Sticky navbar — transparent at top, solid on scroll
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  const openMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    openBtn?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  };

  const closeMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    openBtn?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  openBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);

  // Close mobile menu when any link inside it is tapped
  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) {
      closeMenu();
    }
  });

  // Reveal sections on scroll
  const revealTargets = document.querySelectorAll('.reveal-on-scroll');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animateCounter = (el) => {
    if (el.dataset.counted === 'true') return;
    el.dataset.counted = 'true';

    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const startTime = performance.now();

    if (prefersReducedMotion) {
      el.textContent = target.toLocaleString() + suffix;
      return;
    }

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(easeOut(progress) * target);
      el.textContent = value.toLocaleString() + (progress === 1 ? suffix : '');
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    };

    requestAnimationFrame(tick);
  };

  const statCounters = document.querySelectorAll('.stat-count[data-target]');

  if ('IntersectionObserver' in window && revealTargets.length) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  // Dedicated counter observer — observe the parent section so the whole row of
  // counters fires together as soon as any part of the stats bar enters view.
  const statsSection = document.getElementById('stats-bar');
  const runAllCounters = () => statCounters.forEach((el) => animateCounter(el));

  if ('IntersectionObserver' in window && statCounters.length && statsSection) {
    const counterIO = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runAllCounters();
        observer.disconnect();
      });
    }, { threshold: 0, rootMargin: '0px 0px -80px 0px' });

    counterIO.observe(statsSection);
  } else if (statCounters.length) {
    runAllCounters();
  }

  // Featured vehicles filter
  const filterTabs = document.querySelectorAll('.filter-tab');
  const carCards = document.querySelectorAll('.car-card');

  if (filterTabs.length && carCards.length) {
    const applyFilter = (filter) => {
      carCards.forEach((card) => {
        const categories = (card.dataset.categories || '').split(/\s+/);
        const matches = filter === 'all' || categories.includes(filter);

        // Fade out, then toggle display, then fade back in
        card.classList.add('is-fading');
        setTimeout(() => {
          if (matches) {
            card.classList.remove('is-hidden');
            requestAnimationFrame(() => card.classList.remove('is-fading'));
          } else {
            card.classList.add('is-hidden');
          }
        }, 200);
      });
    };

    filterTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        if (tab.classList.contains('is-active')) return;

        filterTabs.forEach((t) => {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');

        applyFilter(tab.dataset.filter || 'all');
      });
    });
  }

  // Inventory page — search & filter
  const filterBar = document.getElementById('filter-bar');
  const inventoryGrid = document.querySelector('.inventory-cars-grid');

  if (filterBar && inventoryGrid) {
    const searchInput   = document.getElementById('filter-search-input');
    const makeSel       = document.getElementById('f-make');
    const typeSel       = document.getElementById('f-type');
    const yearSel       = document.getElementById('f-year');
    const priceSel      = document.getElementById('f-price');
    const fuelSel       = document.getElementById('f-fuel');
    const transSel      = document.getElementById('f-trans');
    const sortSel       = document.getElementById('f-sort');
    const mileageSel    = document.getElementById('f-mileage');
    const priceMin      = document.getElementById('price-min');
    const priceMax      = document.getElementById('price-max');
    const priceMinLbl   = document.getElementById('price-min-label');
    const priceMaxLbl   = document.getElementById('price-max-label');
    const priceFill     = document.getElementById('price-range-fill');
    const favOnlyCb     = document.getElementById('f-favorites-only');
    const shownEl       = document.getElementById('results-shown');
    const totalEl       = document.getElementById('results-total');
    const emptyState    = document.getElementById('empty-results');
    const loadMoreBtn   = document.getElementById('load-more');
    const resetBtn      = document.getElementById('reset-filters');
    const sidebarReset  = document.getElementById('sidebar-reset');
    const sidebarApply  = document.getElementById('sidebar-apply');
    const sidebar       = document.getElementById('inventory-sidebar');
    const sidebarBack   = document.getElementById('sidebar-backdrop');
    const sidebarClose  = document.getElementById('sidebar-close');
    const mobileToggle  = document.getElementById('mobile-filter-toggle');
    const mobileCount   = document.getElementById('mobile-filter-count');
    const activeWrap    = document.getElementById('active-filters');
    const activeChips   = document.getElementById('active-chips');
    const activeClear   = document.getElementById('active-clear');
    const cards         = Array.from(inventoryGrid.querySelectorAll('.car-card'));

    const PAGE_SIZE = 12;
    let visibleLimit = PAGE_SIZE;

    if (totalEl) totalEl.textContent = `${Math.max(cards.length, 500)}+`;

    // Remember each card's original DOM position so resets can restore it
    cards.forEach((c, i) => { c.dataset.idx = String(i); });

    // Make every "View Details" link carry the card's id so the detail page
    // knows which car to render.
    cards.forEach((card) => {
      const id = card.dataset.id;
      if (!id) return;
      card.querySelectorAll('a[href*="car-detail"]').forEach((a) => {
        a.setAttribute('href', `car-detail.html?id=${encodeURIComponent(id)}`);
      });
    });

    // Favorites — persisted in localStorage
    const FAV_KEY = 'mv-favorites';
    let favorites = new Set();
    try {
      favorites = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]'));
    } catch (_) { favorites = new Set(); }
    const saveFavs = () => {
      try { localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(favorites))); } catch (_) {}
    };

    // Inject a favorite (heart) button into each car card
    const HEART_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
    cards.forEach((card, i) => {
      const id = card.dataset.id || `card-${i}`;
      card.dataset.id = id;
      const media = card.querySelector('.car-media');
      if (media && !media.querySelector('.car-fav')) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'car-fav';
        btn.setAttribute('aria-label', 'Save to favorites');
        btn.setAttribute('aria-pressed', favorites.has(id) ? 'true' : 'false');
        btn.innerHTML = HEART_SVG;
        if (favorites.has(id)) btn.classList.add('is-fav');
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (favorites.has(id)) {
            favorites.delete(id);
            btn.classList.remove('is-fav');
            btn.setAttribute('aria-pressed', 'false');
          } else {
            favorites.add(id);
            btn.classList.add('is-fav');
            btn.setAttribute('aria-pressed', 'true');
          }
          saveFavs();
          if (favOnlyCb?.checked) applyInventoryFilters();
        });
        media.appendChild(btn);
      }
    });

    // Format the slider label as PKR Lac / Crore
    const formatPKR = (n) => {
      const v = Number(n);
      if (v >= 10000000) {
        const cr = v / 10000000;
        return `PKR ${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(1)} Cr`;
      }
      const lac = v / 100000;
      return `PKR ${Math.round(lac)} Lac`;
    };

    const priceBand = (price) => {
      if (price < 3000000) return 'u30';
      if (price <= 6000000) return '30-60';
      if (price <= 10000000) return '60-100';
      return '1cr+';
    };

    const mileageBand = (km) => {
      if (km < 10000) return 'u10';
      if (km <= 30000) return '10-30';
      if (km <= 60000) return '30-60';
      return '60+';
    };

    const yearBand = (year) => {
      const y = parseInt(year, 10);
      if (y >= 2024) return '2024';
      if ([2023, 2022, 2021, 2020].includes(y)) return String(y);
      return 'older';
    };

    const getSelectedDoc = (name) =>
      Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
        .map((el) => el.value);

    // Keep min<=max with a small gap to avoid thumb crossing
    const updatePriceRange = () => {
      if (!priceMin || !priceMax) return;
      let lo = Number(priceMin.value);
      let hi = Number(priceMax.value);
      const min = Number(priceMin.min);
      const max = Number(priceMax.max);
      const step = Number(priceMin.step) || 100000;
      if (lo > hi - step) {
        // Push the one that just moved
        if (document.activeElement === priceMin) {
          lo = hi - step;
          priceMin.value = String(lo);
        } else {
          hi = lo + step;
          priceMax.value = String(hi);
        }
      }
      const loPct = ((lo - min) / (max - min)) * 100;
      const hiPct = ((hi - min) / (max - min)) * 100;
      if (priceFill) {
        priceFill.style.left = loPct + '%';
        priceFill.style.width = (hiPct - loPct) + '%';
      }
      if (priceMinLbl) priceMinLbl.textContent = formatPKR(lo);
      if (priceMaxLbl) priceMaxLbl.textContent = formatPKR(hi);
    };

    // Sorting
    const sortCards = (mode) => {
      const sorted = cards.slice();
      const get = (c, key) => Number(c.dataset[key] || 0);
      const getName = (c) => (c.querySelector('.car-name')?.textContent || '').trim().toLowerCase();
      switch (mode) {
        case 'price-asc':   sorted.sort((a, b) => get(a, 'price') - get(b, 'price')); break;
        case 'price-desc':  sorted.sort((a, b) => get(b, 'price') - get(a, 'price')); break;
        case 'mileage-asc': sorted.sort((a, b) => get(a, 'mileage') - get(b, 'mileage')); break;
        case 'newest':      sorted.sort((a, b) => get(b, 'year') - get(a, 'year')); break;
        case 'name-asc':    sorted.sort((a, b) => getName(a).localeCompare(getName(b))); break;
        case 'featured':
        default:            sorted.sort((a, b) => Number(a.dataset.idx) - Number(b.dataset.idx)); break;
      }
      sorted.forEach((c) => inventoryGrid.appendChild(c));
    };

    // Build active filter chips
    const MAKE_LABELS = { toyota:'Toyota', honda:'Honda', bmw:'BMW', mercedes:'Mercedes', suzuki:'Suzuki', kia:'KIA', hyundai:'Hyundai', audi:'Audi' };
    const TYPE_LABELS = { suv:'SUV', sedan:'Sedan', hatchback:'Hatchback', luxury:'Luxury', pickup:'Pickup' };
    const DRIVE_LABELS = { fwd:'FWD', rwd:'RWD', awd:'AWD', '4wd':'4WD' };
    const FUEL_LABELS = { petrol:'Petrol', diesel:'Diesel', hybrid:'Hybrid', electric:'Electric' };

    const buildChips = () => {
      if (!activeChips) return 0;
      activeChips.innerHTML = '';
      const chips = [];

      const add = (label, clear) => chips.push({ label, clear });

      if (searchInput?.value.trim()) add(`"${searchInput.value.trim()}"`, () => { searchInput.value = ''; });
      if (makeSel?.value)   add(MAKE_LABELS[makeSel.value] || makeSel.value, () => { makeSel.value = ''; });
      if (typeSel?.value)   add(TYPE_LABELS[typeSel.value] || typeSel.value, () => { typeSel.value = ''; });
      if (yearSel?.value)   add(`Year: ${yearSel.value === 'older' ? 'Older' : yearSel.value}`, () => { yearSel.value = ''; });
      if (priceSel?.value) {
        const map = { 'u30':'Under 30 Lac', '30-60':'30–60 Lac', '60-100':'60–100 Lac', '1cr+':'1 Crore+' };
        add(`Price: ${map[priceSel.value]}`, () => { priceSel.value = ''; });
      }
      if (fuelSel?.value)  add(FUEL_LABELS[fuelSel.value] || fuelSel.value, () => { fuelSel.value = ''; });
      if (transSel?.value) add(transSel.value === 'automatic' ? 'Automatic' : 'Manual', () => { transSel.value = ''; });
      if (mileageSel?.value) {
        const map = { 'u10':'Under 10k km', '10-30':'10k–30k km', '30-60':'30k–60k km', '60+':'60k+ km' };
        add(`Mileage: ${map[mileageSel.value]}`, () => { mileageSel.value = ''; });
      }

      if (priceMin && priceMax) {
        const lo = Number(priceMin.value), hi = Number(priceMax.value);
        const minLim = Number(priceMin.min), maxLim = Number(priceMax.max);
        if (lo > minLim || hi < maxLim) {
          add(`${formatPKR(lo)} — ${formatPKR(hi)}`, () => {
            priceMin.value = String(minLim);
            priceMax.value = String(maxLim);
            updatePriceRange();
          });
        }
      }

      getSelectedDoc('body').forEach((v) => add(TYPE_LABELS[v] || v, () => {
        document.querySelector(`input[name="body"][value="${v}"]`).checked = false;
      }));
      getSelectedDoc('drive').forEach((v) => add(DRIVE_LABELS[v] || v, () => {
        document.querySelector(`input[name="drive"][value="${v}"]`).checked = false;
      }));
      getSelectedDoc('color').forEach((v) => add(v[0].toUpperCase() + v.slice(1), () => {
        document.querySelector(`input[name="color"][value="${v}"]`).checked = false;
      }));
      getSelectedDoc('feature').forEach((v) => add(
        v.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
        () => { document.querySelector(`input[name="feature"][value="${v}"]`).checked = false; }
      ));

      if (favOnlyCb?.checked) add('Favorites only', () => { favOnlyCb.checked = false; });

      chips.forEach(({ label, clear }) => {
        const chip = document.createElement('span');
        chip.className = 'active-chip';
        chip.innerHTML = `${label} <button type="button" class="active-chip-remove" aria-label="Remove ${label} filter">×</button>`;
        chip.querySelector('.active-chip-remove').addEventListener('click', () => {
          clear();
          applyInventoryFilters();
        });
        activeChips.appendChild(chip);
      });

      if (activeWrap) activeWrap.hidden = chips.length === 0;
      if (mobileCount) {
        mobileCount.textContent = String(chips.length);
        mobileCount.hidden = chips.length === 0;
      }
      return chips.length;
    };

    const applyInventoryFilters = () => {
      const q       = (searchInput?.value || '').trim().toLowerCase();
      const make    = makeSel?.value || '';
      const type    = typeSel?.value || '';
      const year    = yearSel?.value || '';
      const price   = priceSel?.value || '';
      const fuel    = fuelSel?.value || '';
      const trans   = transSel?.value || '';
      const mile    = mileageSel?.value || '';
      const minP    = priceMin ? Number(priceMin.value) : 0;
      const maxP    = priceMax ? Number(priceMax.value) : Infinity;
      const colors  = getSelectedDoc('color');
      const feats   = getSelectedDoc('feature');
      const bodies  = getSelectedDoc('body');
      const drives  = getSelectedDoc('drive');
      const favOnly = !!favOnlyCb?.checked;

      // Re-sort BEFORE measuring visibility so the visible "first N" reflect sort
      sortCards(sortSel?.value || 'featured');
      const ordered = Array.from(inventoryGrid.querySelectorAll('.car-card'));

      let matchCount = 0;

      ordered.forEach((card) => {
        const cMake  = card.dataset.make || '';
        const cType  = (card.dataset.type || '').split(/\s+/);
        const cYear  = card.dataset.year || '';
        const cPrice = Number(card.dataset.price || 0);
        const cFuel  = card.dataset.fuel || '';
        const cDrive = card.dataset.drive || '';
        const cTrans = card.dataset.trans || '';
        const cMile  = Number(card.dataset.mileage || 0);
        const cColor = card.dataset.color || '';
        const cFeats = (card.dataset.features || '').split(/\s+/);
        const cId    = card.dataset.id || '';
        const hay    = ((card.dataset.search || '') + ' ' + (card.textContent || '')).toLowerCase();

        const okQ     = !q || hay.includes(q);
        const okMake  = !make  || cMake === make;
        const okType  = !type  || cType.includes(type);
        const okYear  = !year  || yearBand(cYear) === year;
        const okPrice = !price || priceBand(cPrice) === price;
        const okFuel  = !fuel  || cFuel === fuel;
        const okTrans = !trans || cTrans === trans;
        const okMile  = !mile  || mileageBand(cMile) === mile;
        const okMinP  = cPrice >= minP;
        const okMaxP  = cPrice <= maxP;
        const okColor = colors.length === 0 || colors.includes(cColor);
        const okFeat  = feats.length === 0 || feats.every((f) => cFeats.includes(f));
        const okBody  = bodies.length === 0 || bodies.some((b) => cType.includes(b));
        const okDrive = drives.length === 0 || drives.includes(cDrive);
        const okFav   = !favOnly || favorites.has(cId);

        const matches = okQ && okMake && okType && okYear && okPrice && okFuel &&
                        okTrans && okMile && okMinP && okMaxP && okColor && okFeat &&
                        okBody && okDrive && okFav;

        if (matches) {
          card.classList.toggle('is-hidden', matchCount >= visibleLimit);
          matchCount++;
        } else {
          card.classList.add('is-hidden');
        }
      });

      if (shownEl) shownEl.textContent = String(Math.min(matchCount, visibleLimit));
      if (emptyState) emptyState.hidden = matchCount !== 0;
      if (loadMoreBtn) loadMoreBtn.hidden = matchCount <= visibleLimit;

      buildChips();
    };

    // Wire up live filters — any change triggers a refresh
    filterBar.addEventListener('input', applyInventoryFilters);
    filterBar.addEventListener('change', applyInventoryFilters);
    filterBar.addEventListener('submit', (e) => {
      e.preventDefault();
      applyInventoryFilters();
    });

    sidebar?.addEventListener('input', applyInventoryFilters);
    sidebar?.addEventListener('change', applyInventoryFilters);

    [priceMin, priceMax].forEach((el) => el?.addEventListener('input', () => {
      updatePriceRange();
    }));

    sortSel?.addEventListener('change', applyInventoryFilters);

    loadMoreBtn?.addEventListener('click', () => {
      visibleLimit += PAGE_SIZE;
      applyInventoryFilters();
    });

    const resetAll = () => {
      filterBar.reset();
      document.querySelectorAll('.inventory-sidebar input[type="checkbox"]')
        .forEach((cb) => { cb.checked = false; });
      if (priceMin) priceMin.value = priceMin.min;
      if (priceMax) priceMax.value = priceMax.max;
      updatePriceRange();
      if (mileageSel) mileageSel.value = '';
      if (sortSel) sortSel.value = 'featured';
      if (favOnlyCb) favOnlyCb.checked = false;
      visibleLimit = PAGE_SIZE;
      applyInventoryFilters();
    };
    resetBtn?.addEventListener('click', resetAll);
    sidebarReset?.addEventListener('click', resetAll);
    activeClear?.addEventListener('click', resetAll);
    document.querySelectorAll('[data-reset-link]').forEach((el) =>
      el.addEventListener('click', resetAll)
    );

    // Mobile filter drawer
    const openFilters = () => {
      document.body.classList.add('filter-open');
      mobileToggle?.setAttribute('aria-expanded', 'true');
      if (sidebarBack) sidebarBack.hidden = false;
    };
    const closeFilters = () => {
      document.body.classList.remove('filter-open');
      mobileToggle?.setAttribute('aria-expanded', 'false');
      if (sidebarBack) sidebarBack.hidden = true;
    };
    mobileToggle?.addEventListener('click', openFilters);
    sidebarClose?.addEventListener('click', closeFilters);
    sidebarBack?.addEventListener('click', closeFilters);
    sidebarApply?.addEventListener('click', closeFilters);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('filter-open')) closeFilters();
    });

    // Pagination buttons — purely visual demo, just sync the active state
    document.querySelectorAll('.pagination .page-btn:not(.page-arrow)').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.pagination .page-btn').forEach((b) => {
          b.classList.remove('is-active');
          b.removeAttribute('aria-current');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-current', 'page');
        window.scrollTo({
          top: inventoryGrid.getBoundingClientRect().top + window.scrollY - 120,
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
      });
    });

    updatePriceRange();
    applyInventoryFilters();
  }

  // ----------------------------------------------------------------
  // Car detail page — hydrate from ?id= before wiring gallery/tabs
  // ----------------------------------------------------------------
  const isDetailPage = !!document.querySelector('.car-detail-page');
  if (isDetailPage) {
    const params = new URLSearchParams(window.location.search);
    const requestedId = params.get('id');
    const car = getCarById(requestedId) || CAR_DATA[0];
    const carId = car ? String(car.id) : '';

    if (car) {
      // <title> + breadcrumb
      document.title = `${car.title} ${car.trim ? '— ' + car.trim : ''} | MotorVault`;
      const crumbActive = document.querySelector('.cd-crumbs li[aria-current="page"]');
      if (crumbActive) crumbActive.textContent = car.title;

      // Gallery — main image + thumbs
      const mainImg = document.getElementById('cd-main-image');
      if (mainImg) {
        mainImg.src = buildImgUrl(car.hero || car.gallery[0], 1600);
        mainImg.alt = `${car.title} — main photo`;
      }

      const thumbsList = document.querySelectorAll('.cd-thumb');
      thumbsList.forEach((btn, i) => {
        const src = car.gallery[i] || car.gallery[car.gallery.length - 1];
        const full = buildImgUrl(src, 1600);
        const small = buildImgUrl(src, 480);
        btn.setAttribute('data-full', full);
        btn.setAttribute('aria-label', `Show photo ${i + 1}`);
        const img = btn.querySelector('img');
        if (img) {
          img.src = small;
          img.alt = `${car.title} — photo ${i + 1}`;
        }
      });

      // View-all photos count label
      const viewAllLabel = document.querySelector('#cd-view-all span');
      if (viewAllLabel) viewAllLabel.textContent = `View All Photos (${car.gallery.length})`;

      // Heading block
      const setText = (sel, value) => {
        const el = document.querySelector(sel);
        if (el && value != null) el.textContent = value;
      };
      setText('.cd-trim', car.trim);
      setText('.cd-title', car.title);
      setText('.cd-price', car.price);

      // Specs grid — match by label and set the adjacent value
      const specMap = {
        'Year': car.year,
        'Mileage': car.mileage,
        'Engine': car.engine,
        'Transmission': car.transmission,
        'Fuel Type': car.fuel,
        'Color': car.color,
        'Registered': car.registered,
        'Condition': car.condition,
      };
      document.querySelectorAll('.cd-spec').forEach((spec) => {
        const label = spec.querySelector('.cd-spec-label')?.textContent.trim();
        const value = spec.querySelector('.cd-spec-value');
        if (label && value && specMap[label] != null) value.textContent = specMap[label];
      });

      // Description tab
      const descPanel = document.getElementById('panel-description');
      if (descPanel && Array.isArray(car.description)) {
        descPanel.innerHTML = car.description.map((p) => `<p>${p}</p>`).join('');
      }

      // Features tab
      const featPanel = document.getElementById('panel-features');
      if (featPanel && Array.isArray(car.features)) {
        const ul = featPanel.querySelector('.cd-feature-list');
        if (ul) {
          ul.innerHTML = car.features.map((f) =>
            `<li><span class="cd-check" aria-hidden="true">✓</span>${f}</li>`
          ).join('');
        }
      }

      // Share buttons — refresh WhatsApp share text and copy link target
      const waShare = document.querySelector('.cd-share a[href*="wa.me/?text"]');
      if (waShare) {
        const text = encodeURIComponent(`Check out this ${car.title} on MotorVault — ${car.short}`);
        waShare.setAttribute('href', `https://wa.me/?text=${text}%20${encodeURIComponent(window.location.href)}`);
      }

      // Inquiry textarea default message
      const inqMsg = document.querySelector('#inquiry-form textarea[name="message"]');
      if (inqMsg) inqMsg.setAttribute('placeholder', `I'd like to know more about this ${car.title}…`);

      // Related cars — show three other cars (cycle through registry)
      const relatedGrid = document.querySelector('.cd-related-grid');
      if (relatedGrid) {
        const others = CAR_DATA.filter((c) => String(c.id) !== carId);
        const pick = others.slice(0, 3);
        relatedGrid.innerHTML = pick.map((c) => {
          const id = c.id;
          return `
            <article class="car-card">
              <div class="car-media">
                <img src="${buildImgUrl(c.hero, 900)}" alt="${c.title}" loading="lazy" />
              </div>
              <div class="car-body">
                <h3 class="car-name">${c.title}</h3>
                <p class="car-meta">${c.year} · ${c.mileage} · ${c.transmission}</p>
                <p class="car-price">${c.short}</p>
                <div class="car-footer">
                  <span class="car-engine">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 22V8a2 2 0 0 1 2-2h3l1-2h6l1 2h3a2 2 0 0 1 2 2v4"/><path d="M3 14h11"/><path d="M14 14h7v8h-7z"/></svg>
                    <span>${c.fuel} · ${c.engine.split(' ')[0]}</span>
                  </span>
                  <a href="car-detail.html?id=${encodeURIComponent(id)}" class="btn-red btn-sm">View Details</a>
                </div>
              </div>
            </article>`;
        }).join('');
      }
    }
  }

  // Car detail page — gallery, tabs, lightbox, share, inquiry
  const cdMain = document.getElementById('cd-main-image');
  const cdThumbs = document.querySelectorAll('.cd-thumb');
  const cdPrev = document.getElementById('cd-main-prev');
  const cdNext = document.getElementById('cd-main-next');
  const cdCounter = document.getElementById('cd-photo-counter');

  if (cdMain && cdThumbs.length) {
    const thumbsArr = Array.from(cdThumbs);
    let currentIdx = 0;

    const setActiveThumb = (idx) => {
      thumbsArr.forEach((t, i) => {
        const active = i === idx;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      currentIdx = idx;
      if (cdCounter) cdCounter.textContent = `${idx + 1} / ${thumbsArr.length}`;
    };

    const swapMain = (src) => {
      if (!src || cdMain.src === src) return;
      cdMain.classList.add('is-swapping');
      const img = new Image();
      img.onload = () => {
        cdMain.src = src;
        requestAnimationFrame(() => cdMain.classList.remove('is-swapping'));
      };
      img.src = src;
    };

    const goTo = (idx) => {
      const next = (idx + thumbsArr.length) % thumbsArr.length;
      const btn = thumbsArr[next];
      setActiveThumb(next);
      swapMain(btn.dataset.full);
      // Keep active thumb in view on horizontal/vertical layouts
      btn.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    };

    thumbsArr.forEach((btn, i) => {
      btn.addEventListener('click', () => goTo(i));
    });

    cdPrev?.addEventListener('click', () => goTo(currentIdx - 1));
    cdNext?.addEventListener('click', () => goTo(currentIdx + 1));

    // Initial counter
    if (cdCounter) cdCounter.textContent = `1 / ${thumbsArr.length}`;
  }

  // Tabs
  const cdTabs = document.querySelectorAll('.cd-tab');
  const cdPanels = document.querySelectorAll('.cd-panel');

  if (cdTabs.length && cdPanels.length) {
    cdTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        cdTabs.forEach((t) => {
          t.classList.toggle('is-active', t === tab);
          t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
        });
        cdPanels.forEach((p) => {
          const isActive = p.id === `panel-${target}`;
          p.hidden = !isActive;
          p.classList.toggle('is-active', isActive);
        });
      });
    });
  }

  // Lightbox
  const lightbox = document.getElementById('cd-lightbox');
  const lightboxImage = document.getElementById('cd-lightbox-image');
  const lightboxCaption = document.getElementById('cd-lightbox-caption');
  const lightboxOpen = document.getElementById('cd-view-all');
  const lightboxClose = document.getElementById('cd-lightbox-close');
  const lightboxPrev = document.getElementById('cd-lightbox-prev');
  const lightboxNext = document.getElementById('cd-lightbox-next');

  if (lightbox && cdThumbs.length) {
    const photos = Array.from(cdThumbs).map((t) => ({
      src: t.dataset.full,
      alt: t.querySelector('img')?.alt || '',
    }));
    let currentIdx = 0;

    const showPhoto = (idx) => {
      currentIdx = (idx + photos.length) % photos.length;
      const p = photos[currentIdx];
      lightboxImage.src = p.src;
      lightboxImage.alt = p.alt;
      lightboxCaption.textContent = `Photo ${currentIdx + 1} of ${photos.length}`;
    };

    const openLightbox = () => {
      showPhoto(0);
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
    };

    const closeLightbox = () => {
      lightbox.hidden = true;
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    };

    lightboxOpen?.addEventListener('click', openLightbox);
    lightboxClose?.addEventListener('click', closeLightbox);
    lightboxPrev?.addEventListener('click', () => showPhoto(currentIdx - 1));
    lightboxNext?.addEventListener('click', () => showPhoto(currentIdx + 1));

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPhoto(currentIdx - 1);
      if (e.key === 'ArrowRight') showPhoto(currentIdx + 1);
    });
  }

  // Copy listing link
  const copyBtn = document.getElementById('cd-copy-link');
  if (copyBtn) {
    const copyLabel = copyBtn.querySelector('.cd-copy-text');
    const originalText = copyLabel?.textContent || 'Copy Link';
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
      } catch (_) {
        // clipboard API unavailable — quietly skip
      }
      copyBtn.classList.add('is-copied');
      if (copyLabel) copyLabel.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.classList.remove('is-copied');
        if (copyLabel) copyLabel.textContent = originalText;
      }, 1800);
    });
  }

  // Quick inquiry form
  const inquiryForm = document.getElementById('inquiry-form');
  const inquiryStatus = document.getElementById('cd-form-status');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!inquiryForm.checkValidity()) {
        inquiryForm.reportValidity();
        return;
      }
      inquiryForm.reset();
      if (inquiryStatus) {
        inquiryStatus.hidden = false;
        setTimeout(() => { inquiryStatus.hidden = true; }, 4000);
      }
    });
  }

  // Contact page — general inquiry + test drive form handlers
  const wireFormSuccess = (formId, statusId) => {
    const form = document.getElementById(formId);
    const status = document.getElementById(statusId);
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.reset();
      if (status) {
        status.hidden = false;
        status.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
        setTimeout(() => { status.hidden = true; }, 6000);
      }
    });
  };

  wireFormSuccess('general-contact-form', 'contact-form-status');
  wireFormSuccess('testdrive-form', 'testdrive-form-status');

  // Scroll-to-top button
  const scrollTopBtn = document.getElementById('scroll-to-top');
  if (scrollTopBtn) {
    const toggleScrollTop = () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('is-visible');
      } else {
        scrollTopBtn.classList.remove('is-visible');
      }
    };

    window.addEventListener('scroll', toggleScrollTop, { passive: true });
    toggleScrollTop();

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    });
  }
})();
