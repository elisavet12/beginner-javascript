console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabsButtons = document.querySelectorAll(`[role="tab"]`);
const tabPanels = document.querySelectorAll(`[role="tabpanel"]`);

function handleTabClick(event){
    // hide all tab panels
    tabPanels.forEach(panel => {
  panel.hidden = true;
});
  // mark all tabs as unselected
  tabsButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // find the associated tabPanel and show it!
  const id = event.currentTarget.id;
  const tabPanels = tabs.querySelector(`[aria-labelledby="${id}"]`);
console.log(tabPanels);
tabPanels.hidden = false;
  
  console.log(event.currentTarget);
}

tabsButtons.forEach(button => button.addEventListener('click', handleTabClick));

