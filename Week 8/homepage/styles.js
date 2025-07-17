<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact - Gabriel Rassi</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
  <link href="styles/styles.css" rel="stylesheet">
  <style>
    .form-control:focus {
      border-color: #343a40;
      box-shadow: none;
    }
    .section-dark {
      background-color: #111;
    }
    .btn-lg-custom {
      padding: 0.8rem 2.5rem;
      border-radius: 50px;
    }
    #backToTop {
      display: none;
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 99;
      background-color: #111;
      color: white;
      border: none;
      outline: none;
      padding: 10px 15px;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      transition: opacity 0.3s ease-in-out;
    }
    #backToTop:hover {
      background-color: #333;
    }
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease-out;
    }
    .animate-on-scroll.visible {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <a class="navbar-brand font-weight-bold" href="index.html">Gabriel Rassi</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
      <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
      <li class="nav-item"><a class="nav-link" href="portfolio.html">Portfolio</a></li>
      <li class="nav-item active"><a class="nav-link" href="contact.html">Contact</a></li>
    </ul>
  </div>
</nav>

<!-- Hero -->
<section class="py-5 bg-dark text-white text-center animate-on-scroll">
  <div class="container">
    <h1 class="display-4 font-weight-bold">Let’s Connect</h1>
    <p class="lead mb-3">Looking to scale smarter? Start the conversation.</p>
    <a href="mailto:you@example.com" class="text-white d-block mb-1 font-weight-bold">you@example.com</a>
    <p class="small">I personally respond to every serious inquiry.</p>
  </div>
</section>

<!-- Contact Form -->
<section class="py-5 bg-light animate-on-scroll">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow-lg border-0">
          <div class="card-body p-5">
            <h3 class="text-center mb-4 font-weight-bold">Tell Me About Your Project</h3>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Your name" required>
                </div>
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com" required>
                </div>
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" class="form-control" id="subject" placeholder="Project type, goal, or quick headline" required>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="6" placeholder="Let’s get specific. What’s your vision, your roadblock, or your ask?" required></textarea>
              </div>
              <button type="submit" class="btn btn-dark btn-block btn-lg btn-lg-custom">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-5 section-dark text-white text-center animate-on-scroll">
  <div class="container">
    <h2 class="mb-3">Still thinking it through?</h2>
    <p class="mb-4">I get it. Hit send anyway — and I’ll help you figure out the next move.</p>
    <a href="services.html" class="btn btn-outline-light btn-lg btn-lg-custom">Explore Services</a>
  </div>
</section>

<!-- Back to Top Button -->
<button id="backToTop" title="Go to top">↑ Top</button>

<!-- Footer -->
<footer class="bg-dark text-white text-center py-4">
  <p class="mb-1">© 2025 Gabriel Rassi. All rights reserved.</p>
  <p class="small mb-3">Site built with intention. Designed to convert.</p>
  <div>
    <a href="index.html" class="text-white mx-2">Home</a> |
    <a href="services.html" class="text-white mx-2">Services</a> |
    <a href="portfolio.html" class="text-white mx-2">Portfolio</a> |
    <a href="contact.html" class="text-white mx-2">Contact</a>
  </div>
</footer>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
<script>
  // Show or hide the back to top button
  const backToTop = document.getElementById("backToTop");
  window.onscroll = () => {
    backToTop.style.display = window.scrollY > 400 ? "block" : "none";
  };

  backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animate on scroll
  const animateItems = document.querySelectorAll('.animate-on-scroll');
  const animateOnScroll = () => {
    animateItems.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  };

  document.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
</script>
<script src="scripts/script.js"></script>
</body>
</html>
