
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // optional: only animate once
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));




// Text animation

const revealItems = document.querySelectorAll(".reveal-text");

  function handleScrollReveal() {
    revealItems.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setTimeout(() => {
          el.classList.add("visible");
        }, index * 100);
      }
    });
  }

  window.addEventListener("scroll", handleScrollReveal);
  window.addEventListener("load", handleScrollReveal);


// Card animation

const title = document.querySelector(".reveal-text");
  const chips = document.querySelectorAll(".reveal-chip");

  function revealElementsOnScroll() {
    const titleRect = title.getBoundingClientRect();
    if (titleRect.top < window.innerHeight - 100) {
      title.classList.add("visible");
    }

    chips.forEach((chip, index) => {
      const rect = chip.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        setTimeout(() => {
          chip.classList.add("visible");
        }, index * 200); // staggered delay
      }
    });
  }

  window.addEventListener("scroll", revealElementsOnScroll);
  window.addEventListener("load", revealElementsOnScroll);

