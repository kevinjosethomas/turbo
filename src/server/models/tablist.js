
class Tablist {

  constructor(win) {
    this.win = win;
    this.tablist = [];
    this.friendlyTablist = [];
  }

  push({ url, view, id }) {
    this.tablist.push({
      id: id,
      url: url,
      view: view,
      active: false
    });
    this.friendlyTablist.push({
      id: id,
      url: url,
      active: false
    })
  }

  setActiveTab(id) {
    this.tablist.forEach((item, index) => {
      if (item.id === id) {
        this.tablist[index].active = true;
        this.friendlyTablist[index].active = true;
      } else if (item.active && item.id !== id) {
        this.tablist[index].active = false;
        this.friendlyTablist[index].active = false;
      }
    });
  }

  closeTab(id) {
    this.tablist = this.tablist.filter(el => el.id !== id);
    this.friendlyTablist = this.friendlyTablist.filter(el => el.id !== id);
  }

}

exports.Tablist = Tablist;
