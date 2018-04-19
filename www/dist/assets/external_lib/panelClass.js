var v;
var conn;


var newGUID = function () {

    var d = new Date().getTime();

    var guid = 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(
        /[xy]/g,
        function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });

    return guid;
};


function PanelClass(viewer, title) {
    Autodesk.Viewing.UI.DockingPanel.call(this, viewer.container, newGUID(), title);
    this.container.style.minHeight = "calc(100vh / 2)";
    this.container.style.maxHeight = "calc(100vh - 85px)";
    this.container.style.width = "auto";
    this.container.style.minWidth = "400px";
    this.container.style.top = "0px";
    this.container.style.resize = "auto";
    this.viewer = viewer;
    v = this.viewer;
}

PanelClass.prototype = Object.create(Autodesk.Viewing.UI.DockingPanel.prototype);
PanelClass.prototype.constructor = PanelClass;