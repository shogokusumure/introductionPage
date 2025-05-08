import Image from "next/image";
import nextConfig from "../../next.config";
const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4 font-sans">
      {/* Header */}
      <header className="w-full max-w-md flex flex-col items-center gap-2 mb-8">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 mb-2">
          {/* TODO: お試しでpathを指定してみる */}
          {/* <Image src="/figma/icon.png" alt="icon" width={80} height={80} /> */}
          <Image src={`${BASE_PATH}/figma/icon.png`} alt="icon" width={80} height={80} />
          
        </div>
        <div className="bg-white px-6 py-2 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">Shogo Kusumure</h1>
        </div>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/shogokusumure" target="_blank" rel="noopener noreferrer">
            <Image src={`${BASE_PATH}/figma/github.png`} alt="GitHub" width={32} height={32} />
          </a>
          <a href="https://www.instagram.com/shogo9360?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <Image src={`${BASE_PATH}/figma/instagram.png`} alt="Instagram" width={32} height={32} />
          </a>
          <a href="https://x.com/shogokusumure" target="_blank" rel="noopener noreferrer">
            <Image src={`${BASE_PATH}/figma/x.png`} alt="X" width={32} height={32} />
          </a>
        </div>
      </header>

      {/* Profile 1 - Miyazaki */}
      <section className="w-full max-w-md bg-gray-50 rounded-xl shadow p-6 mb-8">
        <div className="flex items-center gap-4 mb-4 bg-white p-3 rounded-lg shadow-sm">
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ring-2 ring-gray-200">
            <Image src={`${BASE_PATH}/figma/miyazaki.png`} alt="Miyazaki" width={64} height={64} className="object-cover" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Miyazaki</h2>
        </div>
        <p className="text-base text-gray-800 mb-4">
          I&quot;m from Miyazaki, Japan.<br />There is many beautiful nature in Miyazaki
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <Image src={`${BASE_PATH}/figma/img_2926.png`} alt="Miyazaki" width={160} height={160} className="object-cover w-full h-full" />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <Image src={`${BASE_PATH}/figma/img_5276.png`} alt="Miyazaki Nature" width={160} height={160} className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* Profile 2 - Fukuoka */}
      <section className="w-full max-w-md bg-gray-50 rounded-xl shadow p-6 mb-8">
        <div className="flex items-center gap-4 mb-4 bg-white p-3 rounded-lg shadow-sm">
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ring-2 ring-gray-200">
            <Image src={`${BASE_PATH}/figma/fukuoka.png`} alt="Fukuoka" width={64} height={64} className="object-cover" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Fukuoka</h2>
        </div>
        <p className="text-base text-gray-800 mb-4">
          I had lived Fukuoka when I was university student. So, I love Fukuoka very much.<br /><br />
          I studied machine learning and data mining as a university student.<br /><br />
          This picture is I went Malaysia for academic conference.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <Image src={`${BASE_PATH}/figma/dsc_0104.png`} alt="Malaysia Conference" width={160} height={160} className="object-cover w-full h-full" />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <Image src={`${BASE_PATH}/figma/img_20180107.png`} alt="Malaysia Conference 2" width={160} height={160} className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* Profile 3 - Tokyo */}
      <section className="w-full max-w-md bg-gray-50 rounded-xl shadow p-6 mb-8">
        <div className="flex items-center gap-4 mb-4 bg-white p-3 rounded-lg shadow-sm">
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ring-2 ring-gray-200">
            <Image src={`${BASE_PATH}/figma/tokyo.png`} alt="Tokyo" width={64} height={64} className="object-cover" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Tokyo</h2>
        </div>
        <p className="text-base text-gray-800 mb-4">
          I came to Tokyo, for working. I worked as backend engineer for 2 years. After, I was interested in frontend engineering & Design, I decided to change job.<br /><br />
          I have a lot of hobbies. Playing & watching Basketball, trail running, muscle training in Gym and drinking craft beer & hard cider...and more.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <Image src={`${BASE_PATH}/figma/img_5670.png`} alt="Tokyo Life 1" width={160} height={160} className="object-cover w-full h-full" />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <Image src={`${BASE_PATH}/figma/img_6328.png`} alt="Tokyo Life 2" width={160} height={160} className="object-cover w-full h-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
