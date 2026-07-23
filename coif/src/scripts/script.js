(() => {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* Icon set (line-art, minimal)                                       */
  /* ------------------------------------------------------------------ */
  const ICONS = {
    shield: '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6l12 4v9c0 8-5 13.5-12 15-7-1.5-12-7-12-15v-9l12-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14.5 20l3.8 3.8L26 15.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    'heart-hands': '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 27s-8-5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-8 11-8 11z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 30c2-3 5-4 8-3l6 1.6c2 .5 4 0 5.5-1.4L32 22.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    leaf: '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 30C7 18 15 8 30 8c1 15-9 22-21 22z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 30c6-8 12-13 20-18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    bowl: '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 18h26a13 13 0 0 1-26 0z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M13 18c0-4 2.5-8 7-8s7 4 7 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
  };

  const PLUS_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

  const DOW = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const SLOT_TEMPLATES = ['9:00', '10:30', '13:00', '15:30'];

  const state = { data: null, selectedDay: null, selectedSlot: null };

  /* ------------------------------------------------------------------ */
  /* Data loading + rendering                                           */
  /* ------------------------------------------------------------------ */
  async function loadData() {
    try {
      const res = await fetch('data.json');
      state.data = await res.json();
    } catch (err) {
      console.error('No se pudo cargar data.json', err);
      state.data = { pillars: [], routine: [], testimonials: [], admissionSteps: [], faq: [] };
    }
    renderPillars();
    renderRoutine();
    renderTestimonials();
    renderAdmissionSteps();
    renderFaq();
    initRevealObserver();
  }

  function renderPillars() {
    const grid = document.getElementById('pillars-grid');
    const frag = document.createDocumentFragment();
    state.data.pillars.forEach((p) => {
      const card = document.createElement('article');
      card.className = 'bento-card reveal';
      card.innerHTML = `
        <span class="bento-icon">${ICONS[p.icon] || ''}</span>
        <h3>${p.title}</h3>
        <p>${p.text}</p>`;
      frag.appendChild(card);
    });
    grid.appendChild(frag);
  }

  function renderRoutine() {
    const list = document.getElementById('routine-timeline');
    const frag = document.createDocumentFragment();
    state.data.routine.forEach((r) => {
      const li = document.createElement('li');
      li.className = 'timeline-item reveal';
      li.innerHTML = `
        <div class="timeline-figure">
          <img src="https://images.unsplash.com/photo-1503457574465-25f0a1e6f0a5?q=80&w=600&auto=format&fit=crop" alt="${r.title}" loading="lazy">
        </div>
        <div class="timeline-body">
          <span class="timeline-time">${r.time}</span>
          <h3>${r.title}</h3>
          <p>${r.text}</p>
        </div>`;
      frag.appendChild(li);
    });
    list.appendChild(frag);
  }

  function renderTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    const frag = document.createDocumentFragment();
    state.data.testimonials.forEach((t) => {
      const card = document.createElement('article');
      card.className = 'testimonial-card reveal';
      card.innerHTML = `
        <span class="testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
        <p class="quote">${t.quote}</p>
        <div class="testimonial-person">
          <span class="testimonial-avatar"></span>
          <span>
            <span class="testimonial-name">${t.name}</span><br>
            <span class="testimonial-child">${t.childInfo}</span>
          </span>
        </div>`;
      frag.appendChild(card);
    });
    grid.appendChild(frag);
  }

  function renderAdmissionSteps() {
    const list = document.getElementById('admission-steps');
    const frag = document.createDocumentFragment();
    state.data.admissionSteps.forEach((s, i) => {
      const li = document.createElement('li');
      li.className = 'admission-step reveal';
      li.innerHTML = `
        <span class="step-badge">${i + 1}</span>
        <h3>${s.title}</h3>
        <p>${s.text}</p>`;
      frag.appendChild(li);
    });
    list.appendChild(frag);
  }

  function renderFaq() {
    const wrap = document.getElementById('faq-accordion');
    const frag = document.createDocumentFragment();
    state.data.faq.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'accordion-item reveal';
      div.innerHTML = `
        <h3>
          <button type="button" class="accordion-trigger" id="faq-trigger-${i}" aria-expanded="false" aria-controls="faq-panel-${i}">
            <span>${item.question}</span>
            <span class="accordion-icon">${PLUS_ICON}</span>
          </button>
        </h3>
        <div class="accordion-panel" id="faq-panel-${i}" role="region" aria-labelledby="faq-trigger-${i}">
          <div class="accordion-panel-inner"><p>${item.answer}</p></div>
        </div>`;
      frag.appendChild(div);
    });
    wrap.appendChild(frag);
  }

  /* ------------------------------------------------------------------ */
  /* Scroll reveal (Intersection Observer)                              */
  /* ------------------------------------------------------------------ */
  function initRevealObserver() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 80;
          setTimeout(() => entry.target.classList.add('is-visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    items.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* Mobile nav                                                          */
  /* ------------------------------------------------------------------ */
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('mobile-nav');
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.hidden = isOpen;
    });
    nav.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.hidden = true;
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* FAQ accordion — event delegation                                   */
  /* ------------------------------------------------------------------ */
  function initAccordion() {
    const wrap = document.getElementById('faq-accordion');
    wrap.addEventListener('click', (e) => {
      const trigger = e.target.closest('.accordion-trigger');
      if (!trigger) return;
      const item = trigger.closest('.accordion-item');
      const isOpen = item.classList.contains('is-open');
      wrap.querySelectorAll('.accordion-item.is-open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('is-open');
          openItem.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  /* ------------------------------------------------------------------ */
  /* Booking widget                                                      */
  /* ------------------------------------------------------------------ */
  function buildCalendar() {
    const cal = document.getElementById('calendar');
    const frag = document.createDocumentFragment();
    const today = new Date();
    let count = 0;
    let offset = 1; // start tomorrow
    while (count < 6) {
      const d = new Date(today);
      d.setDate(today.getDate() + offset);
      offset += 1;
      if (d.getDay() === 0) continue; // skip Sundays
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'day-chip';
      btn.setAttribute('aria-pressed', 'false');
      btn.dataset.date = d.toISOString().slice(0, 10);
      btn.dataset.label = `${DOW[d.getDay()]} ${d.getDate()}`;
      btn.innerHTML = `<span class="dow">${DOW[d.getDay()]}</span><span class="dom">${d.getDate()}</span>`;
      frag.appendChild(btn);
      count += 1;
    }
    cal.appendChild(frag);
  }

  function renderSlots(dayLabel) {
    const slotsWrap = document.getElementById('slots');
    slotsWrap.innerHTML = '';
    const frag = document.createDocumentFragment();
    SLOT_TEMPLATES.forEach((time) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'slot-chip';
      btn.setAttribute('aria-pressed', 'false');
      btn.dataset.time = time;
      btn.textContent = time;
      frag.appendChild(btn);
    });
    slotsWrap.appendChild(frag);
    slotsWrap.hidden = false;
  }

  function initBookingWidget() {
    buildCalendar();
    const calendar = document.getElementById('calendar');
    const slotsWrap = document.getElementById('slots');
    const hiddenSlot = document.getElementById('selected-slot');
    const form = document.getElementById('booking-form');
    const dialog = document.getElementById('confirm-dialog');
    const confirmDetail = document.getElementById('confirm-detail');
    const confirmClose = document.getElementById('confirm-close');

    calendar.addEventListener('click', (e) => {
      const chip = e.target.closest('.day-chip');
      if (!chip) return;
      calendar.querySelectorAll('.day-chip').forEach((c) => c.setAttribute('aria-pressed', 'false'));
      chip.setAttribute('aria-pressed', 'true');
      state.selectedDay = chip.dataset.label;
      state.selectedSlot = null;
      hiddenSlot.value = '';
      renderSlots(chip.dataset.label);
    });

    slotsWrap.addEventListener('click', (e) => {
      const chip = e.target.closest('.slot-chip');
      if (!chip) return;
      slotsWrap.querySelectorAll('.slot-chip').forEach((c) => c.setAttribute('aria-pressed', 'false'));
      chip.setAttribute('aria-pressed', 'true');
      state.selectedSlot = chip.dataset.time;
      hiddenSlot.value = `${state.selectedDay} · ${state.selectedSlot}`;
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (!hiddenSlot.value) {
        alert('Por favor selecciona un día y horario para tu visita.');
        return;
      }
      const contact = document.getElementById('contact').value;
      confirmDetail.textContent = `Te hemos enviado los detalles de tu visita del ${hiddenSlot.value} a ${contact}.`;
      dialog.showModal();
      form.reset();
      slotsWrap.hidden = true;
      slotsWrap.innerHTML = '';
      calendar.querySelectorAll('.day-chip').forEach((c) => c.setAttribute('aria-pressed', 'false'));
      state.selectedDay = null;
      state.selectedSlot = null;
    });

    confirmClose.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (!inside) dialog.close();
    });
  }

  /* ------------------------------------------------------------------ */
  /* Init                                                                */
  /* ------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initAccordion();
    initBookingWidget();
    loadData();
  });
})();
