import { useState } from "react";

export const View = props => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <webview
        id={props.id}
        className="w-full h-screen"
        src="https://google.com/"
      />
    </div>
  )

}
