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
  const handleDownload = (file: string, name: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = name + '.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#FEFBF8]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-[#1E2A45] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Medya İndirmeleri
        </h1>
        <p className="text-lg text-[#1E2A45]/70 mb-12" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
          STRATRI blog görselleri ve logoları
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
                  <button
                    onClick={() => handleDownload(item.file, item.name)}
                    className="w-full bg-[#184A5A] text-white py-2 px-4 rounded-lg hover:bg-[#1E2A45] transition-colors duration-200 flex items-center justify-center gap-2"
                    style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                  >
                    <Download size={18} />
                    <span>İndir (SVG)</span>
                  </button>
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
            <li>• Format: SVG (ölçeklenebilir vektör grafik)</li>
            <li>• Renkler: STRATRI marka paleti (#1E2A45, #184A5A, #9FB7C8, #FEFBF8)</li>
            <li>• Stil: Minimalist "Japon mürekkep" çizim stili</li>
            <li>• Editörde düzenlenebilir (Adobe Illustrator, Figma, vb.)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
