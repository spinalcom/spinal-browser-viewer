<script>
import Rx from "rxjs/Rx";

export default new class HeaderCtrl {
  constructor() {
    let menuVisible = false;
    this.menuVisibleObservable = Rx.Observable.create(observer => {
      this.toggleMenu = () => {
        menuVisible = !menuVisible;
        console.log("toggleMenu", menuVisible);
        observer.next(menuVisible);
      };
      this.setViewMenu = bool => {
        menuVisible = bool;
        console.log("toggleMenu", bool);
        observer.next(menuVisible);
      };
    });
    console.log(this.menuVisibleObservable);
  }

  getObservable() {
    return this.menuVisibleObservable;
  }
}();
</script>
