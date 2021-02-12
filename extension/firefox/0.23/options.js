function styleCheck(event) {
  let toggle = event.target.checked === true;
  browser.storage.local.set({
    dongStyle: toggle
  });
}

function restoreOptions() {
  function dongToggle(result) {
    document.querySelector('#dongStyle').checked = result.dongStyle;
  }
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  let getting = browser.storage.local.get('dongStyle');
  getting.then(dongToggle, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("#dongStyle").addEventListener("change", styleCheck);
