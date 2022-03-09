const featureSpeakerData = [
  {
    img: '',
    title: 'Yochai Benkler',
    subTitle: 'Berkman Professor of Enterpreneuril Legal Studies at Harvard Low School',
    desc: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Network in 2006',
  },
  {
    img: '',
    title: 'SohYeong Noh',
    subTitle: 'Director Art Centre Nabi and A board member of CC Korea',
    desc: 'As the man venue for new media art production in Korea, Nabi promotes cross-displinary collaboration and understand among science technology, humanties and the arts.',
  },
  {
    img: '',
    title: 'Lia Tretikov',
    subTitle: 'Executive Director of the Wiklmedia Foundation',
    desc: 'Lila Tretkvo is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely avalable in 290 languages and used by nearly half a bilion people around the world every month',
  },
  {
    img: '',
    title: 'Kilnam Chon',
    subTitle: '',
    desc: 'Kiham Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digiatal commons. In 2012, he was inducted into the inaugural class if the Internet society/s (ISOC) Internet hall of fame',
  },
  {
    img: '',
    title: 'Julia Leda',
    subTitle: 'Presidant of Young pirates Eroupe',
    desc: 'European ingetration, political democracy and participation of youth through online as her major condem, Reda\'s report outfiting potential changes to EU copyright law was approved by the Parlament in July',
  },
  {
    img: '',
    title: 'Rayan Merkley',
    subTitle: 'CEO of Creative Commons, ex COO the Mozila Foundation',
    desc: 'Ryan had been leading open-source project at the Mozila Foundation such as the open source movement',
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

FSSection.appendChild(FSHeader);
FSSection.appendChild(FSUnderline);
FSSection.appendChild(FSMainContainer);

let FSImage;
let FSTitle;
let FSSubTitle;
let FSUnderlineSub;
let FSDesc;

function createElements() {
  FSImage = document.createElement('img');
  FSImage.className = 'feature-speaker-image';

  FSTitle = document.createElement('h3');
  FSTitle.className = 'feature-speaker-title';

  FSSubTitle = document.createElement('h4');
  FSSubTitle.className = 'feature-speaker-sub-title';

  FSUnderlineSub = document.createElement('div');
  FSUnderlineSub.className = 'feature-speaker-sub-underline';

  FSDesc = document.createElement('span');
  FSDesc.className = 'feature-speaker-desc';
}

function appendElements() {
  FSSection.appendChild(FSImage);
  FSSection.appendChild(FSTitle);
  FSSection.appendChild(FSSubTitle);
  FSSection.appendChild(FSUnderlineSub);
  FSSection.appendChild(FSDesc);
}

function loadData() {
  featureSpeakerData.forEach((element) => {
    createElements();
    FSImage.innerHTML = element.img;
    FSTitle.innerHTML = element.title;
    FSSubTitle.innerHTML = element.subTitle;
    FSDesc.innerHTML = element.desc;
    appendElements();
  });
}

/* load page */
window.addEventListener('load', () => {
  loadData();
});