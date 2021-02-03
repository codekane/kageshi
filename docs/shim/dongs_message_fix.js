$("button[data-btntype=\"pm\"]").on("click", () => {
  let textAreas = $("textarea.fs_1:not(.parsed)");
  for(let i = 0; i < textAreas.length; i++ ) {
    textArea = textAreas[i];
    console.info("Fixing textarea ", textArea);
    if( textArea.value == "message " ) {
      textArea.value = "";
      textArea.setAttribute("class", "fs_1 parsed");
      textArea.focus();
    }
    console.info("Textarea fixed", textArea);
  }
});

