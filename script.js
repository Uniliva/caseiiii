// Lista de fotos do casal
const photos = [
    'assets/eu_e_ela1.jpg',
    'assets/eu_e_ela2.jpg',
    'assets/eu_e_ela3.jpg',
    'assets/eu_e_ela4.jpg',
    'assets/eu_e_ela5.jpg',
    'assets/eu_e_ela6.jpg',
    'assets/eu_e_ela7.jpeg',
    'assets/eu_e_ela8.jpg',
    'assets/eu_e_ela9.jpg',
    'assets/eu_e_ela10.jpeg',
    'assets/eu_e_ela11.jpeg',
    'assets/eu_e_ela12.png',
    'assets/eu_e_ela13.png',
    'assets/eu_e_ela14.jpg',
    'assets/eu_e_ela15.jpg',
    'assets/eu_e_ela16.jpg',
    'assets/eu_e_ela17.jpg',
    'assets/eu_e_ela18.jpg',
    'assets/eu_e_ela19.jpg',
    'assets/eu_e_ela20.jpg',
    'assets/eu_e_ela21.jpg',
    'assets/eu_e_ela22.jpg',
    'assets/eu_e_ela23.jpg',
    'assets/eu_e_ela24.jpg',
    'assets/eu_e_ela25.jpg',
    'assets/eu_e_ela26.jpg',
    'assets/eu_e_ela27.jpg',
    'assets/eu_e_ela28.jpg',
    'assets/eu_e_ela29.jpg',
    'assets/eu_e_ela30.jpg',
    'assets/eu_e_ela31.jpg',
    'assets/eu_e_ela32.jpg',
    'assets/eu_e_ela33.jpg',
    'assets/eu_e_ela34.jpg',
    'assets/eu_e_ela35.jpg',
    'assets/eu_e_ela36.jpg',
    'assets/eu_e_ela37.jpg',
    'assets/eu_e_ela38.jpg',
    'assets/eu_e_ela39.jpg',
    'assets/eu_e_ela40.jpg',
    'assets/eu_e_ela41.jpg',
    'assets/eu_e_ela42.jpg',
    'assets/eu_e_ela43.jpg',
    'assets/eu_e_ela44.jpg',
    'assets/eu_e_ela45.jpg',
    'assets/eu_e_ela46.jpg',
    'assets/eu_e_ela47.jpg',
    'assets/eu_e_ela48.jpg',
    'assets/eu_e_ela49.jpg',
    'assets/eu_e_ela50.jpg',
    'assets/eu_e_ela51.jpg',
    'assets/eu_e_ela52.jpg',
    'assets/eu_e_ela53.jpg',
    'assets/eu_e_ela54.jpg',
    'assets/eu_e_ela55.jpeg'
];

let currentImageIndex = 0;

// Função para gerar QR Code
function generateQRCode() {
    const pixCode = '00020126430014br.gov.bcb.pix0121uni.e.kelly@gmail.com5204000053039865802BR5921UNILIVA_ALVES_PEREIRA6006Osasco610906184-22062290525LMVO05392810178173254367963043E1D';
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(pixCode)}`;
    const qrCodeElement = document.getElementById('qrCodePix');
    if (qrCodeElement) {
        qrCodeElement.src = qrCodeUrl;
    }
}

// Função para popular a galeria
function populateGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = '';
    
    photos.forEach((photo, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${photo}" alt="Foto ${index + 1}">`;
        
        galleryItem.addEventListener('click', () => {
            openModal(index);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Função para abrir o modal
function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    
    modal.style.display = 'block';
    modalImage.src = photos[index];
    caption.innerHTML = `Foto ${index + 1} de ${photos.length}`;
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Função para mudar de imagem no modal
function changeImage(n) {
    currentImageIndex += n;
    
    if (currentImageIndex >= photos.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = photos.length - 1;
    }
    
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    
    modalImage.src = photos[currentImageIndex];
    caption.innerHTML = `Foto ${currentImageIndex + 1} de ${photos.length}`;
}

// Fechar modal ao clicar no X
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', closeModal);
    
    // Fechar modal ao clicar fora da imagem
    const modal = document.getElementById('imageModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Navegar com setas do teclado
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') changeImage(-1);
            if (e.key === 'ArrowRight') changeImage(1);
            if (e.key === 'Escape') closeModal();
        }
    });
    
    // Inicializar
    generateQRCode();
    populateGallery();
});
