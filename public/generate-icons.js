const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function generateIcons() {
  // Carregar o SVG
  const svgContent = fs.readFileSync('icon.svg', 'utf8');
  
  // Função para gerar PNG de um tamanho específico
  async function generatePNG(size, outputName) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Fundo azul
    ctx.fillStyle = '#0066FF';
    const radius = size * 0.225; // 22.5% para cantos arredondados
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(size - radius, 0);
    ctx.quadraticCurveTo(size, 0, size, radius);
    ctx.lineTo(size, size - radius);
    ctx.quadraticCurveTo(size, size, size - radius, size);
    ctx.lineTo(radius, size);
    ctx.quadraticCurveTo(0, size, 0, size - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.closePath();
    ctx.fill();
    
    // Check branco (L estilizado)
    ctx.strokeStyle = 'white';
    ctx.lineWidth = size * 0.088; // ~45px em 512px
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    ctx.beginPath();
    ctx.moveTo(size * 0.273, size * 0.547); // 140, 280
    ctx.lineTo(size * 0.391, size * 0.664); // 200, 340
    ctx.lineTo(size * 0.742, size * 0.313); // 380, 160
    ctx.stroke();
    
    // Detalhe verde-água na ponta
    ctx.fillStyle = '#4FFFB0';
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.arc(size * 0.742, size * 0.313, size * 0.055, 0, Math.PI * 2);
    ctx.fill();
    
    // Salvar
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputName, buffer);
    console.log(`✓ Gerado: ${outputName}`);
  }
  
  // Gerar todas as versões
  await generatePNG(512, 'icon-512.png');
  await generatePNG(192, 'icon-192.png');
  await generatePNG(180, 'apple-touch-icon.png');
  
  // Gerar favicon.ico (usando 32x32)
  await generatePNG(32, 'favicon-32.png');
  console.log('✓ Todos os ícones gerados com sucesso!');
}

generateIcons().catch(console.error);
