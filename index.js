TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4b0.png',
      text: '💰 CA Archibrix',
      callback: function(t) {
        return t.popup({
          title: '💰 CA Archibrix',
          url: 'https://archibrix-ca.vercel.app',
          height: 600,
        });
      }
    }];
  }
});
