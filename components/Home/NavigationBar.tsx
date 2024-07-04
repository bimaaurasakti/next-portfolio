import ButtonCopyEmail from "./NavigationBar/ButtonCopyEmail";

export default function NavigationBar() {
  return (
    <nav className="py-4">
      <div className="container max-w-7xl mx-auto">
        <div className='flex justify-between items-center'>
          <div className="flex items-center">
            <img className="rounded-full h-10 me-2" src="/profile-picture.png" alt="Profile Picture" />
            <h1 className="font-bold text-xl">Bima Aurasakti</h1>
          </div>
          <ButtonCopyEmail />
        </div>
      </div>
    </nav>
  )
}
