
class Tablist {

  contructor(win) {
    this.win = win;
    this.tabList = [];
  }

  push({ url, view }) {
    this.tabList.push({
      url: url,
      view: view
    });
  }

}
