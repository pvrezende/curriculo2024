const btn = document.querySelector('.btn')
const container = document.querySelector('body')

btn.onclick = function(){
    this.classList.toggle('active')
    container.classList.toggle('active')
}

// Lógica para o botão de download PDF
const downloadPdfBtn = document.getElementById('downloadPdfBtn');

if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', () => {
        // Create a new anchor element
        const link = document.createElement('a');
        // Set the href to the path of your existing PDF file
        link.href = 'Currículo Paulo Rezende.pdf';
        // Set the download attribute with the desired filename
        link.download = 'Curriculo_Paulo_Rezende.pdf';
        // Append the link to the body (it doesn't need to be visible)
        document.body.appendChild(link);
        // Programmatically click the link to trigger the download
        link.click();
        // Remove the link from the document
        document.body.removeChild(link);
    });
}
