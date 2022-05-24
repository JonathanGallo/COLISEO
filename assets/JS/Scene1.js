class Scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    preload ()
    {
      this.load.image('logo', './assets/sprites/logo.png');
      this.load.image('fondo', './assets/sprites/fondo.png');
      this.load.image('fondo_der', './assets/sprites/fon_derrota.png');
      this.load.image('ground', './assets/sprites/platform.png');
      this.load.image('ground2', './assets/sprites/platform2.png');
      this.load.image('star', './assets/sprites/akuma.png');
      this.load.image('INICIAR', './assets/sprites/INICIAR.png');
      this.load.image('INICIAR2', './assets/sprites/INICIAR_2.png');
      this.load.image('bomb', './assets/sprites/bala_buggy.png');
      this.load.spritesheet('luffy', './assets/sprites/luffy.png', { frameWidth: 66, frameHeight: 60 });      
    }

    create() {

      //  Our player animations, turning, walking left and walking right.
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('luffy', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'luffy', frame: 4 } ],
        frameRate: 20
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('luffy', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
      });

      var logo = this.add.image(400, 300, 'logo').setScale(0.33)
      logo.setInteractive()
      logo.on('pointerdown', () => this.scene.start('juego') );

  

      var Inicar = this.add.image(410, 340, 'INICIAR').setScale(0.8)
      .setInteractive()
      .on('pointerover', () => this.add.image(410, 340, 'INICIAR2').setScale(0.8))
      .on('pointerout', () => this.add.image(410, 340, 'INICIAR').setScale(0.8))
      .on('pointerdown', () => this.INICIAR())


      // Funcion FLECHA
      // (param1, param2, …, paramN) => { sentencias }
      // (param1, param2, …, paramN) => expresion
      // Equivalente a: () => { return expresion; }
    }

    INICIAR(){
      this.scene.start('juego');
    }

}
