const qtrC4 = document.querySelector('.qtrC4'); 
const qtrC4Sharp = document.querySelector('.qtrC4Sharp'); 
const qtrD4 = document.querySelector('.qtrD4'); 
const qtrD4Sharp = document.querySelector('.qtrD4Sharp'); 
const qtrF4 = document.querySelector('.qtrF4'); 
const qtrF4Sharp = document.querySelector('.qtrF4Sharp'); 
const qtrG4 = document.querySelector('.qtrG4'); 
const qtrG4Sharp = document.querySelector('.qtrG4Sharp'); 
const qtrB4 = document.querySelector('.qtrB4'); 
const qtrE4 = document.querySelector('.qtrE4'); 
const qtrA4 = document.querySelector('.qtrA4'); 
const qtrA4Sharp = document.querySelector('.qtrA4Sharp'); 


qtrC4.addEventListener('click', function() {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(110);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'C4');
    var player = conductor.finish();
    player.play()
});
qtrC4Sharp.addEventListener('click', function() {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(110);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'C#4');
    var player = conductor.finish();
    player.play()
});
qtrD4.addEventListener('click', function() {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(110);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'D4');
    var player = conductor.finish();
    player.play()
});
qtrD4Sharp.addEventListener('click', function() {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(110);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'D#4');
    var player = conductor.finish();
    player.play()
});
qtrF4.addEventListener('click', function() {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(110);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'F4');
    var player = conductor.finish();
    player.play()
});
qtrF4Sharp.addEventListener('click', function() {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(110);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'F#4');
    var player = conductor.finish();
    player.play()
});
qtrG4.addEventListener('click', function() {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(110);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'G4');
    var player = conductor.finish();
    player.play()
});
qtrG4Sharp.addEventListener('click', function() {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(110);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'G#4');
    var player = conductor.finish();
    player.play()
});
qtrB4.addEventListener('click', function() {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(110);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'B4');
    var player = conductor.finish();
    player.play()
});
qtrE4.addEventListener('click', function() {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(110);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'E4');
    var player = conductor.finish();
    player.play()
});
qtrA4.addEventListener('click', function() {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(110);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'A4');
    var player = conductor.finish();
    player.play()
});
qtrA4Sharp.addEventListener('click', function() {
    var conductor = new BandJS();
    conductor.setTimeSignature(4,4);
    conductor.setTempo(110);
    var piano = conductor.createInstrument();
    piano.note('quarter', 'A#4');
    var player = conductor.finish();
    player.play()
});