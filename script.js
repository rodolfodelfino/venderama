function sendWhatsAppMessage() {
    const message = "Olá, gostaria de personalizar uma camiseta com minha ideia!";
    const phoneNumber = "551199999999"; // Substitua pelo número de WhatsApp da loja
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

