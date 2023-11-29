$(function() {
    var body = $('#body-bg');
    var backgrounds = ['url(https://msdesign.blob.core.windows.net/wallpapers/Microsoft_Nostalgic_Windows_Wallpaper_4k.jpg)', 'url(https://png.pngtree.com/thumb_back/fh260/background/20211107/pngtree-abstract-crystal-background-low-poly-textured-triangle-shapes-in-random-pattern-image_915268.png)'];
    var current = 0;
  
  function nextBackground() {
   div.css(
     'background',
      backgrounds[current = ++current % backgrounds.length]
   );
  
  setTimeout(nextBackground, 5000);
  }
  setTimeout(nextBackground, 5000);
    div.css('background', backgrounds[0]);
  });