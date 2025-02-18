export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-shrink-0">
              <img 
                src="/images/logo-kemenkes.png" 
                alt="Logo Kemenkes Poltekkes Makassar" 
                className="h-16 w-auto"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-800">Kemenkes Poltekkes Makassar</h3>
              <p className="text-sm text-gray-600">Program Studi D-IV Keperawatan</p>
            </div>
          </div>

          <div className="border-t border-gray-200 w-full max-w-md my-4"></div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-24 h-24 md:w-28 md:h-28 relative mb-2">
              <img 
                src="/images/profile.jpg" 
                alt="Foto Profil"
                className="rounded-full object-cover w-full h-full shadow-lg"
              />
            </div>
            <h4 className="font-medium text-gray-800">Dikembangkan oleh:</h4>
            <p className="text-gray-600">Willyam wulan sari</p>
            <p className="text-gray-600">NIM: PO713201221087</p>
          </div>

          <div className="text-center text-gray-600 mt-4">
            <p className="text-sm">
              © {new Date().getFullYear()} M-CHAT-R/F Screening Tool
            </p>
            <p className="text-xs mt-1">
              Aplikasi Skrining Autism Spectrum Disorder (ASD)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 