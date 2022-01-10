console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabsButtons = document.querySelectorAll(`[role="tab"]`);
const tabsPanels = document.querySelectorAll(`[role="tabpanel"]`);

function handleTabClick(event){
    // hide all tab panels
  // mark all tabs as unselected
  // mark the clicked tab as selected
  // find the associated tabPanel and show it!
  console.log(tabsPanels);
}

tabsButtons.forEach(button => button.addEventListener('click', handleTabClick));

tabsPanels.forEach(panel => {
    panel.hidden = true;
});