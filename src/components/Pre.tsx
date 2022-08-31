import React from "react";

interface PreImp{
  props?: any;
  load: boolean;
}

function Pre({load, props}:PreImp) {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
