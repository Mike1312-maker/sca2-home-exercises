//Game object
let game = {
    interval: null,
    counter : {
      counter: 0,
      roundCounter: 0,
      counterLock: true,
      counterMax: 50
    },
    //Was the power up executed? If not, it is true else it is false
    powerUps: {
      powerUp1: true,
      powerUp2: true,
      powerUp3: true
    },
    //Event Object
    events: {
      doRandomEvents: false,
      eventCounter: 0,
      setEvents: [1, 10, 30, 50],
      randomEvents:[
        'So, how is trying to beat the unbeatable going?',
        'You know, you should give up at this point',
        'The future awaits..... For Me!!!',
        'You are HOPELESS',
        'Click, Click, Click... You, Are going, Nowhere',
        'He gets reset. Every Single Time.',
        'You know, I could do this all day',
      ],
      events: [
        'Hey, can you stop pushing that button?',
        'Like pretty please... stop pushing the button',
        'Is it really too much to ask: STOP PUSHING THE BUTTON!!!',
        'Gah, take that!',
        'You will never reach 100!!!! You will never destroy me!',
        'BWAHAHAHAHAHA!!!!',
        'Evil, Evil, and more Evil!',
        'Ooooo, He climbs closer to the goal!!!',
        'WAIT! THAT WASN\'T SUPPOSED TO HAPPEN!!!!!',
        'NO!!! I.... AM..... DYING....'
      ]
    }
  };
  
  //DOM Object
  let doc = {
      attributeCounter: {
        button: 1
      },
      addElement(id, tag, text) {
          let x = document.getElementById(id);
          let newElement = document.createElement(tag);
          let someText = document.createTextNode(text);
          newElement.appendChild(someText);
          x.appendChild(newElement);
      },
      showElement(id) {
          let x = document.getElementById(id);
          x.style.display = "block";
      },
      hideElement(id) {
          let x = document.getElementById(id);
          x.style.display = "none";
      },
      addAttribute (id, attribute, value) {
          let x = document.getElementById(id);
          x.setAttribute(attribute, value);
      },
      innerHTML (id, text) {
        let x = document.getElementById(id);
        x.innerHTML = text;
      },
      createButtonWithId (id, text) {
        this.addElement(id, 'button', text);
        document.getElementsByTagName('button')[doc.attributeCounter.button + 1].setAttribute('id', 'powerUp1');
        this.attributeCounter.button++;
      }
  }
  
  class powerUps {
    constructor (rate, newLimit) {
      this.rate = rate
      this.newLimit = newLimit
    }
  
    autoClick () {
      interval = setInterval(increaseCounter, this.rate);
    }
  
    setNewLimit () {
      game.counter.counterLock = this.newLimit;
    }
  
  }
  //=====================Main Buuton Function==================
  //Called every click of main button
  function increaseCounter () {
    game.counter.counter++;
    doc.innerHTML('counter', `<p>${game.counter.counter}</p>`);
    checkForEvents();
  }
  
  //=================Event Functions==================
  //Called to check for events. This includes reseting the counter and random events
  function checkForEvents () {
    //Done first since Scheduled Events can override
    if ((Math.floor(Math.random() * 50) === 5) && game.events.doRandomEvents) {
      randomEvent();
    };
  
    //Runs through the setEvents (number loop that trigges the events)
    let i;
    for (i of game.events.setEvents) {
      if (game.counter.counter === i && game.events.eventCounter <= game.events.events.length) {
        scheduledEvent();
      };
    };
  
    if (game.counter.counter === game.counter.counterMax && game.counter.counterLock) {
      game.counter.counter = 1;
      game.counter.roundCounter++;
    };
  
    switch (game.events.eventCounter) {
      case 4: {
        break;
      }
      case 6: {
        game.events.doRandomEvents = true;
        break;
      }
      case 9: {
        if (game.powerUps.powerUp1) {
          powerUp1 = new powerUp(1000, 50);
          doc.createButtonWithId('powerUp1', 'Power Up! ----- Click to Activate!');
          doc.addAttribute(powerUp1, 'onClick', 'powerUp1.autoClick()');
          game.powerUps.powerUp1 = false;
          game.events.setEvents = [100];
          break;
        };
      }
      default:
        break;
    };
  }
  
  //Called for a random event
  function randomEvent () {
      let currentEvent = game.events.randomEvents[Math.floor(Math.random() * game.events.randomEvents.length)]
      doc.innerHTML('events', `<p>${currentEvent}</p>`);
  }
  
  //Called for an event set out by the events.setevents timeline
  function scheduledEvent () {
    let = currentEvent = game.events.events[game.events.eventCounter];
    doc.innerHTML('events', `<p>${currentEvent}</p>`);
    game.events.eventCounter++;
  }
  
  
  //=====================================================
  