import HNWidget from "../src/entry";
(function () {

  let widget: HNWidget | undefined = undefined;

    if (widget) {
      if ("$destroy" in widget && typeof widget.$destroy === "function") {
        widget.$destroy();
      }
      //widget.destroy();
    }

    widget = new HNWidget("widget");
    //widget.info();
    widget.start().catch(console.error);
})();
