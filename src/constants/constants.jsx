export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  actionAfterSolve: "NONE",
  message: undefined,
  keysType: "NUMBERS",
  background: "images/standard/background.png",
  backgroundOscilloscope : "images/standard/background_oscilloscope.png",
  backgroundDial: "images/standard/dial.png",
  modeButton: "images/standard/mode_button.png",
  backgroundNok: "images/standard/background_nok.png",
  backgroundOk: "images/standard/background_ok.png",
  backgroundButton: "images/standard/button.png",
  backgroundMessage: "images/background_message.png",
  imageLightOff: "images/standard/light_off.png",
  imageLightNok: "images/standard/light_nok.png",
  imageLightOk: "images/standard/light_ok.png",
  soundBeep: "sounds/beep.mp3",
  soundNok: "sounds/solution_nok.mp3",
  soundOk: "sounds/solution_ok.mp3",
  soundDial: "sounds/spin.wav",

  soundAfterSolve: "sounds/after_solve.mp3",

  dialWidth: 0.7, // Relative size of the dial compared to the box width
  dialHeight: 0.7, // Relative size of the dial compared to the box height
  dialTextSize: "2.5vmin", // Font size for the dial text
  dialTextColor: "#000000", // Color for the dial text


  rayWidth: 0.59, // Relative width of the ray compared to the box width
  rayHeight: 0.6, // Relative height of the ray compared to the box height

  buttonWidth: 0.15, // Relative width of the button compared to the box width
  buttonHeight: 0.15, // Relative height of the button compared to the box height
  buttonMarginTop: 0.85, // Margin from the top of the box to the button in percentage of box height
  buttonMarginLeft: 0.8, // Margin from the left of the box to the button in percentage of box width

  dialsGap: 0.19, // Gap between dials in percentage of box width
  dialsNames: ["F", "W", "A",], // Names for the dials
  dialMode: "MULTI", // Dial mode can be "NORMAL" or "MULTI"

  minFrequency: 0.2, // Minimum frequency for the ray
  maxFrequency: 0.5, // Maximum frequency for the ray
  minAmplitude: 25, // Minimum amplitude for the ray
  maxAmplitude: 80, // Maximum amplitude for the ray
  minWavelength: 10, // Minimum wavelength for the ray
  maxWavelength: 80, // Maximum wavelength for the ray

  svgSize: '25vmin',
  viewAngle: "FALSE", //FALSE, TRUE
  textGap: "3.5vmin",
  screenContainerWidth: 0.543, // Width of the screen container
  screenContainerHeight: 0.543, // Height of the screen container
  screenContainerMarginTop: -0.256, // Margin from the top of the box to the screen container in percentage of box height

  multiButtonWidth: 0.1, // Relative width of the multi button compared to the box width
  multiButtonHeight: 0.1, // Relative height of the multi button compared to the box height
  multiButtonMarginTop: 0.75, // Margin from the top of the box to the multi button in percentage of box height
  multiButtonMarginLeft: 0.16, // Margin from the left of the box to the multi button in percentage of box width

  dataContainerMarginTop: 0.22,
  multiTextColor: "rgb(135, 109, 86)",
};

export const SKIN_SETTINGS_RETRO = {
};

export const SKIN_SETTINGS_FUTURISTIC = {
};

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath:"./images/",
};

export const MAIN_SCREEN = "MAIN_SCREEN";
export const MESSAGE_SCREEN = "MESSAGE_SCREEN";