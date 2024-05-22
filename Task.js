import { PsychoJS } from 'https://pavlovia.org/lib/core-3.2.js';
import * as core from 'https://pavlovia.org/lib/core-3.2.js';
import { TrialHandler } from 'https://pavlovia.org/lib/data-3.2.js';
import { Scheduler } from 'https://pavlovia.org/lib/util-3.2.js';
import * as util from 'https://pavlovia.org/lib/util-3.2.js';
import * as visual from 'https://pavlovia.org/lib/visual-3.2.js';
import { Sound } from 'https://pavlovia.org/lib/sound-3.2.js';






// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Task';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

  $.getJSON('https://api.ipify.org?format=json', function(data){

    console.log(data.ip);
    localStorage.setItem('ip',data.ip);

  

  });
// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin, trials_3LoopScheduler);
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
    psychoJS.setRedirectUrls(('https://unlcorexmuw.qualtrics.com/jfe/form/SV_4TnhafOJwAnh8Tc?id=' + String(expInfo['participant'])), '');

  return Scheduler.Event.NEXT;
}

var instrClock;
var instructions;
var key_resp;
var instructfiles;
var trialClock;
var fixation;
var image_display;
var response;
var orderfiles;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructions', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [800,533],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instructfiles = 'instruct' + String(expInfo.participant % 2) + '.xlsx';

  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fixation = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fixation', units : 'pix', 
    image : 'fix.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [395, 255],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  image_display = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_display', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  response = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  orderfiles='order'+String(expInfo['participant']%12)+'.xlsx'
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var trials_3;
var currentLoop;
function trials_3LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: instructfiles,
    seed: undefined, name: 'trials_3'});
  psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
  currentLoop = trials_3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_3 of trials_3) {
    thisScheduler.add(importConditions(trials_3));
    const trials_4LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trials_4LoopBegin, trials_4LoopScheduler);
    thisScheduler.add(trials_4LoopScheduler);
    thisScheduler.add(trials_4LoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

var trials_4;
function trials_4LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_4 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: instrConds,
    seed: undefined, name: 'trials_4'});
  psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
  currentLoop = trials_4;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_4 of trials_4) {
    thisScheduler.add(importConditions(trials_4));
    thisScheduler.add(instrRoutineBegin);
    thisScheduler.add(instrRoutineEachFrame);
    thisScheduler.add(instrRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);

  return Scheduler.Event.NEXT;
}


function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}

var trials_2;
function trials_2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: orderfiles,
    seed: undefined, name: 'trials_2'});
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_2 of trials_2) {
    thisScheduler.add(importConditions(trials_2));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: condsFile,
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(trialRoutineBegin);
    thisScheduler.add(trialRoutineEachFrame);
    thisScheduler.add(trialRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var instrComponents;
function instrRoutineBegin() {
  //------Prepare to start Routine 'instr'-------
  t = 0;
  instrClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  instructions.setImage(display);
  key_resp.keys = undefined;
  key_resp.rt = undefined;
  // keep track of which components have finished
  instrComponents = [];
  instrComponents.push(instructions);
  instrComponents.push(key_resp);
  
  for (const thisComponent of instrComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function instrRoutineEachFrame() {
  //------Loop for each frame of Routine 'instr'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instrClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instructions* updates
  if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instructions.tStart = t;  // (not accounting for frame time here)
    instructions.frameNStart = frameN;  // exact frame index
    instructions.setAutoDraw(true);
  }

  
  // *key_resp* updates
  if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp.tStart = t;  // (not accounting for frame time here)
    key_resp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
  }

  if (key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp.keys = theseKeys[0].name;  // just the last key pressed
      key_resp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of instrComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
   
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEnd() {
  //------Ending Routine 'instr'-------
  for (const thisComponent of instrComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
  if (typeof key_resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
      routineTimer.reset();
      }
  
  key_resp.stop();
  // the Routine "instr" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trialComponents;
function trialRoutineBegin() {
  //------Prepare to start Routine 'trial'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  routineTimer.add(4.000000);
  // update component parameters for each repeat
  image_display.setSize([sizeX, sizeY]);
  image_display.setImage(stimulus);
  response.keys = undefined;
  response.rt = undefined;
  // keep track of which components have finished
  trialComponents = [];
  trialComponents.push(fixation);
  trialComponents.push(image_display);
  trialComponents.push(response);
  
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *fixation* updates
  if (t >= 0.5 && fixation.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixation.tStart = t;  // (not accounting for frame time here)
    fixation.frameNStart = frameN;  // exact frame index
    fixation.setAutoDraw(true);
  }

  frameRemains = 0.5 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixation.setAutoDraw(false);
  }
  
  // *image_display* updates
  if (t >= 0 && image_display.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    image_display.tStart = t;  // (not accounting for frame time here)
    image_display.frameNStart = frameN;  // exact frame index
    image_display.setAutoDraw(true);
  }

  frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (image_display.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    image_display.setAutoDraw(false);
  }
  
  // *response* updates
  if (t >= 0 && response.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response.tStart = t;  // (not accounting for frame time here)
    response.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { response.clearEvents(); });
  }

  frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    response.status = PsychoJS.Status.FINISHED;
  }

  if (response.status === PsychoJS.Status.STARTED) {
    let theseKeys = response.getKeys({keyList: ['a', 'l'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (response.keys === undefined) {  // then this was the first keypress
        response.keys = theseKeys[0].name;  // just the first key pressed
        response.rt = theseKeys[0].rt;
        // a response ends the routine

      }
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEnd() {
  //------Ending Routine 'trial'-------
  for (const thisComponent of trialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('response.keys', response.keys);
  if (typeof response.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('response.rt', response.rt);
      routineTimer.reset();
      }
  
  response.stop();
  return Scheduler.Event.NEXT;
}


function endLoopIteration({thisScheduler, isTrials=true}) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      // Check for and save orphaned data
      if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
        psychoJS.experiment.nextEntry();
      }
      thisScheduler.stop();
    } else if (isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
