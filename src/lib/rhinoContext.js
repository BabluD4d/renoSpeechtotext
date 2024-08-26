const rhinoContext = {
  publicPath: "readabilitytutor_en_wasm_v3_0_0.rhn",
  customWritePath: "3.0.0_coffee_maker_wasm.rhn",
};

(function () {
  if (typeof module !== "undefined" && typeof module.exports !== "undefined")
    module.exports = rhinoContext;
})();