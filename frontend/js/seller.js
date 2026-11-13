document.addEventListener('DOMContentLoaded', () => {
  const dashboardLinks = document.querySelectorAll('.sidebar a');
  dashboardLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      dashboardLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
