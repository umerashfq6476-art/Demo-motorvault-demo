/* ============================================================
   MotorVault Admin Panel — Shared JavaScript
   ============================================================ */

const ADMIN = {
  password: "motorvault2026",
  storageKey: "motorvault_cars",
  bookingsKey: "motorvault_bookings"
};

/* ---------- Auth ---------- */

function checkAuth() {
  if (sessionStorage.getItem("mv_admin_logged_in") !== "true") {
    window.location.href = "index.html";
  }
}

function login(password) {
  if (password === ADMIN.password) {
    sessionStorage.setItem("mv_admin_logged_in", "true");
    return true;
  }
  return false;
}

function logout() {
  sessionStorage.removeItem("mv_admin_logged_in");
  window.location.href = "index.html";
}

/* ---------- Seed data ---------- */

const DEFAULT_CARS = [
  {
    id: "1737000000001",
    make: "Toyota",
    model: "Fortuner",
    year: 2022,
    price: 9500000,
    mileage: 25000,
    transmission: "Automatic",
    fuel: "Diesel",
    color: "Pearl White",
    registered: "Islamabad",
    condition: "Used - Excellent",
    type: "SUV",
    status: "available",
    featured: true,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    description: "Powerful 2.8L diesel SUV with a commanding presence. Well-maintained, single owner.",
    features: ["Sunroof", "Push Start", "Leather Seats", "Cruise Control", "Reverse Camera"],
    dateAdded: "2026-01-15"
  },
  {
    id: "1737000000002",
    make: "Honda",
    model: "Civic",
    year: 2023,
    price: 7200000,
    mileage: 8000,
    transmission: "Automatic",
    fuel: "Petrol",
    color: "Crystal Black",
    registered: "Islamabad",
    condition: "Used - Like New",
    type: "Sedan",
    status: "sold",
    featured: false,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",
    description: "Nearly new 11th-gen Civic with full Honda warranty remaining. Sporty styling.",
    features: ["Push Start", "LED Headlights", "Lane Assist", "Apple CarPlay", "Alloy Wheels"],
    dateAdded: "2026-01-22"
  },
  {
    id: "1737000000003",
    make: "BMW",
    model: "X5",
    year: 2021,
    price: 21000000,
    mileage: 35000,
    transmission: "Automatic",
    fuel: "Petrol",
    color: "Mineral Grey",
    registered: "Lahore",
    condition: "Used - Excellent",
    type: "SUV",
    status: "available",
    featured: true,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
    description: "Luxury 3.0L performance SUV with panoramic sunroof and premium sound.",
    features: ["Panoramic Sunroof", "Heated Seats", "Harman Kardon Audio", "360 Camera", "Adaptive Cruise"],
    dateAdded: "2026-02-03"
  },
  {
    id: "1737000000004",
    make: "Mercedes",
    model: "C-Class",
    year: 2022,
    price: 18000000,
    mileage: 18000,
    transmission: "Automatic",
    fuel: "Petrol",
    color: "Obsidian Black",
    registered: "Islamabad",
    condition: "Used - Excellent",
    type: "Sedan",
    status: "available",
    featured: false,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
    description: "Refined executive sedan with AMG line styling and Burmester sound system.",
    features: ["AMG Line", "Burmester Audio", "Ambient Lighting", "Memory Seats", "Wireless Charging"],
    dateAdded: "2026-02-10"
  },
  {
    id: "1737000000005",
    make: "Toyota",
    model: "Land Cruiser",
    year: 2023,
    price: 28500000,
    mileage: 15000,
    transmission: "Automatic",
    fuel: "Diesel",
    color: "Precious White Pearl",
    registered: "Islamabad",
    condition: "Used - Like New",
    type: "SUV",
    status: "available",
    featured: true,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    description: "Flagship 4.0L V6 Land Cruiser — built for any terrain, finished to the highest standard.",
    features: ["7 Seats", "Crawl Control", "Multi-Terrain Select", "Cool Box", "JBL Premium Audio"],
    dateAdded: "2026-02-18"
  },
  {
    id: "1737000000006",
    make: "Suzuki",
    model: "Alto",
    year: 2023,
    price: 2800000,
    mileage: 12000,
    transmission: "Manual",
    fuel: "Petrol",
    color: "Solid White",
    registered: "Rawalpindi",
    condition: "Used - Excellent",
    type: "Hatchback",
    status: "available",
    featured: false,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=80",
    description: "Fuel-efficient city car. Perfect first car or daily commuter.",
    features: ["AC", "Power Steering", "Power Windows", "Central Locking", "USB Input"],
    dateAdded: "2026-03-01"
  }
];

const DEFAULT_BOOKINGS = [
  {
    id: "b1737100000001",
    name: "Usman Tariq",
    email: "usman.tariq@example.com",
    phone: "+92 300 1234567",
    carId: "1737000000001",
    carName: "Toyota Fortuner 2022",
    date: "2026-05-25",
    time: "11:00",
    message: "Would like to test drive on a weekend afternoon if possible.",
    status: "pending",
    createdAt: "2026-05-18T09:14:00Z"
  },
  {
    id: "b1737100000002",
    name: "Zara Malik",
    email: "zara.m@example.com",
    phone: "+92 321 7654321",
    carId: "1737000000003",
    carName: "BMW X5 2021",
    date: "2026-05-23",
    time: "16:00",
    message: "Coming from DHA Islamabad. Interested in financing options too.",
    status: "confirmed",
    createdAt: "2026-05-17T15:42:00Z"
  },
  {
    id: "b1737100000003",
    name: "Farhan Ahmed",
    email: "farhan.ahmed@example.com",
    phone: "+92 333 9988776",
    carId: "1737000000005",
    carName: "Toyota Land Cruiser 2023",
    date: "2026-05-20",
    time: "13:30",
    message: "",
    status: "completed",
    createdAt: "2026-05-12T08:30:00Z"
  }
];

function seedIfEmpty() {
  if (!localStorage.getItem(ADMIN.storageKey)) {
    localStorage.setItem(ADMIN.storageKey, JSON.stringify(DEFAULT_CARS));
  }
  if (!localStorage.getItem(ADMIN.bookingsKey)) {
    localStorage.setItem(ADMIN.bookingsKey, JSON.stringify(DEFAULT_BOOKINGS));
  }
}

/* ---------- Car CRUD ---------- */

function getCars() {
  try {
    return JSON.parse(localStorage.getItem(ADMIN.storageKey)) || [];
  } catch (e) {
    return [];
  }
}

function saveCars(cars) {
  localStorage.setItem(ADMIN.storageKey, JSON.stringify(cars));
}

function getCar(id) {
  return getCars().find(c => c.id === id) || null;
}

function addCar(car) {
  const cars = getCars();
  car.id = String(Date.now());
  car.dateAdded = new Date().toISOString().slice(0, 10);
  cars.push(car);
  saveCars(cars);
  return car;
}

function updateCar(id, updates) {
  const cars = getCars();
  const idx = cars.findIndex(c => c.id === id);
  if (idx === -1) return null;
  cars[idx] = { ...cars[idx], ...updates, id };
  saveCars(cars);
  return cars[idx];
}

function deleteCar(id) {
  const cars = getCars().filter(c => c.id !== id);
  saveCars(cars);
}

/* ---------- Bookings CRUD ---------- */

function getBookings() {
  try {
    return JSON.parse(localStorage.getItem(ADMIN.bookingsKey)) || [];
  } catch (e) {
    return [];
  }
}

function saveBookings(bookings) {
  localStorage.setItem(ADMIN.bookingsKey, JSON.stringify(bookings));
}

function updateBookingStatus(id, status) {
  const bookings = getBookings();
  const idx = bookings.findIndex(b => b.id === id);
  if (idx === -1) return;
  bookings[idx].status = status;
  saveBookings(bookings);
}

function deleteBooking(id) {
  saveBookings(getBookings().filter(b => b.id !== id));
}

/* ---------- Formatting helpers ---------- */

function formatPrice(value) {
  const n = Number(value);
  if (!isFinite(n)) return "—";
  if (n >= 10000000) return `PKR ${(n / 10000000).toFixed(2).replace(/\.?0+$/, "")} Crore`;
  if (n >= 100000) return `PKR ${(n / 100000).toFixed(2).replace(/\.?0+$/, "")} Lac`;
  return `PKR ${n.toLocaleString()}`;
}

function formatNumber(value) {
  const n = Number(value);
  return isFinite(n) ? n.toLocaleString() : "—";
}

function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ---------- Layout helpers ---------- */

function bindLayout() {
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      logout();
    });
  }

  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebar = document.querySelector(".admin-sidebar");
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("is-open");
    });
  }
}

/* Seed on every page load (no-op after first run) */
seedIfEmpty();
