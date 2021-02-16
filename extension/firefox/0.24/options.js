function styleCheck(event) {
  let toggle = event.target.checked === true;
  browser.storage.local.set({
    dongStyle: toggle
  });
}

function sizeCheck(event) {
  let toggle = event.target.checked === true;
  browser.storage.local.set({
    normFonts: toggle
  });
}

function restoreOptions() {
  function dongToggle(result) {
    document.querySelector('#dongStyle').checked = result.dongStyle;
  }
  function fontToggle(result) {
    document.querySelector('#normFonts').checked = result.normFonts;
  }
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  let dongGet = browser.storage.local.get('dongStyle');
  dongGet.then(dongToggle, onError);
  let fontGet = browser.storage.local.get('normFonts');
  fontGet.then(fontToggle, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("#dongStyle").addEventListener("change", styleCheck);
document.querySelector('#normFonts').addEventListener('change', sizeCheck);
