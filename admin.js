// Function to set the favicon
function setFavicon(url) {
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/x-icon'; // Change the type according to your favicon format (png, jpg, etc.)
    link.href = url;

    // Append the link element to the head of the document
    document.head.appendChild(link);
}

setFavicon('logo.png');

function setInstituteLogo(url) {
    // Get the container element where you want to display the logo
    const logoContainer = document.getElementById('intro-image');

    // Create an <img> element
    const logoImg = document.createElement('img');

    // Set the logo image path
    logoImg.src = url; // Replace 'path/to/your/logo.png' with the actual path to your logo image

    // Set any additional attributes for the logo if needed (e.g., alt text, width, height, etc.)
    logoImg.alt = 'Logo'; // Replace 'Logo' with a suitable alt text for accessibility

    // Append the logo image to the container
    logoContainer.appendChild(logoImg);
}
setInstituteLogo('logo.png');
// Institute Details

function setInstituteName(name){
    document.getElementById('institute-Name').innerHTML = name;
}
setInstituteName('Sindh Madressatul Islam University (SMIU)');

function setAboutInstitute(about){
    document.getElementById('about-institute').innerHTML = about;
}
setAboutInstitute('Sindh Madressatul Islam University (SMIU) is a chartered University ' +
    'duly recognized by the Higher Education Commission of Pakistan. It is one of the oldest institutions' +
    ' in South Asia, which started as a school in 1885, became a college in 1943 and a university in February 2012.');

// Principal Details
function setPrincipalMessage(message){
    document.getElementById('message-of-principal').innerHTML = message;
}
setPrincipalMessage('It gives natural vibrations to my hands and sensations to my mind when to write about this august' +
    ' university i.e. Sindh Madressatul Islam University, Karachi. This is the institute credited with production of ' +
    'wise persons, visionary leaders, freedom fighters, educationists and founders, viz: Quaid-e-Azam Mohammad Ali ' +
    'Jinnah, Sir Shahnawaz Bhutto, Sir Abdullah Haroon, Sir Ghulam Hussain Hidayatullah, Khan Bahadur Mohammad Ayub ' +
    'Khuhro, Allama I.I. Kazi, Allama Umer Bin Mohammad Doudpota, Hanif Muhammad and to my groomer i.e. my father ' +
    'father Taj Muhammad Sahrai.​');
function setPrincipalName(name){
    document.getElementById('name-of-principal').innerHTML = name;
}
setPrincipalName('Prof. Dr. Mujeeb-U-Ddin Sahrai Memon');

function principalImage(url){
    const logoContainer = document.getElementById('principal-img');
    const imgOfPrincipal = document.createElement('img');
    imgOfPrincipal.alt='Principal-img';
    imgOfPrincipal.src=url;
    logoContainer.appendChild(imgOfPrincipal);
}
principalImage('principal-img.png');

function position(position){
    document.getElementById('position').innerHTML = position;
}
position('Vice Chancellor');

function instituteAbbreviation(name){
    document.getElementById('institute-name').innerHTML = name;
}
instituteAbbreviation('SMIU');
function imageSetAtStudiesSection(url, id){
    const img = document.createElement('img');
    const imgContainer = document.getElementById(id);
    img.src = url;
    img.alt = 'Studies LeveL Images';
    imgContainer.appendChild(img);
}
function textSetAtStudiesSection(id,text){
    document.getElementById(id).innerHTML = text;
}
imageSetAtStudiesSection('Undergraduate.jpg', 'level-of-studies-pri');
textSetAtStudiesSection('level-of-studies-pri-heading','Undergraduate');
imageSetAtStudiesSection('Graduate.jpg', 'level-of-studies-mid');
textSetAtStudiesSection('level-of-studies-mid-heading','Graduate');
imageSetAtStudiesSection('Postgraduate.jpg', 'level-of-studies-sec');
textSetAtStudiesSection('level-of-studies-sec-heading','Postgraduate');
function initMap() {
    const location = [24.882654, 66.986631]; // Example coordinates for New York City

    const map = L.map('map').setView(location, 12); // Center the map and set the zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(location).addTo(map)
        .bindPopup('Progressive Grammar School')
        .openPopup();
}

// initMap();

function setFooterLogo(url) {
    const logoContainer = document.getElementById('footer');
    const logoImg = document.createElement('img');
    logoImg.src = url;
    logoImg.alt = 'Logo';
    logoContainer.appendChild(logoImg);
}
setFooterLogo('logo.png');