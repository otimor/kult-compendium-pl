Hooks.on('init', () => {
  if(typeof Babele !== 'undefined') {
      Babele.get().register({
          module: 'kult-compendium-pl',
          lang: 'pl',
          dir: 'compendium'
      });
  }
});
