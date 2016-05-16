var StopWatch = function() {
    this.display = document.getElementById('display');
    this.lapList = document.getElementById('list');
    this.startUp = false;
    this.counter = 0;
    this.timer;
};

StopWatch.prototype.start = function() {
    if(this.startUp) return;
    this.startUp = true;
    var self = this;
    this.timer = setInterval(function() {
        self.counter = self.counter + 0.01;
        self.setText(self.display, self.counter);
    },0.01);
};

StopWatch.prototype.stop = function() {
    clearInterval(this.timer);
    this.startUp = false;
};

StopWatch.prototype.reset = function() {
    if (this.startUp)  this.stop();
    this.counter = 0;
    this.setText(this.display, this.counter);
    this.lapList.textContent = null;
};

StopWatch.prototype.laptime = function() {
    if(!this.startUp) return;
    var child = document.createElement('li');
    this.setText(child, this.counter);
    this.lapList.appendChild(child);
};

StopWatch.prototype.setText = function(target, n) {
    target.innerHTML = n.toFixed(2);
};