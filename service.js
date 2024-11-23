document.querySelectorAll('.service-box').forEach(serviceBox => {
    serviceBox.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });
    serviceBox.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });
  