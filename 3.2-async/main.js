class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = undefined;
    }
    addClock(time, callback,timerId){
      if(timerId === undefined) {
          console.error("please,enter Id")
      } else {
          if(this.alarmCollection.find((elem)=> {return elem.id === timerId}) !== undefined) {
              console.error("this Id has been created")
          } else {
              this.alarmCollection.push({id : timerId, callback: callback, time: time})
          }
      }

    }
    removeClock(timerId){
        const lengthBefore = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((elem) => elem.id !== timerId)
        return lengthBefore !== this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        const options = {
            hour: "numeric",
            minute: "numeric",
        }
        const now = new Date()
        return now.toLocaleString('ru', options)
    }

    checkClock(clock) {

        if(this.getCurrentFormattedTime() === clock.time) {
            clock.callback();
        }
    }

    start(){
        if(this.timerId === undefined) {
            this.timerId = setInterval(() => {this.alarmCollection.forEach(elem=>this.checkClock(elem))}, 5000)
        }
    }

    stop() {
        if(this.timerId !== undefined) {
            clearInterval(this.timerId);
            this.timerId = undefined;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(elem=> {
            console.log(`Будильник ${elem.id} заведен на ${elem.time}`)
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}


function TestCase() {
let alarm = new AlarmClock()
//alarm.addClock('16:08', ()=>console.log('work'), '2')
    alarm.addClock('16:22', ()=>{console.log('work'); alarm.removeClock('2')}, '2')
    alarm.start()
}

TestCase();