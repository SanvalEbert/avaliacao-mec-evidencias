// Vincula todos os botões PPC ao documento oficial do curso no Google Drive.
// Mantém os demais botões/evidências inalterados.
(function () {
  const PPC_URL = 'https://drive.google.com/file/d/13o_gr-Ro5L85ApMo5Iky6pYz6363G3-g/view?usp=drivesdk';

  function linkPpcButtons() {
    document.querySelectorAll('.doc').forEach((button) => {
      const label = (button.textContent || '').trim();
      if (!/^↗?\s*PPC(?:\s*·.*)?$/i.test(label)) return;
      if (button.dataset.ppcLinked === 'true') return;

      button.dataset.ppcLinked = 'true';
      button.title = 'Abrir PPC no Google Drive';
      button.setAttribute('aria-label', 'Abrir PPC no Google Drive');
      button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        window.open(PPC_URL, '_blank', 'noopener,noreferrer');
      }, true);
    });
  }

  linkPpcButtons();
  new MutationObserver(linkPpcButtons).observe(document.body, {
    childList: true,
    subtree: true
  });
})();
