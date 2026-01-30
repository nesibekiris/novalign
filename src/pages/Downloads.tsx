import React from 'react';
import { Download } from 'lucide-react';

const assets = [
  {
    category: 'Blog İllüstrasyonları',
    items: [
      { name: 'Network', file: '/illustrations/network.svg', description: 'Bağlı düğümler ve ağ yapısı' },
      { name: 'Circles', file: '/illustrations/circles.svg', description: 'Üç kesişen çember' },
      { name: 'Lines', file: '/illustrations/lines.svg', description: 'Akışkan eğri çizgiler' },
      { name: 'Grid', file: '/illustrations/grid.svg', description: 'Dikdörtgen ızgara düzeni' },
      { name: 'Dots', file: '/illustrations/dots.svg', description: 'Nokta dizileri deseni' },
      { name: 'Waves', file: '/illustrations/waves.svg', description: 'Paralel dalga çizgileri' },
      { name: 'Spiral', file: '/illustrations/spiral.svg', description: 'Spiral desen' },
      { name: 'Branches', file: '/illustrations/branches.svg', description: 'Ağaç dalları yapısı' },
      { name: 'Hexagons', file: '/illustrations/hexagons.svg', description: 'Altıgen ızgara deseni' },
      { name: 'Flow', file: '/illustrations/flow.svg', description: 'Akış diyagramı' },
      { name: 'Nodes', file: '/illustrations/nodes.svg', description: 'Merkezi düğüm yapısı' },
      { name: 'Cascade', file: '/illustrations/cascade.svg', description: 'Kademeli basamaklar' },
      { name: 'Rings', file: '/illustrations/rings.svg', description: 'Eş merkezli halkalar' },
      { name: 'Paths', file: '/illustrations/paths.svg', description: 'Çapraz yollar' },
    ]
  },
  {
    category: 'STRATRI Logoları',
    items: [
      { name: 'Logo - Yatay', file: '/stratri-logo-horizontal.svg', description: 'İkon + metin (yatay)' },
      { name: 'Logo - Dikey', file: '/stratri-logo-vertical.svg', description: 'İkon + metin (dikey)' },
      { name: 'Logo - İkon', file: '/stratri-logo-icon.svg', description: 'Sadece ikon (3 sütun)' },
    ]
  }
];

export default function Downloads() {
  const handleDownloadSVG = (file: string, name: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = name + '.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPNG = async (file: string, name: string) => {
    try {
      const response = await fetch(file);
      const svgText = await response.text();

      const canvas = document.createElement('canvas');
      canvas.width = 1600;
      canvas.height = 1200;
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      const img = new Image();
      const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        ctx.fillStyle = '#FEFBF8';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          if (blob) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = name + '.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
          URL.revokeObjectURL(url);
        }, 'image/png');
      };

      img.src = url;
    } catch (error) {
      console.error('PNG indirme hatası:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFBF8]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-[#1E2A45] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Medya İndirmeleri
        </h1>
        <p className="text-lg text-[#1E2A45]/70 mb-12" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
          14 blog illüstrasyonu ve 3 logo - SVG veya PNG formatında
        </p>

        {assets.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-3xl font-bold text-[#1E2A45] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="bg-white rounded-lg border border-[#9FB7C8]/30 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-[#FEFBF8] rounded-lg p-6 mb-4 flex items-center justify-center min-h-[120px]">
                    <img src={item.file} alt={item.name} className="max-w-full max-h-[100px]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E2A45] mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#1E2A45]/60 mb-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    {item.description}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDownloadSVG(item.file, item.name)}
                      className="flex-1 bg-[#184A5A] text-white py-2 px-3 rounded-lg hover:bg-[#1E2A45] transition-colors duration-200 flex items-center justify-center gap-2"
                      style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                    >
                      <Download size={16} />
                      <span className="text-sm">SVG</span>
                    </button>
                    <button
                      onClick={() => handleDownloadPNG(item.file, item.name)}
                      className="flex-1 bg-[#1E2A45] text-white py-2 px-3 rounded-lg hover:bg-[#184A5A] transition-colors duration-200 flex items-center justify-center gap-2"
                      style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                    >
                      <Download size={16} />
                      <span className="text-sm">PNG</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 p-6 bg-[#184A5A]/10 rounded-lg">
          <h3 className="text-xl font-semibold text-[#1E2A45] mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            Dosya Bilgileri
          </h3>
          <ul className="text-[#1E2A45]/70 space-y-1" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            <li>• Format: SVG (ölçeklenebilir vektör) veya PNG (1600x1200px, beyaz arka plan)</li>
            <li>• Renkler: STRATRI marka paleti (#1E2A45, #184A5A, #9FB7C8, #FEFBF8)</li>
            <li>• Stil: Minimalist "Japon mürekkep" çizim stili</li>
            <li>• SVG dosyaları editörde düzenlenebilir (Adobe Illustrator, Figma, vb.)</li>
            <li>• PNG dosyaları blog yazıları ve sosyal medya için optimize edilmiş</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
