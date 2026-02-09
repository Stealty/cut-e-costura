const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 59;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export default scrollToId;