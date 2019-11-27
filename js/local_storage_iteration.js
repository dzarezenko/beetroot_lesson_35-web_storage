let localGenerator = {
  storage: window.localStorage,

  generateItems(n) {
    for (let i = 0; i < n; i++) {
      this.storage.setItem(`key_${i}`, Math.floor(1000 * Math.random()));
    }
  },

  iterateItems() {
    let values = {};
    for (let i = 0; i < this.storage.length; i++) {
      let key = this.storage.key(i);
      let item = this.storage.getItem(key);
      //console.log(key, item);

      values[key] = item;
    }
    console.log(values);
    console.log(this.storage);
  }

}

localGenerator.generateItems(7);
localGenerator.iterateItems();
