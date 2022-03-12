const featureSpeakerData = [
  {
    img: '/assets/images/prof1.jpg',
    title: 'Yochai Benkler',
    subTitle: 'Berkman Professor of Enterpreneuril Legal Studies at Harvard Low School',
    desc: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Network in 2006',
  },
  {
    img: '/assets/images/prof2.jpg',
    title: 'SohYeong Noh',
    subTitle: 'Director Art Centre Nabi and A board member of CC Korea',
    desc: 'As the man venue for new media art production in Korea, Nabi promotes cross-displinary collaboration and understand among science technology, humanties and the arts.',
  },
  {
    img: '/assets/images/prof3.jpg',
    title: 'Lia Tretikov',
    subTitle: 'Executive Director of the Wiklmedia Foundation',
    desc: 'Lila Tretkvo is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely avalable in 290 languages and used by nearly half a bilion people around the world every month',
  },
  {
    img: '/assets/images/prof4.jpg',
    title: 'Kilnam Chon',
    subTitle: '',
    desc: 'Kiham Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digiatal commons. In 2012, he was inducted into the inaugural class if the Internet society/s (ISOC) Internet hall of fame',
  },
  {
    img: '/assets/images/prof5.jpg',
    title: 'Julia Leda',
    subTitle: 'Presidant of Young pirates Eroupe',
    desc: 'European ingetration, political democracy and participation of youth through online as her major condem, Reda\'s report outfiting potential changes to EU copyright law was approved by the Parlament in July',
  },
  {
    img: '/assets/images/prof6.jpg',
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
const FSItemContainer = document.createElement('div');
FSItemContainer.className = 'feature-speaker-items-container';

FSSection.appendChild(FSHeader);
FSSection.appendChild(FSUnderline);
FSSection.appendChild(FSItemContainer);

let FSItemDiv;
let FSImgDiv;
let FSImage;
let FSDescDiv;
let FSTitle;
let FSSubTitle;
let FSUnderlineSub;
let FSDesc;

function createElements() {
  FSItemDiv = document.createElement('div');
  FSItemDiv.className = 'feature-speaker-itemDiv';

  FSImgDiv = document.createElement('div');
  FSImgDiv.classList = 'feature-speaker-img-div';

  FSImage = document.createElement('img');
  FSImage.className = 'feature-speaker-image';

  FSDescDiv = document.createElement('div');
  FSDescDiv.className = 'feature-speaker-descDiv';

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
  FSItemContainer.appendChild(FSItemDiv);
  FSItemDiv.appendChild(FSImgDiv);
  FSImgDiv.appendChild(FSImage);
  FSItemDiv.appendChild(FSDescDiv);
  FSDescDiv.appendChild(FSTitle);
  FSDescDiv.appendChild(FSSubTitle);
  FSDescDiv.appendChild(FSUnderlineSub);
  FSDescDiv.appendChild(FSDesc);
}

function loadData() {
  featureSpeakerData.forEach((element) => {
    createElements();
    FSImage.src = element.img;
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