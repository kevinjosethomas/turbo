const electronInstaller = require('electron-winstaller');

(async () => {
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: '../../',
      outputDirectory: '/tmp/build/turbo',
      authors: 'teamcodebyte',
      exe: 'turbo.exe'
    });
    console.log('Successfully created a Turbo Windows Installer');
  } catch (e) {
    console.log(`Failed to create a Turbo Windows Installer ${e.message}`)
  }
})();
