/**
 * LUMA Creative Management — Main Vanilla JavaScript
 * Lightweight, accessible, no external dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. BILINGUAL TRANSLATION SYSTEM (ES / EN)
  // ==========================================
  const translations = {
    es: {
      'nav.about': 'Nosotros',
      'nav.services': 'Servicios',
      'nav.talent': 'Talento & Clientes',
      'nav.portfolio': 'Producciones',
      'nav.contact': 'Contacto',
      'nav.cta': 'Bookings',

      'hero.badge': '25+ Años de Liderazgo en Entretenimiento',
      'hero.title1': 'Impulsamos',
      'hero.title2': 'Talento & Marcas',
      'hero.title3': 'de Impacto Global.',
      'hero.desc': 'En LUMA Creative Management brindamos consultoría integral en el mundo del entretenimiento y los medios. Conectamos y potenciamos a los talentos, creadores y marcas líderes en el mercado hispano de Estados Unidos y Latinoamérica.',
      'hero.ctaPrimary': 'Descubrir Roster',
      'hero.ctaSecondary': 'Nuestros Servicios',
      'hero.hubs': 'Presencia Estratégica:',
      'hero.spotlightTag': 'Talent Spotlight',
      'hero.floatingBadge': 'Años representando a las figuras más selectas de la TV hispana',

      'stats.item1': 'Años de Trayectoria',
      'stats.item2': 'Producciones & Campañas',
      'stats.item3': 'Audiencia e Impacto Social',
      'stats.item4': 'Países con Red de Producción',

      'about.tag': 'Nuestra Visión',
      'about.title': 'Una firma integral de consultoría y gestión artística',
      'about.card1Title': 'Gestión de Talento de Élite',
      'about.card1Desc': 'Por más de dos décadas, hemos representado a las figuras más destacadas de la televisión, teatro, cine y medios digitales en el mercado hispanohablante de EE.UU.',
      'about.card2Title': 'Producción Audiovisual Transnacional',
      'about.card2Desc': 'Contamos con sólidas alianzas de producción en Estados Unidos, México, Colombia y Venezuela, llevando conceptos desde el guion hasta la distribución multiplataforma.',
      'about.card3Title': 'Estrategia y Posicionamiento de Marca',
      'about.card3Desc': 'Construimos marcas comerciales y marcas personales desde los cimientos, orquestando estrategias de comunicación y relaciones públicas que generan tracción y negocio real.',

      'services.tag': '¿Qué Hacemos?',
      'services.title': 'Servicios Estratégicos 360°',
      'services.sub': 'Soluciones efectivas en comunicación, producción y desarrollo de carreras artísticas y corporativas.',

      'service.s1Title': 'Talent Management',
      'service.s1Desc': 'Representación integral de actores, actrices, presentadores e influencers ante cadenas de televisión, productoras y plataformas de streaming.',
      'service.s2Title': 'Branding & Marketing',
      'service.s2Desc': 'Construcción de identidad y estrategias comerciales diseñadas para posicionar productos o servicios y asegurar un lanzamiento de alto impacto.',
      'service.s3Title': 'Public Relations',
      'service.s3Desc': 'Estrategias de comunicación y prensa para amplificar la visibilidad de tu marca ante medios clave y líderes de opinión en EE.UU. y LATAM.',
      'service.s4Title': 'Consulting',
      'service.s4Desc': 'Asesoría de negocio en desarrollo de carrera artística, alianzas corporativas y viabilidad de proyectos en la industria del entretenimiento.',
      'service.s5Title': 'Production Services',
      'service.s5Desc': 'Despliegue de equipos técnicos y creativos de primer nivel para rodajes, campañas comerciales y formatos para televisión y cine.',
      'service.s6Title': 'Content Creation',
      'service.s6Desc': 'Generación y gestión de contenido audiovisual dinámico y copywriting para redes sociales, maximizando engagement y conversión.',
      'service.s7Title': 'Image Consulting',
      'service.s7Desc': 'Evaluación integral de imagen, estilismo y media training personalizado para proyectar una presencia coherente, auténtica y magnética.',
      'service.s8Title': 'Publishing',
      'service.s8Desc': 'Servicio integral de publicación de libros: desde conceptualización y ghostwriting hasta corrección editorial, distribución y giras de promoción.',

      'talent.tag': 'Roster de Élite',
      'talent.title': 'Talentos & Clientes Exclusivos',
      'talent.sub': 'Las figuras y marcas con las que creamos historias memorables.',
      'filter.all': 'Todos',
      'filter.acting': 'Actuación & TV',
      'filter.lifestyle': 'Creators & Lifestyle',
      'filter.brands': 'Marcas & Negocios',

      'cat.actor': 'Actor',
      'cat.actress': 'Actriz',
      'cat.author': 'Autora & Speaker',
      'cat.host': 'Conductor & Actor',
      'cat.culinary': 'Celebrity Baker',
      'cat.brand': 'Marca & Producto',
      'cat.music': 'Música & Artista',
      'cat.health': 'Salud & Estética',
      'cat.podcast': 'Podcast & Media',

      'portfolio.tag': 'Proyectos Recientes',
      'portfolio.title': 'Producción Audiovisual & Editorial',
      'portfolio.sub': 'Historias de alto calibre producidas para las principales audiencias globales.',
      'portfolio.badge': 'Estreno Internacional',
      'portfolio.featTitle': 'Desarrollo y Casting de Series Estelares',
      'portfolio.featDesc': 'Colaboración estratégica con cadenas internacionales y plataformas líderes en el empaquetado de elencos y producción ejecutiva.',
      'portfolio.mini1Title': 'Giras Editoriales & Bestsellers',
      'portfolio.mini1Desc': 'Lanzamiento, edición y giras de firmas para obras literarias de impacto con distribución en EE.UU. y Latinoamérica.',
      'portfolio.mini2Title': 'Campañas Comerciales 360°',
      'portfolio.mini2Desc': 'Conexión de marcas multinacionales con líderes de opinión e influencers para activaciones de alto ROI.',
      'portfolio.mini3Title': 'Ruedas de Prensa & Media Tours',
      'portfolio.mini3Desc': 'Giras de medios en cadenas de televisión como Telemundo, Univision y plataformas de prensa digital.',

      'contact.tag': 'Hablemos',
      'contact.title': '¿Listo para impulsar tu carrera o proyecto?',
      'contact.desc': 'Ya seas un talento en busca de representación o una marca que busca aliarse con las figuras más influyentes del mercado hispano, nuestro equipo está listo para colaborar.',
      'contact.headquarters': 'Sede Principal',
      'contact.directEmail': 'Email Directo',
      'contact.socials': 'Canales Oficiales',

      'form.title': 'Enviar una Consulta',
      'form.name': 'Nombre Completo *',
      'form.email': 'Correo Electrónico *',
      'form.interest': 'Tipo de Consulta *',
      'form.optDefault': 'Selecciona una opción',
      'form.opt1': 'Representación de Talento',
      'form.opt2': 'Booking / Contratación de Artista',
      'form.opt3': 'Servicios de Producción Audiovisual',
      'form.opt4': 'Branding & Consultoría de Marca',
      'form.opt5': 'Prensa y Relaciones Públicas',
      'form.message': 'Mensaje *',
      'form.submit': 'Enviar Mensaje',
      'form.submitting': 'Enviando consulta...',
      'form.success': '¡Gracias! Tu mensaje ha sido enviado exitosamente. Un agente de LUMA te responderá pronto.',
      'form.error': 'Por favor completa todos los campos requeridos con datos válidos.',

      'footer.desc': 'Más de 25 años dedicados al desarrollo, representación y proyección de los mejores talentos de la industria del entretenimiento hispano.',
      'footer.navigation': 'Navegación',
      'footer.hubsTitle': 'Ciudades Estratégicas',
      'footer.socialTitle': 'Conectar',
      'footer.rights': 'Todos los derechos reservados.',
      'footer.top': 'Volver Arriba'
    },
    en: {
      'nav.about': 'About Us',
      'nav.services': 'Services',
      'nav.talent': 'Talent & Clients',
      'nav.portfolio': 'Productions',
      'nav.contact': 'Contact',
      'nav.cta': 'Bookings',

      'hero.badge': '25+ Years of Entertainment Leadership',
      'hero.title1': 'Empowering',
      'hero.title2': 'Talent & Brands',
      'hero.title3': 'with Global Impact.',
      'hero.desc': 'At LUMA Creative Management, we deliver comprehensive consulting in entertainment and media. We develop, connect, and elevate top talent, creators, and brands across the US Hispanic and Latin American markets.',
      'hero.ctaPrimary': 'Explore Roster',
      'hero.ctaSecondary': 'Our Services',
      'hero.hubs': 'Strategic Presence:',
      'hero.spotlightTag': 'Talent Spotlight',
      'hero.floatingBadge': 'Years representing top actors and TV hosts in the US Hispanic market',

      'stats.item1': 'Years of Excellence',
      'stats.item2': 'Productions & Campaigns',
      'stats.item3': 'Audience & Social Reach',
      'stats.item4': 'Production Hub Countries',

      'about.tag': 'Our Vision',
      'about.title': 'A full-service talent management and consulting agency',
      'about.card1Title': 'Elite Talent Representation',
      'about.card1Desc': 'For over two decades, we have represented the finest roster of actors, actresses, TV hosts, and digital personalities in the US Hispanic entertainment industry.',
      'about.card2Title': 'Cross-Border Audiovisual Production',
      'about.card2Desc': 'We maintain robust production networks across the US, Mexico, Colombia, and Venezuela, taking concepts from initial treatment to multiplatform distribution.',
      'about.card3Title': 'Brand Strategy & Market Positioning',
      'about.card3Desc': 'We build personal and corporate brands from the ground up, designing marketing and PR strategies that drive real engagement and commercial growth.',

      'services.tag': 'What We Do',
      'services.title': '360° Strategic Solutions',
      'services.sub': 'Actionable expertise in communication, production, and artistic and corporate career advancement.',

      'service.s1Title': 'Talent Management',
      'service.s1Desc': 'Full representation of actors, actresses, hosts, and creators with television networks, studios, and streaming platforms.',
      'service.s2Title': 'Branding & Marketing',
      'service.s2Desc': 'Identity design and go-to-market strategies tailored to position your products and services with maximum resonance.',
      'service.s3Title': 'Public Relations',
      'service.s3Desc': 'Targeted media relations and press campaigns to elevate brand visibility among key media outlets and tastemakers.',
      'service.s4Title': 'Consulting',
      'service.s4Desc': 'Executive consulting across entertainment business development, corporate partnerships, and creative career steering.',
      'service.s5Title': 'Production Services',
      'service.s5Desc': 'Top-tier production crews and creative directors for commercial shoots, TV series, digital formats, and feature films.',
      'service.s6Title': 'Content Creation',
      'service.s6Desc': 'Strategic audiovisual content production and copywriting designed for social channels to drive audience engagement.',
      'service.s7Title': 'Image Consulting',
      'service.s7Desc': 'Comprehensive styling, image assessment, and media coaching to project an authentic and compelling personal brand.',
      'service.s8Title': 'Publishing',
      'service.s8Desc': 'End-to-end book publishing services: from conceptual ghostwriting and editing to distribution and international press tours.',

      'talent.tag': 'Elite Roster',
      'talent.title': 'Exclusive Talent & Clients',
      'talent.sub': 'The creators, performers, and visionary brands we build with.',
      'filter.all': 'All',
      'filter.acting': 'Acting & TV',
      'filter.lifestyle': 'Creators & Lifestyle',
      'filter.brands': 'Brands & Ventures',

      'cat.actor': 'Actor',
      'cat.actress': 'Actress',
      'cat.author': 'Author & Speaker',
      'cat.host': 'TV Host & Actor',
      'cat.culinary': 'Celebrity Baker',
      'cat.brand': 'Brand & Product',
      'cat.music': 'Music & Artist',
      'cat.health': 'Health & Aesthetic',
      'cat.podcast': 'Podcast & Media',

      'portfolio.tag': 'Recent Highlights',
      'portfolio.title': 'Audiovisual & Editorial Production',
      'portfolio.sub': 'High-caliber storytelling delivered to premier international audiences.',
      'portfolio.badge': 'International Premiere',
      'portfolio.featTitle': 'Series Development & Star Packaging',
      'portfolio.featDesc': 'Strategic collaboration with international television networks and streaming giants on talent casting and executive production.',
      'portfolio.mini1Title': 'Book Tours & Bestsellers',
      'portfolio.mini1Desc': 'Publication, launch campaigns, and international book tours distributed throughout the Americas.',
      'portfolio.mini2Title': '360° Commercial Campaigns',
      'portfolio.mini2Desc': 'Connecting multinational brands with leading Hispanic influencers for high-ROI campaigns.',
      'portfolio.mini3Title': 'Press Conferences & Media Tours',
      'portfolio.mini3Desc': 'National press tours across Telemundo, Univision, and leading digital news platforms.',

      'contact.tag': 'Get in Touch',
      'contact.title': 'Ready to accelerate your career or project?',
      'contact.desc': 'Whether you are a creator seeking representation or a brand looking to collaborate with premier Hispanic talent, our team is ready to talk.',
      'contact.headquarters': 'Headquarters',
      'contact.directEmail': 'Direct Email',
      'contact.socials': 'Official Channels',

      'form.title': 'Send an Inquiry',
      'form.name': 'Full Name *',
      'form.email': 'Email Address *',
      'form.interest': 'Inquiry Type *',
      'form.optDefault': 'Select an option',
      'form.opt1': 'Talent Representation',
      'form.opt2': 'Artist Booking / Hiring',
      'form.opt3': 'Production Services',
      'form.opt4': 'Branding & Consulting',
      'form.opt5': 'PR & Media Relations',
      'form.message': 'Message *',
      'form.submit': 'Send Message',
      'form.submitting': 'Sending inquiry...',
      'form.success': 'Thank you! Your message has been sent. A LUMA representative will get back to you shortly.',
      'form.error': 'Please fill out all required fields with valid information.',

      'footer.desc': 'Over 25 years dedicated to shaping, elevating, and representing the highest-caliber talent in Hispanic entertainment.',
      'footer.navigation': 'Navigation',
      'footer.hubsTitle': 'Strategic Hubs',
      'footer.socialTitle': 'Connect',
      'footer.rights': 'All Rights Reserved.',
      'footer.top': 'Back to Top'
    }
  };

  let currentLang = localStorage.getItem('luma_lang') || 'es';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('luma_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);

    // Update text for all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update Language buttons state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  // Bind Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Initialize Language
  setLanguage(currentLang);


  // ==========================================
  // 2. STICKY HEADER ON SCROLL
  // ==========================================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });


  // ==========================================
  // 3. ACCESSIBLE MOBILE MENU DRAWER
  // ==========================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  function toggleMobileMenu(force) {
    const isOpen = typeof force === 'boolean' ? force : !mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    mobileToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());

    // Close when clicking any navigation link
    mobileMenu.querySelectorAll('.mobile-link, .btn').forEach(link => {
      link.addEventListener('click', () => toggleMobileMenu(false));
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggleMobileMenu(false);
      }
    });
  }


  // ==========================================
  // 4. TALENT ROSTER INTERACTIVE FILTER
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const talentCards = document.querySelectorAll('.talent-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      talentCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });


  // ==========================================
  // 5. INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('active'));
  }


  // ==========================================
  // 6. CONTACT FORM HANDLING
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.elements['name'].value.trim();
      const email = contactForm.elements['email'].value.trim();
      const interest = contactForm.elements['interest'].value;
      const message = contactForm.elements['message'].value.trim();

      // Basic validation
      if (!name || !email || !interest || !message) {
        formFeedback.textContent = translations[currentLang]['form.error'];
        formFeedback.className = 'form-feedback error';
        return;
      }

      // Show submitting state
      submitBtn.disabled = true;
      const originalBtnText = submitBtn.querySelector('span').textContent;
      submitBtn.querySelector('span').textContent = translations[currentLang]['form.submitting'];
      formFeedback.textContent = '';
      formFeedback.className = 'form-feedback';

      // Simulate network request
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = originalBtnText;
        formFeedback.textContent = translations[currentLang]['form.success'];
        formFeedback.className = 'form-feedback success';
        contactForm.reset();

        // Clear feedback after 7 seconds
        setTimeout(() => {
          formFeedback.textContent = '';
          formFeedback.className = 'form-feedback';
        }, 7000);
      }, 900);
    });
  }


  // ==========================================
  // 7. DYNAMIC YEAR
  // ==========================================
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
