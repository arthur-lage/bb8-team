function goDown() {
  $("html, body").animate(
    {
      scrollTop: $("section.second-section").offset().top,
    },
    'fast'
  );
}
