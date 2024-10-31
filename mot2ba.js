
function scrollToMembers() {
  const membersSection = document.getElementById("members-section");
  membersSection.scrollIntoView({ behavior: "smooth" });
}


window.addEventListener("scroll", () => {
  const membersSection = document.getElementById("members-section");
  const sectionPos = membersSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.5;

  if (sectionPos < screenPos) {
    membersSection.style.opacity = "1"; 
  }
});


document.querySelectorAll('.member-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const images = card.querySelectorAll('img');
    if (images.length > 1) {
      images[0].style.opacity = '0'; 
      images[1].style.opacity = '1';
      images[1].style.transform = 'scale(1.05)';
    }
  });

  card.addEventListener('mouseleave', () => {
    const images = card.querySelectorAll('img');
    if (images.length > 1) {
      images[0].style.opacity = '1'; 
      images[1].style.opacity = '0'; 
      images[1].style.transform = 'scale(1)';
    }
  });
});


document.documentElement.style.overflowY = 'scroll';
document.documentElement.style.width = 'calc(100% + 17px)'; 
document.documentElement.style.scrollbarWidth = 'none'; 
document.body.style.overflowY = 'scroll';
document.body.style.width = '100vw';
document.body.style.msOverflowStyle = 'none'; 
