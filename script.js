const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const projects = [
  {
    name: 'Screening Test',
    featuredImage: 'Images/about-image.jpg',
    description:
      "For selection of interested candidates into Model Colleges and Upgraded Junior Secondary Schools with Boarding Facilities",
    login: '#',
  },
  {
    name: 'Public service',
    featuredImage: 'Images/about-image.jpg',
    description:
      "Includes External Secretarial Examination, Combined Confirmation, Compulsory Examination and Labour Trade Test.",
    login: '#',
  },
  {
    name: 'BECE',
    featuredImage: 'Images/about-image.jpg',
    description:
      "For Students completing Junior Secondary Education.",
    login: '#',
  },
];

function generateWorkCard() {
  projects.forEach((project, index) => {
    document.querySelector('.row').innerHTML += `
      <div class="block">
        <div>
          <img class="gray-area" src="${project.featuredImage}" alt="login image">
        </div>
        <div class="description">
            <h2 class="post">${project.name}</h2>
            <div class="block-text">
              ${project.description}
            </div>
            <button type="button" data-index="${index}" class="btn popup-window">Login</button>
        </div>
      </div>
      `;
  });
}

generateWorkCard();
const popupModals = document.querySelectorAll('.popup-window');
const closeModal = document.querySelector('.close-button');
function openModal(element) {
  const projectIndex = element.dataset.index;
  document.querySelector('.popup-header').textContent = projects[projectIndex].name;
  document
    .querySelector('.modal-project-image')
    .setAttribute(
      'src',
      `${projects[projectIndex].featuredImage}`,
    );
  document
    .querySelector('.modal-project-image')
    .setAttribute('alt', `${projects[projectIndex].name}`);
  document
    .querySelector('.moblie-see-live')
    .setAttribute('href', `${projects[projectIndex].liveLink}`);
  document
    .querySelector('.moblie-see-source')
    .setAttribute('href', `${projects[projectIndex].linkSource}`);
  document
    .querySelector('.desktop-see-live')
    .setAttribute('href', `${projects[projectIndex].liveLink}`);
  document
    .querySelector('.desktop-see-source')
    .setAttribute('href', `${projects[projectIndex].linkSource}`);
  let technology = '';
  projects[projectIndex].technologies.forEach((tech) => {
    technology += `<div class="tag">${tech}</div>`;
  });
  document.querySelector('.project-codekit .tags').innerHTML = technology;
  document.querySelector('.modal-project-description').textContent = projects[projectIndex].description;
  document.querySelector('.modal').style.display = 'flex';
}
popupModals.forEach((modal) => [
  modal.addEventListener('click', () => {
    openModal(modal);
  }),
]);

closeModal.addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});

// const form = document.querySelector('#formspree');
// const errorEmail = document.querySelector('#email_error');
// function validateEmail(input) {
//   const emailRegex = /^[a-z_\-0-9.*#$!~%^&-+?|]+@+[a-z\-0-9]+(.com)$/gm;
//   return emailRegex.test(input);
// }
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const emailValid = validateEmail(form.elements.email.value);
//   if (!emailValid) {
//     errorEmail.style.display = 'block';
//   } else {
//     errorEmail.style.display = 'none';
//     form.submit();
//   }
// });

// form.addEventListener('keyup', () => {
//   const data = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     message: document.getElementById('message').value,
//   };
//   localStorage.setItem('data', JSON.stringify(data));
// });

// function getData() {
//   const data = JSON.parse(localStorage.getItem('data'));

//   if (data) {
//     document.getElementById('name').value = data.name;
//     document.getElementById('email').value = data.email;
//     document.getElementById('message').value = data.message;
//   }
// }
// getData();