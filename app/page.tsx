import Image from "next/image"
import AuthGuard from "@/components/auth-guard"

// Sample photo data - replace with your actual photos
const photos = [
  {
    id: 1,
    src: "/mountain-golden-hour.png",
    alt: "Mountain landscape at golden hour",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/dramatic-portrait.png",
    alt: "Portrait with dramatic lighting",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/urban-street-scene.png",
    alt: "Urban street scene",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "/placeholder-6trpf.png",
    alt: "Macro flower photography",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    src: "/modern-building-architecture.png",
    alt: "Modern architecture",
    span: "col-span-2 row-span-1",
  },
  {
    id: 6,
    src: "/birds-natural-habitat.png",
    alt: "Wildlife bird photography",
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: "/placeholder-vbjqw.png",
    alt: "Black and white street scene",
    span: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: "/sunset-seascape.png",
    alt: "Seascape at sunset",
    span: "col-span-2 row-span-1",
  },
]

export default function PhotoGallery() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        {/* Banner Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <Image src="/photography-banner.png" alt="Photography banner" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white space-y-4 px-4">
              <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl tracking-tight">
                Photography Portfolio
              </h1>
              <p className="font-sans text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto">
                Capturing Moments, One Frame at a Time
              </p>
              <p className="font-sans text-base md:text-lg text-white/90 max-w-lg mx-auto">
                Explore the beauty through my lens.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Featured Work</h2>
              <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
                A curated selection of my favorite captures, each telling its own unique story
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className={`group relative overflow-hidden rounded-xl bg-muted transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/20 ${photo.span}`}
                >
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-sans text-sm font-medium">{photo.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif font-bold text-2xl text-foreground mb-4">
              Let's Create Something Beautiful Together
            </h3>
            <p className="font-sans text-muted-foreground mb-6">
              Available for photography sessions, collaborations, and commissioned work
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="font-sans text-violet-600 hover:text-violet-700 transition-colors font-medium">
                Contact
              </a>
              <a href="#" className="font-sans text-violet-600 hover:text-violet-700 transition-colors font-medium">
                Instagram
              </a>
              <a href="#" className="font-sans text-violet-600 hover:text-violet-700 transition-colors font-medium">
                Portfolio
              </a>
            </div>
          </div>
        </footer>
      </div>
    </AuthGuard>
  )
}
