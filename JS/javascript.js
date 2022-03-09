const featureSpeakerData = [
  {
    img: '',
    title: '',
    subTitle: '',
    desc: '',
  },
];

const FSSection = document.querySelector('.feature-speaker');

const FSHeader = document.createElement('h1');
FSHeader.className = 'feature-speaker-header';
FSHeader.innerText = 'Featured Speakers';

const FSUnderline = document.createElement('div');
FSUnderline.className = 'feature-speaker-underline';

const FSMainContainer = document.createElement('div');
FSMainContainer.className = 'feature-speaker-main-container';

const FSImage = document.createElement('img');
FSImage.className = 'feature-speaker-image';

const FSTitle = document.createElement('h3');
FSTitle.className = 'feature-speaker-title';

const FSSubTitle = document.createElement('h4');
FSSubTitle.className = 'feature-speaker-sub-title';

const FSUnderlineSub = document.createElement('div');
FSUnderlineSub.className = 'feature-speaker-sub-underline';

const FSDesc = document.createElement('span');
FSDesc.className = 'feature-speaker-desc';

window.addEventListener('load', () => {
  FSSection.appendChild(FSHeader);
  FSSection.appendChild(FSUnderline);
  FSSection.appendChild(FSMainContainer);
  FSSection.appendChild(FSImage);
  FSSection.appendChild(FSTitle);
  FSSection.appendChild(FSSubTitle);
  FSSection.appendChild(FSUnderlineSub);
  FSSection.appendChild(FSDesc);
});