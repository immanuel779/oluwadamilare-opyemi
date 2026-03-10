// Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });

    // Loading Animation
    window.addEventListener('load', function() {
      setTimeout(function() {
        document.getElementById('loading').classList.add('fade-out');
      }, 500);
    });

    // Typed.js Animation
    var typed = new Typed('#typed-output', {
      strings: [
        'Frontend Developer',
        'UI Enthusiast',
        'Problem Solver',
        'Code Craftsman'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('mainNav');
      const backToTop = document.getElementById('backToTop');
      
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('show');
      } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('show');
      }
    });

    // Back to Top Button
    document.getElementById('backToTop').addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Active Navigation Link on Scroll
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });

    // Contact Form Handler
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      if (!this.checkValidity()) {
        this.classList.add('was-validated');
        return;
      }
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Create WhatsApp message
      const whatsappMessage = `*New Message from Portfolio*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
      
      // Open WhatsApp
      window.open(`https://wa.me/2347089584607?text=${whatsappMessage}`, '_blank');
      
      // Show success message
      const feedback = document.getElementById('formFeedback');
      feedback.innerHTML = '<span class="text-success">✓ Message sent! Redirecting to WhatsApp...</span>';
      
      // Reset form
      setTimeout(() => {
        this.reset();
        this.classList.remove('was-validated');
        feedback.innerHTML = '';
      }, 3000);
    });

    // Update copyright year
    document.getElementById('currentYear').textContent = new Date().getFullYear();// Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });

    // Loading Animation
    window.addEventListener('load', function() {
      setTimeout(function() {
        document.getElementById('loading').classList.add('fade-out');
      }, 500);
    });

    // Typed.js Animation
    var typed = new Typed('#typed-output', {
      strings: [
        'Frontend Developer',
        'UI Enthusiast',
        'Problem Solver',
        'Code Craftsman'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('mainNav');
      const backToTop = document.getElementById('backToTop');
      
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('show');
      } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('show');
      }
    });

    // Back to Top Button
    document.getElementById('backToTop').addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Active Navigation Link on Scroll
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });

    // Contact Form Handler
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      if (!this.checkValidity()) {
        this.classList.add('was-validated');
        return;
      }
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Create WhatsApp message
      const whatsappMessage = `*New Message from Portfolio*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
      
      // Open WhatsApp
      window.open(`https://wa.me/2347089584607?text=${whatsappMessage}`, '_blank');
      
      // Show success message
      const feedback = document.getElementById('formFeedback');
      feedback.innerHTML = '<span class="text-success">✓ Message sent! Redirecting to WhatsApp...</span>';
      
      // Reset form
      setTimeout(() => {
        this.reset();
        this.classList.remove('was-validated');
        feedback.innerHTML = '';
      }, 3000);
    });

    // Update copyright year
    document.getElementById('currentYear').textContent = new Date().getFullYear();