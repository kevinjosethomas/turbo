const electronInstaller = require("electron-winstaller");

(async () => {
  try {
    console.log("starting build!");
    await electronInstaller.createWindowsInstaller({
      appDirectory: "B:/dist/app-win32-x64/",
      outputDirectory: "B:/installers/",
      authors: "teamcodebyte",
      exe: "app.exe",
    });
    console.log("It worked!");
  } catch (e) {
    console.log("Didn't work! :(");
    console.log(e);
  }
})();
