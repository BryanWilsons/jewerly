
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Sample image data
const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', alt: 'Beach Sunset' },
  { id: 2, src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', alt: 'Mountain Landscape' },
  { id: 3, src: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7', alt: 'City Skyline' },
  { id: 4, src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', alt: 'Forest Path' },
  { id: 5, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba', alt: 'Starry Night' },
  { id: 6, src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b', alt: 'Ocean Waves' },
];

// Generate size options from 5 to 10 in 0.5 increments
const sizeOptions = Array.from({ length: 11 }, (_, i) => 5 + i * 0.5);

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSizes, setImageSizes] = useState(
    images.reduce((acc, image) => ({ ...acc, [image.id]: 5 }), {}) // Default size: 5
  );

  const handleSizeChange = (imageId, size) => {
    setImageSizes((prev) => ({ ...prev, [imageId]: parseFloat(size) }));
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-0 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-12">Necklace Gallery</h1>
        
        {/* Gallery Flex Container */}
        <div className="flex flex-row flex-wrap gap-6 justify-center">
          {images.map((image) => {
            const size = imageSizes[image.id];
            const pixelSize = size * 30; // Convert size to pixels (e.g., 5 -> 250px, 10 -> 500px)

            return (
              <div
                key={image.id}
                className="flex flex-col items-center cursor-pointer justify-start"
                onClick={() => setSelectedImage(image)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={pixelSize}
                    height={pixelSize}
                    className="object-cover"
                    style={{ display: 'block', width: pixelSize, height: pixelSize }}
                    onError={() => console.error(`Failed to load image: ${image.src}`)}
                    onLoadingComplete={() => console.log(`Loaded image: ${image.src}`)}
                  />
                </motion.div>

                <p className="mt-2 text-lg font-semibold">{image.alt}</p>
                <select
                  value={size}
                  onChange={(e) => handleSizeChange(image.id, e.target.value)}
                  className="mt-2 p-1 border rounded"
                  onClick={(e) => e.stopPropagation()} // Prevent lightbox trigger
                >
                  {sizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  style={{ display: 'block' }}
                  onError={() => console.error(`Failed to load lightbox image: ${selectedImage.src}`)}
                />
                <button
                  className="absolute top-4 right-4 text-black rounded-full p-2"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
                <p className="text-black text-center mt-4 text-lg">{selectedImage.alt}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}