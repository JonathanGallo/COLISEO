class Scene3 extends Phaser.Scene {
    constructor() {
      super("creditos");
    }

    preload ()
    {
      this.load.image('logo2D', './assets/sprites/logo2D.png');   
      this.load.image('fondo_der', './assets/sprites/fon_derrota.png');
    }
    
    create() {
      this.add.image(400, 300, 'fondo_der');
      this.add.image(400, 100, 'logo2D');


      var puntajefinal = this.add.text(0, 0, 'Score: ' + score,  { fontFamily: 'Kristen ITC', fontSize: 70, color: '#000000' });
      //scene.add.zone(x, y, width, height)
        // X Y del centro del rectangulo invisible
        // width, height del rectangulo invisible
      Phaser.Display.Align.In.Center(puntajefinal, this.add.zone(400, 300, 800, 600));



      var restartButton = this.add.text(350, 370, 'Restart', { fontFamily: 'Kristen ITC', fontSize: 40, color: '#000000' })
      .setInteractive()
      .on('pointerdown', () => this.reiniciar() );
      
    }

    reiniciar() {
      this.scene.start('juego');
    }

    
}
  