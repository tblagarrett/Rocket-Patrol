class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    preload() {
        // load images/tile sprites
        this.load.image('rocket', './assets/img/rocket.png')
        this.load.image('spaceship', './assets/img/spaceship.png')
        this.load.image('starfield', './assets/img/starfield.png')

        // load audio
        this.load.audio('sfx-select', './assets/sfx/sfx-select.wav')
        this.load.audio('sfx-explosion', './assets/sfx/sfx-explosion.wav')
        this.load.audio('sfx-shot', './assets/sfx/sfx-shot.wav')

        // load spritesheet
        this.load.spritesheet('explosion', './assets/img/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        })
    }

    create() {
        // animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
        })

        this.add.text(20, 20, "Rocket Patrol Menu")
        this.scene.start("playScene")
    }
}