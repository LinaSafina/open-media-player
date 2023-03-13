import './style.scss';

const listItems = Array.from(document.querySelectorAll('.pricing__list-item'));
const requirmentTables = Array.from(
  document.querySelectorAll('.pricing__table')
);

const handleTabClick = (event) => {
  const currentTab = event.target;

  if (currentTab.classList.contains('pricing__list-item_active')) {
    return;
  } else {
    listItems.forEach((item) =>
      item.classList.toggle('pricing__list-item_active')
    );

    requirmentTables.forEach((item) =>
      item.classList.toggle('pricing__table_shown')
    );
  }
};

listItems.forEach((item) => item.addEventListener('click', handleTabClick));
