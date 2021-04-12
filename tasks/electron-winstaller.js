const electronInstaller = require("electron-winstaller");

(async () => {
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: "../dist/app-win32-x64",
      outputDirectory: "../installers/",
      authors: "teamcodebyte",
      exe: "app.exe",
    });
    console.log("It worked!");
  } catch (e) {
    console.log("Didn't work! :(");
    console.log(e);
  }
})();
