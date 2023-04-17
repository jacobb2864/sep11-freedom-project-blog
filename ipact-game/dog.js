ig.module(
    'game.myfile'
)
.requires(
    'impact.game',
    'impact.image',
    'game.other-file'
)

var data = [
    [1,2,6],
    [0,3,5],
    [2,8,1],
];
var bg = new ig.BackgroundMap( 16, data, '../Impact-tinker/media/purple_L4.png' );

var as = new ig.AnimationSheet( '../Impact-tinker/media/purple_L4.png', 16, 16);
bg.anims[5] = new ig.Animation(as, 0.1, [0,1,2,3,4]);
// Move
bg.setScreenPos( 25, 10 );

// Draw
bg.draw();

