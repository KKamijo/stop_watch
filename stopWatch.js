var StopWatch = function(display, list) {
    this.display = display;
    this.display.setText = function(n) {
        this.innerHTML = n.toFixed(2);
    };
    this.lapList = list;
    this.lapList.setText = function(n) {
        this.innerHTML = n.toFixed(2);
    };
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
        self.display.setText(self.counter);
    },0.01);
};

StopWatch.prototype.stop = function() {
    clearInterval(this.timer);
    this.startUp = false;
};

StopWatch.prototype.reset = function() {
    if (this.startUp)  this.stop();
    this.counter = 0;
    this.display.setText(this.counter);
    this.lapList.textContent = null;
};

StopWatch.prototype.laptime = function() {
    if(!this.startUp) return;
    var child = document.createElement('li');
    child.innerHTML = this.counter.toFixed(2);
    this.lapList.appendChild(child);
};