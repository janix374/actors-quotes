import './styles/styles.scss';
import 'jquery';
import Velocity from 'velocity-animate';
import { slider } from './js/slider';
import { toogleCard } from './js/helpers';
import headerSection from './template/header.html';
import actorGallery from './template/main.html';
import { matthewMcconaughey } from './components/matthew-mcconaughey/matthew-mcconaughey';
import { alPacino } from './components/al-pacino/al-pacino';
import { liamNeeson } from './components/liam-neeson/liam-neeson';
import { christianBale } from './components/christian-bale/christian-bale';
import actorQuotes from './js/actorsQuotes';

$(function () {
  // load files
  $('#header').html(headerSection);
  $('#actors-gallery').html(actorGallery);

  slider();

  // actors animation
  matthewMcconaughey(actorQuotes.MatthewMcconaughey);
  alPacino(actorQuotes.AlPacino);
  liamNeeson(actorQuotes.LiamNeeson);
  christianBale(actorQuotes.ChristianBale);

  // toggle card
  toogleCard();
});
