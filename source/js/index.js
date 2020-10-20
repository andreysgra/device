import Slider from './modules/slider';
import Modal from './modules/modal';
import Map from './modules/map';
import { URL_MAP } from './const';

const sliderPromoElement = document.querySelector('.slider-promo');
const servicesElement = document.querySelector('.services');
const modalFormElement = document.querySelector('.modal-form');
const modalMapElement = document.querySelector('.modal-map');
const contactsButtonElement = document.querySelector('.contacts__button');
const contactsMapElement = document.querySelector('.contacts__map');
const mapId = document.querySelector('#map');

if (sliderPromoElement) {
  new Slider(sliderPromoElement, 'slider-promo__list-item', 'slider-promo-controls').init();
}

if (servicesElement) {
  new Slider(servicesElement, 'services__list-item', 'services-controls').init();
}

if (modalFormElement) {
  const modalForm = new Modal(modalFormElement);

  contactsButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    modalForm.show();
  });
}

if (modalMapElement) {
  const modalMap = new Modal(modalMapElement);

  contactsMapElement.addEventListener('click', (evt) => {
    evt.preventDefault();

    modalMap.show();
  });
}

if (mapId) {
  new Map('map', URL_MAP).init();
}
