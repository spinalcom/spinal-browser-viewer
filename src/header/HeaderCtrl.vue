<script>
import Rx from "rxjs/Rx";

export default new class HeaderCtrl {
  constructor() {
    let menuVisible = false;
    this.menuVisibleObservable = Rx.Observable.create(observer => {
      this.toggleMenu = () => {
        menuVisible = !menuVisible;
        observer.next(menuVisible);
      };
      this.setViewMenu = bool => {
        menuVisible = bool;
        observer.next(menuVisible);
      };
    });
  }

  getObservable() {
    return this.menuVisibleObservable;
  }
}();
</script>
